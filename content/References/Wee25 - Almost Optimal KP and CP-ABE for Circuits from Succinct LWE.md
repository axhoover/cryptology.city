---
type: reference
status: draft
title: "Wee25"
source: https://eprint.iacr.org/2025/509
authors: Hoeteck Wee
venue: EUROCRYPT 2025
published: 2025
aliases:
  - Wee25
cryptobib_key: EC:Wee25
---

# [Wee25] Almost Optimal KP and CP-ABE for Circuits from Succinct LWE

**Authors:** Hoeteck Wee | **Venue:** EUROCRYPT 2025 | [Source](https://eprint.iacr.org/2025/509)

## Abstract

We construct key-policy (KP) and ciphertext-policy (CP) attribute-based encryption (ABE) for circuits with almost-optimal parameters — $O(1)$ ciphertext size, $O(1)$ secret key size, and $O(1)$ public key size — from a new assumption called _succinct LWE_ (Wee, CRYPTO 2024 — [[Wee24 - Circuit ABE with poly(depth, lambda)-Sized Ciphertexts and Keys from Lattices|Wee24]]). The $\ell$-succinct LWE assumption states that an LWE instance is indistinguishable from uniform even given a trapdoor for $[I_\ell \otimes \mathbf{B} \mid \mathbf{W}]$, where $\ell = \poly(\lambda)$. It is implied by evasive LWE, the stronger assumption. We also construct laconic function evaluation (LFE) with $O(1)$-size CRS and digest.
