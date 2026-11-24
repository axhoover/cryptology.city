---
type: reference
status: draft
title: "BTV26"
source: https://arxiv.org/abs/2610.12913
authors: Andrej Bogdanov, Kel Zin Tan, Prashant Nalini Vasudevan
venue: arXiv 2026
published: 2026-10-09
aliases:
  - BTV26
bibtex: |
  @misc{BTV26,
    author       = {Andrej Bogdanov and Kel Zin Tan and Prashant Nalini Vasudevan},
    title        = {Sample-Preserving Search-to-Decision Reduction for Noisy Linear Equations over Large Moduli},
    howpublished = {arXiv:2610.12913},
    year         = {2026},
    url          = {https://arxiv.org/abs/2610.12913}
  }
---

# [BTV26] Sample-Preserving Search-to-Decision Reduction for Noisy Linear Equations over Large Moduli

**Authors:** Andrej Bogdanov, Kel Zin Tan, Prashant Nalini Vasudevan | **Venue:** arXiv 2026 | [Source](https://arxiv.org/abs/2610.12913)

## Abstract

The Noisy Linear Equations problem involves finding the solution to a random linear system over a finite field given noisy evaluations. This is a generalisation of various learning problems widely used in cryptography, including Learning with Errors (LWE), Learning with Rounding (LWR), and Learning Parity with Noise (LPN).

We present a new sample-preserving search-to-decision reduction for Noisy Linear Equations that has complexity $\mathrm{poly}(n,m,\log q, q/\sigma)$, where $n$ is the dimension of the secret, $m$ is the number of samples, $q$ is the modulus, and $\sigma$ is the magnitude of the noise (defined suitably for the kind of noise involved). In particular, this implies search-to-decision reductions for LWE and LWR that run in time $\mathrm{poly}(n)$ even if the modulus $q$ is exponentially large, as long as the noise-to-modulus ratio $\sigma/q$ is non-negligible. Our reduction works for prime moduli $q$. If $q$ is composite, it instead produces a list that contains a small multiple of the solution.

Prior to this work, known search-to-decision reductions for LWE and LWR either did not preserve the parameters of the problem (i.e., $m$, $n$, $\sigma$, and $q$), or had complexity that scaled polynomially with either $\sigma$ or the largest prime factor of $q$.
