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

If the [[planted-clique#ghjs25-planted-clique-conjecture|GHJS25 planted clique conjecture]] holds, the same conjecture as in Theorem 5.12, and [search noisy $k$-LIN over expanders](noisy-k-lin-over-expanders#search-noisy-k-lin) is hard (Conjecture 4.4: for every expanding support, every polynomial-size adversary recovers $\mathbf{s}$ from $(\mathbf{M}, \mathbf{M}\mathbf{s}+\mathbf{e})$ with probability at most $1/4$), then semantically secure [[public-key-encryption|PKE]] exists — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 8.8.

## Notes

- The decisional variant gives the paper's main construction — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 5.12 ([[noisy-k-lin-and-pc-to-pke-ghjs25|Noisy k-LIN + PC ⇒ PKE]]). The search-to-decision reduction known for random expanding matrices is not known to extend to every expanding support, so Theorem 8.8 is not known to follow from Theorem 5.12 — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], §4.2.
