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

test("LMSS22's IND-CPA-D transformation needs a statically approximate scheme", () => {
  // LMSS22's Theorem 2 is for statically approximate schemes (Definition 11),
  // which carry a public Estimate algorithm bounding the worst-case output
  // error; correctness of an approximate HE scheme does not provide one.
  const lmss22 = manifest.reductions.filter((r: any) =>
    r.source.some((s: string) => s.includes("|LMSS22]]")),
  );
  assert.ok(lmss22.length >= 1, "the LMSS22 edge is in the manifest");
  for (const r of lmss22) {
    assert.deepStrictEqual(
      r.hypotheses,
      ["statically-approximate-homomorphic-encryption"],
      r.id,
    );
    assert.strictEqual(r.conclusion, "approximate-he-ind-cpa-d", r.id);
  }

  // From the plain approximate-HE node, no edge reaches IND-CPA-D.
  const reductions = manifest.reductions.concat(
    manifest.hybridReductions ?? [],
  );
  const fromApprox = closure(
    reductions,
    ["approximate-homomorphic-encryption"],
    { relativizes },
  );
  assert.ok(
    !fromApprox.scopes.has("approximate-he-ind-cpa-d"),
    "approximate HE without Estimate must not derive IND-CPA-D",
  );
  const fromStatic = closure(
    reductions,
    ["statically-approximate-homomorphic-encryption"],
    { relativizes },
  );
  assert.ok(fromStatic.scopes.has("approximate-he-ind-cpa-d"));

  const page = fs.readFileSync(
    path.join(ROOT, "content", "Primitives", "homomorphic-encryption.md"),
    "utf8",
  );
  const start = page.indexOf("### Statically approximate HE");
  assert.ok(start >= 0, "the HE page defines statically approximate HE");
  const section = page.slice(start, page.indexOf("\n### ", start + 1));
  assert.match(section, /\\mathsf\{Estimate\}/, "the node names Estimate");
  assert.match(
    section,
    /Definition 11/,
    "the node cites LMSS22's Definition 11",
  );
  assert.match(
    section,
    /deterministic \$\\Dec\$/,
    "the node requires deterministic Dec",
  );
  assert.match(
    section,
    /r = r\(\\secpar, L, p\)/,
    "the node names a public fresh radius",
  );
  assert.match(
    section,
    /are at most \$2\^\{-p\}\$/,
    "Estimate's bounds along supported computations are at most 2^{-p}",
  );
  assert.match(
    section,
    /one gate at a time/,
    "the 2^{-p} clause is gate by gate",
  );
  assert.match(
    section,
    /applies \$\\Eval\$ one gate at a time, each time to a single addition or multiplication/,
    "the 2^{-p} clause covers only computations that apply Eval to one gate at a time",
  );
  assert.match(
    section,
    /m_k \\in \\calM/,
    "Definition 11's messages lie in the message space",
  );
  const def11 = section.slice(0, section.indexOf("The variant recorded here"));
  assert.doesNotMatch(
    def11,
    /on which every gate|gate values?|norm at most \$1\$|depth at most \$L\$/,
    "Definition 11's guarantee has no gate-value or depth restriction",
  );
  const variant = section.slice(section.indexOf("The variant recorded here"));
  assert.match(
    variant,
    /for every \$\(\\pk, \\sk\)\$ output by \$\\KeyGen\(1\^\\secpar, 1\^L, 1\^p\)\$ and all coins of \$\\Enc\$ and \$\\Eval\$/,
    "the 2^{-p} clause quantifies every key pair and all coins of Enc and Eval",
  );
});
