import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
// @ts-ignore — plain ESM helpers shared with scripts/generate-relations.mjs
import { closure } from "../scripts/closure.mjs";
// @ts-ignore
import * as rc from "../scripts/reduction-classes.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const manifest = JSON.parse(
  fs.readFileSync(path.join(ROOT, ".reductions", "relations.json"), "utf8"),
);
const { classes } = rc.loadClasses(ROOT);
const relativizes = (cls: string) =>
  cls === "relativizing" ||
  (classes[cls] !== undefined && rc.closure(classes, cls).has("relativizing"));

// The page's title and Statement, the text a reader takes as the theorem.
const titleAndStatement = (page: string) => {
  const text = fs.readFileSync(path.join(ROOT, page), "utf8");
  const title = /^title: "(.*)"$/m.exec(text)?.[1] ?? "";
  const start = text.indexOf("## Statement");
  assert.ok(start >= 0, `${page} has a Statement`);
  const rest = text.slice(start + "## Statement".length);
  const end = rest.search(/^## /m);
  return { title, statement: end >= 0 ? rest.slice(0, end) : rest };
};

test("HHS08's barriers stay polynomially-preserving fully-black-box, never generic black-box", () => {
  // HHS08's main theorem is for polynomially-preserving fully-black-box
  // constructions, a more restricted class than black-box constructions in
  // general; a page that drops "fully" claims more than HHS08 prove.
  const hhs08 = manifest.barriers.filter((b: any) =>
    b.source.some((s: string) => s.includes("|HHS08]]")),
  );
  assert.ok(
    hhs08.length >= 2,
    "the TDP and enhanced-TDP barriers are in the manifest",
  );
  const bareBlackBox = /(?<!fully[- ])black[- ]box/i;
  for (const b of hhs08) {
    assert.strictEqual(b.class, "fully-black-box", b.id);
    for (const c of b.consequences)
      assert.strictEqual(c.class, "fully-black-box", `${b.id} consequence`);
    const { title, statement } = titleAndStatement(b.page);
    assert.match(
      title,
      /polynomially-preserving fully-black-box/,
      `${b.id} title`,
    );
    assert.match(
      statement,
      /polynomially-preserving fully-black-box/,
      `${b.id} Statement`,
    );
    assert.doesNotMatch(
      title,
      bareBlackBox,
      `${b.id} title says black-box without fully`,
    );
    assert.doesNotMatch(
      statement,
      bareBlackBox,
      `${b.id} Statement says black-box without fully`,
    );
    // The Notes may contrast fully-black-box with "black-box constructions
    // in general"; any other bare "black-box" claims more than HHS08 prove.
    const text = fs.readFileSync(path.join(ROOT, b.page), "utf8");
    const notesStart = text.indexOf("## Notes");
    const notes = (notesStart >= 0 ? text.slice(notesStart) : "")
      .split("<!-- BEGIN GENERATED")[0]
      .replace(/black-box constructions in general/g, "");
    assert.doesNotMatch(
      notes,
      bareBlackBox,
      `${b.id} Notes say black-box without fully`,
    );
  }

  // Every hand-written link to an HHS08 barrier names its class.
  const slugs = hhs08.map((b: any) => path.basename(b.page, ".md"));
  const walk = (dir: string): string[] =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
      const p = path.join(dir, e.name);
      return e.isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : [];
    });
  for (const file of walk(path.join(ROOT, "content"))) {
    const text = fs.readFileSync(file, "utf8");
    for (const slug of slugs) {
      const link = new RegExp(`\\[\\[${slug}\\|([^\\]]*)\\]\\]`, "g");
      for (const m of text.matchAll(link))
        assert.match(
          m[1],
          /fully-black-box/,
          `${path.relative(ROOT, file)} links ${slug} as "${m[1]}"`,
        );
    }
  }
});

test("HPY26's barrier concludes only PK-DEPIR with key and query cost at most p(λ)·n^c", () => {
  // HPY26 turn a public-key DEPIR with an o(n) public key into an unkeyed one
  // and do not rule out public keys of length Ω(n), so the barrier must not
  // attach to the plain pk-depir node, whose key length is unbounded.
  const hpy26 = manifest.barriers.filter((b: any) =>
    b.source.some((s: string) => s.includes("|HPY26]]")),
  );
  const depir = hpy26.filter((b: any) => b.conclusion.includes("depir"));
  assert.ok(depir.length >= 1, "the HPY26 DEPIR barrier is in the manifest");
  for (const b of depir) {
    assert.strictEqual(b.conclusion, "pk-depir-sublinear-key", b.id);
    const { title, statement } = titleAndStatement(b.page);
    assert.match(title, /sublinear key/, `${b.id} title`);
    assert.match(statement, /o\(n\)/, `${b.id} Statement names the o(n) key`);
    assert.match(
      statement,
      /\\Omega\(n\)/,
      `${b.id} Statement excludes Ω(n) keys`,
    );
  }

  // A PK-DEPIR whose setup key has length Ω(n) is a plain pk-depir: nothing
  // derives the sublinear-key variant from it, so the barrier cannot reach it.
  const reductions = manifest.reductions.concat(
    manifest.hybridReductions ?? [],
  );
  const fromPk = closure(reductions, ["pk-depir"], { relativizes });
  assert.ok(
    !fromPk.scopes.has("pk-depir-sublinear-key"),
    "pk-depir must not derive the sublinear-key variant",
  );
  // The unkeyed node bounds query time only by o(n), met for n <= 2^λ by
  // sending all of DB, so it must not reach the variant either.
  const fromUnkeyed = closure(reductions, ["unkeyed-depir"], { relativizes });
  assert.ok(
    !fromUnkeyed.scopes.has("pk-depir-sublinear-key"),
    "unkeyed DEPIR, whose query cost is only o(n), must not derive the sublinear-key variant",
  );
  const page = fs.readFileSync(
    path.join(ROOT, "content", "Primitives", "doubly-efficient-pir.md"),
    "utf8",
  );
  const start = page.indexOf("#### PK-DEPIR with a sublinear key");
  assert.ok(start >= 0, "the DEPIR page defines the sublinear-key variant");
  const section = page.slice(start, page.indexOf("\n### ", start));
  assert.match(
    section,
    /at most \$p\(\\secpar\) \\cdot n\^c\$ for a polynomial \$p\$ and a constant \$c < 1\$/,
    "the variant bounds the key by p(λ)·n^c, c < 1",
  );
  assert.match(
    section,
    /the key \$k\$ that \$\\Setup\$ outputs and the query-time communication and computation are each at most/,
    "the variant bounds both the key and the query-time cost",
  );

  // Every hand-written restatement that carries HPY26 over to unkeyed DEPIR
  // names the p(λ)·n^c query-time bound, not the unkeyed node's bare o(n).
  const walk = (dir: string): string[] =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
      const p = path.join(dir, e.name);
      return e.isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : [];
    });
  let restatements = 0;
  const unkeyedClaim = /hence \[?unkeyed DEPIR|no (such )?unkeyed DEPIR/i;
  for (const file of walk(path.join(ROOT, "content"))) {
    const text = fs.readFileSync(file, "utf8").split("<!-- BEGIN GENERATED")[0];
    for (const line of text.split("\n")) {
      if (!/\|HPY26\]\]/.test(line)) continue;
      // One sentence or semicolon-separated clause at a time, so that the
      // bound in a public-key clause cannot vouch for an unkeyed one elsewhere.
      for (const sentence of line.split(/(?<=[.;])\s+/)) {
        const m = unkeyedClaim.exec(sentence);
        if (!m) continue;
        restatements++;
        const where = `${path.relative(ROOT, file)}: "${sentence.slice(0, 80)}…"`;
        // The unkeyed DEPIR is qualified ("such", or the bound itself) before
        // the next comma, the sentence names the p(λ)·n^c bound, and nothing
        // in it falls back on a bare sublinear query cost.
        const clause = sentence.slice(m.index).split(",")[0];
        assert.match(
          clause,
          /such|p\(\\secpar\) \\cdot n\^c/,
          `${where}: the unkeyed DEPIR is unqualified`,
        );
        assert.ok(
          sentence.includes("p(\\secpar) \\cdot n^c"),
          `${where}: HPY26 restatement for unkeyed DEPIR lacks the p(λ)·n^c bound`,
        );
        assert.doesNotMatch(
          sentence,
          /sublinear query/,
          `${where}: HPY26 restatement for unkeyed DEPIR uses a bare sublinear query cost`,
        );
      }
    }
  }
  assert.ok(restatements >= 3, "the three HPY26 restatements are found");
});

test("LMW25's barrier concludes only passive-server SK-DEPIR with a database-independent key", () => {
  // LMW25 (Definition 2.1) sample the client key by KeyGen(1^λ) before
  // Prep(1^λ, k, DB) encodes the database. Without that, Setup can output
  // k = DB and an empty EDB, Qry(k, i) the empty list of positions and the
  // hint k[i], and Fin the hint: a perfectly correct, perfectly private
  // passive-server scheme from no assumption, which no barrier may rule out.
  const lmw25 = manifest.barriers.filter((b: any) =>
    b.source.some((s: string) => s.includes("|LMW25]]")),
  );
  assert.ok(lmw25.length >= 1, "the LMW25 barrier is in the manifest");
  for (const b of lmw25) {
    assert.strictEqual(b.conclusion, "passive-sk-depir-independent-key", b.id);
    const { title, statement } = titleAndStatement(b.page);
    assert.match(title, /database-independent key/, `${b.id} title`);
    assert.match(statement, /Definition 2\.1/, `${b.id} Statement`);
    assert.match(
      statement,
      /\$\\KeyGen\(1\^\\secpar\)\$ before the database is encoded/,
      `${b.id} Statement names the database-independent KeyGen`,
    );
    assert.match(
      statement,
      /at most \$p\(\\secpar\) \\cdot n\^c\$ for a polynomial \$p\$ and a constant \$c < 1\$/,
      `${b.id} Statement bounds query-time cost by p(λ)·n^c`,
    );
  }

  // The k = DB scheme is a plain passive-server SK-DEPIR; nothing derives the
  // variant from that node or from SK-DEPIR.
  const reductions = manifest.reductions.concat(
    manifest.hybridReductions ?? [],
  );
  for (const seed of ["passive-sk-depir", "sk-depir"])
    assert.ok(
      !closure(reductions, [seed], { relativizes }).scopes.has(
        "passive-sk-depir-independent-key",
      ),
      `${seed} must not derive the database-independent-key variant`,
    );

  const page = fs.readFileSync(
    path.join(ROOT, "content", "Primitives", "doubly-efficient-pir.md"),
    "utf8",
  );
  const start = page.indexOf(
    "##### Passive-server SK-DEPIR with a database-independent key",
  );
  assert.ok(start >= 0, "the DEPIR page defines the variant");
  const section = page.slice(start, page.indexOf("\n#", start + 1));
  // The defining sentence: KeyGen without DB, Prep encodes, and what the
  // client holds at query time.
  const def =
    /has a \*\*database-independent key\*\* if \$\\Setup\(1\^\\secpar, DB\)\$ first samples \$k \\gets \\KeyGen\(([^)]*)\)\$, without access to \$DB\$, and then computes \$EDB \\gets \\mathsf\{Prep\}\(1\^\\secpar, k, DB\)\$, for efficient algorithms \$\\KeyGen\$ and \$\\mathsf\{Prep\}\$, so that the client holds only \$\(([^)]*)\)\$/.exec(
      section,
    );
  assert.ok(def, "the variant's defining sentence is intact");
  assert.strictEqual(
    def![1],
    "1^\\secpar",
    "the variant's KeyGen takes only 1^λ",
  );
  const clientState = def![2].split(",").map((s) => s.trim());
  assert.deepStrictEqual(
    clientState,
    ["n", "k", "i"],
    "the client holds only (n, k, i)",
  );
  assert.match(
    section,
    /by \$p\(\\secpar\) \\cdot n\^c\$ for a polynomial \$p\$ and a constant \$c < 1\$/,
    "the variant bounds query-time cost by p(λ)·n^c",
  );

  // Encode the k = DB, empty-query construction and run it under the
  // variant's syntax: key generation sees only the inputs the page gives
  // KeyGen, and the client's query uses only the state the page lets it hold.
  const keyGenInputs = def![1].split(",").map((s) => s.trim());
  const sees = (names: string[], DB: number[]) =>
    names.some((x) => /DB/.test(x)) ? { DB } : {};
  const kdb = {
    keyGen: (inputs: { DB?: number[] }) => inputs.DB ?? [],
    qry: (k: number[], i: number, state: { DB?: number[] }) => ({
      positions: [] as number[],
      h: (state.DB ?? k)[i],
    }),
    rsp: (positions: number[], edb: number[]) => positions.map((p) => edb[p]),
    fin: (h: number | undefined, _r: number[]) => h,
  };
  const run = (
    DB: number[],
    i: number,
    keyGenSees: string[],
    held: string[],
  ) => {
    const k = kdb.keyGen(sees(keyGenSees, DB));
    const edb: number[] = [];
    const { positions, h } = kdb.qry(k, i, sees(held, DB));
    return kdb.fin(h, kdb.rsp(positions, edb));
  };
  // With a joint Setup that hands DB to key generation, the scheme is correct.
  for (const DB of [[0], [1], [0, 1], [1, 0]])
    DB.forEach((bit, i) =>
      assert.strictEqual(run(DB, i, ["1^\\secpar", "DB"], ["k", "i"]), bit),
    );
  // Under the variant's syntax its answer cannot depend on DB, so it is wrong
  // on one of two databases that differ at the queried index.
  const correctOnBoth =
    run([0], 0, keyGenInputs, clientState) === 0 &&
    run([1], 0, keyGenInputs, clientState) === 1;
  assert.ok(
    !correctOnBoth,
    "the k = DB, empty-query scheme is rejected by the barrier's conclusion",
  );
  // Every hand-written restatement of LMW25's barrier names the variant,
  // by its link or by its p(λ)·n^c bound, not the bare passive-server node.
  const walk = (dir: string): string[] =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
      const p = path.join(dir, e.name);
      return e.isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : [];
    });
  let lmwRestatements = 0;
  for (const file of walk(path.join(ROOT, "content"))) {
    const text = fs.readFileSync(file, "utf8").split("<!-- BEGIN GENERATED")[0];
    for (const line of text.split("\n")) {
      if (!/\|LMW25\]\]/.test(line)) continue;
      // Only sentences that assert impossibility restate the barrier.
      for (const sentence of line.split(/(?<=\.)\s+/)) {
        if (
          !/gives? no [^.]*passive-server SK-DEPIR|no black-box construction [^.]*passive-server/i.test(
            sentence,
          )
        )
          continue;
        lmwRestatements++;
        assert.ok(
          sentence.includes(
            "#passive-server-sk-depir-with-a-database-independent-key",
          ) || sentence.includes("p(\\secpar) \\cdot n^c"),
          `${path.relative(ROOT, file)}: LMW25 restatement names neither the variant nor its bound`,
        );
      }
    }
  }
  assert.ok(lmwRestatements >= 3, "the LMW25 restatements are found");
});
