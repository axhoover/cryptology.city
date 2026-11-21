---
type: reference
status: draft
title: "CD22"
source: https://eprint.iacr.org/2022/975
authors: Wouter Castryck, Thomas Decru
venue: EUROCRYPT 2023
published: 2022
aliases:
  - CD22
cryptobib_key: EC:CasDec23
---

# [CD22] An Efficient Key Recovery Attack on SIDH

**Authors:** Wouter Castryck, Thomas Decru | **Venue:** EUROCRYPT 2023 | [Source](https://eprint.iacr.org/2022/975)

## Abstract

We present an efficient key recovery attack on the Supersingular Isogeny Diffie-Hellman protocol (SIDH). The attack is based on Kani's "reducibility criterion" for isogenies from products of elliptic curves and strongly relies on the torsion point images that Alice and Bob exchange during the protocol. If we assume knowledge of the endomorphism ring of the starting curve then the classical running time is polynomial in the input size (heuristically), apart from the factorization of a small number of integers that only depend on the system parameters. The attack is particularly fast and easy to implement if one of the parties uses 2-isogenies and the starting curve comes equipped with a non-scalar endomorphism of very small degree; this is the case for SIKE, the instantiation of SIDH that recently advanced to the fourth round of NIST's standardization effort for post-quantum cryptography. Our Magma implementation breaks SIKEp434, which aims at security level 1, in about ten minutes on a single core.
