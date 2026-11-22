---
type: reference
status: draft
title: "ABC+25"
source: https://doi.org/10.6028/NIST.SP.800-227
authors: Gorjan Alagic, Elaine Barker, Lily Chen, Dustin Moody, Angela Robinson, Hamilton Silberg, Noah Waller
venue: NIST Special Publication 800-227, 2025
published: 2025
aliases:
  - ABC+25
  - SP 800-227
bibtex: |
  @techreport{ABC+25,
    author      = {Gorjan Alagic and Elaine Barker and Lily Chen and Dustin Moody and Angela Robinson and Hamilton Silberg and Noah Waller},
    title       = {Recommendations for Key-Encapsulation Mechanisms},
    institution = {National Institute of Standards and Technology},
    address     = {Gaithersburg, MD},
    type        = {NIST Special Publication},
    number      = {800-227},
    month       = sep,
    year        = {2025},
    doi         = {10.6028/NIST.SP.800-227},
    url         = {https://doi.org/10.6028/NIST.SP.800-227},
  }
---

# [ABC+25] Recommendations for Key-Encapsulation Mechanisms

**Authors:** Gorjan Alagic, Elaine Barker, Lily Chen, Dustin Moody, Angela Robinson, Hamilton Silberg, Noah Waller | **Venue:** NIST Special Publication 800-227, 2025 | [Source](https://doi.org/10.6028/NIST.SP.800-227)

## Abstract

A key-encapsulation mechanism (KEM) is a set of algorithms that can be used by two parties under certain conditions to securely establish a shared secret key over a public channel. A shared secret key that is established using a KEM can then be used with symmetric-key cryptographic algorithms to perform essential tasks in secure communications, such as encryption and authentication. This document describes the basic definitions, properties, and applications of KEMs. It also provides recommendations for implementing and using KEMs in a secure manner.

# Notes

The final version, published September 2025. Section 2.2 defines KEMs and their correctness, Section 2.3 gives the IND-CPA and IND-CCA experiments (Figures 2 and 3), and Section 4.6 covers composite KEMs (Section 4.6.1), the approved key combiners (Section 4.6.2) and their security (Section 4.6.3).
