import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  buildData,
  renderHtml,
  parseMacros,
  formatDates,
  commitRange,
  historyRow,
  summarizeDecisions,
  summarizeOutcome,
  loadRecords,
  inspectPage,
  // @ts-ignore — plain ESM helper, scripts/review/build-page.mjs
} from "../scripts/review/build-page.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const TEMPLATE = fs.readFileSync(
  path.join(ROOT, ".review", "page", "template.html"),
  "utf8",
);
const MACROS = parseMacros(
  fs.readFileSync(path.join(ROOT, "macros.ts"), "utf8"),
);

type Item = Record<string, unknown> & { id: string; section: string };
const card = (id: string, section: string, extra = {}): Item => ({
  id,
  section,
  kind: section === "applied" ? "fix" : "proposal",
  edge: "e",
  chips: [],
  summary: `summary of ${id}`,
  blocks: [{ type: "text", label: "Why", text: "because" }],
  url: "",
  ...extra,
});
const rec = (round: number, items: Item[], extra = {}) => ({
  schema: 1,
  round,
  dates: { start: "2026-11-01", end: "2026-11-02" },
  branch: `review/round-${round}`,
  commits: { base: "a".repeat(40), from: "b".repeat(40), to: "c".repeat(40) },
  scope: { summary: `scope ${round}` },
  applied: [],
  items,
  overflow: [],
  decisions: null,
  outcomes: null,
  ...extra,
});

// The data the template embeds, read back the way the page reads it.
function embedded(html: string) {
  const m =
    /<script id="review-data" type="application\/json">([\s\S]*?)<\/script>/.exec(
      html,
    );
  assert.ok(m, "review-data script present");
  return JSON.parse(m[1]);
}

test("macros come from macros.ts, without the leading backslash", () => {
  assert.equal(MACROS.calA, "\\mathcal{A}");
  assert.equal(MACROS.secpar, "\\lambda");
  assert.equal(MACROS.bits, "\\{0,1\\}");
  assert.equal(MACROS.classsharpP, "\\mathbf{\\#P}");
  assert.equal(MACROS.getsr, "\\overset{\\$}{\\gets}");
  assert.ok(!Object.keys(MACROS).some((k) => k.startsWith("\\")));
});

test("dates read like the Rounds table", () => {
  assert.equal(
    formatDates({ start: "2026-09-26", end: "2026-09-27" }),
    "26–27 Sep 2026",
  );
  assert.equal(
    formatDates({ start: "2026-09-27", end: "2026-10-03" }),
    "27 Sep – 3 Oct 2026",
  );
  assert.equal(formatDates({ start: "2026-11-02" }), "2 Nov 2026");
  assert.equal(
    formatDates({ start: "2026-12-30", end: "2027-01-02" }),
    "30 Dec 2026 – 2 Jan 2027",
  );
  assert.equal(formatDates(null), "");
});

test("commit ranges are shortened", () => {
  assert.equal(
    commitRange({ from: "e416a7df35f1", to: "c86c43fae37a" }),
    "e416a7d → c86c43f",
  );
  assert.equal(commitRange({ from: "", to: "c86c43fae37a" }), "c86c43f");
  assert.equal(commitRange(null), "");
});

test("the backfilled round-2 record rebuilds the published round-2 page", () => {
  const records = loadRecords(path.join(ROOT, ".review", "rounds"));
  const data = buildData(records, { round: 2 });
  assert.deepEqual(
    data.sections.map((s: { key: string }) => s.key),
    ["applied", "paper"],
  );
  const paper = data.sections.find((s: { key: string }) => s.key === "paper");
  assert.equal(paper.filter, "all");
  assert.equal(paper.bulk, false);
  const count = (s: string) =>
    data.items.filter((i: Item) => i.section === s).length;
  assert.equal(count("applied"), 31);
  assert.equal(count("paper"), 30);
  // carried round-1 checks keep their ids
  const ids = new Set(data.items.map((i: Item) => i.id));
  for (const n of [2, 7, 8, 9, 12, 13, 14, 15, 16, 17, 20, 21, 26, 27, 28, 29])
    assert.ok(
      ids.has(`fu:fu-verification-gap-${n}`),
      `fu:fu-verification-gap-${n}`,
    );
  // page items carry only the page's fields, plus the search text
  for (const i of data.items) {
    assert.equal(i.pages, undefined);
    assert.equal(typeof i.search, "string");
  }
  assert.deepEqual(
    data.history.map((h: { round: string }) => h.round),
    ["1", "2"],
  );
  assert.equal(data.history[0].items, 790);
  assert.equal(data.history[0].commits, "32d9f33 → b763025");
  assert.equal(data.history[1].commits, "e416a7d → c86c43f");
  assert.match(data.meta, /^Round 2 results · 61 items/);
});

test("history rows are ordered by round and stop at the page's round", () => {
  const records = [
    rec(4, [card("r4:x-1", "proposals")]),
    rec(3, []),
    rec(5, []),
  ];
  const data = buildData(records, { round: 4 });
  assert.deepEqual(
    data.history.map((h: { round: string }) => h.round),
    ["3", "4"],
  );
  assert.equal(buildData(records).history.length, 3);
});

test("a first round with no previous round builds", () => {
  const data = buildData([rec(1, [card("r1:math-1", "proposals")])]);
  assert.equal(data.history.length, 1);
  assert.equal(data.history[0].decisions, "open");
  assert.deepEqual(
    data.sections.map((s: { key: string }) => s.key),
    ["proposals"],
  );
});

test("an empty round still has one section and says so", () => {
  const data = buildData([rec(3, [])]);
  assert.equal(data.sections.length, 1);
  assert.equal(data.sections[0].key, "proposals");
  assert.match(data.sections[0].help, /Nothing to decide in round 3/);
  assert.equal(data.items.length, 0);
});

test("sections come in a fixed order and empty ones are left out", () => {
  const data = buildData([
    rec(3, [
      card("r3:cite-1", "paper"),
      card("fu2:x-1", "applied", { kind: "fix" }),
      card("r3:math-1", "proposals"),
    ]),
  ]);
  assert.deepEqual(
    data.sections.map((s: { key: string }) => s.key),
    ["applied", "proposals", "paper"],
  );
  assert.deepEqual(
    data.items.map((i: Item) => i.id),
    ["fu2:x-1", "r3:math-1", "r3:cite-1"],
  );
  assert.equal(data.sections[0].title, "Applied in round 3");
  assert.match(data.sections[1].help, /^<b>1 proposed change<\/b>/);
});

test("record overrides replace a section's help text", () => {
  const data = buildData([
    rec(3, [card("r3:math-1", "proposals")], {
      page: { sections: { proposals: { help: "custom" } }, meta: "M" },
    }),
  ]);
  assert.equal(data.sections[0].help, "custom");
  assert.equal(data.meta, "M");
});

test("carried items keep their id and the consumed decision reaches the page", () => {
  const consumed = {
    decision: "approve",
    note: "",
    at: "2026-11-01T10:00:00Z",
  };
  const data = buildData([
    rec(3, [
      card("r2:math-1", "applied", { kind: "fix", consumed, origin: 2 }),
    ]),
  ]);
  assert.equal(data.items[0].id, "r2:math-1");
  assert.deepEqual(data.items[0].consumed, consumed);
  assert.equal(data.items[0].origin, undefined);
});

test("duplicate ids and unknown sections are errors", () => {
  assert.throws(
    () => buildData([rec(3, [card("a", "proposals"), card("a", "paper")])]),
    /duplicate item id a/,
  );
  assert.throws(
    () => buildData([rec(3, [card("a", "followups")])]),
    /unknown section/,
  );
  assert.throws(() => buildData([]), /no round records/);
  assert.throws(
    () => buildData([rec(3, [])], { round: 9 }),
    /no record for round 9/,
  );
});

test("embedded JSON cannot close the script element, and $ survives", () => {
  const nasty =
    "ends </script><script>alert(1)</script> and <!-- and $& and $$x$$ and `$1`";
  const data = buildData([
    rec(3, [card("r3:style-1", "proposals", { summary: nasty })]),
  ]);
  const html = renderHtml(TEMPLATE, data, MACROS);
  assert.ok(!html.includes("</script><script>alert(1)"));
  const back = embedded(html);
  assert.equal(back.items[0].summary, nasty);
  assert.equal(back.items[0].search.includes("alert(1)"), true);
  assert.ok(html.includes('"calA":"\\\\mathcal{A}"'));
  assert.ok(!html.includes("__DATA__") && !html.includes("__MACROS__"));
});

test("a card quoting a placeholder, macros with `<`, and U+2028 survive", () => {
  const text = "the template's __MACROS__ and __DATA__ placeholders\u2028next";
  const data = buildData([
    rec(3, [card("r3:style-2", "proposals", { summary: text })]),
  ]);
  const html = renderHtml(TEMPLATE, data, {
    ...MACROS,
    lt: "</script><b>",
  });
  // the macros went into their own slot, not into the card's text
  assert.equal(embedded(html).items[0].summary, text);
  assert.ok(!html.includes("</script><b>"));
  assert.ok(!html.includes("\u2028"));
  const m = /macros: (\{[^\n]*\}),\n/.exec(html);
  assert.ok(m, "macros literal present");
  assert.equal(JSON.parse(m[1]).lt, "</script><b>");
});

test("the search text covers chips, blocks and both sides of a diff", () => {
  const data = buildData([
    rec(3, [
      card("r3:math-1", "proposals", {
        chips: [{ text: "High confidence", cls: "" }],
        blocks: [
          { type: "diff", old: "Old Bound", new: "New Bound" },
          { type: "details", title: "t", text: "Detail Text" },
        ],
      }),
    ]),
  ]);
  const s = data.items[0].search;
  for (const w of ["high confidence", "old bound", "new bound", "detail text"])
    assert.ok(s.includes(w), w);
});

test("a record file must hold its own round", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "review-records-"));
  fs.writeFileSync(path.join(dir, "2.json"), JSON.stringify(rec(2, [])));
  fs.writeFileSync(path.join(dir, "notes.json"), "{}");
  assert.deepEqual(
    loadRecords(dir).map((r: { round: number }) => r.round),
    [2],
  );
  fs.writeFileSync(path.join(dir, "3.json"), JSON.stringify(rec(2, [])));
  assert.throws(() => loadRecords(dir), /3\.json holds round 2/);
  assert.deepEqual(loadRecords(path.join(dir, "missing")), []);
});

test("a template without placeholders is rejected", () => {
  assert.throws(() => renderHtml("<p>no</p>", { items: [] }, {}), /__DATA__/);
});

test("decisions summarize by card kind; undecided and consumed count as undecided", () => {
  const r = rec(3, [
    card("a", "applied", { kind: "fix" }),
    card("b", "applied", { kind: "fix" }),
    card("c", "proposals"),
    card("d", "proposals"),
    card("e", "paper"),
  ]);
  assert.equal(summarizeDecisions(r), "open");
  const decided = {
    ...r,
    decisions: {
      a: { decision: "approve" },
      b: { decision: "reject" },
      c: { decision: "change", note: "n" },
      d: { decision: "approve", consumed: true },
    },
  };
  assert.equal(
    summarizeDecisions(decided),
    "1 kept · 1 reverted · 1 with changes · 2 undecided",
  );
});

test("the outcome column counts what the round did", () => {
  const r = rec(
    4,
    [
      card("r4:link-1", "applied", { kind: "fix", origin: 4, applied_in: 4 }),
      card("r3:math-1", "applied", { kind: "fix", origin: 3, applied_in: 4 }),
      card("r4:math-1", "proposals", { origin: 4 }),
      card("r2:cite-1", "paper", { origin: 2 }),
    ],
    {
      applied: [
        { id: "r3:math-1", source: "decision", status: "applied" },
        { id: "r3:math-2", source: "decision", status: "dropped" },
        { id: "r4:link-1", source: "audit", status: "applied" },
      ],
      overflow: [{ summary: "x" }],
    },
  );
  assert.equal(
    summarizeOutcome(r),
    "1 decided item applied, 1 dropped, 1 mechanical fix, 1 new proposal, 1 carried, 1 finding over the cap (logged for the next round)",
  );
  assert.equal(summarizeOutcome(rec(4, [])), "nothing to do");
  const row = historyRow({ ...r, pr: "https://github.com/x/y/pull/9" });
  assert.equal(row.round, "4");
  assert.equal(row.dates, "1–2 Nov 2026");
  assert.equal(row.items, 4);
  assert.equal(row.commits, "bbbbbbb → ccccccc");
  assert.equal(row.pr, "https://github.com/x/y/pull/9");
});

test("inspect reads a built page back and compares it with a record", () => {
  const r = rec(3, [card("r3:math-1", "proposals"), card("fu:x-1", "paper")]);
  const html = renderHtml(TEMPLATE, buildData([r]), MACROS);
  const seen = inspectPage(html, r);
  assert.equal(seen.round, "3");
  assert.deepEqual(seen.ids, ["r3:math-1", "fu:x-1"]);
  assert.deepEqual(seen.missing_from_page, []);
  assert.deepEqual(seen.not_in_record, []);
  const other = inspectPage(
    html,
    rec(3, [card("r3:math-1", "proposals"), card("r3:cite-9", "paper")]),
  );
  assert.deepEqual(other.missing_from_page, ["r3:cite-9"]);
  assert.deepEqual(other.not_in_record, ["fu:x-1"]);
  assert.throws(() => inspectPage("<p>no data</p>"), /no review-data/);
});
