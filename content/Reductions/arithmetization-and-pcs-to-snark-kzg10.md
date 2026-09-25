---
type: reduction
status: draft
title: "Arithmetization + PCS ⇒ SNARK"
aliases: []
id: red-arithmetization-and-pcs-to-snark-kzg10
kind: implication
hypotheses: [arithmetization, pcs]
conclusion: snark
class: unstated
model: rom
source:
  - "[[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]]"
security-loss: ""
---

# Arithmetization + PCS ⇒ SNARK

[[arithmetization|Arithmetization]] together with [[polynomial-commitment|PCS]] implies [[succinct-argument|SNARK]].

## Statement

A polynomial IOP for an [[arithmetization|arithmetized]] relation (R1CS, PLONKish), compiled with an extractable [[polynomial-commitment|polynomial commitment scheme]] and made non-interactive by Fiat–Shamir, is a preprocessing [[succinct-argument|SNARK]] in the random-oracle model. Instantiated with the [[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]] commitment scheme, the structured reference string is universal and updatable; Marlin and Plonk are instances — [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]].

## Sketch

The polynomial IOP verifier queries the prover's polynomials at random points; each oracle becomes a polynomial commitment and each query an evaluation proof, and Fiat–Shamir removes the interaction. Extractability of the commitment turns the IOP's soundness into knowledge soundness of the argument.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: The compiled SNARK is non-interactive via Fiat–Shamir; CHM+20 prove the compiled argument in the random-oracle model. The KZG instantiation additionally needs a universal updatable structured reference string (the previously recorded crs); one model slot cannot carry both, so the SRS is stated in the statement text.

- Plonk compiles PLONKish arithmetization, via a permutation argument and KZG commitments, into a universal-setup zk-SNARK — [[GWC19 - PLONK Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge|GWC19]]
- Polynomial IOPs and their compilation with any extractable polynomial commitment, formalized concurrently, with a transparent instantiation over groups of unknown order — [[BFS20 - Transparent SNARKs from DARK Compilers|BFS20]]
- Genuinely conjunctive: Plonk needs BOTH an arithmetization and a polynomial commitment scheme.
- 'arithmetization' is a Glossary entry, so a hypothesis slot is filled by a technique rather than a primitive/assumption.
