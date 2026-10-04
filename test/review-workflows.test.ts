// Runs the two saved review workflows (.claude/workflows/review-*.js) against
// a mock Workflow runtime: the meta block is a pure literal, the scripts use
// no forbidden calls, and their control flow (retries, restores, halts,
// verdicts, the consolidator fallback) does what the runbook says.
import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const FILES = ["review-apply.js", "review-audit.js"].map((f) =>
  path.join(ROOT, ".claude", "workflows", f),
);
type Opts = {
  label: string;
  phase?: string;
  schema?: unknown;
  effort?: string;
};
type AgentFn = (prompt: string, opts: Opts) => unknown;
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

function load(file: string) {
  const src = fs.readFileSync(file, "utf8");
  return new AsyncFunction(
    "agent",
    "parallel",
    "pipeline",
    "phase",
    "log",
    "args",
    "budget",
    "workflow",
    src.replace(/^export const meta =/m, "const meta ="),
  );
}

async function run(file: string, args: unknown, agentImpl: AgentFn) {
  const calls: { prompt: string; label: string }[] = [];
  const logs: string[] = [];
  const agent = async (prompt: string, opts: Opts) => {
    calls.push({ prompt, label: opts.label });
    return agentImpl(prompt, opts);
  };
  const parallel = (thunks: (() => Promise<unknown>)[]) =>
    Promise.all(thunks.map((t) => t().catch(() => null)));
  const pipeline = (
    items: unknown[],
    ...stages: ((p: unknown, i: unknown, k: number) => unknown)[]
  ) =>
    Promise.all(
      items.map(async (item, k) => {
        let prev: unknown = item;
        try {
          for (const s of stages) prev = await s(prev, item, k);
          return prev;
        } catch {
          return null;
        }
      }),
    );
  const budget = { total: null, spent: () => 0, remaining: () => Infinity };
  const result = await load(file)(
    agent,
    parallel,
    pipeline,
    () => {},
    (m: string) => logs.push(m),
    args,
    budget,
    async () => {
      throw new Error("no nested workflows");
    },
  );
  return { result, calls, logs };
}

test("both workflows exist, start with a pure-literal meta and avoid forbidden calls", () => {
  for (const f of FILES) {
    const src = fs.readFileSync(f, "utf8");
    assert.match(src, /^export const meta = \{/);
    const end = src.indexOf("\n};\n");
    const literal = src.slice("export const meta = ".length, end + 2);
    assert.ok(
      !/[`]|\$\{|\.\.\./.test(literal),
      `${f}: meta has interpolation or spread`,
    );
    // no identifiers in scope: a pure literal evaluates on its own
    const meta = new Function(`"use strict"; return (${literal});`)();
    assert.equal(typeof meta.name, "string");
    assert.equal(typeof meta.description, "string");
    assert.equal(meta.name, path.basename(f, ".js"));
    // phase() titles used in the body all appear in meta.phases
    const titles = new Set(meta.phases.map((p: { title: string }) => p.title));
    for (const m of src.matchAll(/phase\("([^"]+)"\)/g))
      assert.ok(titles.has(m[1]), m[1]);
    for (const m of src.matchAll(/phase: "([^"]+)"/g))
      assert.ok(titles.has(m[1]), m[1]);
    assert.ok(
      !/Date\.now|Math\.random|new Date\(\)/.test(src),
      `${f}: forbidden call`,
    );
    assert.ok(
      !/\b(let|const|var)\s+(agent|parallel|pipeline|phase|log|args|budget|workflow)\b/.test(
        src,
      ),
    );
  }
});

const SUM = (group: string, extra = {}) => ({
  group,
  applied: 1,
  skipped: 0,
  lint_clean: true,
  notes: [],
  commit: "",
  ...extra,
});
const APPLY = FILES[0];
const AUDIT = FILES[1];
const groups = [
  { group: "T1", mode: "tooling", items: 1 },
  { group: "C1", mode: "parallel", items: 2 },
  { group: "C2", mode: "parallel", items: 1 },
  { group: "S1", mode: "sweep", items: 1 },
];
const applyArgs = {
  repo: "/r",
  round: 3,
  step: "apply",
  groups,
  paper_reachable: false,
  trailer: "T: x",
};

test("review-apply: groups run in order and every verifier reports", async () => {
  const { result, calls } = await run(APPLY, applyArgs, (_prompt, o) => {
    if (o.label === "base") return { head: "h".repeat(40), dirty: [] };
    if (o.label === "coordinate") return SUM("coordinate", { commit: "c1" });
    const g = o.label.split(":")[1];
    const alone = g === "T1" || g === "S1";
    return SUM(
      g,
      o.label.startsWith("verify") && alone ? { commit: `k-${g}` } : {},
    );
  });
  const labels = calls.map((c) => c.label);
  assert.deepEqual(labels.slice(0, 3), ["exec:T1", "verify:T1", "base"]);
  assert.ok(labels.indexOf("coordinate") > labels.indexOf("verify:C1"));
  assert.ok(labels.indexOf("coordinate") > labels.indexOf("verify:C2"));
  assert.ok(labels.indexOf("exec:S1") > labels.indexOf("coordinate"));
  assert.equal(result.halted, false);
  assert.deepEqual(
    result.groups.map((g: { group: string; status: string }) => [
      g.group,
      g.status,
    ]),
    [
      ["T1", "verified"],
      ["C1", "verified"],
      ["C2", "verified"],
      ["S1", "verified"],
    ],
  );
  assert.equal(result.coordinate.commit, "c1");
  const v = calls.find((c) => c.label === "verify:C1")!.prompt;
  assert.match(v, /BASE commit: h{40}/);
  assert.match(v, /do not commit/);
  assert.match(
    calls.find((c) => c.label === "verify:T1")!.prompt,
    /review round 3: T1, /,
  );
  assert.match(calls.find((c) => c.label === "verify:T1")!.prompt, /T: x/);
  assert.match(
    calls.find((c) => c.label === "exec:C1")!.prompt,
    /\/r\/\.review\/work\/round-3\/apply\/C1\.json/,
  );
});

test("review-apply: retries, a missing executor report, a restore, and a halt", async () => {
  let t1 = 0;
  const { result, calls } = await run(APPLY, applyArgs, (_prompt, o) => {
    if (o.label === "exec:T1" && t1++ === 0) throw new Error("transient");
    if (o.label === "verify:T1") return SUM("T1", { applied: 1, commit: "" }); // did not commit
    if (o.label === "restore:T1") return SUM("T1", { applied: 0 });
    if (o.label === "exec:C1") return null; // executor dies twice
    if (o.label === "base") return { head: "h", dirty: [] };
    if (o.label === "coordinate") return null; // coordinator fails twice: halt
    return SUM(o.label.split(":")[1]);
  });
  const labels = calls.map((c) => c.label);
  assert.equal(
    labels.filter((l) => l === "exec:T1").length,
    2,
    "exec:T1 retried",
  );
  assert.ok(labels.includes("restore:T1"));
  assert.equal(labels.filter((l) => l === "exec:C1").length, 2);
  assert.match(calls.find((c) => c.label === "verify:C1")!.prompt, /MISSING/);
  assert.equal(labels.filter((l) => l === "coordinate").length, 2);
  assert.ok(
    !labels.includes("exec:S1"),
    "sweeps not run after a failed coordinator",
  );
  assert.equal(result.halted, true);
  assert.deepEqual(result.not_run, ["S1"]);
  const st = Object.fromEntries(
    result.groups.map((g: { group: string; status: string }) => [
      g.group,
      g.status,
    ]),
  );
  assert.equal(st.T1, "uncommitted");
});

test("review-apply: a group with nothing to commit counts as verified", async () => {
  const { result, calls } = await run(
    APPLY,
    { ...applyArgs, groups: [{ group: "T1", mode: "tooling", items: 1 }] },
    (_prompt, _o) => SUM("T1", { applied: 0 }),
  );
  assert.equal(result.groups[0].status, "verified");
  assert.ok(!calls.some((c) => c.label.startsWith("restore")));
});

test("review-apply: bad args are refused", async () => {
  await assert.rejects(
    run(APPLY, { repo: "/r" }, () => null),
    /needs args/,
  );
});

const finding = (summary: string) => ({
  page: "content/Reductions/x.md",
  pages: ["content/Reductions/x.md"],
  edge: "x",
  kind: "math",
  severity: "high",
  confidence: "high",
  mechanical: summary === "mech",
  needs_paper: false,
  summary,
  why: "w",
  change: "c",
});
const auditArgs = {
  repo: "/r",
  round: 3,
  paper_reachable: false,
  batches: [
    { batch: "b01", pages: ["content/a.md"] },
    { batch: "b02", pages: ["content/b.md"] },
  ],
};

test("review-audit: two verdicts per finding decide what is kept", async () => {
  // b01: keep (both confirm), low (confirm + unsure), refuted, mech judged not mechanical
  const verdict: Record<string, Record<string, unknown>> = {
    "b01:1:claim": { verdict: "confirm", confidence: "medium", note: "real" },
    "b01:1:change": {
      verdict: "confirm",
      confidence: "high",
      note: "ok",
      corrected_change: "better",
    },
    "b01:2:claim": { verdict: "confirm", confidence: "high", note: "real" },
    "b01:2:change": {
      verdict: "unsure",
      confidence: "low",
      note: "needs paper",
    },
    "b01:3:claim": { verdict: "refute", confidence: "high", note: "misread" },
    "b01:3:change": { verdict: "confirm", confidence: "high", note: "ok" },
    "b01:4:claim": {
      verdict: "confirm",
      confidence: "high",
      note: "real",
      mechanical_ok: true,
    },
    "b01:4:change": {
      verdict: "confirm",
      confidence: "high",
      note: "ok",
      mechanical_ok: false,
    },
  };
  let consPrompt = "";
  const { result, calls } = await run(AUDIT, auditArgs, (prompt, o) => {
    if (o.label === "audit:b01")
      return {
        batch: "b01",
        pages_read: 1,
        findings: [
          finding("keep"),
          finding("low"),
          finding("gone"),
          finding("mech"),
        ],
      };
    if (o.label === "audit:b02") return null; // fails twice
    if (o.label.startsWith("verify:"))
      return verdict[o.label.slice("verify:".length)];
    if (o.label === "consolidate") {
      consPrompt = prompt;
      return {
        findings: 3,
        dropped: 0,
        file: "/r/.review/work/round-3/audit/consolidated.json",
      };
    }
    return null;
  });
  assert.equal(calls.filter((c) => c.label.startsWith("verify:")).length, 8);
  assert.equal(calls.filter((c) => c.label === "audit:b02").length, 2);
  assert.equal(result.kept, 3);
  assert.deepEqual(
    result.dropped_by_verifiers.map((d: { key: string }) => d.key),
    ["b01:3"],
  );
  assert.deepEqual(result.failed_batches, [
    { batch: "b02", pages: ["content/b.md"] },
  ]);
  assert.equal(result.consolidated, true);
  const kept = JSON.parse(
    consPrompt
      .split("Findings that survived verification (3):\n")[1]
      .split("\n\n")[0],
  );
  const by = Object.fromEntries(
    kept.map((f: { summary: string }) => [f.summary, f]),
  );
  assert.equal(by.keep.confidence, "medium");
  assert.deepEqual(by.keep.corrected_changes, ["better"]);
  assert.equal(by.low.confidence, "low");
  assert.equal(by.mech.mechanical, false);
  assert.equal(by.keep.verifier_notes.length, 2);
  assert.match(
    calls.find((c) => c.label === "audit:b01")!.prompt,
    /known\.json/,
  );
  assert.match(
    calls.find((c) => c.label === "verify:b01:1:claim")!.prompt,
    /CLAIM lens/,
  );
});

test("review-audit: a failed consolidator falls back to writing the findings as they are", async () => {
  const { result, calls } = await run(
    AUDIT,
    { ...auditArgs, batches: [auditArgs.batches[0]] },
    (_prompt, o) => {
      if (o.label === "audit:b01")
        return { batch: "b01", pages_read: 1, findings: [finding("keep")] };
      if (o.label.startsWith("verify:"))
        return { verdict: "confirm", confidence: "high", note: "ok" };
      if (o.label === "consolidate") return null;
      if (o.label === "consolidate:fallback")
        return { findings: 1, dropped: 0, file: "f" };
      return null;
    },
  );
  assert.equal(calls.filter((c) => c.label === "consolidate").length, 2);
  assert.equal(result.consolidated, false);
  assert.equal(result.file, "/r/.review/work/round-3/audit/consolidated.json");
  assert.deepEqual(result.findings_if_unwritten, []);
});

test("review-audit: a finding no verifier could judge is passed on unverified, not dropped", async () => {
  let consPrompt = "";
  const { result } = await run(
    AUDIT,
    { ...auditArgs, batches: [auditArgs.batches[0]] },
    (prompt, o) => {
      if (o.label === "audit:b01")
        return {
          batch: "b01",
          pages_read: 1,
          findings: [finding("judged"), finding("orphan")],
        };
      if (o.label.startsWith("verify:b01:2:")) return null; // both agents die
      if (o.label.startsWith("verify:"))
        return { verdict: "confirm", confidence: "high", note: "ok" };
      if (o.label === "consolidate") {
        consPrompt = prompt;
        return { findings: 1, dropped: 0, file: "f" };
      }
      return null;
    },
  );
  assert.equal(result.kept, 1);
  assert.equal(result.unverified, 1);
  assert.deepEqual(result.dropped_by_verifiers, []);
  const unverified = JSON.parse(
    consPrompt
      .split('do not include them in "findings":\n')[1]
      .split("\n\n")[0],
  );
  assert.deepEqual(
    unverified.map((f: { summary: string }) => f.summary),
    ["orphan"],
  );
});

test("review-audit: with no consolidator at all, the result carries the findings and the unverified ones", async () => {
  const { result } = await run(
    AUDIT,
    { ...auditArgs, batches: [auditArgs.batches[0]] },
    (_prompt, o) => {
      if (o.label === "audit:b01")
        return { batch: "b01", pages_read: 1, findings: [finding("keep")] };
      if (o.label.startsWith("verify:"))
        return { verdict: "confirm", confidence: "high", note: "ok" };
      return null; // consolidator and its fallback fail
    },
  );
  assert.equal(result.file, "");
  assert.equal(result.findings_if_unwritten.length, 1);
  assert.deepEqual(result.unverified_if_unwritten, []);
});

const inboxArgs = {
  ...auditArgs,
  batches: [auditArgs.batches[0]],
  inbox: {
    dir: "/r/.review/work/round-3/inbox",
    verify: [
      { id: "ffr:keep", confidence: "high" },
      { id: "ffr:gone", confidence: "high" },
      { id: "ffr:low", confidence: "medium" },
    ],
    paper: ["ffr:paper"],
  },
};

test("review-audit: inbox findings take the two verifiers without an auditor; paper checks skip them", async () => {
  const verdict: Record<string, Record<string, unknown>> = {
    "inbox:ffr:keep:claim": {
      verdict: "confirm",
      confidence: "high",
      note: "real",
    },
    "inbox:ffr:keep:change": {
      verdict: "confirm",
      confidence: "high",
      note: "ok",
      corrected_change: "better",
    },
    "inbox:ffr:gone:claim": {
      verdict: "refute",
      confidence: "high",
      note: "fixed since",
    },
    "inbox:ffr:gone:change": {
      verdict: "confirm",
      confidence: "high",
      note: "ok",
    },
    "inbox:ffr:low:claim": {
      verdict: "confirm",
      confidence: "high",
      note: "real",
    },
    "inbox:ffr:low:change": {
      verdict: "unsure",
      confidence: "low",
      note: "paper",
    },
  };
  let consPrompt = "";
  const { result, calls } = await run(AUDIT, inboxArgs, (prompt, o) => {
    if (o.label === "audit:b01")
      return { batch: "b01", pages_read: 1, findings: [finding("keep")] };
    if (o.label.startsWith("verify:inbox:"))
      return verdict[o.label.slice("verify:".length)];
    if (o.label.startsWith("verify:"))
      return { verdict: "confirm", confidence: "high", note: "ok" };
    if (o.label === "consolidate") {
      consPrompt = prompt;
      return { findings: 3, dropped: 1, file: "f" };
    }
    return null;
  });
  // one auditor (the inbox has none), two verifiers per finding, no paper verifier
  assert.deepEqual(
    calls.filter((c) => c.label.startsWith("audit:")).map((c) => c.label),
    ["audit:b01"],
  );
  assert.equal(calls.filter((c) => c.label.startsWith("verify:")).length, 8);
  assert.ok(
    !calls.some(
      (c) => c.label.includes("ffr:paper") && c.label.startsWith("verify:"),
    ),
  );
  const v = calls.find(
    (c) => c.label === "verify:inbox:ffr:keep:claim",
  )!.prompt;
  assert.match(v, /The finding \(inbox:ffr:keep\)/);
  assert.match(v, /\/r\/\.review\/work\/round-3\/inbox\/ffr:keep\.json/);
  assert.match(v, /§ Inbox findings of audit-verify\.md/);
  assert.match(v, /CLAIM lens/);
  // the same keep/drop rule as audit findings
  const kept = JSON.parse(
    consPrompt
      .split("Findings that survived verification (3):\n")[1]
      .split("\n\n")[0],
  );
  const by = Object.fromEntries(kept.map((f: { key: string }) => [f.key, f]));
  assert.deepEqual(Object.keys(by).sort(), [
    "b01:1",
    "inbox:ffr:keep",
    "inbox:ffr:low",
  ]);
  assert.equal(by["inbox:ffr:keep"].inbox, "ffr:keep");
  assert.equal(
    by["inbox:ffr:keep"].file,
    "/r/.review/work/round-3/inbox/ffr:keep.json",
  );
  assert.deepEqual(by["inbox:ffr:keep"].corrected_changes, ["better"]);
  assert.equal(by["inbox:ffr:keep"].confidence, "high");
  assert.equal(by["inbox:ffr:low"].confidence, "low");
  assert.equal(
    by["inbox:ffr:low"].summary,
    undefined,
    "the item's text stays in its file",
  );
  const paper = JSON.parse(
    consPrompt
      .split('write the rest into "paper_unverified" as given:\n')[1]
      .split("\n\n")[0],
  );
  assert.deepEqual(paper, [
    {
      inbox: "ffr:paper",
      file: "/r/.review/work/round-3/inbox/ffr:paper.json",
      sources: ["inbox:ffr:paper"],
    },
  ]);
  const dropped = JSON.parse(
    consPrompt
      .split('copy them verbatim into "dropped":\n')[1]
      .split("\n\n")[0],
  );
  assert.equal(dropped.length, 1);
  assert.equal(dropped[0].source, "inbox:ffr:gone");
  assert.match(
    dropped[0].reason,
    /^refuted or not confirmed by the verifiers: .*fixed since/,
  );
  assert.deepEqual(result.inbox, {
    verified: 3,
    kept: 2,
    dropped: 1,
    unverified: 0,
    paper_unverified: 1,
  });
  assert.deepEqual(result.failed_batches, []);
  assert.deepEqual(
    result.dropped_by_verifiers.map((d: { key: string }) => d.key),
    ["inbox:ffr:gone"],
  );
});

test("review-audit: without a consolidator, the inbox's dropped items and paper checks are in the result", async () => {
  let fallback = "";
  const { result } = await run(
    AUDIT,
    { ...inboxArgs, batches: [] },
    (prompt, o) => {
      if (o.label.startsWith("verify:"))
        return { verdict: "refute", confidence: "high", note: "no" };
      if (o.label === "consolidate:fallback") fallback = prompt;
      return null;
    },
  );
  assert.match(fallback, /"paper_unverified": <the paper list below>/);
  assert.match(fallback, /dropped 3\)/);
  assert.equal(result.file, "");
  assert.equal(result.dropped_if_unwritten.length, 3);
  assert.deepEqual(
    result.paper_unverified_if_unwritten.map((p: { inbox: string }) => p.inbox),
    ["ffr:paper"],
  );
});

test("review-audit: bad inbox args are refused, and no inbox leaves the prompts as they were", async () => {
  await assert.rejects(
    run(
      AUDIT,
      { ...auditArgs, inbox: { dir: "/d", verify: "x", paper: [] } },
      () => null,
    ),
    /args\.inbox must be/,
  );
  await assert.rejects(
    run(
      AUDIT,
      { ...auditArgs, inbox: { dir: "/d", verify: [{}], paper: [] } },
      () => null,
    ),
    /args\.inbox must be/,
  );
  let consPrompt = "";
  const { result } = await run(
    AUDIT,
    { ...auditArgs, batches: [auditArgs.batches[0]] },
    (prompt, o) => {
      if (o.label === "audit:b01")
        return { batch: "b01", pages_read: 1, findings: [finding("keep")] };
      if (o.label.startsWith("verify:"))
        return { verdict: "confirm", confidence: "high", note: "ok" };
      if (o.label === "consolidate") {
        consPrompt = prompt;
        return { findings: 1, dropped: 0, file: "f" };
      }
      return null;
    },
  );
  assert.equal(result.inbox, null);
  assert.ok(!/inbox/.test(consPrompt));
});

test("review-audit: the verification limit leaves room in the 1000-agent cap", () => {
  const src = fs.readFileSync(AUDIT, "utf8");
  const m = /const VERIFY_LIMIT = ([\s\S]*?);\n/.exec(src);
  assert.ok(m);
  for (const batches of [1, 19, 53, 150]) {
    const limit = new Function("A", `return ${m![1]};`)({
      batches: { length: batches },
    });
    // auditors twice, two verifiers per finding plus a tenth retried, consolidator and fallback twice
    const worst = 2 * batches + 2 * limit * 1.1 + 4;
    assert.ok(limit > 0 && worst <= 1000, `${batches} batches: ${limit}`);
  }
});

test("review-apply: the verifier of a group that runs alone is told what blocks a commit", async () => {
  const { calls } = await run(
    APPLY,
    { ...applyArgs, groups: [{ group: "T1", mode: "tooling", items: 1 }] },
    (_prompt, o) => SUM(o.label.split(":")[1], { commit: "k" }),
  );
  const v = calls.find((c) => c.label === "verify:T1")!.prompt;
  assert.match(v, /§ Checks/);
  assert.match(v, /nothing is left to commit/);
  assert.match(v, /':!\.review'/);
});
