---
type: reduction
status: draft
title: "TDH ⇒ cPIR"
aliases: []
id: red-tdh-to-cpir-amr25
kind: implication
hypotheses: [tdh]
conclusion: cpir
class: unstated
model: standard
source:
  - "[[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]"
security-loss: ""
---

# TDH ⇒ cPIR

[[trapdoor-hash-function|TDH]] implies [[single-server-private-information-retrieval|cPIR]].

## Statement

Two-message rate-1 string [[oblivious-transfer|OT]] follows from a [[trapdoor-hash-function|trapdoor hash function]] with one-bit hints, and [[single-server-private-information-retrieval|single-server PIR]] from rate-1 OT; with the DDH- and QR-based hash functions this gives PIR with communication $\polylog(L)$ for a database of size $L$ — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]. The communication is governed by the hash function's compression: the low-noise-LPN trapdoor hash function of [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]], with compression factor $2^{\Theta(\log^{1-\beta}\secpar)}$, gives communication $L/2^{\Theta(\log^{1-\beta}L)}$.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- AMR25's is the first trapdoor hash function from low-noise LPN, and its PIR the first with communication $o(L)$ from a code-based assumption; both rest on quasi-polynomial hardness of LPN with noise rate $\varepsilon = O(\log^{1+\beta}(k)/k)$, $\beta > 0$ — [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]]
