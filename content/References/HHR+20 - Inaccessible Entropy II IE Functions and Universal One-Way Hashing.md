---
type: reference
status: draft
title: "HHR+20"
source: https://arxiv.org/abs/2105.01459
authors: Iftach Haitner, Thomas Holenstein, Omer Reingold, Salil Vadhan, Hoeteck Wee
venue: Theory of Computing 2020
published: 2020
aliases:
  - HHR+20
bibtex: |
  @article{HHR+20,
    author  = {Iftach Haitner and Thomas Holenstein and Omer Reingold and Salil P. Vadhan and Hoeteck Wee},
    title   = {Inaccessible Entropy {II}: {IE} Functions and Universal One-Way Hashing},
    journal = {Theory of Computing},
    volume  = {16},
    pages   = {1--55},
    year    = {2020},
    eprint  = {2105.01459},
    archivePrefix = {arXiv},
    url     = {https://arxiv.org/abs/2105.01459},
  }
---

# [HHR+20] Inaccessible Entropy II: IE Functions and Universal One-Way Hashing

**Authors:** Iftach Haitner, Thomas Holenstein, Omer Reingold, Salil Vadhan, Hoeteck Wee | **Venue:** Theory of Computing 2020 | [Source](https://arxiv.org/abs/2105.01459)

## Abstract

This paper uses a variant of the notion of inaccessible entropy (Haitner, Reingold, Vadhan and Wee, STOC 2009), to give an alternative construction and proof for the fundamental result, first proved by Rompel (STOC 1990), that Universal One-Way Hash Functions (UOWHFs) can be based on any one-way functions. We observe that a small tweak of any one-way function $f$ is already a weak form of a UOWHF: consider the function $F(x, i)$ that returns the $i$-bit-long prefix of $f(x)$. If $F$ were a UOWHF then given a random $x$ and $i$ it would be hard to come up with $x' \neq x$ such that $F(x, i) = F(x', i)$. While this may not be the case, we show (rather easily) that it is hard to sample $x'$ with almost full entropy among all the possible such values of $x'$. The rest of our construction simply amplifies and exploits this basic property. Combined with other recent work, the construction of three fundamental cryptographic primitives (Pseudorandom Generators, Statistically Hiding Commitments and UOWHFs) out of one-way functions is now to a large extent unified. In particular, all three constructions rely on and manipulate computational notions of entropy in similar ways. Pseudorandom Generators rely on the well-established notion of pseudoentropy, whereas Statistically Hiding Commitments and UOWHFs rely on the newer notion of inaccessible entropy. In an additional result we reprove the seminal result of Impagliazzo and Levin (FOCS 1989): a reduction from "uniform distribution" average-case complexity problems to ones with arbitrary (polynomial-time samplable) distributions. We do that using techniques similar to those we use to construct UOWHFs from one-way functions, where the source of this similarity is the use of a notion similar to inaccessible entropy. This draws an interesting connection between two seemingly separate lines of research: average-case complexity and universal one-way hash-functions.

# Notes

The journal version of [[HHR+10 - Universal One-Way Hash Functions via Inaccessible Entropy|HHR+10]]; the arXiv text (v1, May 2021) is the final draft of the Theory of Computing article, volume 16, pages 1–55, as its first-page footnote and reference list give them.
