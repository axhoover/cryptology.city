---
title: "DDRG20"
source: https://eprint.iacr.org/2020/292
authors: Dana Dachman-Soled, Léo Ducas, Huijing Gong, Mélissa Rossi
venue: CRYPTO 2020
published: 2020
aliases:
  - DDRG20
tags:
  - CRYPTO
---

# [DDRG20] LWE with Side Information: Attacks and Concrete Security Estimation

**Authors:** Dana Dachman-Soled, Léo Ducas, Huijing Gong, Mélissa Rossi | **Venue:** CRYPTO 2020 | [Source](https://eprint.iacr.org/2020/292)

## Abstract

We propose a framework for cryptanalysis of LWE-based schemes when the attacker has access to side information — beyond the public data — that may arise from decryption failures, side channels, or implementation leakage. The side information is modeled as "hints": noisy inner products $\langle \mathbf{v}_i, \mathbf{s} \rangle + e'_i$ for known vectors $\mathbf{v}_i$, which the attacker can progressively incorporate before running lattice reduction. Our toolkit includes operations for sparsifying the lattice, projecting onto hint-defined hyperplanes, and intersecting with them. We apply the framework to provide concrete security estimates for LAC, Round5, and NTRU under realistic leakage scenarios, and release the leaky-LWE-Estimator for the community.
