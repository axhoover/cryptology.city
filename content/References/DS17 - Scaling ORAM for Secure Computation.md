---
type: reference
status: stub
title: "DS17"
source: https://eprint.iacr.org/2017/827
authors: Jack Doerner, abhi shelat
venue: CCS 2017
published: 2017
aliases:
  - DS17
  - Floram
cryptobib_key: CCS:Doeshe17
---

# [DS17] Scaling ORAM for Secure Computation

**Authors:** Jack Doerner, abhi shelat | **Venue:** CCS 2017 | [Source](https://eprint.iacr.org/2017/827)

## Abstract

We design and implement a Distributed Oblivious Random Access Memory (ORAM) data structure that is optimized for use in two-party secure computation protocols. We improve upon the access time of previous constructions by a factor of up to ten, their memory overhead by a factor of one hundred or more, and their initialization time by a factor of thousands. We are able to instantiate ORAMs that hold $2^{34}$ bytes, and perform operations on them in seconds, which was not previously feasible with any implemented scheme.

Unlike prior ORAM constructions based on hierarchical hashing, permutation, or trees, our Distributed ORAM is derived from the new Function Secret Sharing scheme introduced by Boyle, Gilboa and Ishai. This significantly reduces the amount of secure computation required to implement an ORAM access, albeit at the cost of $O(n)$ efficient local memory operations.

We implement our construction and find that, despite its poor $O(n)$ asymptotic complexity, it still outperforms the fastest previously known constructions, Circuit ORAM and Square-root ORAM, for datasets that are 32 KiB or larger, and outperforms prior work on applications such as stable matching or binary search by factors of two to ten.
