---
type: reference
status: stub
title: "GKW17b"
source: https://eprint.iacr.org/2017/123
authors: Rishab Goyal, Venkata Koppula, Brent Waters
venue: PKC 2017
published: 2017
aliases:
  - GKW17b
cryptobib_key: PKC:GoyKopWat17
---

# [GKW17b] Separating IND-CPA and Circular Security for Unbounded Length Key Cycles

**Authors:** Rishab Goyal, Venkata Koppula, Brent Waters | **Venue:** PKC 2017 | [Source](https://eprint.iacr.org/2017/123)

## Abstract

A public key encryption scheme is said to be n-circular secure if no PPT adversary can distinguish between encryptions of an n length key cycle and n encryptions of zero.

One interesting question is whether circular security comes for free from IND-CPA security. Recent works have addressed this question, showing that for all integers n, there exists an IND-CPA scheme that is not n-circular secure. However, this leaves open the possibility that for every IND-CPA cryptosystem, there exists a cycle length l, dependent on the cryptosystem (and the security parameter) such that the scheme is l-circular secure. If this is true, then this would directly lead to many applications, in particular, it would give us a fully homomorphic encryption scheme via Gentry’s bootstrapping.

In this work, we show that is not true. Assuming indistinguishability obfuscation and leveled homomorphic encryption, we construct an IND-CPA scheme such that for all cycle lengths l, the scheme is not l-circular secure.
