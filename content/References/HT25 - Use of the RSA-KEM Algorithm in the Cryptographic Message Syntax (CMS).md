---
type: reference
status: draft
title: "HT25"
source: https://doi.org/10.17487/RFC9690
authors: Russ Housley, Sean Turner
venue: RFC 9690
published: 2025
aliases:
  - HT25
  - RFC 9690
bibtex: |
  @misc{HT25,
    author       = {Housley, Russ and Turner, Sean},
    title        = {Use of the {RSA-KEM} Algorithm in the Cryptographic Message Syntax ({CMS})},
    howpublished = {RFC 9690},
    series       = {Request for Comments},
    number       = {9690},
    publisher    = {RFC Editor},
    month        = feb,
    year         = {2025},
    doi          = {10.17487/RFC9690},
    url          = {https://www.rfc-editor.org/info/rfc9690},
  }
---

# [HT25] Use of the RSA-KEM Algorithm in the Cryptographic Message Syntax (CMS)

**Authors:** Russ Housley, Sean Turner | **Venue:** RFC 9690 | [Source](https://doi.org/10.17487/RFC9690)

## Abstract

The RSA Key Encapsulation Mechanism (RSA-KEM) algorithm is a one-pass (store-and-forward) cryptographic mechanism for an originator to securely send keying material to a recipient using the recipient's RSA public key. The RSA-KEM algorithm is specified in Clause 11.5 of ISO/IEC: 18033-2:2006. This document specifies the conventions for using the RSA-KEM algorithm as a standalone KEM algorithm and the conventions for using the RSA-KEM algorithm with the Cryptographic Message Syntax (CMS) using KEMRecipientInfo as specified in RFC 9629. This document obsoletes RFC 5990.

# Notes

A standards-track RFC, February 2025. Appendix A specifies RSA-KEM; Sections 1.1 and 3 discuss its security in the random oracle model, Section 3 citing [[Sho01b - A Proposal for an ISO Standard for Public Key Encryption|Sho01b]].
