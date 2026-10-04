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

## Statement

If constant-noise [[learning-parity-with-noise|LPN]] is $2^{k^{1/2+\delta}}$-hard for a constant $\delta > 0$ ([[learning-parity-with-noise#subexponential-lpn|subexponential LPN]] with exponent above $1/2$) or $2^{\Omega(k/\log k)}$-hard given $\poly(k)$ samples, then [[hash-function#collision-resistance|collision-resistant hash functions]] exist, via the binary shortest-vector problem — [[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]].

## Notes

- LPN at noise rate $1/\sqrt{k}$ that is $2^{\Omega(\sqrt{k}/\log k)}$-hard given $\poly(k)$ samples also implies collision-resistant hash functions — [[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]].
