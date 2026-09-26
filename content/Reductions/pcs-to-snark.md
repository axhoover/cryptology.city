---
type: reduction
status: draft
title: "PCS ⇒ SNARK"
aliases: []
id: red-pcs-to-snark
kind: implication
hypotheses: [pcs]
conclusion: snark
class: unstated
model: rom
source:
  - "[[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]]"
  - "[[BFS20 - Transparent SNARKs from DARK Compilers|BFS20]]"
security-loss: ""
---

# PCS ⇒ SNARK

An extractable [[polynomial-commitment|PCS]] implies a preprocessing [[succinct-argument|SNARK]] for NP in the random-oracle model.

## Statement

Any extractable [[polynomial-commitment|PCS]] with succinct commitments and evaluation proofs yields a preprocessing [[succinct-argument|SNARK]] for NP in the random-oracle model: the prover of a polynomial IOP for NP (an unconditional object) commits to each round's polynomials and answers the verifier's evaluation queries with evaluation proofs, and Fiat–Shamir makes the resulting public-coin argument non-interactive [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]], [[BFS20 - Transparent SNARKs from DARK Compilers|BFS20]]. The PCS's setup carries over, so a transparent PCS yields a transparent SNARK; a hiding PCS with zero-knowledge evaluation proofs yields a zkSNARK.

## Sketch

For knowledge soundness, the PCS extractor recovers the committed polynomials from a convincing prover; these define a PIOP prover from which the PIOP extractor recovers a witness.

## Notes

`class: unstated`: the compiler uses the PCS as a black box, but knowledge soundness invokes the PCS extractor rather than oracle access to an adversary, and neither source places the compilation in the RTV04 taxonomy.

`model: rom`: the compilation gives a public-coin interactive argument in the standard model; both sources make it non-interactive by Fiat–Shamir in the random-oracle model.
