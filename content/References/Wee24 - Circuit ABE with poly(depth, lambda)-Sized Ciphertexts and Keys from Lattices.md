---
type: reference
status: stub
title: "Wee24"
source: https://eprint.iacr.org/2024/1416
authors: Hoeteck Wee
venue: CRYPTO 2024
published: 2024
aliases:
  - Wee24
cryptobib_key: C:Wee24
---

# [Wee24] Circuit ABE with $\poly(\mathrm{depth}, \secpar)$-Sized Ciphertexts and Keys from Lattices

**Authors:** Hoeteck Wee | **Venue:** CRYPTO 2024 | [Source](https://eprint.iacr.org/2024/1416)

## Abstract

We present new lattice-based attribute-based encryption (ABE) and
laconic function evaluation (LFE) schemes for circuits with _sublinear_
ciphertext overhead. For depth $d$ circuits over $\ell$-bit inputs, we obtain

- an ABE with ciphertext and secret key size $O(1)$;

- a LFE with ciphertext size $\ell + O(1)$ and digest size $O(1)$;

- an ABE with public key and ciphertext size $O(\ell^{2/3})$ and
  secret key size $O(1)$,

where $O(\cdot)$ hides $\poly(d,\lambda)$ factors. The first two results achieve almost optimal ciphertext and secret key / digest sizes, up to the $\poly(d)$ dependencies. The security of our schemes relies on $\ell$-succinct LWE, a falsifiable assumption which is implied by evasive LWE. At the core of our results is a new technique for compressing LWE samples $\mathbf{s}(\mathbf{A}-\mathbf{x} \otimes \mathbf{G})$ as well as the matrix $\mathbf{A}$.
