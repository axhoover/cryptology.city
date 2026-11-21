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

We present almost-optimal lattice-based attribute-based encryption (ABE) and laconic function evaluation (LFE). For depth d circuits over $\ell$-bit inputs, we obtain

- key-policy (KP) and ciphertext-policy (CP) ABE schemes with ciphertext, secret key and public key size $O(1)$;

- LFE with ciphertext size $\ell + O(1)$ as well as CRS and digest size $O(1)$;

where O(·) hides poly(d, λ) factors. The parameter sizes are optimal, up to the poly(d) dependencies. The security of our schemes rely on succinct LWE (Wee, CRYPTO 2024). Our results constitute a substantial improvement over the state of the art; none of our results were known even under the stronger evasive LWE assumption.
