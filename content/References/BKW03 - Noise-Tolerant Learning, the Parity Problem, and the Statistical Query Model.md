---
type: reference
status: stub
title: "BKW03"
source: https://arxiv.org/abs/cs/0010022
authors: Avrim Blum, Adam Kalai, Hal Wasserman
venue: Journal of the ACM 2003
published: 2003
aliases:
  - BKW03
bibtex: |
  @article{BKW03,
    author  = {Avrim Blum and Adam Kalai and Hal Wasserman},
    title   = {Noise-Tolerant Learning, the Parity Problem, and the Statistical Query Model},
    journal = {Journal of the ACM},
    volume  = {50},
    number  = {4},
    pages   = {506--519},
    year    = {2003},
  }
---

# [BKW03] Noise-Tolerant Learning, the Parity Problem, and the Statistical Query Model

**Authors:** Avrim Blum, Adam Kalai, Hal Wasserman | **Venue:** Journal of the ACM 2003 | [Source](https://arxiv.org/abs/cs/0010022)

## Abstract

We describe a slightly sub-exponential time algorithm for learning parity functions in the presence of random classification noise. This results in a polynomial-time algorithm for the case of parity functions that depend on only the first O(log n log log n) bits of input. This is the first known instance of an efficient noise-tolerant algorithm for a concept class that is provably not learnable in the Statistical Query model of Kearns. Thus, we demonstrate that the set of problems learnable in the statistical query model is a strict subset of those problems learnable in the presence of noise in the PAC model.

In coding-theory terms, what we give is a poly(n)-time algorithm for decoding linear k by n codes in the presence of random noise for the case of k = c log n loglog n for some c > 0. (The case of k = O(log n) is trivial since one can just individually check each of the 2^k possible messages and choose the one that yields the closest codeword.)

A natural extension of the statistical query model is to allow queries about statistical properties that involve t-tuples of examples (as opposed to single examples). The second result of this paper is to show that any class of functions learnable (strongly or weakly) with t-wise queries for t = O(log n) is also weakly learnable with standard unary queries. Hence this natural extension to the statistical query model does not increase the set of weakly learnable functions.
