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
  - "[[BFS20 - Transparent SNARKs from DARK Compilers|BFS20]]"
security-loss: ""
rationale:
  class: "The compiler uses the PCS as a black box, but knowledge soundness invokes the PCS extractor rather than only oracle access to the adversary, and neither source places the compilation in the RTV04 taxonomy."
  model: "The compilation gives a public-coin interactive argument in the standard model, which both sources make non-interactive by Fiat–Shamir in the random-oracle model."
---

# Extractable PCS ⇒ SNARK

## Statement

Any [[polynomial-commitment#extractability|extractable]] [[polynomial-commitment|polynomial commitment scheme]] with succinct commitments and evaluation proofs yields a preprocessing [[succinct-argument|SNARK]] for NP in the random-oracle model: the prover of a polynomial IOP for NP, which exists unconditionally, commits to each round's polynomials and answers the verifier's evaluation queries with evaluation proofs, and [[fiat-shamir-heuristic|Fiat–Shamir]] makes the resulting public-coin argument non-interactive; [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]] compile algebraic holographic proofs and [[BFS20 - Transparent SNARKs from DARK Compilers|BFS20]] polynomial IOPs. The setup of the PCS carries over, so a transparent PCS yields a transparent SNARK, and a hiding PCS with zero-knowledge evaluation proofs yields a zk-SNARK — [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]], [[BFS20 - Transparent SNARKs from DARK Compilers|BFS20]].

## Sketch

For knowledge soundness, the PCS extractor recovers the committed polynomials from a convincing prover; these define a polynomial-IOP prover, from which the polynomial-IOP extractor recovers a witness.

## Notes

- With the [[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]] commitment scheme the SNARK has a universal and updatable structured reference string; Marlin is this instance — [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]] — and so is Plonk, which compiles PLONKish [[arithmetization]] via a permutation argument and KZG commitments into a universal-setup zk-SNARK — [[GWC19 - PLONK Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge|GWC19]].
