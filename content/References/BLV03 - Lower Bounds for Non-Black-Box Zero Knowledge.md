---
type: reference
status: stub
title: "BLV03"
source: https://eprint.iacr.org/2004/226
authors: Boaz Barak, Yehuda Lindell, Salil P. Vadhan
venue: FOCS 2003
published: 2003
aliases:
  - BLV03
cryptobib_key: FOCS:BarLinVad03
---

# [BLV03] Lower Bounds for Non-Black-Box Zero Knowledge

**Authors:** Boaz Barak, Yehuda Lindell, Salil P. Vadhan | **Venue:** FOCS 2003 | [Source](https://eprint.iacr.org/2004/226)

## Abstract

We show new lower bounds and impossibility results for general (possibly _non-black-box_) zero-knowledge proofs and arguments. Our main results are that, under reasonable complexity assumptions:

1. There does not exist a two-round zero-knowledge _proof_ system with perfect completeness for an NP-complete language. The previous impossibility result for two-round zero knowledge, by Goldreich and Oren (J. Cryptology, 1994) was only for the case of _auxiliary-input_ zero-knowledge proofs and arguments.

2. There does not exist a constant-round zero-knowledge _strong_ proof or argument of knowledge (as defined by Goldreich (2001)) for a nontrivial language.

3. There does not exist a constant-round public-coin _proof_ system for a nontrivial language that is _resettable zero knowledge_. This result also extends to "bounded-resettable" zero knowledge, in which the number of resets is a priori bounded by a polynomial in the input length and prover-to-verifier communication. In contrast, we show that under reasonable assumptions, there does exist such a (computationally sound) _argument_ system that is bounded-resettable zero knowledge.

The complexity assumptions we use are not commonly used in cryptography. However, in all cases, we show that assumptions similar to ours are necessary for the above results.

Most previously known lower bounds, such as those of Goldreich and Krawczyk (SIAM J. Computing, 1996), were only for _black-box_ zero knowledge. However, a result of Barak (FOCS 2001) shows that many (or even most) of these black-box lower bounds do _not_ extend to the case of general zero knowledge.
