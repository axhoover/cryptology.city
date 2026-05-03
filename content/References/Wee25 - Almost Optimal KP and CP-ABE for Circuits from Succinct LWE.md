---
title: "Wee25"
source: https://eprint.iacr.org/2025/509
authors: Hoeteck Wee
venue: EUROCRYPT 2025
published: 2025
aliases:
  - Wee25
tags:
  - EUROCRYPT
---

# [Wee25] Almost Optimal KP and CP-ABE for Circuits from Succinct LWE

**Authors:** Hoeteck Wee | **Venue:** EUROCRYPT 2025 | [Source](https://eprint.iacr.org/2025/509)

## Abstract

We construct key-policy (KP) and ciphertext-policy (CP) attribute-based encryption (ABE) for circuits with almost-optimal parameters — $O(1)$ ciphertext size, $O(1)$ secret key size, and $O(1)$ public key size — from a new assumption called _succinct LWE_ (introduced in the author's prior CRYPTO 2024 work on CP-ABE for $\mathsf{NC}^1$). The $\ell$-succinct LWE assumption states that an LWE instance is indistinguishable from uniform even given a trapdoor for $[I_\ell \otimes \mathbf{B} \mid \mathbf{W}]$, where $\ell = \poly(\lambda)$. This is a strengthening of evasive LWE that enables encoding circuit depth information succinctly. We also construct laconic function evaluation (LFE) with $O(1)$-size CRS and digest. The constructions use a circular small-secret variant of succinct LWE.
