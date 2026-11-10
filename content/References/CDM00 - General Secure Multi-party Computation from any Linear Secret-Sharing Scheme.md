---
type: reference
status: stub
title: "CDM00"
source: https://eprint.iacr.org/2000/037
authors: Ronald Cramer, Ivan Damgård, Ueli M. Maurer
venue: Eurocrypt 2000
published: 2000
aliases:
  - CDM00
cryptobib_key: EC:CraDamMau00
---

# [CDM00] General Secure Multi-party Computation from any Linear Secret-Sharing Scheme

**Authors:** Ronald Cramer, Ivan Damgård, Ueli M. Maurer | **Venue:** Eurocrypt 2000 | [Source](https://eprint.iacr.org/2000/037)

## Abstract

We show that verifiable secret sharing (VSS) and secure multi-party
computation (MPC) among a set of $n$ players can efficiently be based
on _any_ linear secret sharing scheme (LSSS) for the players,
provided that the access structure of the LSSS allows MPC or VSS at
all. Because an LSSS neither guarantees reconstructability when some
shares are false, nor verifiability of a shared value, nor allows for
the multiplication of shared values, an LSSS is an apparently much weaker
primitive than VSS or MPC.

Our approach to secure MPC is generic and applies to both the
information-theoretic and the cryptographic setting. The
construction is based on 1) a formalization of the special
multiplicative property of an LSSS that is needed to perform a
multiplication on shared values, 2) an efficient generic construction
to obtain from any LSSS a multiplicative LSSS for the same access
structure, and 3) an efficient generic construction to build
verifiability into every LSSS (always assuming that the adversary
structure allows for MPC or VSS at all).

The protocols are efficient. In contrast to all previous
information-theoretically secure protocols, the field size is not
restricted (e.g, to be greater than $n$). Moreover, we exhibit
adversary structures for which our protocols are polynomial in $n$
while all previous approaches to MPC for non-threshold adversaries
provably have super-polynomial complexity.
