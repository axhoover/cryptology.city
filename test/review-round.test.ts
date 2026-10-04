import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import {
  decide,
  planActions,
  isConsumed,
  groupItems,
  itemMode,
  selectFindings,
  composeRecord,
  knownItems,
  nextState,
  main,
  readDecisions,
  readReports,
  // @ts-ignore — plain ESM helper, scripts/review/round.mjs
} from "../scripts/review/round.mjs";
// @ts-ignore — plain ESM helper, scripts/review/build-page.mjs
import { buildData } from "../scripts/review/build-page.mjs";

type Item = Record<string, unknown> & { id: string; section: string };
const card = (id: string, section: string, extra = {}): Item => ({
  id,
  section,
  kind: section === "applied" ? "fix" : "proposal",
  edge: "e",
  chips: [],
  summary: `summary of ${id}`,
  blocks: [
    { type: "text", label: "Why", text: "because" },
    {
      type: "details",
      title: "Exact change Claude will make",
      text: `do ${id}`,
    },
  ],
  url: "",
  pages: [`content/Reductions/${id.replace(/[^a-z0-9]+/g, "-")}.md`],
  origin: 2,
  ...extra,
});
const at = "2026-11-03T09:00:00.000Z";
const reachable = { paperReachable: true };
const unreachable = { paperReachable: false };

test("decisions map to actions by section", () => {
  const a = card("a", "applied");
  const p = card("p", "proposals");
  const q = card("q", "paper");
  const d = (decision: string, note = "") => ({ decision, note, at });
  assert.equal(decide(a, null, reachable).action, "carry");
  assert.equal(decide(a, d("approve"), reachable).action, "keep");
  assert.equal(decide(a, d("change", "n"), reachable).action, "amend");
  assert.equal(decide(a, d("reject"), reachable).action, "revert");
  assert.equal(decide(p, null, reachable).action, "carry");
  assert.equal(decide(p, d("approve"), reachable).action, "execute");
  assert.equal(decide(p, d("change", "n"), reachable).action, "execute");
  assert.equal(decide(p, d("reject"), reachable).action, "drop");
  assert.equal(decide(q, d("approve"), reachable).action, "execute");
  assert.equal(decide(q, d("approve"), unreachable).action, "carry");
  assert.equal(
    decide(q, d("change", "the paper says"), unreachable).action,
    "execute",
  );
  assert.equal(decide(q, d("reject"), unreachable).action, "drop");
  assert.equal(decide(q, { decision: "bogus" }, reachable).action, "carry");
});

test("a consumed decision is not acted on again", () => {
  const consumed = { decision: "approve", note: "", at };
  const a = card("a", "applied", { consumed });
  assert.ok(isConsumed(a, { decision: "approve", note: "", at }));
  assert.equal(
    decide(a, { decision: "approve", at }, reachable).action,
    "carry",
  );
  // a new click (new time) is a new decision
  assert.equal(
    decide(a, { decision: "approve", at: "2026-12-01T00:00:00Z" }, reachable)
      .action,
    "keep",
  );
  const [x] = planActions(
    { round: 3, items: [a] },
    { a: { decision: "approve", at } },
    reachable,
  );
  assert.deepEqual([x.action, x.decision], ["carry", ""]);
});

test("item modes: tooling, parallel, sweep", () => {
  assert.equal(itemMode(["content/A.md", "scripts/lint.mjs"]), "tooling");
  assert.equal(itemMode(["content/A.md", "TODO_SUMMARY.md"]), "parallel");
  assert.equal(itemMode(["TODO_SUMMARY.md"]), "sweep");
  assert.equal(itemMode([]), "sweep");
  assert.equal(
    itemMode(Array.from({ length: 13 }, (_, i) => `content/P${i}.md`)),
    "sweep",
  );
});

test("groups are file-disjoint, tooling first, sweeps last", () => {
  const it = (id: string, pages: string[]) => ({ id, pages });
  const groups = groupItems(
    [
      it("a", ["content/A.md", "TODO_SUMMARY.md"]),
      it("b", ["content/B.md"]),
      it("c", ["content/A.md", "content/C.md"]),
      it("t", ["scripts/x.mjs", "content/D.md"]),
      it("u", ["scripts/x.mjs"]),
      it("s", []),
      ...Array.from({ length: 7 }, (_, i) => it(`m${i}`, [`content/M${i}.md`])),
    ],
    { maxItems: 3 },
  );
  const modes = groups.map((g: { mode: string }) => g.mode);
  assert.equal(modes[0], "tooling");
  assert.equal(modes[modes.length - 1], "sweep");
  const tooling = groups.filter((g: { mode: string }) => g.mode === "tooling");
  assert.equal(tooling.length, 1, "t and u share scripts/x.mjs");
  const par = groups.filter((g: { mode: string }) => g.mode === "parallel");
  const owner = new Map<string, string>();
  for (const g of par) {
    assert.ok(g.items.length <= 3);
    assert.ok(!g.own_files.includes("TODO_SUMMARY.md"));
    for (const f of g.own_files) {
      assert.ok(!owner.has(f), `${f} owned by ${owner.get(f)} and ${g.group}`);
      owner.set(f, g.group);
    }
  }
  const ga = par.find((g: { items: { id: string }[] }) =>
    g.items.some((i) => i.id === "a"),
  );
  assert.ok(
    ga.items.some((i: { id: string }) => i.id === "c"),
    "a and c share content/A.md",
  );
  const all = groups
    .flatMap((g: { items: { id: string }[] }) => g.items.map((i) => i.id))
    .sort();
  assert.equal(all.length, 13);
  assert.deepEqual(
    groups
      .map((g: { group: string }) => g.group)
      .filter((g: string) => g.startsWith("C")),
    par.map((_: unknown, i: number) => `C${i + 1}`),
  );
});

test("findings: numbered per kind, capped by severity, mechanical fixes uncapped", () => {
  const f = (kind: string, severity: string, extra = {}) => ({
    kind,
    severity,
    confidence: "high",
    page: `content/Reductions/${kind}-${severity}.md`,
    summary: `${kind} ${severity}`,
    change: "c",
    ...extra,
  });
  const sel = selectFindings(
    [
      f("math", "low"),
      f("cite", "high"),
      f("math", "high"),
      f("link", "low", { mechanical: true }),
      f("weird", "medium"),
      f("cite", "medium", { needs_paper: true }),
      f("style", "low", { mechanical: true, needs_paper: true }),
    ],
    { round: 3, cap: 3, existingIds: ["r3:math-1"] },
  );
  assert.deepEqual(
    sel.proposals.map((x: { id: string }) => x.id),
    ["r3:math-2", "r3:cite-1"],
  );
  assert.deepEqual(
    sel.paper.map((x: { id: string }) => x.id),
    ["r3:cite-2"],
  );
  assert.equal(sel.overflow.length, 2);
  assert.deepEqual(sel.overflow.map((x: { kind: string }) => x.kind).sort(), [
    "math",
    "other",
  ]);
  assert.equal(sel.overflow[0].id, undefined);
  assert.deepEqual(sel.fixes.map((x: { id: string }) => x.id).sort(), [
    "r3:link-1",
    "r3:style-1",
  ]);
  assert.equal(
    sel.fixes.find((x: { kind: string }) => x.kind === "style").needs_paper,
    false,
  );
});

function previous() {
  const consumed = {
    decision: "approve",
    note: "",
    at: "2026-10-01T00:00:00Z",
  };
  return {
    schema: 1,
    round: 2,
    commits: { to: "f".repeat(40) },
    items: [
      card("keep", "applied", { applied_in: 2 }),
      card("amend", "applied", {
        applied_in: 2,
        blocks: [
          { type: "text", label: "What Claude did", text: "did X" },
          { type: "details", title: "Original proposal", text: "do amend" },
        ],
      }),
      card("revert", "applied", { applied_in: 2, url: "https://x/commit/abc" }),
      card("unmarked", "applied", { applied_in: 2, consumed }),
      card("exec", "proposals"),
      card("execfail", "proposals"),
      card("needspaper", "proposals"),
      card("rejectme", "proposals"),
      card("waiting", "proposals"),
      card("paperok", "paper", { origin: 1 }),
      card("paperwait", "paper", { origin: 1 }),
      card("cannot", "proposals"),
    ],
  };
}
const DECISIONS = {
  keep: { decision: "approve", note: "", at },
  amend: { decision: "change", note: "say Y", at },
  revert: { decision: "reject", note: "", at },
  unmarked: { decision: "approve", note: "", at: "2026-10-01T00:00:00Z" },
  exec: { decision: "approve", note: "", at },
  execfail: { decision: "approve", note: "", at },
  needspaper: { decision: "approve", note: "", at },
  rejectme: { decision: "reject", note: "no", at },
  paperok: { decision: "approve", note: "", at: "2026-09-27T00:00:00Z" },
  cannot: { decision: "change", note: "do it differently", at },
};

test("composing a round: sections, carried ids, consumed decisions, failures", () => {
  const prev = previous();
  const actions = planActions(prev, DECISIONS, unreachable);
  const byId = Object.fromEntries(
    actions.map((a: { id: string; action: string }) => [a.id, a.action]),
  );
  assert.deepEqual(byId, {
    keep: "keep",
    amend: "amend",
    revert: "revert",
    unmarked: "carry",
    exec: "execute",
    execfail: "execute",
    needspaper: "execute",
    rejectme: "drop",
    waiting: "carry",
    paperok: "carry",
    paperwait: "carry",
    cannot: "execute",
  });
  const rep = (status: string, extra = {}) => ({
    status,
    what: "done",
    files: ["content/Reductions/x.md"],
    verified: "ok",
    verifier_note: "checked",
    group: "C1",
    commit: "1234567890abcdef",
    ...extra,
  });
  const reports = {
    amend: rep("applied", { what: "now says Y" }),
    revert: rep("reverted"),
    exec: rep("applied", { verified: "fixed" }),
    needspaper: rep("skipped", {
      needs_paper: true,
      reason: "the claim needs the paper",
    }),
    cannot: rep("skipped", { reason: "the passage is gone" }),
  };
  const findings = {
    fixes: [
      {
        id: "r3:link-1",
        kind: "link",
        severity: "low",
        confidence: "high",
        mechanical: true,
        page: "content/A.md",
        pages: ["content/A.md"],
        summary: "dead link",
        why: "404",
        change: "fix it",
      },
      {
        id: "r3:style-1",
        kind: "style",
        severity: "low",
        confidence: "high",
        mechanical: true,
        page: "content/B.md",
        pages: ["content/B.md"],
        summary: "macro",
        change: "use \\calA",
      },
    ],
    proposals: [
      {
        id: "r3:math-1",
        kind: "math",
        severity: "high",
        confidence: "medium",
        page: "content/C.md",
        pages: ["content/C.md"],
        summary: "wrong",
        why: "w",
        change: "c",
        verifier_notes: ["v1", "v2"],
      },
    ],
    paper: [
      {
        id: "r3:cite-1",
        kind: "cite",
        severity: "medium",
        confidence: "low",
        needs_paper: true,
        page: "content/D.md",
        pages: ["content/D.md"],
        summary: "check",
        check: "Theorem 3",
        change: "c",
      },
    ],
    overflow: [{ kind: "math", summary: "later" }],
  };
  const fixReports = {
    "r3:link-1": rep("applied", { group: "FC1" }),
    "r3:style-1": rep("skipped", { reason: "not clear-cut" }),
  };
  const { record, prevOutcomes } = composeRecord({
    round: 3,
    prev,
    plan: { actions },
    reports,
    findings,
    fixReports,
    base: { dates: { start: "2026-11-03", end: "2026-11-03" } },
  });
  const sec = (s: string) =>
    record.items.filter((i: Item) => i.section === s).map((i: Item) => i.id);
  assert.deepEqual(
    sec("applied"),
    ["amend", "exec", "r3:link-1", "unmarked", "revert"].filter(
      (x) => x !== "revert",
    ),
  );
  assert.deepEqual(sec("proposals"), [
    "r3:style-1",
    "r3:math-1",
    "execfail",
    "cannot",
    "waiting",
  ]);
  assert.deepEqual(sec("paper"), [
    "r3:cite-1",
    "needspaper",
    "paperok",
    "paperwait",
  ]);
  const get = (id: string) => record.items.find((i: Item) => i.id === id);
  // applied on a decision: the decision is consumed, so the card asks again
  assert.deepEqual(get("exec").consumed, { decision: "approve", note: "", at });
  assert.equal(get("exec").kind, "fix");
  assert.equal(get("exec").applied_in, 3);
  assert.ok(
    get("exec").chips.some(
      (c: { text: string }) => c.text === "fixed by verifier",
    ),
  );
  assert.ok(
    get("exec").chips.some(
      (c: { text: string }) => c.text === "proposed in round 2",
    ),
  );
  assert.match(get("exec").url, /\/commit\/1234567890abcdef$/);
  assert.ok(
    get("amend").blocks.some(
      (b: { title?: string; text: string }) =>
        b.title === "Earlier change" && b.text === "did X",
    ),
  );
  assert.ok(
    get("amend").blocks.some(
      (b: { title?: string; text: string }) =>
        b.title === "Your note" && b.text === "say Y",
    ),
  );
  assert.equal(get("amend").chips[0].text, "amended");
  // a failed group: decision stays live, retried next round
  assert.equal(get("execfail").consumed, undefined);
  assert.ok(
    get("execfail").chips.some(
      (c: { text: string }) => c.text === "not done in round 3",
    ),
  );
  // skipped for want of a paper: moves to the paper section, approval stays live
  assert.equal(get("needspaper").consumed, undefined);
  // skipped as not executable: decision consumed so the maintainer decides again
  assert.deepEqual(get("cannot").consumed, {
    decision: "change",
    note: "do it differently",
    at,
  });
  assert.ok(
    get("cannot").blocks.some(
      (b: { label?: string; text: string }) =>
        b.label === "Why Claude stopped" && b.text === "the passage is gone",
    ),
  );
  // carried: same id, a carry chip, no duplicate chips after a second carry
  assert.ok(
    get("paperok").chips.some(
      (c: { text: string }) => c.text === "from round 1",
    ),
  );
  assert.ok(
    get("unmarked").chips.some(
      (c: { text: string }) => c.text === "applied in round 2",
    ),
  );
  assert.deepEqual(get("unmarked").consumed, prev.items[3].consumed);
  // mechanical fix shown applied; a skipped one becomes a proposal
  assert.equal(get("r3:link-1").section, "applied");
  assert.equal(get("r3:style-1").kind, "proposal");
  assert.equal(
    get("r3:math-1").url,
    "https://github.com/axhoover/cryptology.city/blob/main/content/C.md",
  );
  assert.equal(record.overflow.length, 1);
  // outcomes of the previous page
  assert.deepEqual(
    Object.fromEntries(
      Object.entries(prevOutcomes).map(([k, v]) => [
        k,
        (v as { status: string }).status,
      ]),
    ),
    {
      keep: "kept",
      amend: "applied",
      revert: "reverted",
      unmarked: "carried",
      exec: "applied",
      execfail: "failed",
      needspaper: "skipped",
      rejectme: "dropped",
      waiting: "carried",
      paperok: "carried",
      paperwait: "carried",
      cannot: "skipped",
    },
  );
  // the page builds from it
  const data = buildData([{ ...record, commits: {} }]);
  assert.deepEqual(
    data.sections.map((s: { key: string }) => s.key),
    ["applied", "proposals", "paper"],
  );
  // carrying again does not stack carry chips
  const again = composeRecord({
    round: 4,
    prev: record,
    plan: { actions: planActions(record, {}, unreachable) },
  }).record;
  const pw = again.items.find((i: Item) => i.id === "paperwait");
  assert.equal(pw.chips.filter((c: { carry?: boolean }) => c.carry).length, 1);
});

test("known items: open items, rejections, last round's overflow", () => {
  const prev = {
    ...previous(),
    decisions: { rejectme: { decision: "reject", note: "no", at } },
    overflow: [{ summary: "o" }],
  };
  const known = knownItems([prev], {
    plan: { actions: planActions(prev, DECISIONS, unreachable) },
  });
  assert.equal(known.open.length, 11);
  assert.ok(!known.open.some((i: { id: string }) => i.id === "rejectme"));
  assert.deepEqual(
    known.rejected.map((r: { id: string; since: string }) => [r.id, r.since]),
    [["rejectme", "f".repeat(40)]],
  );
  assert.equal(known.overflow.length, 1);
});

test("the next state advances the round, baseline and cursor", () => {
  const s = nextState(
    {
      artifact: "u",
      last_round: 2,
      last_audited_commit: "<placeholder>",
      rotation: { cursor: 0, slice: 149 },
    },
    {
      round: 3,
      scope: { main: "abc", rotation: { cursor_after: 149, slice: 149 } },
    },
  );
  assert.deepEqual(s, {
    artifact: "u",
    last_round: 3,
    last_audited_commit: "abc",
    rotation: { cursor: 149, slice: 149 },
  });
  const carry = nextState(s, {
    round: 4,
    scope: null,
    notAudited: ["content/b.md", "content/a.md", "content/b.md"],
  });
  assert.deepEqual(carry.audit_carry, ["content/a.md", "content/b.md"]);
  assert.equal(carry.last_audited_commit, "abc");
  assert.equal(
    nextState(carry, { round: 5, scope: null }).audit_carry,
    undefined,
  );
  // the page the next slice starts at is stored with the index
  const named = nextState(s, {
    round: 4,
    scope: {
      main: "def",
      rotation: { cursor_after: 3, slice: 149, next_after: "content/x.md" },
    },
  });
  assert.deepEqual(named.rotation, {
    cursor: 3,
    slice: 149,
    next: "content/x.md",
  });
});

test("plan, findings and record run end to end on a scratch tree", async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "review-round-"));
  const R = path.join(root, ".review");
  fs.mkdirSync(path.join(R, "rounds"), { recursive: true });
  fs.writeFileSync(
    path.join(R, "rounds", "2.json"),
    JSON.stringify(previous()),
  );
  fs.writeFileSync(
    path.join(R, "state.json"),
    JSON.stringify({
      artifact: "u",
      last_round: 2,
      last_audited_commit: "<set when this branch merges to main>",
      rotation: { cursor: 0, slice: 2 },
    }),
  );
  const dec = path.join(root, "decisions.json");
  // the ArtifactData list shape: documents with an id and the doc's fields
  fs.writeFileSync(
    dec,
    JSON.stringify(Object.entries(DECISIONS).map(([id, d]) => ({ id, ...d }))),
  );
  const log = console.log;
  const out: string[] = [];
  console.log = (s: string) => out.push(s);
  try {
    const opts = { root, today: "2026-11-03" };
    assert.equal(
      await main(
        ["plan", "--round", "3", "--decisions", dec, "--paper", "unreachable"],
        opts,
      ),
      0,
    );
    const W = path.join(R, "work", "round-3");
    const plan = JSON.parse(fs.readFileSync(path.join(W, "plan.json"), "utf8"));
    assert.equal(plan.actions.length, 12);
    const groupFiles = fs.readdirSync(path.join(W, "apply"));
    assert.ok(groupFiles.length >= 1);
    const g = JSON.parse(
      fs.readFileSync(path.join(W, "apply", groupFiles[0]), "utf8"),
    );
    assert.ok(g.items[0].action && g.items[0].blocks);
    const rec2 = JSON.parse(
      fs.readFileSync(path.join(R, "rounds", "2.json"), "utf8"),
    );
    assert.equal(rec2.decisions.rejectme.decision, "reject");
    assert.equal(rec2.decisions.unmarked.consumed, true);
    assert.equal(await main(["known", "--round", "3"], opts), 0);
    assert.ok(fs.existsSync(path.join(W, "known.json")));
    // a verify report for one group, none for the others (they "failed")
    fs.writeFileSync(
      path.join(W, "apply", `${g.group}.verify.json`),
      JSON.stringify({
        group: g.group,
        // the scratch tree is no git repository, so the commit is taken as given
        commit: "f".repeat(40),
        items: g.items.map((i: { id: string }) => ({
          id: i.id,
          status: "applied",
          what: "w",
          files: ["content/x.md"],
          verified: "ok",
          verifier_note: "n",
        })),
      }),
    );
    // planning again would delete that report
    await assert.rejects(
      main(
        ["plan", "--round", "3", "--decisions", dec, "--paper", "unreachable"],
        opts,
      ),
      /already holds 1 workflow reports/,
    );
    fs.mkdirSync(path.join(W, "audit"), { recursive: true });
    fs.writeFileSync(
      path.join(W, "audit", "consolidated.json"),
      JSON.stringify({
        findings: [
          {
            kind: "math",
            severity: "high",
            confidence: "high",
            page: "content/Reductions/z.md",
            summary: "s",
            why: "w",
            change: "c",
          },
        ],
      }),
    );
    assert.equal(await main(["findings", "--round", "3"], opts), 0);
    const scope = path.join(root, "scope.json");
    fs.writeFileSync(
      scope,
      JSON.stringify({
        main: "m".repeat(40),
        since: null,
        changed: [],
        rotation_pages: ["content/a.md"],
        pages: ["content/a.md"],
        rotation: { cursor_after: 2, slice: 2 },
      }),
    );
    assert.equal(
      await main(
        [
          "record",
          "--round",
          "3",
          "--scope",
          scope,
          "--paper",
          "unreachable",
          "--branch",
          "review/round-3",
        ],
        opts,
      ),
      0,
    );
    const rec3 = JSON.parse(
      fs.readFileSync(path.join(R, "rounds", "3.json"), "utf8"),
    );
    assert.equal(rec3.round, 3);
    assert.ok(rec3.items.some((i: Item) => i.id === "r3:math-1"));
    // the reported group's executed items are applied under its commit (a
    // revert leaves the page)
    const executed = (g.items as { id: string; action: string }[]).filter(
      (i) => i.action !== "revert",
    );
    assert.ok(executed.length);
    for (const it of executed) {
      const shown = rec3.items.find((i: Item) => i.id === it.id);
      assert.equal(shown.section, "applied", it.id);
      assert.match(shown.url, /\/commit\/f{40}$/);
    }
    assert.match(rec3.scope.summary, /no baseline commit, 1 in rotation/);
    const st = JSON.parse(fs.readFileSync(path.join(R, "state.json"), "utf8"));
    assert.deepEqual(
      [st.last_round, st.last_audited_commit, st.rotation.cursor],
      [3, "m".repeat(40), 2],
    );
    const rec2b = JSON.parse(
      fs.readFileSync(path.join(R, "rounds", "2.json"), "utf8"),
    );
    assert.equal(rec2b.outcomes.keep.status, "kept");
    assert.equal(rec2b.decisions.keep.decision, "approve");
  } finally {
    console.log = log;
  }
});

test("decisions read from an ArtifactData out_dir, or from a JSON file", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "review-decisions-"));
  const dir = path.join(root, "db", "decisions");
  fs.mkdirSync(dir, { recursive: true });
  // the shape ArtifactData writes with out_dir: the document's fields, named by doc id
  const doc = (item: string, decision: string, note = "") => ({
    at,
    decision,
    item,
    note,
    section: "proposals",
  });
  fs.writeFileSync(
    path.join(dir, "fu:fu-verification-gap-2.json"),
    JSON.stringify(doc("fu:fu-verification-gap-2", "approve"), null, 2),
  );
  fs.writeFileSync(
    path.join(dir, "r3:math-1.json"),
    JSON.stringify(doc("r3:math-1", "change", "use KEY99")),
  );
  const fromDir = readDecisions(path.join(root, "db"));
  assert.deepEqual(Object.keys(fromDir).sort(), [
    "fu:fu-verification-gap-2",
    "r3:math-1",
  ]);
  assert.equal(fromDir["r3:math-1"].note, "use KEY99");
  // the same documents as a list, a {documents} result, a {data} wrapper, a map
  const list = path.join(root, "list.json");
  fs.writeFileSync(
    list,
    JSON.stringify([
      { id: "a", ...doc("a", "approve") },
      { doc_id: "b", version: 1, data: doc("b", "reject") },
      doc("c", "change", "n"),
    ]),
  );
  assert.deepEqual(
    Object.fromEntries(
      Object.entries(readDecisions(list)).map(([k, v]) => [
        k,
        (v as { decision: string }).decision,
      ]),
    ),
    { a: "approve", b: "reject", c: "change" },
  );
  const docs = path.join(root, "docs.json");
  fs.writeFileSync(docs, JSON.stringify({ documents: [doc("d", "approve")] }));
  assert.equal(readDecisions(docs).d.decision, "approve");
  const map = path.join(root, "map.json");
  fs.writeFileSync(map, JSON.stringify({ e: doc("e", "reject") }));
  assert.equal(readDecisions(map).e.decision, "reject");
});

test("a report counts as done only when its change is committed on HEAD", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "review-reports-"));
  const sh = (...args: string[]) =>
    execFileSync("git", args, { cwd: dir, encoding: "utf8" }).trim();
  const git = (args: string[]) => {
    try {
      return sh(...args);
    } catch {
      return "";
    }
  };
  sh("init", "-q");
  sh("config", "user.email", "t@example.com");
  sh("config", "user.name", "t");
  sh("config", "commit.gpgsign", "false");
  fs.writeFileSync(path.join(dir, "a.md"), "a\n");
  sh("add", "-A");
  sh("commit", "-q", "-m", "base");
  fs.writeFileSync(path.join(dir, "a.md"), "b\n");
  sh("add", "-A");
  sh("commit", "-q", "-m", "review round 3: apply, content groups C1, C3");
  const coordSha = sh("rev-parse", "HEAD");
  const W = path.join(dir, "w");
  fs.mkdirSync(W);
  const item = (id: string, status: string) => ({ id, status, what: "w" });
  const write = (f: string, v: unknown) =>
    fs.writeFileSync(path.join(W, f), JSON.stringify(v));
  write("T1.json", { group: "T1", mode: "tooling" });
  write("T1.verify.json", {
    group: "T1",
    mode: "tooling",
    commit: "",
    items: [item("t-applied", "applied"), item("t-done", "already-done")],
  });
  write("T2.verify.json", {
    group: "T2",
    mode: "tooling",
    commit: "0123456789abcdef0123456789abcdef01234567", // not a commit here
    items: [item("t2", "reverted")],
  });
  write("C1.verify.json", {
    group: "C1",
    mode: "parallel",
    commit: "",
    items: [item("c1", "applied")],
  });
  write("C2.verify.json", {
    group: "C2",
    mode: "parallel",
    commit: "",
    items: [item("c2", "applied")],
  });
  write("C3.verify.json", {
    group: "C3",
    mode: "parallel",
    commit: "",
    items: [item("c3", "partial")],
  });
  // no coordinate.json: C1 and C3 are found by the coordinator's subject
  let r = readReports(W, { round: 3, git });
  assert.equal(r["t-applied"].retry, true);
  assert.match(r["t-applied"].reason, /not committed/);
  assert.ok(!r["t-done"].retry, "already-done needs no commit");
  assert.equal(r.t2.retry, true, "a commit not on HEAD does not count");
  assert.equal(r.c1.commit, coordSha);
  assert.ok(!r.c1.retry);
  assert.equal(r.c2.retry, true, "C2 is not in the coordinator's commit");
  assert.equal(r.c3.commit, coordSha);
  // the coordinator restored C3 although its report says partial
  write("coordinate.json", { commit: coordSha, restored_groups: ["C3"] });
  r = readReports(W, { round: 3, git });
  assert.ok(!r.c1.retry);
  assert.ok(!r.c2.retry, "C2 counts under the coordinator's commit");
  assert.equal(r.c3.retry, true);
  assert.match(r.c3.reason, /restored/);
});

test("plan --base records the commit a continued round started from", async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "review-base-"));
  const R = path.join(root, ".review");
  fs.mkdirSync(path.join(R, "rounds"), { recursive: true });
  fs.writeFileSync(
    path.join(R, "rounds", "2.json"),
    JSON.stringify(previous()),
  );
  const dec = path.join(root, "db");
  fs.mkdirSync(path.join(dec, "decisions"), { recursive: true });
  const log = console.log;
  console.log = () => {};
  try {
    assert.equal(
      await main(
        [
          "plan",
          "--round",
          "3",
          "--decisions",
          dec,
          "--paper",
          "unreachable",
          "--base",
          "abc1234",
        ],
        { root, today: "2026-11-03" },
      ),
      0,
    );
  } finally {
    console.log = log;
  }
  const plan = JSON.parse(
    fs.readFileSync(path.join(R, "work", "round-3", "plan.json"), "utf8"),
  );
  assert.equal(plan.base, "abc1234");
  assert.ok(
    plan.actions.every((x: { action: string }) => x.action !== "execute"),
  );
});

test("a mechanical fix whose group was restored is shown as a proposal, not as applied", () => {
  const fix = {
    id: "r3:link-1",
    kind: "link",
    severity: "low",
    confidence: "high",
    mechanical: true,
    needs_paper: false,
    page: "content/Reductions/y.md",
    pages: ["content/Reductions/y.md"],
    summary: "broken link",
    why: "w",
    change: "c",
  };
  const { record } = composeRecord({
    round: 3,
    prev: null,
    plan: null,
    findings: { fixes: [fix], proposals: [], paper: [], overflow: [] },
    fixReports: {
      "r3:link-1": {
        id: "r3:link-1",
        status: "applied",
        retry: true,
        reason: "not committed",
        commit: "",
      },
    },
  });
  assert.equal(record.items.length, 1);
  assert.equal(record.items[0].section, "proposals");
  assert.equal(record.applied[0].status, "failed");
  assert.match(
    record.items[0].blocks.find(
      (b: { label?: string }) => b.label === "Why Claude did not apply it",
    ).text,
    /did not finish/,
  );
});
