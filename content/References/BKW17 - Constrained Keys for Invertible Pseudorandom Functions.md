---
type: reference
status: stub
title: "BKW17"
source: https://eprint.iacr.org/2017/477
authors: Dan Boneh, Sam Kim, David J. Wu
venue: TCC 2017
published: 2017
aliases:
  - BKW17
cryptobib_key: TCC:BonKimWu17
---

# [BKW17] Constrained Keys for Invertible Pseudorandom Functions

**Authors:** Dan Boneh, Sam Kim, David J. Wu | **Venue:** TCC 2017 | [Source](https://eprint.iacr.org/2017/477)

## Abstract

A constrained pseudorandom function (PRF) is a secure PRF for which one can generate constrained keys that can only be used to evaluate the PRF on a subset of the domain. Constrained PRFs are used widely, most notably in applications of indistinguishability obfuscation (iO). In this paper we show how to constrain an invertible PRF (IPF), which is significantly harder. An IPF is a secure injective PRF accompanied by an inversion algorithm. A constrained key for an IPF can only be used to evaluate the IPF on a subset S of the domain, and to invert the IPF on the image of S. We first define the notion of a constrained IPF and then give two main constructions: one for puncturing an IPF and the other for (single-key) circuit constraints. Both constructions rely on recent work on private constrained PRFs. We also show that constrained pseudorandom permutations for many classes of constraints are impossible under our definition.
