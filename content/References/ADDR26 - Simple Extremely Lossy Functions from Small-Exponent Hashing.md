---
type: reference
status: stub
title: "ADDR26"
source: https://arxiv.org/abs/2610.07351
authors: Damiano Abram, Agni Datta, Archisman Dutta, Lawrence Roy
venue: arXiv 2026
published: 2026-10-05
aliases:
  - ADDR26
bibtex: |
  @misc{ADDR26,
    author       = {Damiano Abram and Agni Datta and Archisman Dutta and Lawrence Roy},
    title        = {Simple Extremely Lossy Functions from Small-Exponent Hashing},
    howpublished = {arXiv:2610.07351},
    year         = {2026},
    url          = {https://arxiv.org/abs/2610.07351}
  }
---

# [ADDR26] Simple Extremely Lossy Functions from Small-Exponent Hashing

**Authors:** Damiano Abram, Agni Datta, Archisman Dutta, Lawrence Roy | **Venue:** arXiv 2026 | [Source](https://arxiv.org/abs/2610.07351)

## Abstract

Extremely Lossy Functions (ELFs) are a standard model primitive that captures many useful properties of random oracles (Zhandry, Crypto 2016). While there are many variations of ELFs with additional properties, every construction (excluding obfuscation) has followed essentially the same template of bootstrapping from a sequence of ELFs secure only against fixed-size adversaries, and every construction was based on only the exponential hardness of DDH (or $k$-Lin), an assumption that is only reasonable over elliptic curves. We introduce and construct Extremely Lossy Trapdoor Hashing (ELTDH), a stronger notion that implies all known variations of ELFs. Our construction achieves ELTDH in one go, without bootstrapping from schemes secure for only fixed-size adversaries, which makes it simpler and more efficient than existing ELFs. We assume exponential security of the small-exponent discrete logarithm, together with polynomial security of decisional composite residuosity (DCR). Exponential security is only required in the size of the secret exponent, not the size of the group, so the assumption plausibly holds for multiplication modulo $N^2$ (and for many other cryptographic groups), despite the subexponential-time discrete logarithm attacks from index calculus. Our results diversify the assumptions underlying ELFs, while also giving a simpler construction.
