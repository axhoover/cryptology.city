---
type: reduction
status: draft
title: "Noisy k-LIN + PC ⇒ PKE"
aliases: []
id: red-noisy-k-lin-and-pc-to-pke-ghjs25
kind: implication
hypotheses: [noisy-k-lin, ghjs25-planted-clique]
conclusion: pke
class: unstated
model: standard
source:
  - "[[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]]"
security-loss: ""
---

# Noisy k-LIN + PC ⇒ PKE

## Statement

If the [[planted-clique#ghjs25-planted-clique-conjecture|GHJS25 planted clique conjecture]] holds — for some constants $\alpha \in (0,1)$ and $\delta \in (0, 1/2)$, every algorithm of size $n^{O((\log n)^\alpha)}$ distinguishes $\calG(n, 1/2)$ from $\calG(n, 1/2)$ with a planted clique on $n^\delta$ vertices with advantage at most $1/3$ (Conjecture 1.1) — and [noisy $k$-LIN](noisy-k-lin-over-expanders) holds over $(\gamma, \Omega(\log n), 2^{(\log n)^\alpha})$-expanding matrices over $\FF_p$, then there is a [[public-key-encryption|PKE]] scheme semantically secure against adversaries of polynomial size — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 5.12.

## Notes

- Planted clique together with the search variant of noisy $k$-LIN also gives PKE — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 8.8 ([[pc-and-search-noisy-k-lin-to-pke-ghjs25|PC + Search noisy k-LIN ⇒ PKE]]).
