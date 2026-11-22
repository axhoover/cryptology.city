---
type: reference
status: draft
title: "CAD+20"
source: https://doi.org/10.6028/NIST.SP.800-208
authors: David A. Cooper, Daniel C. Apon, Quynh H. Dang, Michael S. Davidson, Morris J. Dworkin, Carl A. Miller
venue: NIST Special Publication 800-208
published: 2020
aliases:
  - CAD+20
  - SP 800-208
bibtex: |
  @techreport{CAD+20,
    author      = {David A. Cooper and Daniel C. Apon and Quynh H. Dang and Michael S. Davidson and Morris J. Dworkin and Carl A. Miller},
    title       = {Recommendation for Stateful Hash-Based Signature Schemes},
    institution = {National Institute of Standards and Technology},
    address     = {Gaithersburg, MD},
    type        = {NIST Special Publication},
    number      = {800-208},
    year        = {2020},
    month       = oct,
    doi         = {10.6028/NIST.SP.800-208},
    url         = {https://doi.org/10.6028/NIST.SP.800-208},
  }
---

# [CAD+20] Recommendation for Stateful Hash-Based Signature Schemes

**Authors:** David A. Cooper, Daniel C. Apon, Quynh H. Dang, Michael S. Davidson, Morris J. Dworkin, Carl A. Miller | **Venue:** NIST Special Publication 800-208 | [Source](https://doi.org/10.6028/NIST.SP.800-208)

## Abstract

This recommendation specifies two algorithms that can be used to generate a digital signature, both of which are stateful hash-based signature schemes: the Leighton-Micali Signature (LMS) system and the eXtended Merkle Signature Scheme (XMSS), along with their multi-tree variants, the Hierarchical Signature System (HSS) and multi-tree XMSS (XMSS^MT).

# Notes

Published October 2020. The publication profiles LMS and HSS as described in RFC 8554 (Sections 1 and 4) and XMSS and XMSS^MT as described in RFC 8391 (Sections 1 and 5); Section 1.2 explains why the signer must never use one one-time key for two messages.
