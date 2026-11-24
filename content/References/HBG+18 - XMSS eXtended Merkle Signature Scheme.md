---
type: reference
status: draft
title: "HBG+18"
source: https://doi.org/10.17487/RFC8391
authors: Andreas Huelsing, Denis Butin, Stefan-Lukas Gazdag, Joost Rijneveld, Aziz Mohaisen
venue: RFC 8391 (IRTF, Informational)
published: 2018
aliases:
  - HBG+18
  - RFC 8391
bibtex: |
  @misc{HBG+18,
    author       = {Andreas Huelsing and Denis Butin and Stefan-Lukas Gazdag and Joost Rijneveld and Aziz Mohaisen},
    title        = {{XMSS}: {eXtended} {Merkle} Signature Scheme},
    howpublished = {RFC 8391},
    series       = {Request for Comments},
    number       = {8391},
    publisher    = {RFC Editor},
    year         = {2018},
    month        = may,
    doi          = {10.17487/RFC8391},
    url          = {https://www.rfc-editor.org/info/rfc8391},
  }
---

# [HBG+18] XMSS: eXtended Merkle Signature Scheme

**Authors:** Andreas Huelsing, Denis Butin, Stefan-Lukas Gazdag, Joost Rijneveld, Aziz Mohaisen | **Venue:** RFC 8391 (IRTF, Informational) | [Source](https://doi.org/10.17487/RFC8391)

## Abstract

This note describes the eXtended Merkle Signature Scheme (XMSS), a hash-based digital signature system that is based on existing descriptions in scientific literature. This note specifies Winternitz One-Time Signature Plus (WOTS+), a one-time signature scheme; XMSS, a single-tree scheme; and XMSS^MT, a multi-tree variant of XMSS. Both XMSS and XMSS^MT use WOTS+ as a main building block. XMSS provides cryptographic digital signatures without relying on the conjectured hardness of mathematical problems. Instead, it is proven that it only relies on the properties of cryptographic hash functions. XMSS provides strong security guarantees and is even secure when the collision resistance of the underlying hash function is broken. It is suitable for compact implementations, is relatively simple to implement, and naturally resists side-channel attacks. Unlike most other signature systems, hash-based signatures can so far withstand known attacks using quantum computers.

# Notes

Published May 2018. WOTS+ is specified in Section 3.1, XMSS in Section 4.1 and XMSS^MT in Section 4.2; Section 9.1 states the properties of the hash functions and the PRF that the security proof of the specified schemes requires.
