---
title: "BM84"
source: https://epubs.siam.org/doi/10.1137/0213053
authors: Manuel Blum, Silvio Micali
venue: SIAM Journal on Computing 1984
published: 1984-01-01
aliases:
  - BM84
tags:
  - SIAMJC
cryptobib_key: FOCS:BluMic82
---

# [BM84] How to Generate Cryptographically Strong Sequences of Pseudo-Random Bits

**Authors:** Manuel Blum, Silvio Micali | **Venue:** SIAM Journal on Computing 1984 | [Source](https://epubs.siam.org/doi/10.1137/0213053)

## Abstract

We present a polynomial-time algorithm that, given a short random seed, generates a sequence of pseudo-random bits that is computationally indistinguishable from a truly random sequence. The construction is based on the assumed difficulty of the discrete logarithm problem: given $g^x \bmod p$, it is hard to compute $g^{x-1} \bmod p$ or to predict the most significant bit of $x$. The security of the generator is proved under this assumption. This was the first construction of a cryptographically secure pseudorandom generator based on a concrete computational hardness assumption, introducing the notion of a pseudorandom generator formally and establishing the connection between one-way functions and pseudorandomness that was later generalized by HILL99.
