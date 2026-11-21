---
type: reference
status: stub
title: "BOV03"
source: https://eprint.iacr.org/2005/365
authors: Boaz Barak, Shien Jin Ong, Salil P. Vadhan
venue: CRYPTO 2003
published: 2003
aliases:
  - BOV03
cryptobib_key: C:BarOngVad03
---

# [BOV03] Derandomization in Cryptography

**Authors:** Boaz Barak, Shien Jin Ong, Salil P. Vadhan | **Venue:** CRYPTO 2003 | [Source](https://eprint.iacr.org/2005/365)

## Abstract

We give two applications of Nisan–Wigderson-type ("non-cryptographic") pseudorandom generators in cryptography. Specifically, assuming the existence of an appropriate NW-type generator, we construct:

A one-message witness-indistinguishable proof system for every language in NP, based on any trapdoor permutation. This proof system does not assume a shared random string or any setup assumption, so it is actually an "NP proof system."

A noninteractive bit commitment scheme based on any one-way function.

The specific NW-type generator we need is a hitting set generator fooling nondeterministic circuits. It is known how to construct such a generator if ETIME = DTIME(2^O(n)) has a function of nondeterministic circuit complexity $2^{\Omega(n)}$ (Miltersen and Vinodchandran, FOCS '99).

Our witness-indistinguishable proofs are obtained by using the NW-type generator to derandomize the ZAPs of Dwork and Naor (FOCS '00). To our knowledge, this is the first construction of an NP proof system achieving a secrecy property.

Our commitment scheme is obtained by derandomizing the interactive commitment scheme of Naor (J. Cryptology, 1991). Previous constructions of noninteractive commitment schemes were only known under incomparable assumptions.
