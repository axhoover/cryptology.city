---
type: reduction
status: draft
title: "Low-noise LPN ⇒ CRHF"
aliases: []
id: red-noise-level-to-hash-function-blvw19
kind: implication
hypotheses: [lpn-low-noise]
conclusion: crhf
class: unstated
model: standard
source:
  - "[[BLVW19 - Worst-Case Hardness for LPN and Cryptographic Hashing via Code Smoothing|BLVW19]]"
security-loss: ""
---

# Low-noise LPN ⇒ CRHF

[[learning-parity-with-noise#low-noise-lpn|Low-noise LPN]] implies [[hash-function#collision-resistance|collision-resistant hash functions]].

## Statement

[[learning-parity-with-noise#low-noise-lpn|Low-noise LPN]] with noise rate $\varepsilon = \log^2(k)/k$ implies [[hash-function#collision-resistance|collision-resistant hash functions]] — [[BLVW19 - Worst-Case Hardness for LPN and Cryptographic Hashing via Code Smoothing|BLVW19]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- Sub-exponential constant-noise LPN also gives CRHF: [[subexponential-lpn-to-crhf-yzw-19|Subexponential LPN ⇒ CRHF]].
