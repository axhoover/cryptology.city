---
type: reference
status: draft
title: "KRS25"
source: https://eprint.iacr.org/2025/118
authors: Dmitry Khovratovich, Ron D. Rothblum, Lev Soukhanov
venue: CRYPTO 2025
published: 2025-01-01
aliases:
  - KRS25
cryptobib_key: C:KhoRotSou25
---

# [KRS25] How to Prove False Statements: Practical Attacks on Fiat-Shamir

**Authors:** Dmitry Khovratovich, Ron D. Rothblum, Lev Soukhanov | **Venue:** CRYPTO 2025 | [Source](https://eprint.iacr.org/2025/118)

## Abstract

The Fiat-Shamir (FS) transform is a prolific and powerful technique for compiling public-coin interactive protocols into non-interactive ones. Roughly speaking, the idea is to replace the random coins of the verifier with the evaluations of a complex hash function.

The FS transform is known to be sound in the random oracle model (i.e., when the hash function is modeled as a totally random function). However, when instantiating the random oracle using a concrete hash function, there are examples of protocols in which the transformation is not sound. So far all of these examples have been contrived protocols that were specifically designed to fail.

In this work we show such an attack for a standard and popular interactive succinct argument, based on the GKR protocol, for verifying the correctness of a non-determinstic bounded-depth computation. For every choice of FS hash function, we show that a corresponding instantiation of this protocol, which was been widely studied in the literature and used also in practice, is not (adaptively) sound when compiled with the FS transform. Specifically, we construct an explicit circuit for which we can generate an accepting proof for a false statement.

We further extend our attack and show that for every circuit $C$ and desired output $y$, we can construct a functionally equivalent circuit $C^*$, for which we can produce an accepting proof that $C^*$ outputs $y$ (regardless of whether or not this statement is true). This demonstrates that any security guarantee (if such exists) would have to depend on the specific implementation of the circuit $C$, rather than just its functionality.

Lastly, we also demonstrate versions of the attack that violate non-adaptive soundness of the protocol – that is, we generate an attacking circuit that is independent of the underlying cryptographic objects. However, these versions are either less practical (as the attacking circuit has very large depth) or make some additional (reasonable) assumptions on the underlying cryptographic primitives.
