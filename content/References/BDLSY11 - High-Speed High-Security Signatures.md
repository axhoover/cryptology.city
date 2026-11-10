---
type: reference
status: stub
title: "BDLSY11"
source: https://eprint.iacr.org/2011/368
authors: Daniel J. Bernstein, Niels Duif, Tanja Lange, Peter Schwabe, Bo-Yin Yang
venue: CHES 2011
published: 2011
aliases:
  - BDLSY11
cryptobib_key: CHES:BDLSY11
---

# [BDLSY11] High-Speed High-Security Signatures

**Authors:** Daniel J. Bernstein, Niels Duif, Tanja Lange, Peter Schwabe, Bo-Yin Yang | **Venue:** CHES 2011 | [Source](https://eprint.iacr.org/2011/368)

## Abstract

This paper shows that a \$390 mass-market quad-core 2.4GHz Intel Westmere (Xeon E5620) CPU can create 109000 signatures per second and verify 71000 signatures per second on an elliptic curve at a 2^128 security level. Public keys are 32 bytes, and signatures are 64 bytes. These performance figures include strong defenses against software side-channel attacks: there is no data flow from secret keys to array indices, and there is no data flow from secret keys to branch conditions.
