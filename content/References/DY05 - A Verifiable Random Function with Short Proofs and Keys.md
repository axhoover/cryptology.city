---
type: reference
status: stub
title: "DY05"
source: https://eprint.iacr.org/2004/310
authors: Yevgeniy Dodis, Aleksandr Yampolskiy
venue: PKC 2005
published: 2005
aliases:
  - DY05
cryptobib_key: PKC:DodYam05
---

# [DY05] A Verifiable Random Function with Short Proofs and Keys

**Authors:** Yevgeniy Dodis, Aleksandr Yampolskiy | **Venue:** PKC 2005 | [Source](https://eprint.iacr.org/2004/310)

## Abstract

We give a simple and efficient construction of a verifiable random function (VRF) on bilinear groups. Our construction is direct.
In contrast to prior VRF constructions [MRV99, Lys02], it avoids using an inefficient Goldreich-Levin transformation, thereby saving several factors in security. Our proofs of security are based on a decisional bilinear Diffie-Hellman inversion assumption, which seems reasonable given current state of knowledge. For small message spaces, our VRF's proofs and keys have constant size. By utilizing a collision-resistant hash function, our VRF can also be used with arbitrary message spaces. We show that our scheme can be instantiated with an elliptic group of very reasonable size.
Furthermore, it can be made distributed and proactive.
