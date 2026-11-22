---
type: reference
status: draft
title: "LHT16"
source: https://doi.org/10.17487/RFC7748
authors: Adam Langley, Mike Hamburg, Sean Turner
venue: RFC 7748
published: 2016
aliases:
  - LHT16
  - RFC 7748
bibtex: |
  @misc{LHT16,
    author       = {Langley, Adam and Hamburg, Mike and Turner, Sean},
    title        = {Elliptic Curves for Security},
    howpublished = {RFC 7748},
    series       = {Request for Comments},
    number       = {7748},
    publisher    = {RFC Editor},
    month        = jan,
    year         = {2016},
    doi          = {10.17487/RFC7748},
    url          = {https://www.rfc-editor.org/info/rfc7748},
  }
---

# [LHT16] Elliptic Curves for Security

**Authors:** Adam Langley, Mike Hamburg, Sean Turner | **Venue:** RFC 7748 | [Source](https://doi.org/10.17487/RFC7748)

## Abstract

This memo specifies two elliptic curves over prime fields that offer a high level of practical security in cryptographic applications, including Transport Layer Security (TLS). These curves are intended to operate at the \~128-bit and \~224-bit security level, respectively, and are generated deterministically based on a list of required properties.

# Notes

An informational RFC of the IRTF Crypto Forum Research Group, January 2016. Section 5 specifies the X25519 and X448 functions, Section 6 their use for Diffie–Hellman, and Section 7 the security considerations.
