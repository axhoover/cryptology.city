---
type: reference
status: stub
title: "BDK+18"
source: https://eprint.iacr.org/2017/634
authors: Joppe W. Bos, Léo Ducas, Eike Kiltz, Tancrède Lepoint, Vadim Lyubashevsky, John M. Schanck, Peter Schwabe, Gregor Seiler, Damien Stehlé
venue: IEEE EuroS&P 2018
published: 2018
aliases:
  - BDK+18
cryptobib_key: EUROSP:BDKLLSSSS18
---

# [BDK+18] CRYSTALS - Kyber: A CCA-Secure Module-Lattice-Based KEM

**Authors:** Joppe W. Bos, Léo Ducas, Eike Kiltz, Tancrède Lepoint, Vadim Lyubashevsky, John M. Schanck, Peter Schwabe, Gregor Seiler, Damien Stehlé | **Venue:** IEEE EuroS&P 2018 | [Source](https://eprint.iacr.org/2017/634)

## Abstract

Rapid advances in quantum computing, together with the announcement by the National Institute of Standards and Technology (NIST) to define new standards for digital-signature, encryption, and key-establishment protocols, have created significant interest in post-quantum cryptographic schemes.

This paper introduces Kyber (part of CRYSTALS – Cryptographic Suite for Algebraic Lattices – a package submitted to NIST post-quantum standardization effort in November 2017), a portfolio of post-quantum cryptographic primitives built around a key-encapsulation mechanism (KEM),based on hardness assumptions over module lattices. Our KEM is most naturally seen as a successor to the NewHope KEM (Usenix 2016). In particular, the key and ciphertext sizes of our new construction are about half the size, the KEM offers CCA instead of only passive security, the security is based on a more general (and flexible) lattice problem, and our optimized implementation results in essentially the same running time as the aforementioned scheme.

We first introduce a CPA-secure public-key encryption scheme, apply a variant of the Fujisaki–Okamoto transform to create a CCA-secure KEM, and eventually construct, in a black-box manner, CCA-secure encryption, key exchange, and authenticated-key-exchange schemes. The security of our primitives is based on the hardness of Module-LWE in the classical and quantum random oracle models, and our concrete parameters conservatively target more than $128$ bits of post-quantum security.
