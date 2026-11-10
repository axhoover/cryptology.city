---
type: reference
status: stub
title: "GHR99"
source: https://eprint.iacr.org/1999/013
authors: Rosario Gennaro, Shai Halevi, Tal Rabin
venue: EUROCRYPT 1999
published: 1999
aliases:
  - GHR99
cryptobib_key: EC:GenHalRab99
---

# [GHR99] Secure Hash-and-Sign Signatures Without the Random Oracle

**Authors:** Rosario Gennaro, Shai Halevi, Tal Rabin | **Venue:** EUROCRYPT 1999 | [Source](https://eprint.iacr.org/1999/013)

## Abstract

We present a new signature scheme which is existentially unforgeable
under chosen message attacks, assuming some variant of the RSA conjecture.
This scheme is not based on "signature trees", and instead it uses
the so called "hash-and-sign" paradigm. It is unique in that the
assumptions made on the cryptographic hash function in use are well
defined and reasonable (although non-standard). In particular, we
do not model this function as a random oracle.

We construct our proof of security in steps. First we describe and
prove a construction which operates in the random oracle model. Then
we show that the random oracle in this construction can be replaced
by a hash function which satisfies some strong (but well defined!)
computational assumptions. Finally, we demonstrate that these assumptions
are reasonable, by proving that a function satisfying them exists under
standard intractability assumptions.
