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
  const edgePage = fs
    .readFileSync(
      path.join(
        ROOT,
        "content",
        "Reductions",
        "approximate-homomorphic-encryption-to-approximate-he-ind-cpa-d-lmss22.md",
      ),
      "utf8",
    )
    .split("<!-- BEGIN GENERATED")[0];
  assert.match(
    edgePage,
    /Definitions 11 and 15/,
    "the LMSS22 edge cites Definitions 11 and 15",
  );
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
  // Definition 11's Estimate sees only the circuit and the input radii;
  // giving it pk or the ciphertexts would widen LMSS22's hypothesis.
  assert.match(
    section,
    /\$B = \\mathsf\{Estimate\}\(f, e_1, \\ldots, e_k\)\$/,
    "Estimate takes only the circuit and the input radii",
  );
  for (const text of [section, edgePage])
    assert.doesNotMatch(
      text,
      /\\mathsf\{Estimate\}\([^)]*(\\pk|c_1|c_k|\\sk)/,
      "Estimate is never given the key or the ciphertexts",
    );
  // Definition 15's fresh bound covers every fresh encryption.
  assert.match(
    section,
    /t_e = t_e\(\\secpar, L, p\)/,
    "the node names the public fresh bound t_e",
  );
  assert.match(
    section,
    /every \$m \\in \\calM\$, every output of \$\\Dec\(\\sk, \\Enc\(\\pk, m\)\)\$, over all coins of \$\\Enc\$ and \$\\Dec\$, is within \$t_e\$/,
    "t_e bounds every fresh encryption of every message",
  );
  assert.match(section, /Definition 15/, "the node cites Definition 15");
  assert.doesNotMatch(
    section,
    /except with negligible probability/,
    "the fresh bound is universal, not a high-probability bound",
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
    /running \$\\mathsf\{Estimate\}\$ one gate at a time, on each addition or multiplication, with radius \$t_e\$ for each input of the circuit/,
    "the 2^{-p} clause runs Estimate gate by gate from t_e",
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
});
