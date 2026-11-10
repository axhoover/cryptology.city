---
type: reduction
status: draft
title: "Quasi-polynomially hard low-noise LPN ⇒ Slightly sublinear TDH"
aliases: []
id: red-noise-level-to-tdh-amr25
kind: implication
hypotheses: [quasi-polynomial-low-noise-lpn]
conclusion: sublinear-tdh
class: unstated
model: standard
source:
  - "[[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]]"
security-loss: ""
---

# Quasi-polynomially hard low-noise LPN ⇒ Slightly sublinear TDH

## Statement

[[learning-parity-with-noise#quasi-polynomially-hard-low-noise-lpn|Quasi-polynomially hard low-noise LPN]] in dimension $k$ with noise rate $\varepsilon = O(\log^{1+\beta}(k)/k)$, for a constant $\beta \in (0,1)$, implies [[trapdoor-hash-function#slightly-sublinear-trapdoor-hash-functions|slightly sublinear trapdoor hash functions]] with compression factor $2^{\Theta(\log^{1-\beta} \secpar)}$; this is the first trapdoor hash function from LPN — [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]].

## Notes

- The trapdoor hash function gives [[single-server-private-information-retrieval|single-server PIR]] with communication $L/2^{\Theta(\log^{1-\beta} L)}$ for a database of size $L$, the first PIR with communication $o(L)$ from a code-based assumption — [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]].
