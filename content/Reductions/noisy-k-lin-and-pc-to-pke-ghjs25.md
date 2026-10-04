---
type: reduction
status: draft
title: "Noisy k-LIN + PC ⇒ PKE"
aliases: []
id: red-noisy-k-lin-and-pc-to-pke-ghjs25
kind: implication
hypotheses: [noisy-k-lin, pc]
conclusion: pke
class: unstated
model: standard
source:
  - "[[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]]"
security-loss: ""
---

# Noisy k-LIN + PC ⇒ PKE

## Statement

If the [[planted-clique|planted clique]] conjecture holds against $n^{\log^\alpha n}$-time adversaries for some $\alpha \in (0,1)$, and [noisy $k$-LIN](<noisy-k-lin-over-expanders>) holds over $(\gamma, \Omega(\log n), 2^{(\log n)^\alpha})$-expanding matrices over $\FF_p$, then there is a [[public-key-encryption|PKE]] scheme semantically secure against non-uniform polynomial-size circuits — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 5.12.

## Notes

- Planted clique together with the search variant of noisy $k$-LIN also gives PKE — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 8.8 ([[pc-and-search-noisy-k-lin-to-pke-ghjs25|PC + Search noisy k-LIN ⇒ PKE]]).
