---
type: reduction
status: draft
title: "PC + Search noisy $k$-LIN ⇒ PKE"
aliases: []
id: red-pc-and-search-noisy-k-lin-to-pke-ghjs25
kind: implication
hypotheses: [pc, search-noisy-k-lin]
conclusion: pke
class: unstated
model: standard
source:
  - "[[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]]"
security-loss: ""
---

# PC + Search noisy $k$-LIN ⇒ PKE

[[planted-clique|PC]] together with [[noisy-k-lin-over-expanders#search-noisy-k-lin|Search noisy $k$-LIN]] implies [[public-key-encryption|PKE]].

## Statement

Semantically secure [[public-key-encryption|PKE]] exists under the joint hardness of the [[planted-clique|planted clique]] conjecture and the search variant of [[noisy-k-lin-over-expanders#search-noisy-k-lin|noisy $k$-LIN over expanders]], in which the adversary must recover $\mathbf{s}$ from $(\mathbf{M}, \mathbf{M}\mathbf{s}+\mathbf{e})$ for an expanding sparse $\mathbf{M}$ — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 8.8. The decisional variant gives the paper's main construction ([[noisy-k-lin-and-pc-to-pke-ghjs25|Noisy k-LIN + PC ⇒ PKE]], Theorem 5.12); the LPN search-to-decision reduction is not known to transfer to expanding matrices, so the search hypothesis is recorded as a separate edge.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
