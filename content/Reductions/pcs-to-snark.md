---
type: reduction
status: draft
title: "Extractable PCS ⇒ SNARK"
aliases: []
id: red-pcs-to-snark
kind: implication
hypotheses: [extractable-pcs]
conclusion: snark
class: unstated
model: rom
source:
  - "[[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]]"
security-loss: ""
rationale:
  class: "The compiler uses the PCS as a black box, but knowledge soundness invokes the PCS extractor rather than only oracle access to the adversary, and neither source places the compilation in the RTV04 taxonomy."
  model: "The compilation gives a public-coin interactive argument in the standard model, which both sources make non-interactive by Fiat–Shamir in the random-oracle model."
---

# Extractable PCS ⇒ SNARK

## Statement

Any [[polynomial-commitment#extractability|extractable polynomial commitment scheme]] (PCS), whose commitments, evaluation proofs and verification are bounded by a polynomial in $\secpar$ and $\log d$ for degree bound $d$, over a field of super-polynomial size, yields a preprocessing [[succinct-argument|SNARK]] for NP in the random-oracle model: the prover of a constant-round algebraic holographic proof for NP, which exists unconditionally, commits to each round's polynomials and answers the verifier's evaluation queries with evaluation proofs, and [[fiat-shamir-heuristic|Fiat–Shamir]] makes the resulting public-coin argument non-interactive — [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]]. The holographic proof is sound only against oracle polynomials within their own degree bounds $d' \le d$ (the univariate sumcheck accepts every claimed sum once its polynomial $g$ may exceed degree $|H| - 2$), and extractability enforces only the bound $d$ of $\Setup$. So for each oracle $f$ with $d' < d$ the prover also commits, in the same round, to $f' := X^{d-d'} f$, and the verifier checks $f'(z) = z^{d-d'} f(z)$ at a point $z$ it samples after both commitments. The extracted $f'$ has degree at most $d$, so if the extracted $f$ has degree above $d'$, then $f' - X^{d-d'} f$ is a nonzero polynomial of degree at most $2d$, and the check passes with probability at most $2d/|\FF|$, which is negligible because $d \le \poly(\secpar)$ and $1/|\FF|$ is negligible — standard. The setup of the PCS carries over, and a hiding PCS with zero-knowledge evaluation proofs, compiling a zero-knowledge holographic proof, yields a zk-SNARK — [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]].

## Sketch

For knowledge soundness, the PCS extractor recovers each round's committed polynomials before the verifier's next challenge, as extractability requires; these, held to their degree bounds by the shift checks, fix the oracles of a polynomial-IOP prover, from which the polynomial-IOP extractor recovers a witness.

## Notes

- For a PCS whose evaluation is an interactive argument, the analogous compiler from polynomial IOPs needs witness-extended emulation of the evaluation protocol, and gives transparent SNARKs from a transparent PCS such as DARK — [[BFS20 - Transparent SNARKs from DARK Compilers|BFS20]] (Theorem 4).
- With the [[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]] commitment scheme the SNARK has a universal and updatable structured reference string; Marlin and Plonk are instances — [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]]. Plonk compiles PLONKish [[arithmetization]], via a permutation argument and KZG commitments, into a universal-setup zk-SNARK — [[GWC19 - PLONK Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge|GWC19]].
