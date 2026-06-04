---
title: "CHW26"
source: https://eprint.iacr.org/2026/384
authors: Corrigan-Gibbs, Henry; Henzinger, Alexandra; Wu, David J.
venue: Eurocrypt 2026
published: 2026-01-01
aliases:
  - CHW26
tags:
  - Eurocrypt
bibtex: |
  @misc{CHW26,
    author       = {Henry Corrigan-Gibbs and Alexandra Henzinger and David J. Wu},
    title        = {The Structured Generic-Group Model},
    howpublished = {Cryptology ePrint Archive, Paper 2026/384},
    year         = {2026},
    url          = {https://eprint.iacr.org/2026/384}
  }
---

# [CHW26] The Structured Generic-Group Model

**Authors:** Corrigan-Gibbs, Henry; Henzinger, Alexandra; Wu, David J. | **Venue:** Eurocrypt 2026 | [Source](https://eprint.iacr.org/2026/384)

## Abstract

This paper extends Shoup's generic group model to analyze algorithms that exploit non-generic structure of the group. In the structured GGM, an adversary is allowed to exploit the special structure of at most a $\delta$ fraction of group elements, while remaining generic on the rest. The main result is that any discrete-logarithm algorithm in a group of prime order $p$ that exploits structure in at most a $\delta$ fraction of elements must run in time $\Omega(\min(\sqrt{p},\, 1/\delta))$. This yields tight subexponential lower bounds against index-calculus-style algorithms that exploit smooth-integer multiplicative structure, bridging the gap between fully generic lower bounds and structured algorithm analyses.
