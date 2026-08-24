---
type: reduction
status: draft
title: "Subexponential LPN ⇒ PKE"
aliases: []
id: red-subexponential-lpn-to-pke-yz16
kind: implication
hypotheses: [subexponential-lpn]
conclusion: pke
class: unstated
model: standard
source:
  - "[[YZ16 - Cryptography with Auxiliary Input and Trapdoor from Constant-Noise LPN|YZ16]]"
security-loss: ""
---

# Subexponential LPN ⇒ PKE

[[learning-parity-with-noise#subexponential-lpn|Subexponential LPN]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[learning-parity-with-noise]] § Known results:

> - [[public-key-encryption|CCA-PKE]] and [[oblivious-transfer|OT]] can be built from subexponential LPN— [[YZ16 - Cryptography with Auxiliary Input and Trapdoor from Constant-Noise LPN|YZ16]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The CCA security notion is lost: the identifier is bare public-key-encryption, making this edge indistinguishable from the weaker IND-CPA claim at line 64 of the same page.
- HYPOTHESIS MISMATCH with the cited title: YZ16 is stated for constant-noise LPN (with sub-exponential hardness), while the bullet says 'subexponential LPN'.
- subexponential-lpn has no page of its own; it is a sub-section of learning-parity-with-noise.
- Two conclusions (CCA-PKE and OT) in one bullet — must be split.
- HYPOTHESIS MISMATCH with the cited title: YZ16 is stated for constant-noise LPN (with sub-exponential hardness), while the bullet says subexponential LPN.
- Display text CCA-PKE differs from the target page (public-key-encryption); the CCA security notion is not part of the identifier.
- Missing space before the em dash (LPN— [[YZ16).
