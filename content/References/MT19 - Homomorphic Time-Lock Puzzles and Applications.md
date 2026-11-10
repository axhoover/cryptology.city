---
type: reference
status: stub
title: "MT19"
source: https://eprint.iacr.org/2019/635
authors: Giulio Malavolta, Sri Aravinda Krishnan Thyagarajan
venue: CRYPTO 2019
published: 2019
aliases:
  - MT19
cryptobib_key: C:MalThy19
---

# [MT19] Homomorphic Time-Lock Puzzles and Applications

**Authors:** Giulio Malavolta, Sri Aravinda Krishnan Thyagarajan | **Venue:** CRYPTO 2019 | [Source](https://eprint.iacr.org/2019/635)

## Abstract

Time-lock puzzles allow one to encrypt messages for the future, by efficiently generating a puzzle with a solution $s$ that remains hidden until time $T$ has elapsed. The solution is required to be concealed from the eyes of any algorithm running in (parallel) time less than $T$.

We put forth the concept of _homomorphic time-lock puzzles_, where one can evaluate functions over puzzles without solving them, i.e., one can manipulate a set of puzzles with solutions $(s_1, \dots, s_n)$ to obtain a puzzle that solves to $f(s_1, \ldots, s_n)$, for any function $f$.
We propose candidate constructions under concrete cryptographic assumptions for different classes of functions. Then we show how homomorphic time-lock puzzles overcome the limitations of classical time-lock puzzles by proposing new protocols for applications of interest, such as e-voting, multi-party coin flipping, and fair contract signing.
