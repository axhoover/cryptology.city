#!/usr/bin/env node
// Bookkeeping for one review round (the review-round skill runs these in order).
//
//   node scripts/review/round.mjs plan     --round <n> --decisions <dir|file> --paper reachable|unreachable
//                                          [--base <commit>] [--date YYYY-MM-DD] [--force]
//   node scripts/review/round.mjs known    --round <n>
//   node scripts/review/round.mjs findings --round <n> [--cap 40] [--force]
//   node scripts/review/round.mjs record   --round <n> --scope <file> --paper reachable|unreachable
//                                          [--pr <url>] [--branch <name>] [--date YYYY-MM-DD]
//
// plan      reads the previous round's record and the decisions snapshot,
//           decides what to do with every item, writes the snapshot into the
//           previous record, and writes the apply groups for review-apply.
// known     writes what the audit must not raise again: open items, rejected
//           items, last round's over-the-cap findings.
// findings  numbers the consolidated audit findings (r<n>:<kind>-<k>), caps
//           the proposals, and writes the mechanical-fix groups.
// record    composes round <n>'s record (every card the page shows), the
//           previous record's outcomes, and the new state.
//
// Work files live in .review/work/round-<n>/ (git-ignored). plan and findings
// refuse to overwrite a group directory that already holds workflow reports
// unless --force is given. The record format is documented in .review/README.md.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT_DEFAULT = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
  "..",
);

export const KINDS = [
  "math",
  "cite",
  "edge",
  "contract",
  "style",
  "link",
  "other",
];
const RANK = { high: 0, medium: 1, low: 2 };
// Files every group may need but none owns: the coordinator applies TODO_SUMMARY
// hand-offs and regenerates relations.json.
const SHARED = new Set(["TODO_SUMMARY.md", ".reductions/relations.json"]);

// ------------------------------------------------------------- decisions --
// A decision doc the pipeline already acted on stays in the database (ids are
// stable); the card shown afterwards records it as `consumed`, and only a
// different doc (new decision, note or time) counts as a new decision.
export function isConsumed(item, d) {
  const c = item && item.consumed;
  return !!(
    c &&
    d &&
    c.decision === d.decision &&
    (c.note || "") === (d.note || "") &&
    (c.at || "") === (d.at || "")
  );
}

export function liveDecision(item, d) {
  if (!d || !["approve", "change", "reject"].includes(d.decision)) return null;
  return isConsumed(item, d) ? null : d;
}

// What to do with one card of the previous page.
export function decide(item, d, { paperReachable }) {
  const live = liveDecision(item, d);
  const dec = live && live.decision;
  if (item.section === "applied") {
    if (!dec) return { action: "carry", reason: "no decision" };
    return {
      approve: { action: "keep" },
      change: { action: "amend" },
      reject: { action: "revert" },
    }[dec];
  }
  if (item.section === "paper") {
    if (!dec) return { action: "carry", reason: "no decision" };
    if (dec === "reject") return { action: "drop" };
    if (dec === "change")
      return { action: "execute", reason: "the note stands in for the paper" };
    return paperReachable
      ? { action: "execute" }
      : { action: "carry", reason: "approved; paper hosts unreachable" };
  }
  if (!dec) return { action: "carry", reason: "no decision" };
  return dec === "reject" ? { action: "drop" } : { action: "execute" };
}

export function planActions(prev, decisions, opts) {
  return (prev.items || []).map((item) => {
    const d = decisions[item.id] || null;
    const { action, reason } = decide(item, d, opts);
    const live = liveDecision(item, d);
    return {
      id: item.id,
      section: item.section,
      kind: item.kind,
      action,
      reason: reason || "",
      decision: live ? live.decision : "",
      note: live ? live.note || "" : "",
      at: live ? live.at || "" : "",
    };
  });
}

// ---------------------------------------------------------------- groups --
export function itemPages(item) {
  if (Array.isArray(item.pages) && item.pages.length) return item.pages;
  for (const b of item.blocks || []) {
    const t = b.title || "";
    if (/^(Pages involved|Files changed)/.test(t))
      return String(b.text || "")
        .split("\n")
        .map((l) => l.trim().replace(/^- `|`$/g, ""))
        .filter(Boolean);
  }
  return [];
}

export function itemMode(pages, { sweepPages = 12 } = {}) {
  const own = pages.filter((p) => !SHARED.has(p));
  if (!own.length) return "sweep";
  if (own.some((p) => !p.startsWith("content/"))) return "tooling";
  if (own.length > sweepPages) return "sweep";
  return "parallel";
}

// Splits work items into groups: tooling groups (any file outside content/,
// run alone and in sequence), file-disjoint parallel groups of at most
// `maxItems` items (more when one cluster of items shares files), and sweep
// groups (no listed files, or many), one item each, run alone after the rest.
export function groupItems(
  items,
  { maxItems = 6, sweepPages = 12, prefix = "" } = {},
) {
  const work = items.map((it, i) => {
    const pages = itemPages(it);
    return {
      it,
      i,
      pages,
      own: pages.filter((p) => !SHARED.has(p)),
      mode: itemMode(pages, { sweepPages }),
    };
  });
  // union-find over shared files, separately for tooling and parallel items
  const parent = work.map((_, i) => i);
  const find = (x) => (parent[x] === x ? x : (parent[x] = find(parent[x])));
  for (const mode of ["tooling", "parallel"]) {
    const owner = new Map();
    for (const w of work.filter((w) => w.mode === mode))
      for (const f of w.own) {
        if (owner.has(f)) parent[find(w.i)] = find(owner.get(f));
        else owner.set(f, w.i);
      }
  }
  const comps = new Map();
  for (const w of work) {
    if (w.mode === "sweep") continue;
    const r = find(w.i);
    if (!comps.has(r)) comps.set(r, []);
    comps.get(r).push(w);
  }
  const clusters = [...comps.values()].sort((a, b) => a[0].i - b[0].i);
  const groups = [];
  const make = (mode, ws, n) => {
    const letter = { tooling: "T", parallel: "C", sweep: "S" }[mode];
    const g = {
      group: `${prefix}${letter}${n}`,
      mode,
      items: ws
        .sort((a, b) => a.i - b.i)
        .map((w) => ({ ...w.it, pages: w.pages })),
    };
    if (mode === "parallel")
      g.own_files = [...new Set(ws.flatMap((w) => w.own))].sort();
    return g;
  };
  let t = 0;
  for (const c of clusters.filter((c) => c[0].mode === "tooling"))
    groups.push(make("tooling", c, ++t));
  // pack parallel clusters: largest first into the emptiest bin that fits
  const bins = [];
  for (const c of clusters
    .filter((c) => c[0].mode === "parallel")
    .sort((a, b) => b.length - a.length || a[0].i - b[0].i)) {
    const fit = bins
      .filter((b) => b.length + c.length <= maxItems)
      .sort((a, b) => a.length - b.length)[0];
    if (fit) fit.push(...c);
    else bins.push([...c]);
  }
  bins.sort(
    (a, b) => Math.min(...a.map((w) => w.i)) - Math.min(...b.map((w) => w.i)),
  );
  bins.forEach((b, k) => groups.push(make("parallel", b, k + 1)));
  let s = 0;
  for (const w of work.filter((w) => w.mode === "sweep"))
    groups.push(make("sweep", [w], ++s));
  return groups;
}

// -------------------------------------------------------------- findings --
const sevKey = (f) => [RANK[f.severity] ?? 3, RANK[f.confidence] ?? 3];

export function normalizeFinding(f) {
  const kind = KINDS.includes(f.kind) ? f.kind : "other";
  const pages = [...new Set([f.page, ...(f.pages || [])].filter(Boolean))];
  return {
    ...f,
    kind,
    severity: RANK[f.severity] !== undefined ? f.severity : "medium",
    confidence: RANK[f.confidence] !== undefined ? f.confidence : "medium",
    mechanical: !!f.mechanical,
    needs_paper: !!f.needs_paper && !f.mechanical,
    page: f.page || pages[0] || "",
    pages,
  };
}

function cmpFinding(a, b) {
  const [sa, ca] = sevKey(a);
  const [sb, cb] = sevKey(b);
  return (
    sa - sb ||
    ca - cb ||
    KINDS.indexOf(a.kind) - KINDS.indexOf(b.kind) ||
    a.page.localeCompare(b.page) ||
    (a._i ?? 0) - (b._i ?? 0)
  );
}

// Mechanical fixes are all applied (no cap); proposals and paper checks are
// ranked by severity, then confidence, and the first `cap` are shown; the rest
// go to `overflow`, logged and offered to the next round's consolidation.
export function selectFindings(
  raw,
  { round, cap = 40, existingIds = [] } = {},
) {
  const all = raw.map((f, i) => ({ ...normalizeFinding(f), _i: i }));
  const fixes = all.filter((f) => f.mechanical).sort(cmpFinding);
  const ranked = all.filter((f) => !f.mechanical).sort(cmpFinding);
  const selected = ranked.slice(0, cap);
  const overflow = ranked.slice(cap);
  const taken = new Set(existingIds);
  const counter = {};
  const assign = (f) => {
    let id;
    do {
      counter[f.kind] = (counter[f.kind] || 0) + 1;
      id = `r${round}:${f.kind}-${counter[f.kind]}`;
    } while (taken.has(id));
    taken.add(id);
    const { _i, ...rest } = f;
    return { id, ...rest };
  };
  const shown = selected.map(assign);
  const strip = ({ _i, ...rest }) => rest;
  return {
    fixes: fixes.map(assign),
    proposals: shown.filter((f) => !f.needs_paper),
    paper: shown.filter((f) => f.needs_paper),
    overflow: overflow.map(strip),
  };
}

// ----------------------------------------------------------------- cards --
const GH = "https://github.com/axhoover/cryptology.city";
const fileList = (files) => files.map((f) => `- \`${f}\``).join("\n");
const exactChange = (item) =>
  (
    (item.blocks || []).find((b) =>
      /^(Exact change|Original proposal)/.test(b.title || ""),
    ) || {}
  ).text || "";

function withChip(chips, chip, drop) {
  return [...(chips || []).filter((c) => !drop(c)), chip];
}

// A change Claude made on a decision (execute or amend).
export function appliedCard(item, report, opts) {
  const {
    round,
    commit,
    decision,
    noteTitle = "Your note",
    repoUrl = GH,
    consume = true,
  } = opts;
  const status = report.status;
  const amend = opts.action === "amend";
  const blocks = [
    { type: "text", label: "What Claude did", text: report.what || "" },
  ];
  if (status === "partial" && report.reason)
    blocks.push({ type: "text", label: "Left undone", text: report.reason });
  if (report.verifier_note)
    blocks.push({
      type: "details",
      title: `Verifier (${report.verified || "ok"})`,
      text: report.verifier_note,
    });
  if (decision && decision.note)
    blocks.push({ type: "details", title: noteTitle, text: decision.note });
  if (amend) {
    const earlier = (item.blocks || []).find(
      (b) => b.label === "What Claude did",
    );
    if (earlier)
      blocks.push({
        type: "details",
        title: "Earlier change",
        text: earlier.text,
      });
  }
  blocks.push({
    type: "details",
    title: "Original proposal",
    text: exactChange(item),
  });
  const files = report.files || [];
  if (files.length)
    blocks.push({
      type: "details",
      title: `Files changed (${files.length})`,
      text: fileList(files),
    });
  const label = amend
    ? "amended"
    : status === "partial"
      ? "partly applied"
      : status === "already-done"
        ? "already done"
        : "applied";
  const chips = [{ text: label, cls: "act" }];
  if (report.verified === "fixed")
    chips.push({ text: "fixed by verifier", cls: "" });
  const origin = item.origin ?? round;
  if (origin < round)
    chips.push({ text: `proposed in round ${origin}`, cls: "" });
  const card = {
    id: item.id,
    section: "applied",
    kind: "fix",
    edge: item.edge || "",
    ...(item.slug ? { slug: item.slug } : {}),
    chips,
    summary: item.summary || "",
    blocks,
    url: commit ? `${repoUrl}/commit/${commit}` : "",
    pages: files.length ? files : itemPages(item),
    origin,
    applied_in: round,
  };
  if (consume && decision && decision.decision)
    card.consumed = {
      decision: decision.decision,
      note: decision.note || "",
      at: decision.at || "",
    };
  return card;
}

// A mechanical fix the audit found and Claude applied directly.
export function mechanicalCard(f, report, { round, commit, repoUrl = GH }) {
  const blocks = [
    { type: "text", label: "What Claude did", text: report.what || f.summary },
  ];
  if (f.why) blocks.push({ type: "text", label: "Why", text: f.why });
  if (report.verifier_note)
    blocks.push({
      type: "details",
      title: `Verifier (${report.verified || "ok"})`,
      text: report.verifier_note,
    });
  if (f.change)
    blocks.push({ type: "details", title: "The fix", text: f.change });
  const files = report.files && report.files.length ? report.files : f.pages;
  if (files.length)
    blocks.push({
      type: "details",
      title: `Files changed (${files.length})`,
      text: fileList(files),
    });
  const chips = [
    {
      text: report.status === "partial" ? "partly applied" : "mechanical fix",
      cls: "act",
    },
    { text: f.kind, cls: "" },
  ];
  if (report.verified === "fixed")
    chips.push({ text: "fixed by verifier", cls: "" });
  return {
    id: f.id,
    section: "applied",
    kind: "fix",
    edge: f.edge || path.basename(f.page || "", ".md"),
    slug: f.page,
    chips,
    summary: f.summary,
    blocks,
    url: commit ? `${repoUrl}/commit/${commit}` : "",
    pages: files,
    origin: round,
    applied_in: round,
  };
}

// A new proposal or paper check from this round's audit.
export function findingCard(f, { round, repoUrl = GH }) {
  const paper = f.needs_paper;
  const chips = paper
    ? [
        { text: "needs the paper", cls: "act" },
        { text: f.kind, cls: "" },
      ]
    : [
        { text: f.kind, cls: "act" },
        {
          text: `${f.severity} severity`,
          cls: f.severity === "high" ? "" : "low",
        },
      ];
  chips.push({
    text: `${f.confidence} confidence`,
    cls: f.confidence === "high" ? "" : "low",
  });
  if (f.from_overflow)
    chips.push({ text: "raised in an earlier round", cls: "" });
  const blocks = [];
  if (f.why) blocks.push({ type: "text", label: "Why", text: f.why });
  if (paper && f.check)
    blocks.push({
      type: "details",
      title: "What to check in the paper",
      text: f.check,
    });
  blocks.push({
    type: "details",
    title: "Exact change Claude will make",
    text: f.change || "",
  });
  if (f.evidence)
    blocks.push({ type: "details", title: "Evidence", text: f.evidence });
  const notes = (f.verifier_notes || []).filter(Boolean);
  if (notes.length)
    blocks.push({
      type: "details",
      title: "Verifiers",
      text: notes.map((n) => `- ${n}`).join("\n"),
    });
  if (f.pages.length)
    blocks.push({
      type: "details",
      title: `Pages involved (${f.pages.length})`,
      text: fileList(f.pages),
    });
  return {
    id: f.id,
    section: paper ? "paper" : "proposals",
    kind: "proposal",
    edge: f.edge || path.basename(f.page || "", ".md"),
    slug: f.page,
    chips,
    summary: f.summary,
    blocks,
    url: f.page ? `${repoUrl}/blob/main/${encodeURI(f.page)}` : "",
    pages: f.pages,
    origin: round,
  };
}

const isCarryChip = (c) => c.carry === true;
const isNotDoneChip = (c) => /^not done in round \d+$/.test(c.text || "");

// The same card, shown again in a later round under the same id.
export function carryCard(item, round) {
  const card = { ...item, chips: [...(item.chips || [])] };
  const since =
    item.section === "applied" ? (item.applied_in ?? item.origin) : item.origin;
  card.chips = card.chips.filter((c) => !isCarryChip(c));
  if (since !== undefined && since < round)
    card.chips.push({
      text:
        item.section === "applied"
          ? `applied in round ${since}`
          : `from round ${since}`,
      cls: "",
      carry: true,
    });
  return card;
}

// A decided item Claude could not execute: back on the page with the reason.
// `keepDecision` leaves the decision live (it is retried next round); otherwise
// the decision is marked consumed so the maintainer decides again.
export function notDoneCard(
  item,
  why,
  { round, section, decision, keepDecision },
) {
  const card = carryCard({ ...item, section: section || item.section }, round);
  card.chips = withChip(
    card.chips,
    { text: `not done in round ${round}`, cls: "act" },
    isNotDoneChip,
  );
  card.blocks = [
    ...(item.blocks || []).filter((b) => b.label !== "Why Claude stopped"),
    { type: "text", label: "Why Claude stopped", text: why },
  ];
  if (!keepDecision && decision && decision.decision)
    card.consumed = {
      decision: decision.decision,
      note: decision.note || "",
      at: decision.at || "",
    };
  else if (keepDecision) delete card.consumed;
  return card;
}

// --------------------------------------------------------------- compose --
// reports: {id -> {status, what, reason, files, verified, verifier_note, needs_paper, group, commit}}
export function composeRecord({
  round,
  prev,
  plan,
  reports = {},
  findings = null,
  fixReports = {},
  base = {},
}) {
  const byId = new Map((prev ? prev.items || [] : []).map((i) => [i.id, i]));
  const appliedCards = [];
  const carriedApplied = [];
  const proposalsNew = [];
  const proposalsBack = [];
  const proposalsCarried = [];
  const paperNew = [];
  const paperBack = [];
  const paperCarried = [];
  const applied = [];
  const outcomes = {};
  const bucket = (section, kind) =>
    section === "applied"
      ? carriedApplied
      : section === "paper"
        ? { back: paperBack, carried: paperCarried }[kind]
        : { back: proposalsBack, carried: proposalsCarried }[kind];

  for (const a of plan ? plan.actions : []) {
    const item = byId.get(a.id);
    if (!item) continue;
    const decision = a.decision
      ? { decision: a.decision, note: a.note, at: a.at }
      : null;
    const entry = {
      id: a.id,
      source: "decision",
      from_round: prev.round,
      decision: a.decision,
      note: a.note,
      at: a.at,
      action: a.action,
    };
    if (a.action === "carry") {
      bucket(item.section, "carried").push(carryCard(item, round));
      outcomes[a.id] = { status: "carried", round, reason: a.reason };
      if (a.decision)
        applied.push({ ...entry, status: "carried", reason: a.reason });
      continue;
    }
    if (a.action === "keep" || a.action === "drop") {
      const status = a.action === "keep" ? "kept" : "dropped";
      outcomes[a.id] = { status, round };
      applied.push({ ...entry, status });
      continue;
    }
    const r = reports[a.id];
    if (!r || r.retry) {
      const why =
        (r && r.reason) ||
        `The apply step for this item did not finish in round ${round}; it is retried next round.`;
      const section = item.section;
      bucket(section, "back").push(
        notDoneCard(item, why, { round, decision, keepDecision: true }),
      );
      outcomes[a.id] = { status: "failed", round };
      applied.push({ ...entry, status: "failed", reason: why });
      continue;
    }
    const rest = {
      what: r.what || "",
      reason: r.reason || "",
      files: r.files || [],
      verified: r.verified || "",
      verifier_note: r.verifier_note || "",
      group: r.group || "",
      commit: r.commit || "",
    };
    if (a.action === "revert") {
      const status = r.status === "skipped" ? "skipped" : "reverted";
      if (status === "skipped")
        carriedApplied.push(
          notDoneCard(
            item,
            r.reason || "The revert could not be made as marked.",
            { round, decision },
          ),
        );
      outcomes[a.id] = { status, round, commit: rest.commit };
      applied.push({ ...entry, status, ...rest });
      continue;
    }
    if (["applied", "partial", "already-done"].includes(r.status)) {
      appliedCards.push(
        appliedCard(item, r, {
          round,
          commit: rest.commit,
          decision,
          action: a.action,
        }),
      );
      outcomes[a.id] = { status: r.status, round, commit: rest.commit };
      applied.push({ ...entry, status: r.status, ...rest });
      continue;
    }
    // skipped
    const why = r.reason || "Not executable as written.";
    if (r.needs_paper)
      paperBack.push(
        notDoneCard(item, why, {
          round,
          section: "paper",
          decision,
          keepDecision: a.decision === "approve",
        }),
      );
    else
      bucket(item.section, "back").push(
        notDoneCard(item, why, { round, decision }),
      );
    outcomes[a.id] = { status: "skipped", round, reason: why };
    applied.push({ ...entry, status: "skipped", ...rest });
  }

  const mechanical = [];
  if (findings) {
    for (const f of findings.fixes || []) {
      const r = fixReports[f.id];
      if (
        r &&
        !r.retry &&
        ["applied", "partial", "already-done"].includes(r.status)
      ) {
        if (r.status !== "already-done")
          mechanical.push(mechanicalCard(f, r, { round, commit: r.commit }));
        applied.push({
          id: f.id,
          source: "audit",
          action: "fix",
          status: r.status,
          what: r.what || "",
          files: r.files || [],
          verified: r.verified || "",
          verifier_note: r.verifier_note || "",
          commit: r.commit || "",
          group: r.group || "",
        });
      } else {
        // not clear-cut after all, or the fix group failed: show it as a proposal
        const failed = !r || !!r.retry;
        const why = failed
          ? "The group applying the mechanical fixes did not finish, so the fix is shown as a proposal instead."
          : r.reason || "";
        const card = findingCard({ ...f, needs_paper: false }, { round });
        if (why)
          card.blocks.splice(1, 0, {
            type: "text",
            label: "Why Claude did not apply it",
            text: why,
          });
        proposalsNew.push(card);
        applied.push({
          id: f.id,
          source: "audit",
          action: "fix",
          status: failed ? "failed" : "skipped",
          reason: why || "not clear-cut",
        });
      }
    }
    for (const f of findings.proposals || [])
      proposalsNew.push(findingCard(f, { round }));
    for (const f of findings.paper || [])
      paperNew.push(findingCard(f, { round }));
  }

  const items = [
    ...appliedCards,
    ...mechanical,
    ...carriedApplied,
    ...proposalsNew,
    ...proposalsBack,
    ...proposalsCarried,
    ...paperNew,
    ...paperBack,
    ...paperCarried,
  ];
  const seen = new Set();
  for (const it of items) {
    if (seen.has(it.id))
      throw new Error(`duplicate item id ${it.id} in round ${round}`);
    seen.add(it.id);
  }
  return {
    record: {
      schema: 1,
      round,
      ...base,
      applied,
      items,
      overflow: findings ? findings.overflow || [] : [],
      decisions: null,
      outcomes: null,
    },
    prevOutcomes: outcomes,
  };
}

// What the audit must not raise again.
export function knownItems(records, { plan } = {}) {
  const sorted = [...records].sort((a, b) => a.round - b.round);
  const last = sorted[sorted.length - 1];
  const brief = (i) => ({
    id: i.id,
    section: i.section,
    summary: i.summary || "",
    pages: itemPages(i),
  });
  const rejected = [];
  for (const rec of sorted) {
    if (!rec.decisions) continue;
    for (const it of rec.items || []) {
      const d = rec.decisions[it.id];
      if (it.kind !== "fix" && d && d.decision === "reject" && !d.consumed)
        rejected.push({
          ...brief(it),
          round: rec.round,
          since: (rec.commits && rec.commits.to) || "",
          note: d.note || "",
        });
    }
  }
  const action = new Map(
    ((plan && plan.actions) || []).map((a) => [a.id, a.action]),
  );
  return {
    open: last
      ? (last.items || [])
          .filter((i) => action.get(i.id) !== "drop")
          .map((i) => ({ ...brief(i), action: action.get(i.id) || "" }))
      : [],
    rejected,
    overflow: last ? last.overflow || [] : [],
  };
}

// notAudited: pages of audit batches that failed; the next round audits them.
export function nextState(state, { round, scope, notAudited = [] }) {
  const out = { ...state, last_round: round };
  if (scope && scope.main) out.last_audited_commit = scope.main;
  if (scope && scope.rotation)
    out.rotation = {
      cursor: scope.rotation.cursor_after,
      slice: scope.rotation.slice,
      // the page the next slice starts at: select-pages prefers it to the
      // index, so pages added or deleted before it do not shift the rotation
      ...(scope.rotation.next_after ? { next: scope.rotation.next_after } : {}),
    };
  if (notAudited.length) out.audit_carry = [...new Set(notAudited)].sort();
  else delete out.audit_carry;
  return out;
}

// -------------------------------------------------------------------- I/O --
export async function writeJson(file, data) {
  let text = JSON.stringify(data, null, 2) + "\n";
  try {
    const prettier = await import("prettier");
    text = await prettier.format(text, { parser: "json", filepath: file });
  } catch {
    // prettier is a dev dependency; without it the plain JSON is still valid
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text);
}

const readJson = (file, fallback) => {
  if (!fs.existsSync(file)) {
    if (fallback !== undefined) return fallback;
    throw new Error(`missing ${file}`);
  }
  return JSON.parse(fs.readFileSync(file, "utf8"));
};

// The decisions snapshot: a directory of documents as `ArtifactData` saves
// them with `out_dir` (`<dir>/decisions/<doc_id>.json`, each holding the
// document's fields; the file name is the item id), or a JSON file holding
// {id: doc}, [{id|item|doc_id, ...doc}] or {documents: [...]}. A document's
// fields may also sit under `data`.
export function readDecisions(p) {
  const out = {};
  const add = (id, d) => {
    const doc = d && typeof d.data === "object" && d.data ? d.data : d;
    const key = id || (d && (d.id || d.doc_id)) || (doc && doc.item);
    if (key && doc && typeof doc === "object") out[key] = doc;
  };
  if (fs.statSync(p).isDirectory()) {
    const walk = (dir) => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const f = path.join(dir, e.name);
        if (e.isDirectory()) walk(f);
        else if (e.name.endsWith(".json"))
          add(e.name.slice(0, -".json".length), readJson(f));
      }
    };
    walk(p);
    return out;
  }
  const raw = readJson(p);
  const docs = Array.isArray(raw)
    ? raw
    : Array.isArray(raw.documents)
      ? raw.documents
      : null;
  if (docs) for (const d of docs) add("", d);
  else for (const [id, d] of Object.entries(raw)) add(id, d);
  return out;
}

// Statuses whose change must be in a commit for the item to count as done.
const CHANGES = new Set(["applied", "partial", "reverted"]);

// Verify reports of a review-apply run: {id -> report}, with each item's group
// and commit (the report's own, the coordinator's for parallel groups, or the
// commit whose subject names the group). An item that changed files counts
// only when that commit is on HEAD: a group whose changes were restored (a
// verifier that did not commit, a coordinator that restored the group or did
// not commit) comes back with `retry`, its decision still live.
export function readReports(dir, { round, git } = {}) {
  const out = {};
  if (!fs.existsSync(dir)) return out;
  const coord = readJson(path.join(dir, "coordinate.json"), {});
  const restored = new Set(coord.restored_groups || []);
  const run = git || (() => "");
  const haveGit = !!run(["rev-parse", "HEAD"]);
  const log = haveGit ? run(["log", "--format=%H %s", "-n", "300"]) : "";
  const subjectCommit = (g) => {
    for (const line of log.split("\n")) {
      const [sha, ...s] = line.split(" ");
      const subj = s.join(" ");
      if (!subj.startsWith(`review round ${round}: `)) continue;
      if (
        subj.startsWith(`review round ${round}: ${g},`) ||
        subj.startsWith(`review round ${round}: ${g} `)
      )
        return sha;
      // the coordinator's subject: "review round n: <step>, content groups C1, C2"
      const m = /content groups (.*)$/.exec(subj);
      if (m && m[1].split(/,\s*/).includes(g)) return sha;
    }
    return "";
  };
  // a commit counts when it is HEAD or an ancestor of it (without git, as given)
  const onHead = (sha) => {
    if (!sha) return "";
    if (!haveGit) return sha;
    const full = run(["rev-parse", "--verify", "--quiet", `${sha}^{commit}`]);
    return full && run(["merge-base", full, "HEAD"]) === full ? full : "";
  };
  for (const f of fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".verify.json"))
    .sort()) {
    const rep = readJson(path.join(dir, f));
    const r = rep.result || rep;
    const g = r.group || f.replace(/\.verify\.json$/, "");
    const groupFile = readJson(path.join(dir, `${g}.json`), {});
    const mode = r.mode || groupFile.mode || "";
    const commit = onHead(
      r.commit ||
        (mode === "parallel" ? coord.commit || "" : "") ||
        subjectCommit(g),
    );
    for (const it of r.items || []) {
      const c = onHead(it.commit) || commit;
      const entry = { ...it, group: g, commit: c };
      if (CHANGES.has(it.status) && !it.retry) {
        const why =
          mode === "parallel" && restored.has(g)
            ? "the coordinator restored this group's files"
            : !c
              ? "its change was not committed"
              : "";
        if (why) {
          entry.retry = true;
          entry.reason = `The apply step for this item did not finish in round ${round} (${why}); it is retried next round.`;
        }
      }
      out[it.id] = entry;
    }
  }
  return out;
}

// Re-planning would delete the reports of a workflow that already ran.
function guardReports(dir, force) {
  if (force || !fs.existsSync(dir)) return;
  const done = fs
    .readdirSync(dir)
    .filter((f) => /\.(exec|verify)\.json$|^coordinate\.json$/.test(f));
  if (done.length)
    throw new Error(
      `${dir} already holds ${done.length} workflow reports (${done.slice(0, 3).join(", ")}…); pass --force to plan again and discard them`,
    );
}

function parseArgs(argv) {
  const out = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--"))
      out[argv[i].slice(2)] =
        argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : true;
    else out._.push(argv[i]);
  }
  return out;
}

export async function main(argv, { root = ROOT_DEFAULT, today } = {}) {
  const a = parseArgs(argv);
  const cmd = a._[0];
  const round = Number(a.round);
  if (!cmd || !Number.isInteger(round) || round < 1) {
    console.error("usage: round.mjs plan|known|findings|record --round <n> …");
    return 2;
  }
  const R = path.join(root, ".review");
  const work = path.join(R, "work", `round-${round}`);
  const recFile = (n) => path.join(R, "rounds", `${n}.json`);
  const git = (args) => {
    try {
      return execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();
    } catch {
      return "";
    }
  };
  const date = a.date || today || new Date().toISOString().slice(0, 10);
  const paperReachable = a.paper === "reachable";
  const prev = fs.existsSync(recFile(round - 1))
    ? readJson(recFile(round - 1))
    : null;
  const allRecords = () =>
    fs
      .readdirSync(path.join(R, "rounds"))
      .filter((f) => /^\d+\.json$/.test(f))
      .map((f) => readJson(path.join(R, "rounds", f)));

  if (cmd === "plan") {
    if (a.paper !== "reachable" && a.paper !== "unreachable")
      throw new Error("--paper reachable|unreachable is required");
    if (!prev) throw new Error(`no record for round ${round - 1}`);
    const decisions = a.decisions
      ? readDecisions(path.resolve(a.decisions))
      : {};
    const actions = planActions(prev, decisions, { paperReachable });
    const todo = actions.filter((x) =>
      ["execute", "amend", "revert"].includes(x.action),
    );
    const byId = new Map(prev.items.map((i) => [i.id, i]));
    const groups = groupItems(
      todo.map((x) => ({
        ...byId.get(x.id),
        action: x.action,
        decision: x.decision,
        note: x.note,
        at: x.at,
      })),
    );
    guardReports(path.join(work, "apply"), a.force);
    fs.rmSync(path.join(work, "apply"), { recursive: true, force: true });
    for (const g of groups)
      await writeJson(path.join(work, "apply", `${g.group}.json`), {
        round,
        ...g,
      });
    // the commit the round started from: HEAD, or --base for a round an
    // earlier run began (its first commits are then part of this round)
    const base =
      typeof a.base === "string"
        ? git(["rev-parse", "--verify", "--quiet", `${a.base}^{commit}`]) ||
          a.base
        : git(["rev-parse", "HEAD"]);
    const plan = {
      round,
      prev: prev.round,
      date,
      base,
      paper_reachable: paperReachable,
      actions,
      groups: groups.map((g) => ({
        group: g.group,
        mode: g.mode,
        items: g.items.map((i) => i.id),
      })),
    };
    await writeJson(path.join(work, "plan.json"), plan);
    // snapshot what was read into the previous record
    const snap = {};
    for (const it of prev.items) {
      const d = decisions[it.id];
      if (d && d.decision)
        snap[it.id] = {
          decision: d.decision,
          note: d.note || "",
          at: d.at || "",
          ...(isConsumed(it, d) ? { consumed: true } : {}),
        };
    }
    await writeJson(recFile(prev.round), {
      ...prev,
      decisions: snap,
      decisions_read: date,
    });
    const count = {};
    for (const x of actions) count[x.action] = (count[x.action] || 0) + 1;
    console.log(
      JSON.stringify(
        {
          actions: count,
          groups: plan.groups.map((g) => ({
            group: g.group,
            mode: g.mode,
            items: g.items.length,
          })),
          dir: path.join(work, "apply"),
        },
        null,
        1,
      ),
    );
    return 0;
  }

  if (cmd === "known") {
    const plan = readJson(path.join(work, "plan.json"), null);
    const known = knownItems(
      allRecords().filter((r) => r.round < round),
      { plan },
    );
    await writeJson(path.join(work, "known.json"), known);
    console.log(
      JSON.stringify({
        open: known.open.length,
        rejected: known.rejected.length,
        overflow: known.overflow.length,
        file: path.join(work, "known.json"),
      }),
    );
    return 0;
  }

  if (cmd === "findings") {
    const cons = readJson(path.join(work, "audit", "consolidated.json"));
    const cap = a.cap ? Number(a.cap) : 40;
    const existing = allRecords().flatMap((r) =>
      (r.items || []).map((i) => i.id),
    );
    const sel = selectFindings(cons.findings || [], {
      round,
      cap,
      existingIds: existing,
    });
    // findings no verifier checked are not shown; the next round's consolidator sees them
    for (const f of cons.unverified || [])
      sel.overflow.push({ ...normalizeFinding(f), unverified: true });
    await writeJson(path.join(work, "findings.json"), { round, cap, ...sel });
    const groups = groupItems(
      sel.fixes.map((f) => ({ ...f, action: "fix" })),
      { prefix: "F" },
    );
    guardReports(path.join(work, "fixes"), a.force);
    fs.rmSync(path.join(work, "fixes"), { recursive: true, force: true });
    for (const g of groups)
      await writeJson(path.join(work, "fixes", `${g.group}.json`), {
        round,
        ...g,
      });
    console.log(
      JSON.stringify(
        {
          fixes: sel.fixes.length,
          proposals: sel.proposals.length,
          paper: sel.paper.length,
          overflow: sel.overflow.length,
          cap,
          groups: groups.map((g) => ({
            group: g.group,
            mode: g.mode,
            items: g.items.length,
          })),
          dir: path.join(work, "fixes"),
        },
        null,
        1,
      ),
    );
    if (sel.overflow.length)
      console.log(
        `note: ${sel.overflow.length} findings over the cap of ${cap} are logged in findings.json and carried to round ${round + 1}`,
      );
    return 0;
  }

  if (cmd === "record") {
    if (a.paper !== "reachable" && a.paper !== "unreachable")
      throw new Error("--paper reachable|unreachable is required");
    const plan = readJson(path.join(work, "plan.json"), null);
    const scope = a.scope ? readJson(path.resolve(a.scope)) : null;
    const findings = readJson(path.join(work, "findings.json"), null);
    const reports = readReports(path.join(work, "apply"), { round, git });
    const fixReports = readReports(path.join(work, "fixes"), { round, git });
    const baseSha = (plan && plan.base) || "";
    const revs = baseSha
      ? git(["rev-list", "--reverse", `${baseSha}..HEAD`])
          .split("\n")
          .filter(Boolean)
      : [];
    const changedPages = scope ? scope.changed || [] : [];
    const rotPages = scope ? scope.rotation_pages || [] : [];
    const summary = [
      prev ? `Decisions on the round-${prev.round} page` : "",
      scope
        ? `audit of ${(scope.pages || []).length} pages (${changedPages.length} changed on main${scope.since ? ` since ${String(scope.since).slice(0, 7)}` : ", no baseline commit"}, ${rotPages.length} in rotation)`
        : "no audit",
    ]
      .filter(Boolean)
      .join("; ");
    const base = {
      dates: { start: (plan && plan.date) || date, end: date },
      branch: a.branch || git(["rev-parse", "--abbrev-ref", "HEAD"]),
      commits: {
        base: baseSha,
        from: revs[0] || "",
        to: revs.length ? revs[revs.length - 1] : "",
      },
      pr: typeof a.pr === "string" ? a.pr : null,
      paper_hosts: { reachable: paperReachable },
      scope: scope
        ? {
            summary,
            since: scope.since || null,
            main: scope.main || "",
            rotation: scope.rotation || null,
            pages:
              scope.pages_why || (scope.pages || []).map((p) => ({ path: p })),
          }
        : { summary },
    };
    // the review-audit result's failed_batches, saved by the session (optional)
    const failed = readJson(path.join(work, "audit", "failed.json"), []);
    const notAudited = (
      Array.isArray(failed) ? failed : failed.failed_batches || []
    ).flatMap((b) => (typeof b === "string" ? [b] : b.pages || []));
    if (notAudited.length) base.scope.not_audited = notAudited;
    const { record, prevOutcomes } = composeRecord({
      round,
      prev,
      plan,
      reports,
      findings,
      fixReports,
      base,
    });
    await writeJson(recFile(round), record);
    if (prev)
      await writeJson(recFile(prev.round), {
        ...readJson(recFile(prev.round)),
        outcomes: prevOutcomes,
      });
    const stateFile = path.join(R, "state.json");
    await writeJson(
      stateFile,
      nextState(readJson(stateFile), { round, scope, notAudited }),
    );
    const count = {};
    for (const i of record.items)
      count[i.section] = (count[i.section] || 0) + 1;
    console.log(
      JSON.stringify(
        {
          record: recFile(round),
          items: count,
          applied: record.applied.length,
          overflow: record.overflow.length,
        },
        null,
        1,
      ),
    );
    return 0;
  }
  console.error(`unknown command ${cmd}`);
  return 2;
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === new URL(import.meta.url).pathname
)
  main(process.argv.slice(2)).then(
    (code) => process.exit(code),
    (e) => {
      console.error(e.message);
      process.exit(1);
    },
  );
