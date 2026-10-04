// The review inbox (.review/inbox/): findings raised outside the pipeline
// that a round verifies and proposes. Covers the file format, what the inbox
// step offers, how the consolidated findings are expanded and counted toward
// the cap, the cards, and the record step moving consumed files to done/.
import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  checkInboxFile,
  checkInboxItem,
  normalizeInboxItem,
  planInbox,
  expandInbox,
  inboxOutcomes,
  inboxRecord,
  inboxCarry,
  inboxMoveTarget,
  selectFindings,
  findingCard,
  knownItems,
  main,
  // @ts-ignore — plain ESM helper, scripts/review/round.mjs
} from "../scripts/review/round.mjs";
// @ts-ignore — plain ESM helper, scripts/review/build-page.mjs
import { summarizeOutcome } from "../scripts/review/build-page.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
type Obj = Record<string, any>;

// an item in the shape of the final-form rewrite's inbox file
const item = (id: string, extra: Obj = {}): Obj => ({
  id,
  kind: "content-error",
  confidence: "high",
  needs_paper: false,
  summary: `summary of ${id}`,
  pages: [`content/Reductions/${id.replace(/[^a-z0-9]+/g, "-")}.md`],
  proposed_action: `do ${id}`,
  rationale: `because ${id}`,
  origin: "final-form rewrite, b00–b11",
  merged_from: ["cons-1#0"],
  related: [],
  ...extra,
});
const file = (source: string, items: Obj[]) => ({ source, items });

test("inbox files: the item shape is checked field by field", () => {
  assert.deepEqual(checkInboxFile(file("s", [item("ffr:a")])), []);
  assert.deepEqual(checkInboxFile(file("s", [])), []);
  assert.deepEqual(checkInboxFile([]), [
    'not a JSON object {"source", "items"}',
  ]);
  const errs = checkInboxFile({
    source: "",
    extra: 1,
    items: [item("ffr:a"), item("ffr:a")],
  });
  assert.ok(errs.includes("source must be a non-empty string"));
  assert.ok(errs.includes('unknown top-level field "extra"'));
  assert.ok(errs.includes("ffr:a: duplicate id"));
  const bad = (extra: Obj) => checkInboxItem(item("ffr:b", extra));
  assert.match(bad({ id: "no-prefix" }).join(), /id must look like/);
  assert.match(bad({ id: "r3:math-1" }).join(), /reserved for audit findings/);
  assert.match(
    bad({ "needs-paper": true }).join(),
    /unknown field "needs-paper"/,
  );
  assert.match(bad({ pages: [] }).join(), /pages must be/);
  assert.match(bad({ pages: ["../x.md"] }).join(), /pages must be/);
  assert.match(bad({ pages: ["/abs.md"] }).join(), /pages must be/);
  assert.match(bad({ proposed_action: " " }).join(), /proposed_action/);
  assert.match(bad({ confidence: "sure" }).join(), /confidence must be/);
  assert.match(bad({ needs_paper: "yes" }).join(), /needs_paper/);
  assert.match(bad({ related: "ffr:a" }).join(), /related must be/);
  assert.deepEqual(bad({ severity: "low", check: "c", evidence: "e" }), []);
});

test("every inbox file in the repository is valid", () => {
  const dirs = [".review/inbox", ".review/inbox/done"].map((d) =>
    path.join(ROOT, d),
  );
  let n = 0;
  for (const dir of dirs.filter((d) => fs.existsSync(d)))
    for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".json"))) {
      const data = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
      assert.deepEqual(checkInboxFile(data), [], f);
      n++;
    }
  assert.ok(n >= 1, "the final-form rewrite's inbox file is in place");
});

test("an inbox item becomes a finding in the auditor's shape, keeping its id", () => {
  const f = normalizeInboxItem(
    item("ffr:verification-gap-3", {
      kind: "verification-gap",
      needs_paper: true,
      pages: ["content/A.md", "content/B.md", "content/A.md"],
    }),
    { file: "x.json", source: "final-form rewrite 2026-10-04" },
  );
  assert.equal(f.id, "ffr:verification-gap-3");
  assert.equal(f.key, "inbox:ffr:verification-gap-3");
  assert.deepEqual(f.pages, ["content/A.md", "content/B.md"]);
  assert.equal(f.page, "content/A.md");
  assert.deepEqual(
    [f.kind, f.severity, f.mechanical, f.needs_paper],
    ["cite", "medium", false, true],
  );
  assert.equal(f.change, "do ffr:verification-gap-3");
  assert.equal(f.why, "because ffr:verification-gap-3");
  assert.equal(f.inbox.kind, "verification-gap");
  assert.equal(f.inbox.source, "final-form rewrite 2026-10-04");
  const own = normalizeInboxItem(
    item("m:1", { kind: "math", severity: "low" }),
    {
      file: "y.json",
      source: "maintainer",
    },
  );
  assert.deepEqual([own.kind, own.severity], ["math", "low"]);
  const odd = normalizeInboxItem(item("m:2", { kind: "whatever" }), {
    file: "y.json",
    source: "maintainer",
  });
  assert.deepEqual([odd.kind, odd.severity], ["other", "medium"]);
});

test("the inbox step: paper checks skip the verifiers only while the hosts are unreachable", () => {
  const records = [
    {
      round: 2,
      items: [{ id: "ffr:shown-before", section: "proposals" }],
      overflow: [
        // an inbox finding over the cap last round comes back under its id
        {
          ...normalizeInboxItem(item("old:1"), { file: "o.json", source: "o" }),
          verifier_notes: ["Claim lens (confirm): ok"],
          sources: ["inbox:old:1"],
        },
        // an audit finding over the cap goes to the consolidator instead
        { summary: "audit overflow", page: "content/z.md" },
      ],
      inbox: {
        items: [
          { id: "ffr:refuted-before", outcome: "dropped" },
          { id: "ffr:pending", outcome: "unaccounted" },
        ],
      },
    },
  ];
  const files = [
    {
      file: "a.json",
      data: file("final-form rewrite", [
        item("ffr:1"),
        item("ffr:2", { needs_paper: true }),
        item("ffr:shown-before"),
        item("ffr:refuted-before"),
        item("ffr:pending"),
      ]),
    },
    { file: "b.json", data: file("bot", [item("ffr:1")]) },
    { file: "c.json", error: "not valid JSON: x" },
    { file: "d.json", data: file("bot", [item("bot:1", { pages: [] })]) },
  ];
  const off = planInbox({
    files,
    records,
    prev: records[0],
    paperReachable: false,
  });
  assert.deepEqual(
    off.verify.map((f: Obj) => f.id),
    ["ffr:1", "ffr:pending", "old:1"],
  );
  assert.deepEqual(
    off.paper.map((f: Obj) => f.id),
    ["ffr:2"],
  );
  assert.deepEqual(
    off.skipped.map((s: Obj) => [s.id, s.reason]),
    [
      ["ffr:shown-before", "already offered in round 2"],
      ["ffr:refuted-before", "already offered in round 2"],
    ],
  );
  assert.deepEqual(
    off.invalid.map((f: Obj) => f.file),
    ["b.json", "c.json", "d.json"],
  );
  assert.match(
    off.invalid[0].errors[0],
    /ffr:1: also in an earlier inbox file/,
  );
  const back = off.verify.find((f: Obj) => f.id === "old:1");
  assert.equal(back.from_overflow, true);
  assert.equal(back.verifier_notes, undefined, "re-verified from scratch");
  assert.deepEqual(
    off.files.map((f: Obj) => [f.file, f.ids.length, f.offered]),
    [
      ["a.json", 5, 3],
      [null, 1, 1],
    ],
  );
  const reach = planInbox({
    files: files.slice(0, 1),
    records,
    prev: records[0],
    paperReachable: true,
  });
  assert.equal(reach.paper.length, 0);
  assert.ok(reach.verify.some((f: Obj) => f.id === "ffr:2"));
});

// the inbox work file for three items: two verified, one paper check
function work(): Obj {
  const n = (it: Obj) =>
    normalizeInboxItem(it, { file: "a.json", source: "s" });
  return {
    files: [{ file: "a.json", source: "s", ids: ["i:1", "i:2", "i:3", "i:4"] }],
    invalid: [],
    skipped: [],
    verify: [
      n(item("i:1")),
      n(item("i:2", { kind: "stub" })),
      n(item("i:4", { kind: "title-or-slug" })),
    ],
    paper: [n(item("i:3", { kind: "verification-gap", needs_paper: true }))],
  };
}

test("consolidated inbox entries are filled from the item, keep their id and count toward the cap", () => {
  const inbox = work();
  const audit = (summary: string, severity: string, extra: Obj = {}) => ({
    kind: "math",
    severity,
    confidence: "high",
    page: `content/Reductions/${summary}.md`,
    summary,
    why: "w",
    change: "c",
    sources: [`b01:${summary}`],
    ...extra,
  });
  const cons = {
    findings: [
      // the consolidator writes an inbox finding compactly
      {
        inbox: "i:1",
        confidence: "medium",
        verifier_notes: ["Claim lens (confirm): real", "Change lens (confirm)"],
        corrected_changes: ["do i:1, better"],
        sources: ["inbox:i:1", "b01:dup"],
      },
      audit("top", "high"),
      audit("low-audit", "low"),
      // an audit finding that absorbed an inbox finding
      audit("absorbs", "medium", { sources: ["b02:1", "inbox:i:4"] }),
      // the same inbox item twice: the first entry stands
      { inbox: "i:1", confidence: "low", sources: ["inbox:i:1"] },
    ],
    dropped: [
      {
        source: "inbox:i:2",
        reason: "refuted or not confirmed by the verifiers: misread",
      },
      { source: "b01:9", reason: "duplicates fu2:x" },
    ],
    unverified: [],
    paper_unverified: [{ inbox: "i:3", sources: ["inbox:i:3"] }],
  };
  const ex = expandInbox(cons, inbox);
  assert.equal(ex.findings.length, 4);
  const one = ex.findings.find((f: Obj) => f.inbox && f.id === "i:1");
  assert.equal(one.summary, "summary of i:1");
  assert.equal(one.change, "do i:1, better", "a verifier's correction wins");
  assert.equal(one.confidence, "medium");
  assert.equal(one.page, "content/Reductions/i-1.md");
  assert.deepEqual(
    ex.paper.map((f: Obj) => [f.id, f.unverified, f.needs_paper]),
    [["i:3", true, true]],
  );
  // cap 3: severity, then confidence, verified before unverified
  const sel = selectFindings([...ex.findings, ...ex.paper], {
    round: 3,
    cap: 3,
    existingIds: [],
  });
  const shown = [...sel.proposals, ...sel.paper].map((f: Obj) => f.id);
  assert.deepEqual(shown.sort(), ["i:1", "r3:math-1", "r3:math-2"].sort());
  assert.deepEqual(
    sel.overflow.map((f: Obj) => f.id || f.summary),
    ["i:3", "low-audit"],
  );
  const out = Object.fromEntries(
    inboxOutcomes(sel, ex).map((o: Obj) => [o.id, o]),
  );
  assert.deepEqual(out["i:1"], {
    id: "i:1",
    outcome: "shown",
    section: "proposals",
  });
  assert.equal(out["i:2"].outcome, "dropped");
  assert.match(out["i:2"].reason, /misread/);
  assert.deepEqual(out["i:3"], {
    id: "i:3",
    outcome: "overflow",
    unverified: true,
  });
  assert.equal(out["i:4"].outcome, "merged");
  assert.match(out["i:4"].into, /^r3:math-\d$/);
  // an inbox id already on a record is never renumbered
  assert.throws(
    () => selectFindings(ex.findings, { round: 3, existingIds: ["i:1"] }),
    /already has a card/,
  );
});

test("an inbox item the audit did not report on stays in the inbox", () => {
  const inbox = work();
  const ex = expandInbox({ findings: [], dropped: [] }, inbox);
  const sel = selectFindings([], { round: 3 });
  const outcomes = inboxOutcomes(sel, ex);
  assert.ok(outcomes.every((o: Obj) => o.outcome === "unaccounted"));
  const rec = inboxRecord(inbox, outcomes);
  assert.deepEqual(rec.files, [
    {
      file: "a.json",
      source: "s",
      items: 4,
      consumed: false,
      open: ["i:1", "i:2", "i:3", "i:4"],
    },
  ]);
  const done = inboxRecord(
    inbox,
    ["i:1", "i:2", "i:3", "i:4"].map((id) => ({ id, outcome: "dropped" })),
  );
  assert.equal(done.files[0].consumed, true);
});

test("inbox cards say where they came from; unverified paper checks are marked", () => {
  const inbox = work();
  const [f] = selectFindings(
    expandInbox({ paper_unverified: [{ inbox: "i:3" }] }, inbox).paper,
    { round: 3 },
  ).paper;
  const card = findingCard(f, { round: 3 });
  assert.equal(card.id, "i:3");
  assert.equal(card.section, "paper");
  const chips = card.chips.map((c: Obj) => c.text);
  assert.deepEqual(chips.slice(0, 2), ["needs the paper", "verification-gap"]);
  assert.ok(chips.includes("not verified"));
  assert.ok(chips.includes("from the inbox"));
  assert.equal(card.blocks[0].label, "Not verified");
  assert.match(card.blocks[0].text, /paper hosts were unreachable in round 3/);
  const raised = card.blocks.find((b: Obj) => b.title === "Raised by");
  assert.match(
    raised.text,
    /^s \(final-form rewrite, b00–b11\), through the review inbox/,
  );
  const exact = card.blocks.find(
    (b: Obj) => b.title === "Exact change Claude will make",
  );
  assert.equal(exact.text, "do i:3");
  const verified = findingCard(
    { ...inbox.verify[0], verifier_notes: ["ok"] },
    { round: 3 },
  );
  assert.equal(verified.section, "proposals");
  assert.ok(!verified.chips.some((c: Obj) => c.text === "not verified"));
  assert.equal(verified.chips[0].text, "content-error");
});

test("known items: inbox overflow comes back through the inbox step, and the auditors see this round's inbox", () => {
  const prev = {
    round: 2,
    items: [],
    overflow: [
      { summary: "audit" },
      { id: "i:9", summary: "inbox", inbox: { file: "a.json" } },
    ],
  };
  const known = knownItems([prev], { inbox: work() });
  assert.deepEqual(
    known.overflow.map((o: Obj) => o.summary),
    ["audit"],
  );
  assert.deepEqual(
    known.inbox.map((i: Obj) => i.id),
    ["i:1", "i:2", "i:4", "i:3"],
  );
  assert.deepEqual(knownItems([prev]).inbox, []);
});

test("the Rounds row counts inbox items dropped or not reported on", () => {
  const rec = {
    round: 3,
    items: [],
    applied: [],
    inbox: {
      items: [
        { id: "a:1", outcome: "dropped" },
        { id: "a:2", outcome: "dropped" },
        { id: "a:3", outcome: "unaccounted" },
        { id: "a:4", outcome: "shown" },
      ],
    },
  };
  assert.equal(
    summarizeOutcome(rec),
    "2 inbox items dropped (refuted, or duplicates), 1 inbox item not reported on (offered again next round)",
  );
});

test("inbox, known, findings and record run end to end; consumed files move to done/", async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "review-inbox-"));
  const R = path.join(root, ".review");
  const W = path.join(R, "work", "round-3");
  fs.mkdirSync(path.join(R, "rounds"), { recursive: true });
  fs.mkdirSync(path.join(R, "inbox", "done"), { recursive: true });
  fs.writeFileSync(
    path.join(R, "rounds", "2.json"),
    JSON.stringify({ schema: 1, round: 2, items: [], overflow: [] }),
  );
  fs.writeFileSync(
    path.join(R, "state.json"),
    JSON.stringify({
      artifact: "u",
      last_round: 2,
      rotation: { cursor: 0, slice: 2 },
    }),
  );
  const put = (name: string, data: unknown) =>
    fs.writeFileSync(
      path.join(R, "inbox", name),
      typeof data === "string" ? data : JSON.stringify(data),
    );
  // a: fully accounted for; b: invalid; c: one item the audit never reports
  put(
    "a.json",
    file("final-form rewrite", [
      item("ffr:1"),
      item("ffr:2", { kind: "verification-gap", needs_paper: true }),
      item("ffr:3", { kind: "stub" }),
    ]),
  );
  put("b.json", "{ not json");
  put("c.json", file("bot", [item("bot:1"), item("bot:2", { kind: "stub" })]));
  // an earlier file of the same name already sits in done/
  fs.writeFileSync(path.join(R, "inbox", "done", "a.json"), "{}");
  const log = console.log;
  const out: string[] = [];
  console.log = (s: string) => out.push(s);
  try {
    const opts = { root, today: "2026-11-03" };
    assert.equal(
      await main(["inbox", "--round", "3", "--paper", "unreachable"], opts),
      0,
    );
    const printed = JSON.parse(out[0]);
    assert.deepEqual(printed.inbox.verify, [
      { id: "ffr:1", confidence: "high" },
      { id: "ffr:3", confidence: "high" },
      { id: "bot:1", confidence: "high" },
      { id: "bot:2", confidence: "high" },
    ]);
    assert.deepEqual(printed.inbox.paper, ["ffr:2"]);
    assert.equal(printed.inbox.dir, path.join(W, "inbox"));
    assert.deepEqual(
      printed.invalid.map((f: Obj) => f.file),
      ["b.json"],
    );
    assert.match(out[1], /stay in \.review\/inbox\/ untouched: b\.json/);
    // one file per item, for the verifiers and the consolidator
    const one = JSON.parse(
      fs.readFileSync(path.join(W, "inbox", "ffr:1.json"), "utf8"),
    );
    assert.equal(one.key, "inbox:ffr:1");
    assert.equal(await main(["known", "--round", "3"], opts), 0);
    const known = JSON.parse(
      fs.readFileSync(path.join(W, "known.json"), "utf8"),
    );
    assert.equal(known.inbox.length, 5);
    // what review-audit's consolidator writes
    fs.mkdirSync(path.join(W, "audit"), { recursive: true });
    fs.writeFileSync(
      path.join(W, "audit", "consolidated.json"),
      JSON.stringify({
        findings: [
          {
            inbox: "ffr:1",
            confidence: "medium",
            verifier_notes: ["Claim lens (confirm): real"],
            sources: ["inbox:ffr:1"],
          },
          {
            kind: "math",
            severity: "low",
            confidence: "low",
            page: "content/Reductions/z.md",
            summary: "audit finding",
            why: "w",
            change: "c",
            sources: ["b01:1", "inbox:bot:1"],
          },
        ],
        dropped: [{ source: "inbox:ffr:3", reason: "refuted: misread" }],
        unverified: [],
        paper_unverified: [{ inbox: "ffr:2", sources: ["inbox:ffr:2"] }],
      }),
    );
    await assert.rejects(
      main(["inbox", "--round", "3", "--paper", "unreachable"], opts),
      /the audit already ran/,
    );
    out.length = 0;
    assert.equal(await main(["findings", "--round", "3"], opts), 0);
    const counts = JSON.parse(out[0]);
    assert.deepEqual(counts.inbox, {
      shown: 2,
      merged: 1,
      dropped: 1,
      unaccounted: 1,
    });
    // the files the record step will move or keep, for the PR body
    assert.deepEqual(counts.inbox_files, {
      consumed: ["a.json"],
      kept: ["c.json"],
      invalid: ["b.json"],
    });
    assert.match(out.join("\n"), /did not report on 1 inbox items/);
    const scope = path.join(root, "scope.json");
    fs.writeFileSync(
      scope,
      JSON.stringify({
        main: "m".repeat(40),
        pages: [],
        rotation: { cursor_after: 2, slice: 2 },
      }),
    );
    out.length = 0;
    assert.equal(
      await main(
        ["record", "--round", "3", "--scope", scope, "--paper", "unreachable"],
        opts,
      ),
      0,
    );
    const rec3 = JSON.parse(
      fs.readFileSync(path.join(R, "rounds", "3.json"), "utf8"),
    );
    const ids = rec3.items.map((i: Obj) => i.id);
    assert.ok(ids.includes("ffr:1") && ids.includes("ffr:2"), ids.join());
    assert.equal(
      rec3.items.find((i: Obj) => i.id === "ffr:2").section,
      "paper",
    );
    assert.ok(
      rec3.items
        .find((i: Obj) => i.id === "ffr:2")
        .chips.some((c: Obj) => c.text === "not verified"),
    );
    // a.json is consumed and moves (under a round suffix: done/a.json exists)
    assert.deepEqual(
      rec3.inbox.files.map((f: Obj) => [f.file, f.consumed, f.moved_to || ""]),
      [
        ["a.json", true, ".review/inbox/done/a.round-3.json"],
        ["c.json", false, ""],
      ],
    );
    assert.deepEqual(rec3.inbox.files[1].open, ["bot:2"]);
    assert.deepEqual(
      rec3.inbox.invalid.map((f: Obj) => f.file),
      ["b.json"],
    );
    assert.ok(!fs.existsSync(path.join(R, "inbox", "a.json")));
    assert.ok(fs.existsSync(path.join(R, "inbox", "done", "a.round-3.json")));
    assert.ok(fs.existsSync(path.join(R, "inbox", "b.json")));
    assert.ok(fs.existsSync(path.join(R, "inbox", "c.json")));
    assert.deepEqual(JSON.parse(out[0]).inbox, {
      moved: [".review/inbox/done/a.round-3.json"],
      kept: ["c.json"],
      invalid: ["b.json"],
      carried_in_overflow: 0,
    });
    // running record again moves nothing twice and names the same place
    out.length = 0;
    assert.equal(
      await main(
        ["record", "--round", "3", "--scope", scope, "--paper", "unreachable"],
        opts,
      ),
      0,
    );
    assert.deepEqual(JSON.parse(out[0]).inbox.moved, [
      ".review/inbox/done/a.round-3.json",
    ]);
    assert.equal(
      fs.readFileSync(path.join(R, "inbox", "done", "a.json"), "utf8"),
      "{}",
    );
    assert.deepEqual(fs.readdirSync(path.join(R, "inbox", "done")).sort(), [
      "a.json",
      "a.round-3.json",
    ]);
    // round 4 offers only what c.json still holds unsettled
    fs.rmSync(path.join(R, "inbox", "b.json"));
    out.length = 0;
    assert.equal(
      await main(["inbox", "--round", "4", "--paper", "reachable"], opts),
      0,
    );
    const next = JSON.parse(out[0]);
    assert.deepEqual(
      next.inbox.verify.map((v: Obj) => v.id),
      ["bot:2"],
    );
    assert.deepEqual(next.files, [
      { file: "c.json", source: "bot", offered: 1, items: 2 },
    ]);
    assert.equal(next.skipped, 1);
  } finally {
    console.log = log;
  }
});

test("at equal severity and confidence, a paper check no verifier judged ranks after a verified one", () => {
  const f = (summary: string, extra: Obj = {}) => ({
    kind: "cite",
    severity: "medium",
    confidence: "medium",
    needs_paper: true,
    page: "content/Reductions/a.md",
    summary,
    change: "c",
    ...extra,
  });
  const sel = selectFindings(
    [f("unverified", { unverified: true }), f("verified")],
    {
      round: 3,
      cap: 1,
    },
  );
  assert.deepEqual(
    sel.paper.map((x: Obj) => x.summary),
    ["verified"],
  );
  assert.deepEqual(
    sel.overflow.map((x: Obj) => x.summary),
    ["unverified"],
  );
});

test("a page the change creates is listed with ' (new)': its plain path is owned, and the card says so", () => {
  const f = normalizeInboxItem(
    item("ffr:missing-edge-1", {
      pages: [
        "content/Assumptions/planted-xor.md (new)",
        "content/Primitives/prc.md",
        "content/References/Wee24 - Circuit ABE with poly(depth, lambda)-Sized Ciphertexts.md",
      ],
    }),
    { file: "a.json", source: "s" },
  );
  assert.deepEqual(f.pages, [
    "content/Assumptions/planted-xor.md",
    "content/Primitives/prc.md",
    "content/References/Wee24 - Circuit ABE with poly(depth, lambda)-Sized Ciphertexts.md",
  ]);
  assert.deepEqual(f.new_pages, ["content/Assumptions/planted-xor.md"]);
  assert.equal(f.page, "content/Primitives/prc.md", "an existing page leads");
  const card = findingCard(f, { round: 3 });
  assert.match(card.url, /prc\.md$/);
  const list = card.blocks.find((b: Obj) =>
    /^Pages involved/.test(b.title || ""),
  ).text;
  assert.match(list, /^- `content\/Assumptions\/planted-xor\.md` \(new\)$/m);
  assert.match(list, /^- `content\/Primitives\/prc\.md`$/m);
  const plain = normalizeInboxItem(item("ffr:x"), {
    file: "a.json",
    source: "s",
  });
  assert.equal(plain.new_pages, undefined);
});

test("inbox findings carried over the cap that nobody reported on stay in the record's overflow", () => {
  const n = (it: Obj) =>
    normalizeInboxItem(it, { file: "a.json", source: "s" });
  const back = { ...n(item("o:1")), from_overflow: true };
  const shown = { ...n(item("o:2")), from_overflow: true };
  const fresh = n(item("f:1"));
  const w = {
    files: [{ file: "a.json", source: "s", ids: ["f:1"] }],
    verify: [back, shown, fresh],
    paper: [],
  };
  const carried = inboxCarry(w, [{ id: "o:2", outcome: "shown" }], null);
  assert.deepEqual(
    carried.map((f: Obj) => f.id),
    ["o:1"],
  );
  assert.equal(carried[0].key, undefined);
  assert.equal(carried[0].inbox.file, "a.json");
  const prev = {
    round: 2,
    overflow: [{ summary: "audit" }, { id: "o:3", inbox: { file: "z" } }],
  };
  assert.deepEqual(
    inboxCarry(null, [], prev).map((f: Obj) => f.id),
    ["o:3"],
    "with no inbox step, the previous round's inbox overflow is carried",
  );
  const rec = inboxRecord(w, []);
  assert.match(
    rec.items.find((i: Obj) => i.id === "o:1").reason,
    /carries it in its overflow/,
  );
  assert.match(
    rec.items.find((i: Obj) => i.id === "f:1").reason,
    /its inbox file stays/,
  );
});

test("inboxMoveTarget: a free name, a taken one, and one an earlier run already moved", () => {
  const R = fs.mkdtempSync(path.join(os.tmpdir(), "review-move-"));
  fs.mkdirSync(path.join(R, "inbox", "done"), { recursive: true });
  fs.writeFileSync(path.join(R, "inbox", "a.json"), "{}");
  fs.writeFileSync(path.join(R, "inbox", "b.json"), "{}");
  fs.writeFileSync(path.join(R, "inbox", "done", "b.json"), "{}");
  const a = inboxMoveTarget(R, "a.json", 3);
  assert.equal(a.rel, ".review/inbox/done/a.json");
  assert.equal(a.to, path.join(R, "inbox", "done", "a.json"));
  const b = inboxMoveTarget(R, "b.json", 3);
  assert.equal(b.rel, ".review/inbox/done/b.round-3.json");
  fs.renameSync(b.from, b.to);
  const again = inboxMoveTarget(R, "b.json", 3);
  assert.deepEqual(again, { rel: ".review/inbox/done/b.round-3.json" });
  assert.deepEqual(inboxMoveTarget(R, "gone.json", 3), { rel: "" });
});

test("an inbox finding over the cap survives a later round whose audit failed", async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "review-carry-"));
  const R = path.join(root, ".review");
  fs.mkdirSync(path.join(R, "rounds"), { recursive: true });
  fs.mkdirSync(path.join(R, "inbox"), { recursive: true });
  fs.writeFileSync(
    path.join(R, "rounds", "2.json"),
    JSON.stringify({ schema: 1, round: 2, items: [], overflow: [] }),
  );
  fs.writeFileSync(
    path.join(R, "state.json"),
    JSON.stringify({
      artifact: "u",
      last_round: 2,
      rotation: { cursor: 0, slice: 2 },
    }),
  );
  fs.writeFileSync(
    path.join(R, "inbox", "a.json"),
    JSON.stringify(file("s", [item("ffr:1"), item("ffr:2", { kind: "stub" })])),
  );
  const scope = path.join(root, "scope.json");
  fs.writeFileSync(
    scope,
    JSON.stringify({
      main: "m".repeat(40),
      pages: [],
      rotation: { cursor_after: 0, slice: 2 },
    }),
  );
  const W = (n: number) => path.join(R, "work", `round-${n}`);
  const cons = (n: number, data: Obj) => {
    fs.mkdirSync(path.join(W(n), "audit"), { recursive: true });
    fs.writeFileSync(
      path.join(W(n), "audit", "consolidated.json"),
      JSON.stringify(data),
    );
  };
  const log = console.log;
  const out: string[] = [];
  console.log = (s: string) => out.push(s);
  try {
    const opts = { root, today: "2026-11-03" };
    const step = async (args: string[]) => {
      out.length = 0;
      assert.equal(await main(args, opts), 0, args.join(" "));
      return JSON.parse(out[0]);
    };
    const rec = (n: number) =>
      JSON.parse(fs.readFileSync(path.join(R, "rounds", `${n}.json`), "utf8"));
    const record = (n: number) =>
      step([
        "record",
        "--round",
        `${n}`,
        "--scope",
        scope,
        "--paper",
        "reachable",
      ]);
    // round 3: both confirmed, cap 1: ffr:2 goes over the cap
    await step(["inbox", "--round", "3", "--paper", "reachable"]);
    cons(3, {
      findings: [
        { inbox: "ffr:1", confidence: "high", sources: ["inbox:ffr:1"] },
        { inbox: "ffr:2", confidence: "high", sources: ["inbox:ffr:2"] },
      ],
      dropped: [],
      unverified: [],
    });
    await step(["findings", "--round", "3", "--cap", "1"]);
    await record(3);
    assert.deepEqual(
      rec(3).overflow.map((o: Obj) => o.id),
      ["ffr:2"],
    );
    assert.ok(fs.existsSync(path.join(R, "inbox", "done", "a.json")));
    // round 4: offered from the overflow, but the audit fails
    const off4 = await step(["inbox", "--round", "4", "--paper", "reachable"]);
    assert.deepEqual(
      off4.inbox.verify.map((v: Obj) => v.id),
      ["ffr:2"],
    );
    cons(4, { findings: [], unverified: [] });
    await step(["findings", "--round", "4"]);
    const r4 = await record(4);
    assert.equal(r4.inbox.carried_in_overflow, 1);
    assert.deepEqual(
      rec(4).overflow.map((o: Obj) => [o.id, !!o.inbox]),
      [["ffr:2", true]],
    );
    // running record again does not carry it twice
    await record(4);
    assert.equal(rec(4).overflow.length, 1);
    // round 5 offers it again, under its id
    const off5 = await step(["inbox", "--round", "5", "--paper", "reachable"]);
    assert.deepEqual(
      off5.inbox.verify.map((v: Obj) => v.id),
      ["ffr:2"],
    );
  } finally {
    console.log = log;
  }
});
