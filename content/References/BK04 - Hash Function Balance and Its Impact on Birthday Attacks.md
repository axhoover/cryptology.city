---
type: reference
status: draft
title: "BK04"
source: https://eprint.iacr.org/2003/065
authors: Mihir Bellare, Tadayoshi Kohno
venue: EUROCRYPT 2004
published: 2004
aliases:
  - BK04
cryptobib_key: EC:BelKoh04
---

# [BK04] Hash Function Balance and Its Impact on Birthday Attacks

**Authors:** Mihir Bellare, Tadayoshi Kohno | **Venue:** EUROCRYPT 2004 | [Source](https://eprint.iacr.org/2003/065)

## Abstract

Textbooks tell us that a birthday attack on a hash function $h$ with range size $r$ requires $r^{1/2}$ trials (hash computations) to find a collision. But this is misleading, being true only if $h$ is regular, meaning all points in the range have the same number of pre-images under $h$; if $h$ is not regular, _fewer_ trials may be required. But how much fewer? This paper addresses this question by introducing a measure of the "amount of regularity" of a hash function that we call its balance, and then providing estimates of the success-rate of the birthday attack as a function of the balance of the hash function being attacked. In particular, we will see that the number of trials to find a collision can be significantly less than $r^{1/2}$ for hash functions of low balance. This leads us to examine popular design principles, such as the MD (Merkle-Damgård) transform, from the point of view of balance preservation, and to mount experiments to determine the balance of popular hash functions.
