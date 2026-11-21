---
type: reference
status: stub
title: "OPP14"
source: https://eprint.iacr.org/2013/307
authors: Rafail Ostrovsky, Anat Paskin-Cherniavsky, Beni Paskin-Cherniavsky
venue: CRYPTO 2014
published: 2014
aliases:
  - OPP14
cryptobib_key: C:OstPasPas14
---

# [OPP14] Maliciously Circuit-Private FHE

**Authors:** Rafail Ostrovsky, Anat Paskin-Cherniavsky, Beni Paskin-Cherniavsky | **Venue:** CRYPTO 2014 | [Source](https://eprint.iacr.org/2013/307)

## Abstract

We present a framework for transforming FHE (fully homomorphic encryption) schemes with no circuit privacy requirements into maliciously circuit-private FHE. That is, even if both maliciously formed public key and ciphertext are used, encrypted outputs only reveal the evaluation of the circuit on some well-formed input $x^*$.
Previous literature on FHE only considered semi-honest circuit privacy.
Circuit-private FHE schemes have direct applications to computing on encrypted data. In that setting, one party (a receiver) holding an input $x$ wishes to learn the evaluation of a circuit $C$ held by another party (a sender). The goal is to make receiver's work sublinear (and ideally independent) of $|C|$, using a 2-message protocol.
The transformation technique may be of independent interest, and have various additional applications.
The framework uses techniques akin to Gentry's bootstrapping and conditional disclosure of secrets (CDS [AIR01]) combining a non circuit private FHE scheme, with a homomorphic encryption (HE) scheme for a smaller class of circuits which is maliciously circuit-private.
We devise the first known circuit private FHE, by instantiating our framework by various (standard) FHE schemes from the literature.
