---
title: "BSW07"
source: https://eprint.iacr.org/2007/203
authors: John Bethencourt, Amit Sahai, Brent Waters
venue: IEEE S&P 2007
published: 2007-05-01
aliases:
  - BSW07
tags:
  - S&P
cryptobib_key: SP:BetSahWat07
---

# [BSW07] Ciphertext-Policy Attribute-Based Encryption

**Authors:** John Bethencourt, Amit Sahai, Brent Waters | **Venue:** IEEE S&P 2007 | [Source](https://eprint.iacr.org/2007/203)

## Abstract

In several distributed system and network settings, we want to encrypt a message for anyone who satisfies a certain role-based access control policy. In this work, we present the concept of Ciphertext-Policy Attribute-Based Encryption (CP-ABE). In our system, a user's private key is associated with an arbitrary number of attributes expressed as strings. A party encrypting data can specify an access policy over these attributes: only users whose attributes satisfy the policy can decrypt. Our scheme is more expressive than previous work since we allow any monotone formula over any number of attributes as an access policy, and allow arbitrarily many attributes per user. We prove our scheme secure in the generic group model. This work serves as the first concrete instantiation of the CP-ABE concept, establishing its feasibility and demonstrating several practical applications in distributed access control.
