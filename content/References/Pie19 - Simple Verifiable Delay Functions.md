---
type: reference
status: stub
title: "Pie19"
source: https://eprint.iacr.org/2018/627
authors: Krzysztof Pietrzak
venue: ITCS 2019
published: 2019
aliases:
  - Pie19
cryptobib_key: ITCS:Pietrzak19b
---

# [Pie19] Simple Verifiable Delay Functions

**Authors:** Krzysztof Pietrzak | **Venue:** ITCS 2019 | [Source](https://eprint.iacr.org/2018/627)

## Abstract

We construct a verifable delay function (VDF) by showing how the Rivest-Shamir-Wagner time-lock puzzle can be made publicly verifiable.

Concretely, we give a statistically sound public-coin protocol to prove that a tuple $(N,x,T,y)$ satisfies $y=x^{2^T}\pmod N$ where the prover doesn't know the factorization of $N$ and its running time is dominated by solving the puzzle, that is, compute $x^{2^T}$, which is conjectured to require $T$ sequential squarings. To get a VDF we make this protocol non-interactive using the Fiat-Shamir heuristic.

The motivation for this work comes from the Chia blockchain design, which uses a VDF as a key ingredient. For typical parameters ($T\le 2^{40},N=2048$), our proofs are of size around $10KB$, verification cost around three RSA exponentiations and computing the proof is $8000$ times faster than solving the puzzle even without any parallelism.
