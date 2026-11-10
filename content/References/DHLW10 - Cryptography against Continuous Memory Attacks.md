---
type: reference
status: stub
title: "DHLW10"
source: https://eprint.iacr.org/2010/196
authors: Yevgeniy Dodis, Kristiyan Haralambiev, Adriana López-Alt, Daniel Wichs
venue: FOCS 2010
published: 2010
aliases:
  - DHLW10
cryptobib_key: FOCS:DHLW10
---

# [DHLW10] Cryptography against Continuous Memory Attacks

**Authors:** Yevgeniy Dodis, Kristiyan Haralambiev, Adriana López-Alt, Daniel Wichs | **Venue:** FOCS 2010 | [Source](https://eprint.iacr.org/2010/196)

## Abstract

We say that a cryptographic scheme is Continous Leakage-Resilient (CLR), if it allows users to refresh their secret keys, using only fresh local randomness, such that:

1. The scheme remains functional after any number of key refreshes, although the public key never changes. Thus, the “outside world” is neither affected by these key refreshes, nor needs to know about their frequency.

2. The scheme remains secure even if the adversary can continuously leak arbitrary information about the current secret-key of the system, as long as the amount of leaked information is bounded in between any two successive key refreshes. There is no bound on the total amount of information that can be leaked during the lifetime of the system.

In this work, we construct a variety of practical CLR schemes, including CLR one-way relations, CLR signatures, CLR identification schemes, and CLR authenticated key agreement protocols. For each of the above, we give general constructions, and then show how to instantiate them efficiently using a well established assumption on bilinear groups, called the K-Linear assumption (for any constant K >= 1).
Our constructions are highly modular, and we develop many interesting techniques and building-blocks along the way, including: leakage-indistinguishable re-randomizable relations, homomorphic NIZKs, and leakage-of-ciphertext non-malleable encryption schemes.

Prior to our work, no “truly CLR” schemes were known, as previous leakage-resilient schemes suffer from one or more of the following drawbacks: (a) restrictions are placed on the type of allowed leakage, such as the axiom that “only computation leaks information”; (b) the overall amount of key leakage is bounded a-priori for the lifetime
of the system and there is no method for refreshing keys ; (c) the efficiency of the scheme degrades proportionally with the number of refreshes; (d) the key updates require an additional leak-free “master secret key” to be stored securely; (e) the scheme is only proven secure under a strong non-standard assumption.
