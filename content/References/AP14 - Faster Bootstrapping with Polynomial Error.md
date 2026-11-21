---
type: reference
status: stub
title: "AP14"
source: https://eprint.iacr.org/2014/094
authors: Jacob Alperin-Sheriff, Chris Peikert
venue: CRYPTO 2014
published: 2014
aliases:
  - AP14
cryptobib_key: C:AlpPei14
---

# [AP14] Faster Bootstrapping with Polynomial Error

**Authors:** Jacob Alperin-Sheriff, Chris Peikert | **Venue:** CRYPTO 2014 | [Source](https://eprint.iacr.org/2014/094)

## Abstract

_Bootstrapping_ is a technique, originally due to Gentry (STOC
2009), for “refreshing” ciphertexts of a somewhat homomorphic
encryption scheme so that they can support further homomorphic
operations. To date, bootstrapping remains the only known way of
obtaining fully homomorphic encryption for arbitrary unbounded
computations.

Over the past few years, several works have dramatically improved the
efficiency of bootstrapping and the hardness assumptions needed to
implement it. Recently, Brakerski and Vaikuntanathan (ITCS 2014)
reached the major milestone of a bootstrapping algorithm based on
Learning With Errors for _polynomial_ approximation factors.
Their method uses the Gentry-Sahai-Waters (GSW)
cryptosystem (CRYPTO 2013) in conjunction with Barrington's “circuit
sequentialization” theorem (STOC 1986). This approach, however,
results in _very large_ polynomial runtimes and approximation
factors. (The approximation factors can be improved, but at even
greater costs in runtime and space.)

In this work we give a new bootstrapping algorithm whose runtime and
associated approximation factor are both _small_ polynomials.
Unlike most previous methods, ours implements an elementary and
efficient _arithmetic_ procedure, thereby avoiding the
inefficiencies inherent to the use of boolean circuits and
Barrington's Theorem. For $2^{\lambda}$ security under conventional
lattice assumptions, our method requires only a _quasi-linear_
$\tilde{O}(\lambda)$ number of homomorphic operations on GSW ciphertexts,
which is optimal (up to polylogarithmic factors) for schemes that
encrypt just one bit per ciphertext. As a contribution of independent
interest, we also give a technically simpler variant of the GSW system
and a tighter error analysis for its homomorphic operations.
