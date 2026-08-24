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
model: crs
source:
  - "[[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]]"
security-loss: ""
---

# Arithmetization + PCS ⇒ SNARK

[[arithmetization|Arithmetization]] together with [[polynomial-commitment|PCS]] implies [[succinct-argument|SNARK]].

## Statement

Migrated verbatim from [[succinct-argument]] § Universal/updatable SNARKs:

> Systems like Plonk and Marlin use a single universal trusted setup for all circuits up to size $N$, rather than a per-circuit setup. Plonk uses PLONKish [[arithmetization]] and KZG [[polynomial-commitment|polynomial commitments]] — [[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]].

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Genuinely conjunctive: Plonk needs BOTH an arithmetization and a polynomial commitment scheme.
- CITATION MISMATCH: KZG10 is the polynomial-commitment paper, not the Plonk paper (GWC19) or the Marlin paper (CHM+20); the systems named in the sentence are uncited.
- 'arithmetization' is a Glossary entry, so a hypothesis slot is filled by a technique rather than a primitive/assumption.
