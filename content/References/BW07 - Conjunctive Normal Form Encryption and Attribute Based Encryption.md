---
title: "BW07"
source: https://eprint.iacr.org/2006/465
authors: Dan Boneh, Brent Waters
venue: TCC 2007
published: 2007-02-01
aliases:
  - BW07
tags:
  - TCC
---

# [BW07] Conjunctive, Subset, and Range Queries on Encrypted Data

**Authors:** Dan Boneh, Brent Waters | **Venue:** TCC 2007 | [Source](https://eprint.iacr.org/2006/465)

## Abstract

We construct public-key systems that support comparison queries ($x > y$), subset queries ($x \in S$), and more general conjunctive queries on encrypted data. Our schemes support arbitrarily many conjunctive queries on an encrypted record, and we prove security against a collusion attack: even if an adversary sees many private keys, one for each query, the adversary cannot combine them to decrypt records that do not satisfy any of the individual queries. The schemes handle comparisons on encrypted data where the data is mapped to a hidden vector space, and we give a general construction for any conjunctive inner-product predicate. This primitive, which we call Hidden Vector Encryption (HVE), may be of independent interest. We prove security without random oracles assuming the decisional bilinear Diffie-Hellman and decisional linear assumptions.
