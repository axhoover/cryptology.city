---
type: reference
status: draft
title: "NIST24"
source: https://doi.org/10.6028/NIST.FIPS.203
authors: National Institute of Standards and Technology
venue: Federal Information Processing Standards Publication (FIPS) 203
published: 2024-08-13
aliases:
  - NIST24
bibtex: |
  @techreport{NIST24,
    author      = {{National Institute of Standards and Technology}},
    title       = {Module-Lattice-Based Key-Encapsulation Mechanism Standard},
    institution = {U.S. Department of Commerce},
    address     = {Washington, D.C.},
    type        = {Federal Information Processing Standards Publication},
    number      = {FIPS 203},
    year        = {2024},
    month       = aug,
    doi         = {10.6028/NIST.FIPS.203},
    url         = {https://doi.org/10.6028/NIST.FIPS.203},
  }
---

# [NIST24] Module-Lattice-Based Key-Encapsulation Mechanism Standard

**Authors:** National Institute of Standards and Technology | **Venue:** Federal Information Processing Standards Publication (FIPS) 203 | [Source](https://doi.org/10.6028/NIST.FIPS.203)

## Abstract

A key-encapsulation mechanism (KEM) is a set of algorithms that, under certain conditions, can be used by two parties to establish a shared secret key over a public channel. A shared secret key that is securely established using a KEM can then be used with symmetric-key cryptographic algorithms to perform basic tasks in secure communications, such as encryption and authentication. This standard specifies a key-encapsulation mechanism called ML-KEM. The security of ML-KEM is related to the computational difficulty of the Module Learning with Errors problem. At present, ML-KEM is believed to be secure, even against adversaries who possess a quantum computer. This standard specifies three parameter sets for ML-KEM. In order of increasing security strength and decreasing performance, these are ML-KEM-512, ML-KEM-768, and ML-KEM-1024.

# Notes

The standard specifies the component encryption scheme K-PKE (Section 5), the KEM ML-KEM (Sections 6 and 7) and the parameter sets ML-KEM-512, ML-KEM-768 and ML-KEM-1024 (Section 8). Appendix C lists the differences in input-output behaviour from the round-three CRYSTALS-Kyber submission, from which ML-KEM is derived (Section 1.1).
