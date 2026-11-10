---
type: reference
status: stub
title: "Bra12"
source: https://eprint.iacr.org/2012/078
authors: Zvika Brakerski
venue: CRYPTO 2012
published: 2012
aliases:
  - Bra12
cryptobib_key: C:Brakerski12
---

# [Bra12] Fully Homomorphic Encryption without Modulus Switching from Classical GapSVP

**Authors:** Zvika Brakerski | **Venue:** CRYPTO 2012 | [Source](https://eprint.iacr.org/2012/078)

## Abstract

We present a new tensoring technique for LWE-based fully homomorphic encryption. While in all previous works, the ciphertext noise grows quadratically ($B \to B^2\cdot\poly(n)$) with every multiplication (before “refreshing”), our noise only grows linearly ($B \to B\cdot\poly(n)$).

We use this technique to construct a _scale-invariant_ fully homomorphic encryption scheme, whose properties only depend on the ratio between the modulus $q$ and the initial noise level $B$, and not on their absolute values.

Our scheme has a number of advantages over previous candidates: It uses the same modulus throughout the evaluation process (no need for “modulus switching”), and this modulus can take arbitrary form, including a power of $2$ which carries obvious advantages for implementation. In addition, security can be _classically_ reduced to the worst-case hardness of the GapSVP problem (with quasi-polynomial approximation factor), whereas previous constructions could only exhibit a quantum reduction to GapSVP.
