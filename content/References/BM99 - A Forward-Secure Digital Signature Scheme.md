---
type: reference
status: stub
title: "BM99"
source: https://eprint.iacr.org/1999/016
authors: Mihir Bellare, Sara K. Miner
venue: CRYPTO 1999
published: 1999
aliases:
  - BM99
cryptobib_key: C:BelMin99
---

# [BM99] A Forward-Secure Digital Signature Scheme

**Authors:** Mihir Bellare, Sara K. Miner | **Venue:** CRYPTO 1999 | [Source](https://eprint.iacr.org/1999/016)

## Abstract

We describe a digital signature scheme in which the
public key is fixed but the secret signing key is updated at regular
intervals so as to provide a \<i>forward security\</i> property:
compromise of the current secret key does not enable an adversary to
forge signatures pertaining to the past. This can be useful to
mitigate the damage caused by key exposure without requiring
distribution of keys. Our construction uses ideas from the
Fiat-Shamir and Ong-Schnorr identification and
signature schemes, and is proven to be forward secure based
on the hardness of factoring, in the random oracle model. The
construction is also quite efficient.
