import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
// @ts-ignore — plain ESM helpers shared with scripts/generate-relations.mjs
import { closure } from "../scripts/closure.mjs";
// @ts-ignore
import * as rc from "../scripts/reduction-classes.mjs";

// Two schemes meet a naive DEPIR definition with no assumption, and every
// base DEPIR node must reject both:
//  - k = DB: Setup outputs the key k = DB and an empty EDB, Qry(k, i) outputs
//    the empty query and the hint k[i], and Fin returns the hint;
//  - send-all-for-small-n: the server returns all of DB when n <= 2^λ, and
//    the client sends i in the clear otherwise. It meets a bare o(n) for each
//    fixed λ, and p(λ)·n/log^j n, since log n <= λ when it sends DB.
// The tests read the definitions off the page and run both schemes on them.

const ROOT = path.resolve(import.meta.dirname, "..");
const PAGE = path.join(
  ROOT,
  "content",
  "Primitives",
  "doubly-efficient-pir.md",
);
const raw = fs.readFileSync(PAGE, "utf8");
const page = raw.split("<!-- BEGIN GENERATED")[0];

// The text under a heading, up to the next heading of the same or a higher
// level (`nested`) or of any level (`own`).
const section = (heading: string, own = false) => {
  const start = page.indexOf(`\n${heading}\n`);
  assert.ok(start >= 0, `the DEPIR page has "${heading}"`);
  const level = /^#+/.exec(heading)![0].length;
  const body = page.slice(start + heading.length + 2);
  const next = own ? /^#+ /m : new RegExp(`^#{1,${level}} `, "m");
  const end = body.search(next);
  return end >= 0 ? body.slice(0, end) : body;
};

const BASE: Record<string, string> = {
  "unkeyed-depir": "### Unkeyed DEPIR",
  "pk-depir": "### Public-key DEPIR",
  "sk-depir": "### Secret-key DEPIR",
  "passive-sk-depir": "#### Passive-server SK-DEPIR",
};
const KEYED = ["pk-depir", "sk-depir", "passive-sk-depir"];

const inputs = (s: string) => s.split(",").map((x) => x.trim());

test("each base DEPIR node is a variant defined under the shared Syntax and Efficiency", () => {
  const fm = /^---\n([\s\S]*?)\n---/.exec(raw)![1];
  const slug = (h: string) =>
    h
      .replace(/^#+ /, "")
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/ /g, "-");
  const props = page.indexOf("\n## Properties\n");
  const variations = page.indexOf("\n# Variations\n");
  assert.ok(props >= 0 && variations > props, "Properties precede Variations");
  for (const [id, heading] of Object.entries(BASE)) {
    assert.match(
      fm,
      new RegExp(`^  ${id}: "#${slug(heading)}"$`, "m"),
      `${id} is the variant at ${heading}`,
    );
    const at = page.indexOf(`\n${heading}\n`);
    assert.ok(
      at > props && at < variations,
      `${heading} lies under Properties, after Syntax and Efficiency`,
    );
    // The node's own text may not fall back on a bare o(n) bound.
    assert.doesNotMatch(
      section(heading, true),
      /\$o\(n\)\$/,
      `${id} restates a bare o(n) bound`,
    );
  }
  assert.match(
    section("### Efficiency"),
    /Every single-server variant below is doubly efficient\./,
  );
});

test("the k = DB scheme is rejected by each base DEPIR node", () => {
  const syntax = section("## Syntax");
  const keyed =
    /In the keyed variants it first samples \$\(k, k'\) \\gets \\KeyGen\(([^)]*)\)\$, without access to \$DB\$, and then computes \$EDB \\gets \\mathsf\{Prep\}\(([^)]*)\)\$, for efficient algorithms \$\\KeyGen\$ and \$\\mathsf\{Prep\}\$, where \$k\$ is the client's key and \$k'\$ an encoding key used only by \$\\mathsf\{Prep\}\$; in unkeyed DEPIR it is deterministic and outputs \$k = \\bot\$/.exec(
      syntax,
    );
  assert.ok(keyed, "the Setup clause for keyed and unkeyed DEPIR is intact");
  const keyGenSees = inputs(keyed![1]);
  assert.deepStrictEqual(keyGenSees, ["1^\\secpar", "1^n"], "KeyGen's inputs");
  assert.deepStrictEqual(
    inputs(keyed![2]),
    ["1^\\secpar", "k'", "DB"],
    "Prep's inputs",
  );
  const qry = /\$\\mathsf\{Qry\}\(([^)]*)\) \\to \(q,h\)\$/.exec(syntax);
  assert.ok(qry, "Qry's signature is intact");
  const clientHolds = inputs(qry![1]);
  assert.deepStrictEqual(clientHolds, ["k", "i"], "the client holds k and i");
  assert.match(
    section("### Unkeyed DEPIR", true),
    /\$\\Setup\$ is deterministic and outputs \$k = \\bot\$/,
  );
  assert.match(
    section("#### Passive-server SK-DEPIR", true),
    /its key is sampled before \$\\mathsf\{Prep\}\$ encodes the database, and the client holds only \$\(n, k, i\)\$/,
  );

  // The scheme, run with key generation and the client given exactly the
  // inputs the page names: it reads DB only where the syntax hands it DB.
  type Db = number[];
  const sees = (names: string[], DB: Db) =>
    names.some((x) => /^DB$/.test(x)) ? { DB } : {};
  const kdb = {
    keyGen: (input: { DB?: Db }) => input.DB ?? null,
    prep: () => [] as Db,
    qry: (k: Db | null, i: number, input: { DB?: Db }) => ({
      q: [] as number[],
      h: (input.DB ?? k ?? [])[i],
    }),
    rsp: (q: number[], edb: Db) => q.map((p) => edb[p]),
    fin: (h: number | undefined, _r: number[]) => h,
  };
  const run = (
    DB: Db,
    i: number,
    keyGenInputs: string[] | "unkeyed",
    held: string[],
  ) => {
    const k =
      keyGenInputs === "unkeyed" ? null : kdb.keyGen(sees(keyGenInputs, DB));
    const edb = kdb.prep();
    const { q, h } = kdb.qry(k, i, sees(held, DB));
    return kdb.fin(h, kdb.rsp(q, edb));
  };
  const correctOnBoth = (keyGenInputs: string[] | "unkeyed", held: string[]) =>
    run([0], 0, keyGenInputs, held) === 0 &&
    run([1], 0, keyGenInputs, held) === 1;
  // Sanity: with a joint Setup that hands DB to key generation it is correct.
  assert.ok(correctOnBoth(["1^\\secpar", "DB"], clientHolds));
  for (const id of KEYED)
    assert.ok(
      !correctOnBoth(keyGenSees, clientHolds),
      `${id}: the k = DB scheme is rejected`,
    );
  assert.ok(
    !correctOnBoth("unkeyed", clientHolds),
    "unkeyed-depir: the k = DB scheme is rejected",
  );
});

// Bounds as functions of (λ, log2 n), evaluated in the log domain so that
// n = 2^λ stays representable. A witness is a choice of the polynomial p and
// of s (or c) that the definition quantifies existentially.
type Witness = {
  logP: (lam: number) => number;
  logS: (logn: number) => number;
  c: number;
};
const log2sum = (a: number, b: number) =>
  Math.max(a, b) + Math.log2(1 + 2 ** -Math.abs(a - b));
const FORMS: Record<string, (w: Witness, lam: number, logn: number) => number> =
  {
    "p(\\secpar) + s(n)": (w, lam, logn) => log2sum(w.logP(lam), w.logS(logn)),
    "p(\\secpar) \\cdot s(n)": (w, lam, logn) => w.logP(lam) + w.logS(logn),
    "p(\\secpar) \\cdot n^c": (w, lam, logn) => w.logP(lam) + w.c * logn,
  };
const WITNESSES: Witness[] = [];
for (let d = 1; d <= 32; d++)
  for (const logS of [
    ...[1, 2, 4, 8].map(
      (j) => (logn: number) => logn - j * Math.log2(Math.max(logn, 2)),
    ),
    ...[2, 4, 8].map((k) => (logn: number) => (1 - 1 / k) * logn),
    ...[2, 6, 8].map((k) => (logn: number) => k * Math.log2(Math.max(logn, 2))),
  ])
    for (const c of [0.5, 0.9, 0.99])
      WITNESSES.push({ logP: (lam) => d * Math.log2(lam), logS, c });
const GRID: [number, number][] = [];
for (const lam of [16, 64, 256, 1024, 4096])
  for (let logn = 1; logn <= 2 * lam; logn += Math.max(1, lam >> 6))
    GRID.push([lam, logn]);
// A cost function, in log2, meets a form if some witness bounds it everywhere.
const meets = (form: string, logCost: (lam: number, logn: number) => number) =>
  WITNESSES.some((w) =>
    GRID.every(
      ([lam, logn]) => logCost(lam, logn) <= FORMS[form](w, lam, logn) + 1e-9,
    ),
  );
// Send all of DB (n bits) when n <= 2^λ, else i in the clear and one bit back.
const sendAll = (lam: number, logn: number) =>
  logn <= lam ? logn : Math.log2(logn + 1);

test("the send-all-for-small-n scheme is rejected by the doubly-efficient bound", () => {
  const eff = section("### Efficiency");
  const m =
    /A DEPIR scheme is \*\*doubly efficient\*\* if \$\\Setup\$ runs in time polynomial in \$\\secpar\$ and \$n\$, and there are a polynomial \$p\$ and a function \$s\$ with \$s\(n\) = o\(n\)\$ such that for every \$\\secpar\$, \$n\$, \$DB \\in \\bits\^n\$ and \$i \\in \[n\]\$, the query-time communication \$\|q\| \+ \|r\|\$ and the running times of \$\\mathsf\{Qry\}\$, of \$\\mathsf\{Rsp\}\$ with random access to \$EDB\$, and of \$\\mathsf\{Fin\}\$ are each at most \$([^$]*)\$/.exec(
      eff,
    );
  assert.ok(
    m,
    "the bound is chosen once, before λ and n: a polynomial p and one s with s(n) = o(n)",
  );
  const form = m![1];
  assert.ok(form in FORMS, `the bound "${form}" is one the test can evaluate`);
  assert.strictEqual(form, "p(\\secpar) + s(n)", "the bound is additive");

  // Negative control: a multiplicative p(λ)·n/polylog(n) admits the scheme.
  assert.ok(meets("p(\\secpar) \\cdot s(n)", sendAll));
  // The page's bound rejects it under every witness on the grid.
  assert.ok(!meets(form, sendAll), "send-all meets the page's bound");

  // Sound producers stay in: LMW23's poly(λ, log n), CIMR25's
  // n·ℓ/log^t n + poly(λ) (t = 2, ℓ = log log n), BIPW17's poly(λ)·n^{1/m}.
  const lmw23 = (lam: number, logn: number) =>
    3 * (Math.log2(lam) + Math.log2(Math.max(logn, 1)));
  const cimr25 = (lam: number, logn: number) =>
    log2sum(
      logn +
        Math.log2(Math.max(Math.log2(Math.max(logn, 2)), 1)) -
        2 * Math.log2(Math.max(logn, 2)),
      3 * Math.log2(lam),
    );
  const bipw17 = (lam: number, logn: number) => 3 * Math.log2(lam) + logn / 3;
  for (const [name, cost] of Object.entries({ lmw23, cimr25, bipw17 }))
    assert.ok(meets(form, cost), `${name}'s query cost meets the page's bound`);

  // p(λ)·n^c implies the page's bound, as the variants' identity edges use.
  const multiplicative = (lam: number, logn: number) =>
    4 * Math.log2(lam) + 0.5 * logn;
  assert.ok(meets(form, multiplicative));
  assert.match(
    eff,
    /\$p\(\\secpar\) \\cdot n\^c \\le p\(\\secpar\)\^\{2\/\(1-c\)\} \+ n\^\{\(1\+c\)\/2\}\$/,
    "the page states the inequality the identity edges use",
  );
});

test("no producer derives a base DEPIR node from assumptions that do not give it", () => {
  const manifest = JSON.parse(
    fs.readFileSync(path.join(ROOT, ".reductions", "relations.json"), "utf8"),
  );
  const { classes } = rc.loadClasses(ROOT);
  const relativizes = (cls: string) =>
    cls === "relativizing" ||
    (classes[cls] !== undefined &&
      rc.closure(classes, cls).has("relativizing"));
  const reductions = manifest.reductions.concat(
    manifest.hybridReductions ?? [],
  );
  // CIMR25's LPN schemes bound communication only: no sublinear server work.
  assert.ok(
    !closure(reductions, ["lpn-high-noise"], { relativizes }).scopes.has(
      "sk-depir",
    ),
    "high-noise LPN must not derive SK-DEPIR",
  );
  // BIPW17's OLDC hides positions only; it reaches SK-DEPIR through the
  // one-time-pad edge, never directly.
  const bipw17 = manifest.reductions.filter((r: any) =>
    r.source.some?.((s: string) => s.includes("|BIPW17]]")),
  );
  for (const r of bipw17)
    assert.ok(
      !Object.keys(BASE).includes(r.conclusion),
      `${r.id} concludes a base DEPIR node directly`,
    );
  // Every edge into a base node has a hypothesis.
  for (const r of reductions)
    if (Object.keys(BASE).includes(r.conclusion))
      assert.ok(r.hypotheses.length > 0, `${r.id} has no hypothesis`);
});
