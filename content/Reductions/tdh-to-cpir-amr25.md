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

## Statement

A [[trapdoor-hash-function|trapdoor hash function]] with one-bit hints gives two-message rate-1 string [[oblivious-transfer|OT]], and rate-1 OT gives [[single-server-private-information-retrieval|single-server PIR]]; with the DDH- and QR-based trapdoor hash functions this is PIR with communication $\polylog(L)$ for a database of size $L$ — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]. The communication is governed by the hash function's compression: the trapdoor hash function of [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]] from quasi-polynomially hard [[learning-parity-with-noise#noise-level|low-noise LPN]] with noise rate $\varepsilon = O(\log^{1+\beta}(k)/k)$, $\beta > 0$ ([[noise-level-to-tdh-amr25|Low-noise LPN ⇒ TDH]]), has compression factor $2^{\Theta(\log^{1-\beta}\secpar)}$ and gives communication $L/2^{\Theta(\log^{1-\beta}L)}$, the first $o(L)$ PIR from a code-based assumption.
