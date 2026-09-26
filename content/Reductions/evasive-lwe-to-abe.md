---
type: reduction
status: draft
title: "Evasive LWE ⇒ ABE"
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
---

# Evasive LWE ⇒ ABE

Public-coin evasive circular LWE, a variant of [[learning-with-errors#evasive-lwe|evasive LWE]], implies [[attribute-based-encryption|ABE]] for circuits of unbounded depth.

## Statement

Assuming public-coin evasive circular LWE (a circular variant of [[learning-with-errors#evasive-lwe|evasive LWE]]), there is a lattice-based [[attribute-based-encryption|ABE]] scheme for circuits of unbounded depth — [[HLL23 - Attribute-Based Encryption for Circuits of Unbounded Depth from Lattices Garbled Circuits of Optimal Size, Laconic Functional Evaluation, and More|HLL23]]. [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]] exhibit a sampler for which the assumption's pre-condition holds but its post-condition fails — a counterexample to the assumption as stated.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- Given the AMYY25 counterexample, the edge stands only as a conditional theorem; the schema has no marker for a refuted hypothesis.
