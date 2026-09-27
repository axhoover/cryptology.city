---
type: reduction
status: draft
title: "Subexponential LPN ⇒ CRHF"
aliases: []
id: red-subexponential-lpn-to-crhf-yzw-19
kind: implication
hypotheses: [subexponential-lpn]
conclusion: crhf
class: unstated
model: standard
source:
  - "[[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]]"
security-loss: ""
---

# Subexponential LPN ⇒ CRHF

[[learning-parity-with-noise#subexponential-lpn|Subexponential LPN]] implies [[hash-function#collision-resistance|collision-resistant hash functions]].

## Statement

Constant-noise [[learning-parity-with-noise|LPN]] that is $2^{k^{1/2+\delta}}$-hard for a constant $\delta > 0$ (or $2^{\Omega(k/\log k)}$-hard with $\poly(k)$ samples) implies [[hash-function#collision-resistance|collision-resistant hash functions]], via the binary shortest-vector problem — [[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- LPN at noise rate $1/\sqrt{k}$ that is $2^{\Omega(\sqrt{k}/\log k)}$-hard with $\poly(k)$ samples also implies collision-resistant hash functions — [[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]].
