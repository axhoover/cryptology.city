---
type: reduction
status: draft
title: "Noise Level ⇒ Hash function"
aliases: []
id: red-noise-level-to-hash-function-blvw19
kind: implication
hypotheses: [lpn-low-noise]
conclusion: hash-function
class: unstated
model: standard
source:
  - "[[BLVW19 - Worst-Case Hardness for LPN and Cryptographic Hashing via Code Smoothing|BLVW19]]"
  - "[[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]]"
security-loss: ""
---

# Noise Level ⇒ Hash function

[[learning-parity-with-noise#noise-level|Noise Level]] implies [[hash-function|Hash function]].

## Statement

Migrated verbatim from [[learning-parity-with-noise]] § Known results:

> - Some works show that Low-noise LPN with $\varepsilon = \log^2 k / k$ implies [[hash-function|OWF]] — [[BLVW19 - Worst-Case Hardness for LPN and Cryptographic Hashing via Code Smoothing|BLVW19]], [[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SURPRISING WIKILINK: `[[hash-function|OWF]]` displays OWF but points at the hash-function page; the repo has no one-way-function page.
- SUSPECTED MIS-STATEMENT: both cited papers give collision-resistant hashing (CRHF) from low-noise / sub-exponential LPN, not merely one-way functions; OWFs follow from LPN in essentially any regime, so the conclusion as written is far weaker than what is cited.
- Two papers with different hypotheses (BLVW19 via code smoothing and worst-case hardness; YZW+19 assuming sub-exponential LPN) bundled into one bullet — should be two reductions.
- Some works show that is a hedge.
- SPLIT VERDICT not-actually-composite: A single claim (low-noise LPN implies OWF) was decomposed only because the prose cites two papers; the two sub-edges have identical hypotheses and identical conclusion and differ solely in the citation, which is a source list, not a decomposition.
