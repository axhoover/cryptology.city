---
type: reference
status: draft
title: "Kha26"
source: https://eprint.iacr.org/2026/1769
authors: Shahram Khazaei
venue: Preprint
published: 2026-08-22
created: 2026-08-22
aliases:
  - Kha26
bibtex: |
  @misc{Kha26,
    author       = {Shahram Khazaei},
    title        = {Rank Measures and Exponential Lower Bounds for Multilinear Secret Sharing},
    year         = {2026},
    howpublished = {Cryptology {ePrint} Archive, Paper 2026/1769},
    note         = {\url{https://eprint.iacr.org/2026/1769}}
  }
cryptobib_pending: true
---

# [Kha26] Rank Measures and Exponential Lower Bounds for Multilinear Secret Sharing

**Authors:** Shahram Khazaei | **Venue:** Preprint (2026) | [ePrint](https://eprint.iacr.org/2026/1769)

## Abstract

A multilinear secret-sharing scheme shares a vector secret and can therefore amortize share size over the secret dimension. This amortization can invalidate lower bounds proved for one-dimensional linear schemes, and the best previous explicit lower bound for multilinear schemes was quasipolynomial, $n^{\Omega(\log n)}$. We prove that the Razborov–Gál rank measure survives amortization: the normalized size of a multi-target monotone span program is at least the rank measure of the function it computes. Combined with the rank witnesses of Pitassi and Robere, this gives an explicit family of access structures for which every perfect multilinear scheme over every finite field has average and maximum information ratio $2^{\Omega(n)}$. The worst-case multilinear information ratio is therefore $2^{\Theta(n)}$, answering a question of Beimel. We further extend the bound to schemes whose sharing algorithm is arbitrary and whose reconstruction is affine-linear, under pairwise statistical privacy below one; combined with the degree-reduction theorem of Beimel, Othman, and Peter, this yields exponential normalized lower bounds for every fixed reconstruction degree whenever the secret dimension is $2^{o(n)}$.
