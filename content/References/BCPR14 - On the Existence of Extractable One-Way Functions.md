---
type: reference
status: stub
title: "BCPR14"
source: https://eprint.iacr.org/2014/402
authors: Nir Bitansky, Ran Canetti, Omer Paneth, Alon Rosen
venue: STOC 2014
published: 2014
aliases:
  - BCPR14
cryptobib_key: STOC:BCPR14
---

# [BCPR14] On the Existence of Extractable One-Way Functions

**Authors:** Nir Bitansky, Ran Canetti, Omer Paneth, Alon Rosen | **Venue:** STOC 2014 | [Source](https://eprint.iacr.org/2014/402)

## Abstract

A function f is extractable if it is possible to algorithmically “extract,” from any adversarial program that outputs a value y in the image of f, a preimage of y.
When combined with hardness properties such as one-wayness or collision-resistance, extractability has proven to be a powerful tool. However, so far, extractability has not been explicitly shown. Instead, it has only been considered as a non-standard \*knowledge assumption\* on certain functions.

We make two headways in the study of the existence of extractable one-way functions (EOWFs). On the negative side, we show that if there exist indistinguishability obfuscators for a certain class of circuits then
there do not exist EOWFs where extraction works for any adversarial program with auxiliary-input of unbounded polynomial length.

On the positive side, for adversarial programs with bounded auxiliary-input (and unbounded polynomial running time), we give the first construction of EOWFs with an explicit extraction procedure, based on relatively standard assumptions (e.g., sub-exponential hardness of Learning with Errors). We then use these functions to construct the first 2-message zero-knowledge arguments and 3-message zero-knowledge arguments of knowledge, against the same class of adversarial verifiers, from essentially the same assumptions.
