---
type: reference
status: draft
title: "BH12"
source: https://huelsing.net/wordpress/wp-content/uploads/2013/05/mssgesamt.pdf
authors: Johannes Buchmann, Andreas Hülsing
venue: Full version of BDH11 (author-hosted)
published: 2012
aliases:
  - BH12
bibtex: |
  @misc{BH12,
    author       = {Johannes Buchmann and Andreas H{\"u}lsing},
    title        = {{XMSS} -- A Practical Forward Secure Signature Scheme based on Minimal Security Assumptions},
    note         = {Full version of the PQCrypto 2011 paper by Buchmann, Dahmen and H{\"u}lsing},
    year         = {2012},
    howpublished = {\url{https://huelsing.net/wordpress/wp-content/uploads/2013/05/mssgesamt.pdf}},
  }
---

# [BH12] XMSS – A Practical Forward Secure Signature Scheme based on Minimal Security Assumptions (full version)

**Authors:** Johannes Buchmann, Andreas Hülsing | **Venue:** Full version of BDH11 (author-hosted) | [Source](https://huelsing.net/wordpress/wp-content/uploads/2013/05/mssgesamt.pdf)

## Abstract

We present XMSS, the first signature scheme that is provably forward secure and efficient when instantiated with two secure and efficient function families: one second-preimage resistant and the other pseudorandom. The security requirements for XMSS are minimal, because the existence of the two function families is known to be necessary for the existence of digital signature schemes. Also, XMSS appears to be quantum-computer resistant as there are many cryptographic hash functions and pseudorandom functions that are believed to resist quantum computer attacks. We present experimental results that show that the performance of XMSS is comparable to RSA.

# Notes

The full version of [[BDH11 - XMSS A Practical Forward Secure Signature Scheme Based on Minimal Security Assumptions|BDH11]]: "An extended abstract of this work appeared as [BDH11]. This is the full version", with the full security proofs, a discussion of the security level and new runtimes (Section 1). The PDF's creation date is 7 December 2012, and it lists two authors. Section 2 fixes the families $F_n = \{f_K : \bits^n \to \bits^n \mid K \in \bits^n\}$ and $\calH_n = \{h_K : \bits^{2n} \to \bits^n \mid K \in \bits^n\}$; Theorem 1 (Section 3.2) proves EU-CMA security from a second-preimage-resistant $\calH_n$ and a pseudorandom $F_n$, with the exact bound in equation (3); Theorem 4 (Section 4.2) proves forward security of the variant whose seeds come from a forward-secure PRG.
