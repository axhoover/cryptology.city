---
title: "BHNZ25"
source: https://arxiv.org/abs/2511.09551
authors: John Bostanci, Jonas Haferkamp, Chinmay Nirkhe, Mark Zhandry
venue: STOC 2026
published: 2025-11-14
aliases:
  - BHNZ25
tags:
  - STOC
---

# [BHNZ25] Separating QMA from QCMA with a Classical Oracle

**Authors:** John Bostanci, Jonas Haferkamp, Chinmay Nirkhe, Mark Zhandry | **Venue:** STOC 2026 | [Source](https://arxiv.org/abs/2511.09551)

## Abstract

We give an unconditional oracle separation between QMA and QCMA relative to a standard classical oracle — fully resolving the long-standing open question of whether quantum proofs are more powerful than classical proofs for quantum verifiers in the oracle model. The separating problem is "spectral Forrelation": decide if there exists a quantum state whose computational-basis measurement is supported on one oracle-defined set while its Fourier-basis measurement is supported on another. The key insight is that a QCMA verifier (with a classical witness) can be run repeatedly to generate many samples from the witness distribution, while a quantum witness is inherently use-once (measuring it collapses the state). This asymmetry reduces QCMA hardness to a sampling hardness statement, proved via a novel "second quantization" (bosonic) technique for compressing quantum oracle access.
