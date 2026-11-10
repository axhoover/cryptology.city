---
type: reference
status: stub
title: "CGM24b"
source: https://eprint.iacr.org/2024/1098
authors: Dario Catalano, Emanuele Giunta, Francesco Migliaro
venue: CRYPTO 2024
published: 2024
aliases:
  - CGM24b
cryptobib_key: C:CatGiuMig24
---

# [CGM24b] Limits of Black-Box Anamorphic Encryption

**Authors:** Dario Catalano, Emanuele Giunta, Francesco Migliaro | **Venue:** CRYPTO 2024 | [Source](https://eprint.iacr.org/2024/1098)

## Abstract

(Receiver) Anamorphic encryption, introduced by Persiano _et al._ at Eurocrypt 2022, considers the question of achieving private communication in a world where secret decryption keys are under the control of a dictator. The challenge here is to be able to establish a secret communication channel to exchange covert (i.e. anamorphic) messages on top of some already deployed public key encryption scheme.

Over the last few years several works addressed this challenge by showing new constructions, refined notions and extensions.
Most of these constructions, however, are either ad hoc, in the sense that they build upon specific properties of the underlying PKE, or impose severe restrictions on the size of the underlying anamorphic message space.

In this paper we consider the question of whether it is possible to have realizations of the primitive that are both generic and allow for large anamorphic message spaces. We give strong indications that, unfortunately, this is not the case.

Our first result shows that _any black-box realization_ of the primitive, i.e. any realization that accesses the underlying PKE only via oracle calls, _must_ have an anamorphic message space of size at most $poly(\lambda)$ ($\lambda$ security parameter).

Even worse, if one aims at stronger variants of the primitive (and, specifically, the notion of asymmetric anamorphic encryption, recently proposed by Catalano _et al._) we show that such black-box realizations are plainly impossible, i.e. no matter how small the anamorphic message space is.

Finally, we show that our impossibility results are rather tight: indeed, by making more specific assumptions on the underlying PKE, it becomes possible to build generic AE where the anamorphic message space is of size $\Omega(2^\lambda)$.
