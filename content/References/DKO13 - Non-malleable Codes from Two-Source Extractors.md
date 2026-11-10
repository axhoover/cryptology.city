---
type: reference
status: stub
title: "DKO13"
source: https://eprint.iacr.org/2013/498
authors: Stefan Dziembowski, Tomasz Kazana, Maciej Obremski
venue: CRYPTO 2013
published: 2013
aliases:
  - DKO13
cryptobib_key: C:DziKazObr13
---

# [DKO13] Non-malleable Codes from Two-Source Extractors

**Authors:** Stefan Dziembowski, Tomasz Kazana, Maciej Obremski | **Venue:** CRYPTO 2013 | [Source](https://eprint.iacr.org/2013/498)

## Abstract

We construct an efficient information-theoretically non-malleable code in the split-state model for one-bit messages. Non-malleable codes were introduced recently by Dziembowski, Pietrzak and Wichs (ICS 2010), as a general tool for storing messages securely on hardware that can be subject to tampering attacks. Informally, a code $(Enc : \calM \rightarrow \calL \times \calR, Dec : \calL \times \calR \rightarrow \calM)$ is _non-malleable in the split-state model_ if any adversary, by manipulating _independently_ $L$ and $R$ (where $(L,R)$ is an encoding of some message $M$), cannot obtain an encoding of a message $M'$ that is not equal to $M$ but is “related” $M$ in some way. Until now it was unknown how to construct an information-theoretically secure code with such a property, even for $\cal M = \{0,1\}$. Our construction solves this problem. Additionally, it is leakage-resilient, and the amount of leakage that we can tolerate can be an arbitrary fraction $\xi < {1}/{4}$ of the length of the codeword. Our code is based on the inner-product two-source extractor, but in general it can be instantiated by any two-source extractor that has large output and has the property of being _flexible_, which is a new notion that we define.

We also show that the non-malleable codes for one-bit messages have an equivalent, perhaps simpler characterization, namely such codes can be defined as follows: if $M$ is chosen uniformly from $\{0,1\}$ then the probability (in the experiment described above) that the output message $M'$ is not equal to $M$ can be at most $1/2 + \epsilon$.
