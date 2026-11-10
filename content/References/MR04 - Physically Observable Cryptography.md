---
type: reference
status: stub
title: "MR04"
source: https://eprint.iacr.org/2003/120
authors: Silvio Micali, Leonid Reyzin
venue: TCC 2004
published: 2004
aliases:
  - MR04
cryptobib_key: TCC:MicRey04
---

# [MR04] Physically Observable Cryptography

**Authors:** Silvio Micali, Leonid Reyzin | **Venue:** TCC 2004 | [Source](https://eprint.iacr.org/2003/120)

## Abstract

Complexity-theoretic cryptography considers only abstract notions of computation, and hence cannot protect against attacks that exploit the information leakage (via electromagnetic fields, power consumption, etc.) inherent in the physical execution of any cryptographic algorithm. Such "physical observation attacks" bypass the impressive barrier of mathematical security erected so far, and successfully break mathematically impregnable systems. The great practicality and the inherent availability of physical attacks threaten the very relevance of complexity-theoretic security.

To respond to the present crisis, we put forward physically observable cryptography: a powerful, comprehensive, and precise model for defining and delivering cryptographic security against an adversary that has access to information leaked from the physical execution of cryptographic algorithms.

Our general model allows for a variety of adversaries. In this paper, however, we focus on the strongest possible adversary, so as to capture what is cryptographically possible in the worst possible, physically observable setting. In particular, we

-- consider an adversary that has full (and indeed adaptive) access to any leaked information;

-- show that some of the basic theorems and intuitions of traditional cryptography no longer hold in a physically observable setting; and

-- construct pseudorandom generators that are provably secure against all physical-observation attacks.

Our model makes it easy to meaningfully restrict the power of our general physically observing adversary. Such restrictions may enable schemes that are more efficient or rely on weaker assumptions, while retaining security against meaningful physical observations attacks.
