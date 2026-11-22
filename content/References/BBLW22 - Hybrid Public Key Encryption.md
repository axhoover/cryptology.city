---
type: reference
status: draft
title: "BBLW22"
source: https://doi.org/10.17487/RFC9180
authors: Richard Barnes, Karthikeyan Bhargavan, Benjamin Lipp, Christopher A. Wood
venue: RFC 9180
published: 2022
aliases:
  - BBLW22
bibtex: |
  @misc{BBLW22,
    author       = {Barnes, Richard and Bhargavan, Karthikeyan and Lipp, Benjamin and Wood, Christopher A.},
    title        = {Hybrid Public Key Encryption},
    howpublished = {RFC 9180},
    series       = {Request for Comments},
    number       = {9180},
    publisher    = {RFC Editor},
    month        = feb,
    year         = {2022},
    doi          = {10.17487/RFC9180},
    url          = {https://www.rfc-editor.org/info/rfc9180},
  }
---

# [BBLW22] Hybrid Public Key Encryption

**Authors:** Richard Barnes, Karthikeyan Bhargavan, Benjamin Lipp, Christopher A. Wood | **Venue:** RFC 9180 | [Source](https://doi.org/10.17487/RFC9180)

## Abstract

This document describes a scheme for hybrid public key encryption (HPKE). This scheme provides a variant of public key encryption of arbitrary-sized plaintexts for a recipient public key. It also includes three authenticated variants, including one that authenticates possession of a pre-shared key and two optional ones that authenticate possession of a key encapsulation mechanism (KEM) private key. HPKE works for any combination of an asymmetric KEM, key derivation function (KDF), and authenticated encryption with additional data (AEAD) encryption function. Some authenticated variants may not be supported by all KEMs. We provide instantiations of the scheme using widely used and efficient primitives, such as Elliptic Curve Diffie-Hellman (ECDH) key agreement, HMAC-based key derivation function (HKDF), and SHA2.

This document is a product of the Crypto Forum Research Group (CFRG) in the IRTF.
