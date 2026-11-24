---
type: reference
status: draft
title: "MKJR16"
source: https://doi.org/10.17487/RFC8017
authors: Kathleen M. Moriarty, Burt Kaliski, Jakob Jonsson, Andreas Rusch
venue: RFC 8017 (Informational)
published: 2016
aliases:
  - MKJR16
bibtex: |
  @misc{MKJR16,
    author       = {Kathleen M. Moriarty and Burt Kaliski and Jakob Jonsson and Andreas Rusch},
    title        = {{PKCS} \#1: {RSA} Cryptography Specifications Version 2.2},
    howpublished = {RFC 8017},
    series       = {Request for Comments},
    number       = {8017},
    publisher    = {RFC Editor},
    year         = {2016},
    month        = nov,
    doi          = {10.17487/RFC8017},
    url          = {https://www.rfc-editor.org/info/rfc8017},
  }
---

# [MKJR16] PKCS #1: RSA Cryptography Specifications Version 2.2

**Authors:** Kathleen M. Moriarty, Burt Kaliski, Jakob Jonsson, Andreas Rusch | **Venue:** RFC 8017 (Informational) | [Source](https://doi.org/10.17487/RFC8017)

## Abstract

This document provides recommendations for the implementation of public-key cryptography based on the RSA algorithm, covering cryptographic primitives, encryption schemes, signature schemes with appendix, and ASN.1 syntax for representing keys and for identifying the schemes.

This document represents a republication of PKCS #1 v2.2 from RSA Laboratories' Public-Key Cryptography Standards (PKCS) series. By publishing this RFC, change control is transferred to the IETF.

This document also obsoletes RFC 3447.

# Notes

- Published November 2016, edited by Kathleen M. Moriarty. It specifies RSAES-OAEP (Section 7.1) and RSAES-PKCS1-v1_5 (Section 7.2); the note in Section 7.1 discusses the security results of BR94, Sho01a and FOPS01 for OAEP, and Section 7.2 the attack of Ble98 on RSAES-PKCS1-v1_5.
