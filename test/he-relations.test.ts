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
  // A whole-circuit tag must also cover inputs on which the circuit
  // overflows, so the edge runs Algorithm 2 one gate at a time.
  assert.match(
    edgePage,
    /Applied with \$\\Eval\$ called on one addition or multiplication at a time, with the original scheme run at a precision \$p' > p\$, every tag of a computation of depth at most \$L\$ is \$t_e\$ or one of the bounds the hypothesis caps, all at most \$2\^\{-p'\}\$/,
    "the edge's tags are the node's gate-by-gate bounds",
  );
  assert.match(
    edgePage,
    /tags each fresh ciphertext with the bound \$t_e\$/,
    "the edge tags fresh ciphertexts with t_e",
  );
  // LMSS22 give the advantage bound; correctness and the gate-by-gate step
  // are folklore, flagged as such.
  assert.match(
    edgePage,
    /polynomial length — folklore\./,
    "the gate-by-gate correctness step is flagged as folklore",
  );
  assert.match(
    edgePage,
    /tag plus the added noise to stay below \$2\^\{-p\}\$/,
    "correctness bounds the tag plus the noise",
  );
  assert.match(
    edgePage,
    /\$\\mathsf\{Estimate\}\$'s bound computed from its circuit and the tags of its inputs/,
    "the edge's Estimate sees only the circuit and the input tags",
  );
  // The HE page's restatement credits LMSS22 with the advantage bound only.
  const restatement = page
    .split(/(?<=\.)\s+/)
    .find((x) =>
      x.includes(
        "(approximate-homomorphic-encryption-to-approximate-he-ind-cpa-d-lmss22)",
      ),
    );
  assert.ok(restatement, "the HE page restates the LMSS22 edge");
  assert.match(
    restatement!,
    /one gate at a time[^.]*— folklore\./,
    "the HE page flags the gate-by-gate step as folklore",
  );
  assert.match(
    restatement!,
    /original scheme run at a large enough precision \$p' > p\$/,
    "the restatement runs the original scheme at p' > p",
  );
  assert.match(
    restatement!,
    /\$t_e\$ on a fresh ciphertext/,
    "the restatement scales fresh-ciphertext noise to t_e",
  );
  assert.match(
    restatement!,
    /sequence of admissible single-gate queries/,
    "the restatement states the security transfer",
  );
  // What each page credits to LMSS22: the advantage bound, not security or
  // correctness in the wiki's sense.
  const lmss22Clause = restatement!.slice(0, restatement!.indexOf("[[LMSS22"));
  assert.match(
    lmss22Clause,
    /negligible advantage in the IND-CPA\$\^\{\\mathrm\{D\}\}\$ game/,
    "the HE page credits LMSS22 with the advantage bound",
  );
  assert.doesNotMatch(
    lmss22Clause,
    /IND-CPA\$\^\{\\mathrm\{D\}\}\$-secure|correct at precision/,
    "the HE page does not credit LMSS22 with security or correctness",
  );
  const edgeLmss = edgePage.slice(
    edgePage.indexOf("LMSS22's transformation"),
    edgePage.indexOf("(Definitions 11 and 15"),
  );
  assert.match(
    edgeLmss,
    /advantage against the result in the IND-CPA\$\^\{\\mathrm\{D\}\}\$ game is negligible — \[\[LMSS22/,
    "the edge credits LMSS22 with the advantage bound",
  );
  assert.doesNotMatch(
    edgeLmss,
    /IND-CPA\$\^\{\\mathrm\{D\}\}\$-secure|correct at precision/,
    "the edge does not credit LMSS22 with security or correctness",
  );
  assert.match(
    edgePage,
    /with the correctness above, it is IND-CPA\$\^\{\\mathrm\{D\}\}\$-secure — folklore\./,
    "the security conclusion is flagged folklore",
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
  assert.match(
    section,
    /given only a circuit and error bounds for its inputs/,
    "Estimate is given only the circuit and the input radii",
  );
  assert.match(
    section,
    /\$\\mathsf\{Estimate\}\$ sees neither \$\\pk\$ nor the ciphertexts/,
    "Estimate sees neither pk nor the ciphertexts",
  );
  assert.match(
    section,
    /requires that \$t_e\$ and, for every circuit of depth at most \$L\$/,
    "t_e is also capped at 2^{-p}",
  );
  assert.match(
    section,
    /bounds the worst-case output error compositionally: for every \$\(\\pk, \\sk\)\$ output by \$\\KeyGen\(1\^\\secpar, 1\^L, 1\^p\)\$, every circuit/,
    "Definition 11's guarantee holds for every key pair",
  );
  const fresh = section.slice(
    section.indexOf("A public bound $t_e"),
    section.indexOf("The variant recorded here"),
  );
  assert.match(
    fresh,
    /: for every \$\(\\pk, \\sk\)\$ output by \$\\KeyGen\(1\^\\secpar, 1\^L, 1\^p\)\$ and every \$m \\in \\calM\$, every output of \$\\Dec\(\\sk, \\Enc\(\\pk, m\)\)\$, over all coins of \$\\Enc\$ and \$\\Dec\$, is within \$t_e\$ of \$m\$/,
    "t_e bounds every fresh encryption under every key pair",
  );
  assert.doesNotMatch(
    fresh,
    /probability|\\negl|negligible|overwhelming|almost all|all but/,
    "the fresh bound is universal",
  );
  // The tags Algorithm 2 attaches must keep ciphertexts compact and the
  // transformed scheme efficient.
  assert.match(
    section,
    /outputs of at most \$s\(\\secpar, L, p\)\$ bits for a polynomial \$s\$/,
    "Estimate's outputs have polynomial length",
  );
  assert.match(
    section,
    /\$t_e\(\\secpar, L, p\)\$ to be computable in time polynomial/,
    "t_e is efficiently computable",
  );
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
  // The approximate-HE and IND-CPA-D sections the gate-by-gate step relies on.
  const approx = page.slice(
    page.indexOf("## Approximate homomorphic encryption"),
    page.indexOf("### Statically approximate HE"),
  );
  assert.match(
    approx,
    /messages vectors of complex numbers of \$\\ell_\\infty\$-norm at most \$1\$/,
    "messages lie in the l_inf unit ball",
  );
  assert.match(
    approx,
    /by repeated application of \$\\Eval\$/,
    "correctness is multi-hop",
  );
  assert.match(
    approx,
    /every gate of \$f\$ evaluated on \$\(m_1, \\ldots, m_k\)\$ has value of \$\\ell_\\infty\$-norm at most \$1\$/,
    "correctness is gate-wise",
  );
  const cpad = page.slice(
    page.indexOf("### IND-CPA-D security"),
    page.indexOf("## Rate-1"),
  );
  assert.match(
    cpad,
    /every gate of that computation has value of \$\\ell_\\infty\$-norm at most \$1\$ on both tracks/,
    "admissibility is gate-wise on both tracks",
  );
  assert.match(
    cpad,
    /\\KeyGen\(1\^\\secpar, 1\^L, 1\^p, 1\^q\)\$; \$b \\getsr \\bits\$/,
    "q is given to KeyGen",
  );
  assert.match(
    cpad,
    /\\If\{\$m\^0_i \\ne m\^1_i\$ or \$q\$ queries were answered\}/,
    "D answers at most q queries",
  );
  assert.match(
    edgePage,
    /for a number of decryption queries fixed in advance/,
    "the edge concludes the bounded game",
  );
  assert.match(
    section,
    /\$\\mathsf\{Estimate\}\$ to run in time polynomial in \$\\secpar\$, \$L\$, \$p\$ and the length of its input/,
    "Estimate runs in polynomial time",
  );
});
