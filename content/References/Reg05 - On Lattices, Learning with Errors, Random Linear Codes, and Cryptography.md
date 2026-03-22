---
title: "Reg05"
source: https://dl.acm.org/doi/10.1145/1060590.1060603
authors: Oded Regev
venue: STOC 2005
published: 2005-05-01
aliases:
  - Reg05
tags:
  - STOC
---

# [Reg05] On Lattices, Learning with Errors, Random Linear Codes, and Cryptography

**Authors:** Oded Regev | **Venue:** STOC 2005 | [Source](https://dl.acm.org/doi/10.1145/1060590.1060603)

## Abstract

We introduce the learning with errors (LWE) problem and show that it enjoys a quantum reduction from worst-case lattice problems: any efficient algorithm for solving LWE (on average) can be converted into a quantum algorithm for approximating the shortest vector problem (GapSVP) and the shortest independent vectors problem (SIVP) in the worst case. Because GapSVP and SIVP are believed to be hard even for quantum algorithms, this gives a strong hardness guarantee for LWE. We also present a public-key encryption scheme whose security reduces to the hardness of LWE: to encrypt a bit $b$, send a random linear combination of the LWE samples plus $b \cdot \lfloor q/2 \rfloor$; decryption uses the secret key to remove the LWE component and recover $b$ from the noise. The LWE problem has become one of the central hardness assumptions of post-quantum cryptography, underlying numerous subsequent schemes including fully homomorphic encryption, digital signatures, and oblivious transfer.
