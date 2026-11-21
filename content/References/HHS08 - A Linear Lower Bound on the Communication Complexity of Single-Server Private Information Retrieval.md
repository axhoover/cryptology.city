---
type: reference
status: stub
title: "HHS08"
source: https://eprint.iacr.org/2007/351
authors: Iftach Haitner, Jonathan J. Hoch, Gil Segev
venue: TCC 2008
published: 2008
aliases:
  - HHS08
cryptobib_key: TCC:HaiHocSeg08
---

# [HHS08] A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval

**Authors:** Iftach Haitner, Jonathan J. Hoch, Gil Segev | **Venue:** TCC 2008 | [Source](https://eprint.iacr.org/2007/351)

## Abstract

We study the communication complexity of single-server Private Information Retrieval (PIR) protocols that are based on fundamental cryptographic primitives in a black-box manner. In this setting, we establish a tight lower bound on the number of bits communicated by the server in any polynomially-preserving construction that relies on trapdoor permutations. More specifically, our main result states that in such constructions $\Omega(n)$ bits must be communicated by the server, where $n$ is the size of the server's database, and this improves the $\Omega(n / \log n)$ lower bound due to Haitner, Hoch, Reingold and Segev (FOCS '07). Therefore, in the setting under consideration, the naive solution in which the user downloads the entire database turns out to be optimal up to constant multiplicative factors. We note that the lower bound we establish holds for the most generic form of trapdoor permutations, including in particular enhanced trapdoor
permutations.

Technically speaking, this paper consists of two main contributions from which our lower bound is obtained. First, we derive a tight lower bound on the number of bits communicated by the sender during the commit stage of any black-box construction of a statistically-hiding bit-commitment scheme from a family of trapdoor permutations. This lower bound asymptotically matches the upper bound provided by the scheme of Naor, Ostrovsky, Venkatesan and Yung (CRYPTO '92). Second, we improve the efficiency of the reduction of statistically-hiding commitment schemes to low-communication single-server PIR, due to Beimel, Ishai, Kushilevitz and Malkin (STOC '99). In particular, we present a reduction that essentially preserves the communication complexity of the underlying single-server PIR protocol.
