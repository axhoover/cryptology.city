---
type: reference
status: stub
title: "FMR13"
source: https://eprint.iacr.org/2013/416
authors: Benjamin Fuller, Xianrui Meng, Leonid Reyzin
venue: ASIACRYPT 2013
published: 2013
aliases:
  - FMR13
cryptobib_key: AC:FulMenRey13
---

# [FMR13] Computational Fuzzy Extractors

**Authors:** Benjamin Fuller, Xianrui Meng, Leonid Reyzin | **Venue:** ASIACRYPT 2013 | [Source](https://eprint.iacr.org/2013/416)

## Abstract

Fuzzy extractors derive strong keys from noisy sources. Their security is usually defined information- theoretically, with gaps between known negative results, existential constructions, and polynomial-time constructions. We ask whether using computational security can close these gaps. We show the following:
-Negative Result: Noise tolerance in fuzzy extractors is usually achieved using an information reconciliation component called a secure sketch. We show that secure sketches are subject to upper bounds from coding theory even when the information-theoretic security requirement is relaxed. Specifically, we define computational secure sketches using conditional HILL pseudoentropy (Hastad et al., SIAM J. Computing 1999). We show that a computational secure sketch implies an error-correcting code. Thus, HILL pseudoentropy is bounded by the size of the best error-correcting code. Similar bounds apply to information-theoretic secure sketches.
-Positive Result: We show that our negative result can be avoided by constructing and analyzing a computational fuzzy extractor directly. We modify the code-offset construction (Juels and Wattenberg, CCS 1999) to use random linear codes. Security is based on the Learning with Errors (LWE) problem and holds when the noisy source is uniform or symbol-fixing (that is, each dimension is either uniform or fixed). As part of the proof, we reduce symbol-fixing security to uniform error security.
