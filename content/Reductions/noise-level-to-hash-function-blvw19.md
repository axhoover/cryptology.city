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

## Statement

If [[learning-parity-with-noise#low-noise-lpn|low-noise LPN]] is hard at noise rate $\varepsilon = \log^2(k)/k$, then [[hash-function#collision-resistance|collision-resistant hash functions]] exist — [[BLVW19 - Worst-Case Hardness for LPN and Cryptographic Hashing via Code Smoothing|BLVW19]].

## Notes

- LPN at this noise rate lies in $\classBPP^{\classSZK}$ — [[BLVW19 - Worst-Case Hardness for LPN and Cryptographic Hashing via Code Smoothing|BLVW19]].
- Sub-exponentially hard constant-noise LPN also gives collision-resistant hash functions ([[subexponential-lpn-to-crhf-yzw-19|Subexponential LPN ⇒ CRHF]]) — [[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]].
