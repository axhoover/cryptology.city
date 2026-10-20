---
type: glossary
status: stub
aliases:
  - MMap
  - Multilinear maps
title: Multilinear maps
id: multilinear-maps
variants:
  decision-multilinear-no-exact-cover: "#decision-multilinear-no-exact-cover-assumption"
unlisted: true
---

# Multilinear maps

A cryptographic multilinear map generalizes a bilinear pairing to a k-way map e: G_1 x ... x G_k -> G_T that is linear in each argument and on which discrete-log-type problems are conjectured hard; the known candidates are graded encodings, and they underlie the first iO candidate (GGHRSW13).

TODO: syntax and security definition.

# Variations

## Decision Multilinear No-Exact-Cover assumption

For a multilinear map whose levels are the subsets of $[n]$, sample $a_1, \ldots, a_n \getsr \ZZ_p$. The **Decision Multilinear No-Exact-Cover assumption** holds if for every instance $(n, T_1, \ldots, T_\ell)$ of Exact Cover with no exact cover, no efficient adversary given the level-$T_j$ encodings of $\prod_{i \in T_j} a_i$ for all $j$ distinguishes the level-$[n]$ encoding of $\prod_{i=1}^{n} a_i$ from an encoding of a uniform element, except with negligible advantage — [[GGSW13 - Witness encryption and its applications|GGSW13]].

<!-- BEGIN GENERATED participates-in 8b38eef43340 -->

## Participates in

**Builds on Multilinear maps**

- [[mmap-to-io-gghrsw13|MMap + Leveled FHE ⇒ iO]]
- [[multilinear-maps-to-witness-encryption-ggsw13|Multilinear No-Exact-Cover ⇒ Witness encryption (GGSW)]] (via [[multilinear-maps#decision-multilinear-no-exact-cover-assumption|Decision Multilinear No-Exact-Cover assumption]])

<!-- END GENERATED participates-in -->
