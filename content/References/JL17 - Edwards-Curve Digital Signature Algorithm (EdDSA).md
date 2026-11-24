---
type: reference
status: draft
title: "JL17"
source: https://doi.org/10.17487/RFC8032
authors: Simon Josefsson, Ilari Liusvaara
venue: RFC 8032
published: 2017
aliases:
  - JL17
  - RFC 8032
bibtex: |
  @misc{JL17,
    author       = {Josefsson, Simon and Liusvaara, Ilari},
    title        = {Edwards-Curve Digital Signature Algorithm ({EdDSA})},
    howpublished = {RFC 8032},
    series       = {Request for Comments},
    number       = {8032},
    publisher    = {RFC Editor},
    month        = jan,
    year         = {2017},
    doi          = {10.17487/RFC8032},
    url          = {https://www.rfc-editor.org/info/rfc8032},
  }
---

# [JL17] Edwards-Curve Digital Signature Algorithm (EdDSA)

**Authors:** Simon Josefsson, Ilari Liusvaara | **Venue:** RFC 8032 | [Source](https://doi.org/10.17487/RFC8032)

## Abstract

This document describes elliptic curve signature scheme Edwards-curve Digital Signature Algorithm (EdDSA). The algorithm is instantiated with recommended parameters for the edwards25519 and edwards448 curves. An example implementation and test vectors are provided.

# Notes

An informational RFC of the IRTF Crypto Forum Research Group, January 2017. Section 3 specifies generic EdDSA, Section 5 the instances Ed25519, Ed25519ctx, Ed25519ph, Ed448 and Ed448ph, and Section 8 the security considerations, among them the deterministic nonces (Section 8.2).
