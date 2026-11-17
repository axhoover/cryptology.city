---
type: reduction
status: draft
title: "PC + Search noisy $k$-LIN ⇒ PKE"
aliases: []
id: red-pc-and-search-noisy-k-lin-to-pke-ghjs25
kind: implication
hypotheses: [ghjs25-planted-clique, search-noisy-k-lin]
conclusion: pke
class: unstated
model: standard
source:
  - "[[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]]"
security-loss: ""
---

# PC + Search noisy $k$-LIN ⇒ PKE

## Statement

If the [[planted-clique#ghjs25-planted-clique-conjecture|GHJS25 planted clique conjecture]] holds — for some constants $\alpha \in (0,1)$ and $\delta \in (0, 1/2)$, every algorithm of size $n^{O((\log n)^\alpha)}$ distinguishes $\calG(n, 1/2)$ from $\calG(n, 1/2)$ with a planted clique on $n^\delta$ vertices with advantage at most $1/3$ (Conjecture 1.1) — and the [search variant of noisy $k$-LIN over expanders](noisy-k-lin-over-expanders#search-noisy-k-lin), recovering $\mathbf{s}$ from $(\mathbf{M}, \mathbf{M}\mathbf{s}+\mathbf{e})$ for an expanding sparse $\mathbf{M}$, is hard, then semantically secure [[public-key-encryption|PKE]] exists — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 8.8.

## Notes

- The decisional variant gives the paper's main construction — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 5.12 ([[noisy-k-lin-and-pc-to-pke-ghjs25|Noisy k-LIN + PC ⇒ PKE]]). The LPN search-to-decision reduction is not known to transfer to expanding matrices, so Theorem 8.8 is not known to follow from Theorem 5.12 — folklore.
