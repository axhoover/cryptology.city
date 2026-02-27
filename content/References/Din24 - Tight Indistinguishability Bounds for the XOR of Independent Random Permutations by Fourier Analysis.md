---
title: "Din24"
source: https://eprint.iacr.org/2024/338
authors: Itai Dinur
venue: Eurocrypt 2024
published: 2024-02-26
created: 2025-03-04
aliases:
  - Din24
tags:
  - Eurocrypt

---
# [Din24] Tight Indistinguishability Bounds for the XOR of Independent Random Permutations by Fourier Analysis

**Authors:** Itai Dinur | **Venue:** Eurocrypt 2024 | [Source](https://eprint.iacr.org/2024/338)

## Abstract
The XOR of two independent permutations (XoP) is a well-known construction for achieving security beyond the birthday bound when implementing a pseudorandom function using a block cipher (i.e., a pseudorandom permutation). The idealized construction (where the permutations are uniformly chosen and independent) and its variants have been extensively analyzed over nearly 25 years.

The best-known asymptotic information-theoretic indistinguishability bound for the XoP construction is $O(q/2^{1.5n})$, derived by Eberhard in 2017, where $q$ is the number of queries and $n$ is the block length.

A generalization of the XoP construction outputs the XOR of $r \geq 2$ independent permutations, and has also received significant attention in both the single-user and multi-user settings. In particular, for $r = 3$, the best-known bound (obtained by Choi et al. [ASIACRYPT'22]) is about $q^2/2^{2.5 n}$ in the single-user setting and $\sqrt{u} q_{\max}^2/2^{2.5 n}$ in the multi-user setting (where $u$ is the number of users and $q_{\max}$ is the number of queries per user).

In this paper, we prove an indistinguishability bound of $q/2^{(r - 0.5)n}$ for the (generalized) XoP construction in the single-user setting, and a bound of $\sqrt{u} q_{\max}/2^{(r - 0.5)n}$ in the multi-user setting. In particular, for $r=2$, we obtain the bounds $q/2^{1.5n}$ and $\sqrt{u} q_{\max}/2^{1.5n}$ in single-user and multi-user settings, respectively. For $r=3$ the corresponding bounds are $q/2^{2.5n}$ and $\sqrt{u} q_{\max}/2^{2.5n}$. All of these bounds hold assuming $q < 2^{n/2}$ (or $q_{\max} < 2^{n/2})$.

Compared to previous works, we improve all the best-known bounds for the (generalized) XoP construction in the multi-user setting, and the best-known bounds for the generalized XoP construction for $r\geq 3$ in the single-user setting (assuming $q\geq 2^{n/2}$). For the basic two-permutation XoP construction in the single-user setting, our concrete bound of $q/2^{1.5n}$ stands in contrast to the asymptotic bound of $O(q/2^{1.5n})$ by Eberhard. 

Since all of our bounds are matched (up to constant factors) for $q\geq 2^{n/2}$ by attacks published by Patarin in 2008 (and their generalizations to the multi-user setting), they are all tight. 

We obtain our results by Fourier analysis of Boolean functions. Most of our technical work involves bounding (sums of) Fourier coefficients of the density function associated  with sampling without replacement. While the proof of Eberhard relies on similar bounds, our proof is elementary and simpler.