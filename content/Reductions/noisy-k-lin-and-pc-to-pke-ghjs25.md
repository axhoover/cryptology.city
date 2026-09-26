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

[[noisy-k-lin-over-expanders|Noisy k-LIN]] together with [[planted-clique|PC]] implies [[public-key-encryption|PKE]].

## Statement

If the [[planted-clique|planted clique]] conjecture holds against $n^{\log^\alpha n}$-time adversaries for some $\alpha \in (0,1)$, and [[noisy-k-lin-over-expanders|noisy $k$-LIN]] holds over $(\gamma, \Omega(\log n), 2^{(\log n)^\alpha})$-expanding matrices over $\FF_p$, then there is a [[public-key-encryption|PKE]] scheme semantically secure against non-uniform polynomial-size circuits — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 5.12.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- Conjunctive: the theorem needs both hypotheses, so the edge must not be split into two single-hypothesis reductions.
- The adversary classes differ: planted clique is assumed hard against quasi-polynomial-time adversaries; the PKE is secure against non-uniform polynomial-size circuits.
