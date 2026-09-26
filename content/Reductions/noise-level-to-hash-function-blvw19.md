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
security-loss: ""
---

# Noise Level ⇒ Hash function

[[learning-parity-with-noise#noise-level|Low-noise LPN]] implies [[hash-function#collision-resistance|collision-resistant hash functions]].

## Statement

[[learning-parity-with-noise#noise-level|Low-noise LPN]] with noise rate $\varepsilon = \log^2(k)/k$ implies [[hash-function#collision-resistance|collision-resistant hash functions]] [[BLVW19 - Worst-Case Hardness for LPN and Cryptographic Hashing via Code Smoothing|BLVW19]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- Collision-resistant hashing also follows from constant-noise LPN that is $2^{k^{1/2+\delta}}$-hard for a constant $\delta > 0$ (or $2^{\Omega(k/\log k)}$-hard with $\poly(k)$ samples), and from noise rate $1/\sqrt{k}$ with $2^{\Omega(\sqrt{k}/\log k)}$ hardness, via the binary shortest-vector problem — [[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]]
- YZW+19's hypotheses are incomparable with the $\log^2(k)/k$ regime; the result belongs on a separate edge with hypothesis `subexponential-lpn`.
