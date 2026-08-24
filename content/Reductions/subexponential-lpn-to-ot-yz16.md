---
type: reduction
status: draft
title: "Subexponential LPN ⇒ OT"
aliases: []
id: red-subexponential-lpn-to-ot-yz16
kind: implication
hypotheses: [subexponential-lpn]
conclusion: ot
class: unstated
model: standard
source:
  - "[[YZ16 - Cryptography with Auxiliary Input and Trapdoor from Constant-Noise LPN|YZ16]]"
security-loss: ""
---

# Subexponential LPN ⇒ OT

[[learning-parity-with-noise#subexponential-lpn|Subexponential LPN]] implies [[oblivious-transfer|OT]].

## Statement

Migrated verbatim from [[learning-parity-with-noise]] § Known results:

> - [[public-key-encryption|CCA-PKE]] and [[oblivious-transfer|OT]] can be built from subexponential LPN— [[YZ16 - Cryptography with Auxiliary Input and Trapdoor from Constant-Noise LPN|YZ16]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Same hypothesis mismatch with YZ16's constant-noise statement.
- The OT security flavor (semi-honest vs malicious) is unstated, so the conclusion node is coarser than the theorem.
- Two conclusions (CCA-PKE and OT) in one bullet — must be split.
- HYPOTHESIS MISMATCH with the cited title: YZ16 is stated for constant-noise LPN (with sub-exponential hardness), while the bullet says subexponential LPN.
- Display text CCA-PKE differs from the target page (public-key-encryption); the CCA security notion is not part of the identifier.
- Missing space before the em dash (LPN— [[YZ16).
