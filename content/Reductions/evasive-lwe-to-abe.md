---
type: reduction
status: draft
title: "Evasive circular LWE ⇒ ABE"
aliases: []
id: red-evasive-lwe-to-abe
kind: implication
hypotheses: [circular-evasive-lwe]
conclusion: abe
class: unstated
model: standard
source:
  - "[[HLL23 - Attribute-Based Encryption for Circuits of Unbounded Depth from Lattices Garbled Circuits of Optimal Size, Laconic Functional Evaluation, and More|HLL23]]"
security-loss: ""
rationale:
  class: "The hypothesis is an implication between two indistinguishability conditions quantified over samplers, not a primitive or a single problem that a reduction can use as an oracle."
---

# Evasive circular LWE ⇒ ABE

## Statement

If public-coin [[learning-with-errors#circular-evasive-lwe|circular evasive LWE]], a circular variant of [[learning-with-errors#evasive-lwe|evasive LWE]], holds, there is a lattice-based [[attribute-based-encryption|ABE]] scheme for circuits of unbounded depth — [[HLL23 - Attribute-Based Encryption for Circuits of Unbounded Depth from Lattices Garbled Circuits of Optimal Size, Laconic Functional Evaluation, and More|HLL23]].

## Notes

- Circular evasive LWE as stated in HLL23 has a counterexample: a sampler for which the pre-condition holds but the post-condition fails — [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]].
