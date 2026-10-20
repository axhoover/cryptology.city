---
type: reduction
status: draft
title: "Low-noise LPN ⇒ TDH"
aliases: []
id: red-noise-level-to-tdh-amr25
kind: implication
hypotheses: [lpn-low-noise]
conclusion: tdh
class: unstated
model: standard
source:
  - "[[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]]"
security-loss: "requires quasi-polynomial hardness of low-noise LPN"
---

# Low-noise LPN ⇒ TDH

## Statement

Quasi-polynomial hardness of [[learning-parity-with-noise#low-noise-lpn|low-noise LPN]] in dimension $k$ with noise rate $\varepsilon = O(\log^{1+\beta}(k)/k)$, for a constant $\beta > 0$, implies [[trapdoor-hash-function|trapdoor hash functions]] with compression factor $2^{\Theta(\log^{1-\beta} \secpar)}$; this is the first trapdoor hash function from LPN — [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]].

## Notes

- The trapdoor hash function gives [[single-server-private-information-retrieval|single-server PIR]] with communication $L/2^{\Theta(\log^{1-\beta} L)}$ for a database of size $L$, the first PIR with communication $o(L)$ from a code-based assumption ([[tdh-to-cpir-amr25|TDH ⇒ cPIR]]) — [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]].
