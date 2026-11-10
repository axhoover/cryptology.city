---
type: reference
status: stub
title: "HK08"
source: https://eprint.iacr.org/2011/270
authors: Dennis Hofheinz, Eike Kiltz
venue: CRYPTO 2008
published: 2008
aliases:
  - HK08
cryptobib_key: C:HofKil08
---

# [HK08] Programmable Hash Functions and Their Applications

**Authors:** Dennis Hofheinz, Eike Kiltz | **Venue:** CRYPTO 2008 | [Source](https://eprint.iacr.org/2011/270)

## Abstract

We introduce a new combinatorial primitive called _programmable hash functions_ (PHFs). PHFs can be used to _program_ the output of a hash function such that it contains solved or unsolved discrete logarithm instances with a certain probability. This is a technique originally used for security proofs in the random oracle model. We give a variety of _standard model_ realizations of PHFs (with different parameters).

The programmability makes PHFs a suitable tool to obtain black-box proofs of cryptographic protocols when considering adaptive attacks. We propose generic digital signature schemes from the strong RSA problem and from some hardness assumption on bilinear maps that can be
instantiated with any PHF. Our schemes offer various improvements over known constructions. In particular, for a reasonable choice of parameters, we obtain short standard model digital signatures over bilinear maps.
