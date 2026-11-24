---
type: reference
status: draft
title: "KKWS26"
source: https://doi.org/10.17487/RFC10024
authors: Krzysztof Kwiatkowski, Panos Kampanakis, Bas Westerbaan, Douglas Stebila
venue: RFC 10024
published: 2026
aliases:
  - KKWS26
  - RFC 10024
bibtex: |
  @misc{KKWS26,
    author       = {Kwiatkowski, Krzysztof and Kampanakis, Panos and Westerbaan, Bas and Stebila, Douglas},
    title        = {Post-Quantum Traditional ({PQ/T}) Hybrid Key Agreement Mechanisms for {TLS} 1.3},
    howpublished = {RFC 10024},
    series       = {Request for Comments},
    number       = {10024},
    publisher    = {RFC Editor},
    month        = aug,
    year         = {2026},
    doi          = {10.17487/RFC10024},
    url          = {https://www.rfc-editor.org/info/rfc10024},
  }
---

# [KKWS26] Post-Quantum Traditional (PQ/T) Hybrid Key Agreement Mechanisms for TLS 1.3

**Authors:** Krzysztof Kwiatkowski, Panos Kampanakis, Bas Westerbaan, Douglas Stebila | **Venue:** RFC 10024 | [Source](https://doi.org/10.17487/RFC10024)

## Abstract

This document defines three hybrid key agreement mechanisms for TLS 1.3 -- X25519MLKEM768, SecP256r1MLKEM768, and SecP384r1MLKEM1024 -- that combine the post-quantum ML-KEM (Module-Lattice-Based Key Encapsulation Mechanism) with an ECDHE (Ephemeral Elliptic Curve Diffie-Hellman) exchange.

# Notes

A standards-track RFC, August 2026, published from the IETF draft draft-ietf-tls-ecdhe-mlkem. Sections 4.1–4.3 give the client share, server share and shared secret of each group, Section 5 the order of the two shared secrets with respect to NIST SP 800-56C, and Section 6 the security considerations.
