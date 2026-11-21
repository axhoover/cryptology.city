---
type: reference
status: stub
title: "MSZ16"
source: https://eprint.iacr.org/2016/147
authors: Eric Miles, Amit Sahai, Mark Zhandry
venue: CRYPTO 2016
published: 2016
aliases:
  - MSZ16
cryptobib_key: C:MilSahZha16
---

# [MSZ16] Annihilation Attacks for Multilinear Maps: Cryptanalysis of Indistinguishability Obfuscation over GGH13

**Authors:** Eric Miles, Amit Sahai, Mark Zhandry | **Venue:** CRYPTO 2016 | [Source](https://eprint.iacr.org/2016/147)

## Abstract

In this work, we present a new class of polynomial-time attacks on the original multilinear maps of Garg, Gentry, and Halevi (2013). Previous polynomial-time attacks on GGH13 were “zeroizing” attacks that generally required the availability of low-level encodings of zero. Most significantly, such zeroizing attacks were not applicable to candidate indistinguishability obfuscation (iO) schemes. iO has been the subject of intense study.

To address this gap, we introduce annihilation attacks, which attack multilinear maps using non-linear polynomials. Annihilation attacks can work in situations where there are no low-level encodings of zero. Using annihilation attacks, we give the first polynomial-time cryptanalysis of candidate iO schemes over GGH13. More specifically, we exhibit two simple programs that are functionally equivalent, and show how to efficiently distinguish between the obfuscations of these two programs.

Given the enormous applicability of iO, it is important to devise iO schemes that can avoid attack. We discuss some initial directions for safeguarding against annihilating attacks.
