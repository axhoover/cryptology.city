#!/usr/bin/env node
// Builds the review page (one self-contained HTML file) from the round records.
//
//   node scripts/review/build-page.mjs --out <file.html> [--round <n>] [--head <sha>]
//   node scripts/review/build-page.mjs --inspect <page.html> [--round <n>]
//
// --inspect reads the data embedded in a page (a published copy saved by an
// Artifact read, say) and prints its round, sections and item ids; with
// --round it also lists the ids that differ from that round's record.
//
// Input: .review/rounds/<n>.json for every round up to <n> (default: the
// highest), .review/page/template.html, and macros.ts. The page shows the
// cards of round <n>'s record (`items`: what Claude applied, proposals, the
// items that need a paper, each carried item under its original id) and a
// Rounds table with one row per record. The template reads decisions from the
// artifact's `decisions` collection at view time; nothing here touches it.
//
// The record format is documented in .review/README.md.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
  "..",
);

export const SECTION_ORDER = ["applied", "proposals", "paper"];

const plural = (n, one, many = one + "s") => `${n} ${n === 1 ? one : many}`;

// Default title, card kind, bulk button, decision filter and help text per
// section. A record may override `title` and `help` under page.sections.<key>.
export function sectionDefaults(key, round, count) {
  if (key === "applied")
    return {
      key,
      title: `Applied in round ${round}`,
      kind: "fix",
      bulk: true,
      help: `<b>${plural(count, "change")} Claude made in round ${round}</b>, each checked by an independent verifier: the decisions you marked on the previous page, and the mechanical fixes (lint errors, broken links, typos, macro use) this round's audit found. <b>Keep</b> it, <b>Amend</b> it with a note, or <b>Revert</b> it; Claude acts on Amend and Revert at the start of the next round. Unmarked changes stay here.`,
    };
  if (key === "proposals")
    return {
      key,
      title: "Proposals",
      kind: "proposal",
      bulk: true,
      help: `<b>${plural(count, "proposed change")}</b>: findings of the round-${round} audit (and of the review inbox, marked <b>from the inbox</b>) that two independent verifiers confirmed, and undecided proposals from earlier rounds. <b>Approve</b> runs the proposal as written; <b>Approve with changes</b> runs it with your note applied; <b>Reject</b> drops it, and later audits do not raise it again unless the page changes.`,
    };
  if (key === "paper")
    return {
      key,
      title: "Needs the paper",
      kind: "proposal",
      bulk: false,
      filter: "all",
      help: `<b>${plural(count, "item")} that need a claim checked against a paper</b>, which the routine's environment could not reach. Claude does the approved ones once the paper hosts are reachable (environment settings → Network access). If you read a paper yourself, choose <b>Approve with changes</b> and write what it says; Claude applies that instead. <b>Reject</b> drops the check. A check marked <b>not verified</b> came from the review inbox and skipped the verifiers for the same reason.`,
    };
  throw new Error(`unknown section ${key}`);
}

// ------------------------------------------------------------------ macros --
// macros.ts holds `"\\name": "expansion",` pairs (TypeScript string literals,
// which for these strings are JSON string literals too).
export function parseMacros(src) {
  const out = {};
  for (const m of src.matchAll(
    /"((?:[^"\\]|\\.)*)"\s*:\s*"((?:[^"\\]|\\.)*)"/g,
  )) {
    const name = JSON.parse(`"${m[1]}"`);
    if (!name.startsWith("\\")) continue;
    out[name.slice(1)] = JSON.parse(`"${m[2]}"`);
  }
  return out;
}

// ------------------------------------------------------------------ history --
const MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");

export function formatDates(dates) {
  if (!dates || !dates.start) return "";
  const parse = (s) => {
    const [y, m, d] = String(s).split("-").map(Number);
    return { y, m, d };
  };
  const a = parse(dates.start);
  const b = parse(dates.end || dates.start);
  const day = (x) => `${x.d} ${MONTHS[x.m - 1]}`;
  if (a.y === b.y && a.m === b.m && a.d === b.d) return `${day(a)} ${a.y}`;
  if (a.y === b.y && a.m === b.m)
    return `${a.d}–${b.d} ${MONTHS[a.m - 1]} ${a.y}`;
  if (a.y === b.y) return `${day(a)} – ${day(b)} ${a.y}`;
  return `${day(a)} ${a.y} – ${day(b)} ${b.y}`;
}

const short = (sha) => (sha ? String(sha).slice(0, 7) : "");

export function commitRange(commits) {
  if (!commits) return "";
  const from = short(commits.from);
  const to = short(commits.to);
  if (from && to && from !== to) return `${from} → ${to}`;
  return from || to || "";
}

const joinCounts = (pairs) =>
  pairs
    .filter(([n]) => n > 0)
    .map(([n, label]) => `${n} ${label}`)
    .join(" · ");

// Decisions the next run read on this round's items (record.decisions is
// written by that run). Before then the round is open.
export function summarizeDecisions(rec) {
  if (!rec.decisions) return "open";
  const items = rec.items || [];
  const c = {
    kept: 0,
    amended: 0,
    reverted: 0,
    approved: 0,
    changes: 0,
    rejected: 0,
    undecided: 0,
  };
  for (const it of items) {
    const d = rec.decisions[it.id];
    // a consumed decision was acted on in an earlier round: not a decision on this card
    const dec = d && !d.consumed && d.decision;
    if (!dec) c.undecided++;
    else if (it.kind === "fix")
      c[{ approve: "kept", change: "amended", reject: "reverted" }[dec]]++;
    else
      c[{ approve: "approved", change: "changes", reject: "rejected" }[dec]]++;
  }
  return (
    joinCounts([
      [c.kept, "kept"],
      [c.amended, "amended"],
      [c.reverted, "reverted"],
      [c.approved, "approved"],
      [c.changes, "with changes"],
      [c.rejected, "rejected"],
      [c.undecided, "undecided"],
    ]) || "none"
  );
}

// What this round's run did: the previous page's decisions it applied, the
// mechanical fixes, the new proposals and paper checks, what it carried.
export function summarizeOutcome(rec) {
  const applied = rec.applied || [];
  const count = (pred) => applied.filter(pred).length;
  const decided = (s) => count((a) => a.source !== "audit" && a.status === s);
  const items = rec.items || [];
  const fresh = (i) => i.origin === rec.round || i.applied_in === rec.round;
  const newIn = (section) =>
    items.filter((i) => i.section === section && i.origin === rec.round).length;
  const inboxCount = (outcome) =>
    ((rec.inbox && rec.inbox.items) || []).filter((i) => i.outcome === outcome)
      .length;
  const parts = [
    [decided("applied"), "decided item applied", "decided items applied"],
    [decided("partial"), "applied in part"],
    [decided("already-done"), "already done"],
    [decided("reverted"), "reverted"],
    [decided("kept"), "kept"],
    [decided("dropped"), "dropped"],
    [decided("skipped"), "not executable as written"],
    [decided("failed"), "not finished (retried next round)"],
    [
      count(
        (a) =>
          a.source === "audit" && ["applied", "partial"].includes(a.status),
      ),
      "mechanical fix",
      "mechanical fixes",
    ],
    [newIn("proposals"), "new proposal", "new proposals"],
    [newIn("paper"), "new paper check", "new paper checks"],
    [items.filter((i) => !fresh(i)).length, "carried"],
    [
      (rec.overflow || []).length,
      "finding over the cap (logged for the next round)",
      "findings over the cap (logged for the next round)",
    ],
    [
      inboxCount("dropped"),
      "inbox item dropped (refuted, or a duplicate)",
      "inbox items dropped (refuted, or duplicates)",
    ],
    [
      inboxCount("unaccounted"),
      "inbox item not reported on (offered again next round)",
      "inbox items not reported on (offered again next round)",
    ],
  ];
  return (
    parts
      .filter(([n]) => n > 0)
      .map(([n, one, many]) => `${n} ${n === 1 ? one : many || one}`)
      .join(", ") || "nothing to do"
  );
}

export function historyRow(rec) {
  const h = rec.history || {};
  return {
    round: String(rec.round),
    dates: h.dates ?? formatDates(rec.dates),
    scope: h.scope ?? (rec.scope && rec.scope.summary) ?? "",
    items: h.items ?? (rec.items || []).length,
    decisions: h.decisions ?? summarizeDecisions(rec),
    outcome: h.outcome ?? summarizeOutcome(rec),
    commits: h.commits ?? commitRange(rec.commits),
    pr: rec.pr || "",
  };
}

// --------------------------------------------------------------------- page --
const PAGE_FIELDS = [
  "id",
  "section",
  "kind",
  "edge",
  "slug",
  "chips",
  "summary",
  "blocks",
  "url",
  "consumed",
];

export function searchText(it) {
  return (
    [it.edge || "", it.slug || "", it.summary || ""]
      .concat((it.chips || []).map((c) => c.text))
      // a diff block keeps its text in `old` and `new`
      .concat(
        (it.blocks || []).map((b) =>
          [b.text, b.old, b.new].filter(Boolean).join(" "),
        ),
      )
      .join(" ")
      .toLowerCase()
  );
}

export function pageItem(it) {
  const out = {};
  for (const k of PAGE_FIELDS) if (it[k] !== undefined) out[k] = it[k];
  if (out.url === undefined) out.url = "";
  out.search = searchText(it);
  return out;
}

// records: every round record, any order. Returns the JSON the template embeds.
export function buildData(records, opts = {}) {
  const sorted = [...records].sort((a, b) => a.round - b.round);
  if (!sorted.length) throw new Error("no round records");
  const round = opts.round ?? sorted[sorted.length - 1].round;
  const rec = sorted.find((r) => r.round === round);
  if (!rec) throw new Error(`no record for round ${round}`);
  const ids = new Set();
  for (const it of rec.items || []) {
    if (!it.id) throw new Error(`round ${round}: an item has no id`);
    if (ids.has(it.id))
      throw new Error(`round ${round}: duplicate item id ${it.id}`);
    ids.add(it.id);
    if (!SECTION_ORDER.includes(it.section))
      throw new Error(
        `round ${round}: item ${it.id} has unknown section ${it.section}`,
      );
  }
  const items = SECTION_ORDER.flatMap((key) =>
    (rec.items || []).filter((i) => i.section === key).map(pageItem),
  );
  const override = (rec.page && rec.page.sections) || {};
  let sections = SECTION_ORDER.map((key) => {
    const n = items.filter((i) => i.section === key).length;
    return n
      ? { ...sectionDefaults(key, round, n), ...(override[key] || {}) }
      : null;
  }).filter(Boolean);
  if (!sections.length)
    sections = [
      {
        ...sectionDefaults("proposals", round, 0),
        help: `<b>Nothing to decide in round ${round}.</b> The audit found nothing that two verifiers confirmed, and no earlier item is open.`,
      },
    ];
  const history = sorted.filter((r) => r.round <= round).map(historyRow);
  const head = short(opts.head || (rec.commits && rec.commits.to) || "");
  const meta =
    (rec.page && rec.page.meta) ||
    `Round ${round} · ${plural(items.length, "item")}, built from ${rec.branch || "main"}${head ? ` at ${head}` : ""}.`;
  return { sections, items, meta, history };
}

// JSON that is safe inside a <script> element: `<` is escaped, so no string
// can close the element (or open a `<!--` that changes how `</script>`
// parses), and U+2028/U+2029 are escaped for the macros' JS literal. JSON.parse
// and JS read the escapes back as the characters.
export const scriptJson = (value) =>
  JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

export function renderHtml(template, data, macros) {
  if (!template.includes("__DATA__") || !template.includes("__MACROS__"))
    throw new Error("template lacks __DATA__ or __MACROS__");
  const fill = { DATA: scriptJson(data), MACROS: scriptJson(macros) };
  // One pass, first occurrence of each: text inserted for one placeholder is
  // never scanned for the other (a card may quote "__MACROS__"), and the
  // function replacer keeps `$` literal.
  const done = new Set();
  return template.replace(/__(DATA|MACROS)__/g, (m, key) => {
    if (done.has(key)) return m;
    done.add(key);
    return fill[key];
  });
}

export function readEmbedded(html) {
  const m =
    /<script id="review-data" type="application\/json">([\s\S]*?)<\/script>/.exec(
      html,
    );
  if (!m) throw new Error("no review-data script in the page");
  return JSON.parse(m[1]);
}

export function inspectPage(html, record) {
  const data = readEmbedded(html);
  const ids = (data.items || []).map((i) => i.id);
  const count = {};
  for (const i of data.items || [])
    count[i.section] = (count[i.section] || 0) + 1;
  const hist = data.history || [];
  const out = {
    round: hist.length ? hist[hist.length - 1].round : null,
    meta: data.meta || "",
    sections: (data.sections || []).map((s) => s.key),
    items: count,
    ids,
  };
  if (record) {
    const want = new Set((record.items || []).map((i) => i.id));
    const have = new Set(ids);
    out.compared_with_round = record.round;
    out.missing_from_page = [...want].filter((id) => !have.has(id));
    out.not_in_record = ids.filter((id) => !want.has(id));
  }
  return out;
}

export function loadRecords(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /^\d+\.json$/.test(f))
    .map((f) => {
      const rec = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
      // a record copied from another round would add a second row for it
      if (rec.round !== Number(f.slice(0, -".json".length)))
        throw new Error(`${f} holds round ${rec.round}`);
      return rec;
    });
}

function main(argv) {
  const arg = (name) => {
    const i = argv.indexOf(`--${name}`);
    return i >= 0 ? argv[i + 1] : undefined;
  };
  const out = arg("out");
  const recordsDir = arg("records") || path.join(ROOT, ".review", "rounds");
  if (arg("inspect")) {
    const html = fs.readFileSync(arg("inspect"), "utf8");
    const round = arg("round") ? Number(arg("round")) : null;
    const record = round
      ? loadRecords(recordsDir).find((r) => r.round === round)
      : null;
    if (round && !record) throw new Error(`no record for round ${round}`);
    console.log(JSON.stringify(inspectPage(html, record), null, 1));
    return;
  }
  if (!out) {
    console.error(
      "usage: build-page.mjs --out <file.html> [--round <n>] [--head <sha>] | --inspect <page.html> [--round <n>]",
    );
    process.exit(2);
  }
  const templatePath =
    arg("template") || path.join(ROOT, ".review", "page", "template.html");
  const records = loadRecords(recordsDir);
  let head = arg("head");
  if (!head) {
    try {
      head = execFileSync("git", ["rev-parse", "--short", "HEAD"], {
        cwd: ROOT,
        encoding: "utf8",
      }).trim();
    } catch {
      head = "";
    }
  }
  const data = buildData(records, {
    round: arg("round") ? Number(arg("round")) : undefined,
    head,
  });
  const macros = parseMacros(
    fs.readFileSync(path.join(ROOT, "macros.ts"), "utf8"),
  );
  const html = renderHtml(fs.readFileSync(templatePath, "utf8"), data, macros);
  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
  fs.writeFileSync(out, html);
  const count = {};
  for (const i of data.items) count[i.section] = (count[i.section] || 0) + 1;
  console.log(
    JSON.stringify({
      out,
      round: data.history[data.history.length - 1].round,
      sections: data.sections.map((s) => s.key),
      items: count,
      kb: Math.round(html.length / 1024),
    }),
  );
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === new URL(import.meta.url).pathname
)
  main(process.argv.slice(2));
