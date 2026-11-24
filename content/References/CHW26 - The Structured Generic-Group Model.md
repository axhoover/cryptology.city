---
type: reference
status: draft
title: "CHW26"
source: https://eprint.iacr.org/2026/384
authors: Henry Corrigan-Gibbs, Alexandra Henzinger, David J. Wu
venue: Eurocrypt 2026
published: 2026-02-24
aliases:
  - CHW26
bibtex: |
  @misc{CHW26,
    author       = {Henry Corrigan-Gibbs and Alexandra Henzinger and David J. Wu},
    title        = {The Structured Generic-Group Model},
    howpublished = {Cryptology ePrint Archive, Paper 2026/384},
    year         = {2026},
    url          = {https://eprint.iacr.org/2026/384}
  }
---

# [CHW26] The Structured Generic-Group Model

**Authors:** Henry Corrigan-Gibbs, Alexandra Henzinger, David J. Wu | **Venue:** Eurocrypt 2026 | [Source](https://eprint.iacr.org/2026/384)

## Abstract

This paper introduces the structured generic-group model, an extension of Shoup’s generic-group model (from Eurocrypt 1997) to capture algorithms that take advantage of some non-generic structure of the group. We show that any discrete-log algorithm in a group of prime order $q$ that exploits the structure of at most a $\delta$ fraction of group elements, in a way that we precisely define, must run in time $\Omega(\min(\sqrt{q},1/\delta))$. As an application, we prove a tight subexponential-time lower bound against discrete-log algorithms that exploit the multiplicative structure of smooth integers, but that are otherwise generic. This lower bound applies to a broad class of index-calculus algorithms. We prove similar lower bounds against algorithms that exploit the structure of small integers, smooth polynomials, and elliptic-curve points.
