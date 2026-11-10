---
type: reduction
status: draft
title: "Low-noise LPN ⇒ Slightly sublinear TDH"
aliases: []
id: red-noise-level-to-tdh-amr25
kind: implication
hypotheses: [lpn-low-noise]
conclusion: sublinear-tdh
class: unstated
model: standard
source:
  - "[[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]]"
security-loss: ""
---

# Low-noise LPN ⇒ Slightly sublinear TDH

## Statement

If $(k,\varepsilon)$-[[learning-parity-with-noise#low-noise-lpn|LPN]] is hard for efficient adversaries at noise rate $\varepsilon = \Theta(\log^{1+\beta}(k)/k)$, for a constant $\beta \in (0,1)$, then there are [[trapdoor-hash-function#slightly-sublinear-trapdoor-hash-functions|slightly sublinear trapdoor hash functions]] with compression factor $2^{\Theta(\log^{1-\beta} \secpar)}$; this is the first trapdoor hash function from LPN — [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]].

## Notes

- At this noise rate [[learning-parity-with-noise#attacks|Gaussian elimination]] runs in time $2^{O(\log^{1+\beta} k)}$, so the hardness premise cannot extend to every quasi-polynomial size; this caps the security attainable and is not a further assumption — standard.
- For $\beta \ge 1$ the factor $2^{\Theta(\log^{1-\beta} \secpar)}$ is bounded, so $\beta < 1$ is what makes the compression factor grow with $\secpar$ — standard.
- The trapdoor hash function gives [[single-server-private-information-retrieval|single-server PIR]] with communication $L/2^{\Theta(\log^{1-\beta} L)}$ for a database of size $L$, the first PIR with communication $o(L)$ from a code-based assumption — [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]].
