---
type: reference
status: draft
title: "Wat11"
source: https://eprint.iacr.org/2008/290
authors: Brent Waters
venue: PKC 2011
published: 2011-03-01
aliases:
  - Wat11
bibtex: |
  @inproceedings{Wat11,
    author    = {Brent Waters},
    title     = {Ciphertext-Policy Attribute-Based Encryption: An Expressive, Efficient, and Provably Secure Realization},
    booktitle = {Public-Key Cryptography --- PKC 2011},
    series    = {Lecture Notes in Computer Science},
    volume    = {6571},
    pages     = {53--70},
    publisher = {Springer},
    year      = {2011},
    url       = {https://eprint.iacr.org/2008/290}
  }
---

# [Wat11] Ciphertext-Policy Attribute-Based Encryption: An Expressive, Efficient, and Provably Secure Realization

**Authors:** Brent Waters | **Venue:** PKC 2011 | [Source](https://eprint.iacr.org/2008/290)

## Abstract

We present a new methodology for realizing Ciphertext-Policy Attribute
Encryption (CP-ABE) under concrete and noninteractive cryptographic
assumptions in the standard model. Our solutions allow any encryptor
to specify access control in terms of any access formula over the
attributes in the system. In our most efficient system, ciphertext size, encryption,
and decryption time scales linearly with the complexity of the access
formula. The only previous work to achieve these parameters was
limited to a proof in the generic group model.

We present three constructions within our framework.
Our first system is proven selectively secure under a assumption that
we call the decisional Parallel Bilinear Diffie-Hellman Exponent
(PBDHE) assumption which can be viewed as a generalization of the BDHE
assumption. Our next two constructions
provide performance tradeoffs to achieve provable security
respectively under the (weaker) decisional Bilinear-Diffie-Hellman
Exponent and decisional Bilinear Diffie-Hellman assumptions.
