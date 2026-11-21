---
type: reference
status: stub
title: "GSW13"
source: https://eprint.iacr.org/2013/340
authors: Craig Gentry, Amit Sahai, Brent Waters
venue: CRYPTO 2013
published: 2013
aliases:
  - GSW13
cryptobib_key: C:GenSahWat13
---

# [GSW13] Homomorphic Encryption from Learning with Errors: Conceptually-Simpler, Asymptotically-Faster, Attribute-Based

**Authors:** Craig Gentry, Amit Sahai, Brent Waters | **Venue:** CRYPTO 2013 | [Source](https://eprint.iacr.org/2013/340)

## Abstract

We describe a comparatively simple fully homomorphic encryption (FHE) scheme based on the learning with errors (LWE) problem. In previous LWE-based FHE schemes, multiplication is a complicated and expensive step involving "relinearization". In this work, we propose a new technique for building FHE schemes that we call the "approximate eigenvector" method. In our scheme, for the most part, homomorphic addition and multiplication are just matrix addition and multiplication. This makes our scheme both asymptotically faster and (we believe) easier to understand.

In previous schemes, the homomorphic evaluator needs to obtain the user's "evaluation key", which consists of a chain of encrypted secret keys. Our scheme has no evaluation key. The evaluator can do homomorphic operations without knowing the user's public key at all, except for some basic parameters. This fact helps us construct the first identity-based FHE scheme. Using similar techniques, we show how to compile a recent attribute-based encryption scheme for circuits by Gorbunov et al. into an attribute-based FHE scheme that permits data encrypted under the same index to be processed homomorphically.
