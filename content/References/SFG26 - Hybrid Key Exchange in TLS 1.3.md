---
type: reference
status: draft
title: "SFG26"
source: https://doi.org/10.17487/RFC9954
authors: Douglas Stebila, Scott Fluhrer, Shay Gueron
venue: RFC 9954
published: 2026
aliases:
  - SFG26
  - RFC 9954
bibtex: |
  @misc{SFG26,
    author       = {Stebila, Douglas and Fluhrer, Scott and Gueron, Shay},
    title        = {Hybrid Key Exchange in {TLS} 1.3},
    howpublished = {RFC 9954},
    series       = {Request for Comments},
    number       = {9954},
    publisher    = {RFC Editor},
    month        = jul,
    year         = {2026},
    doi          = {10.17487/RFC9954},
    url          = {https://www.rfc-editor.org/info/rfc9954},
  }
---

# [SFG26] Hybrid Key Exchange in TLS 1.3

**Authors:** Douglas Stebila, Scott Fluhrer, Shay Gueron | **Venue:** RFC 9954 | [Source](https://doi.org/10.17487/RFC9954)

## Abstract

Hybrid key exchange refers to using multiple key exchange algorithms simultaneously and combining the result with the goal of providing security even if a way is found to defeat the encryption for all but one of the component algorithms. It is motivated by the transition to post-quantum cryptography. This document provides a construction for hybrid key exchange in the Transport Layer Security (TLS) protocol version 1.3.

# Notes

An informational RFC, July 2026, published from the IETF draft draft-ietf-tls-hybrid-design. Section 2 models key agreement as KEMs, Section 3.2 concatenates the components' public keys and ciphertexts in the order the group's name lists them, and Section 3.3 (Figure 1) feeds the concatenated shared secret to the TLS 1.3 key schedule.
