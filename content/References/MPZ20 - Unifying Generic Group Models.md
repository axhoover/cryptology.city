---
type: reference
status: draft
title: "MPZ20"
source: https://eprint.iacr.org/2020/996
authors: Ueli Maurer, Christopher Portmann, Jiamin Zhu
venue: ePrint 2020/996
published: 2020
aliases:
  - MPZ20
cryptobib_key: EPRINT:MauPorZhu20
---

# [MPZ20] Unifying Generic Group Models

**Authors:** Ueli Maurer, Christopher Portmann, Jiamin Zhu | **Venue:** ePrint 2020/996 | [Source](https://eprint.iacr.org/2020/996)

## Abstract

To prove computational complexity lower bounds in cryptography, one often resorts to so-called generic models of computation. For example, a generic algorithm for the discrete logarithm is one which works independently from the group representation—and thus works generically for all group representations. There are a multitude of different models in the literature making comparing different results—and even matching lower and upper bounds proven in different models—rather difficult. In this work we view a model as a set of games with the same type of interactions. Using a standard notion of reduction between two games, we establish a hierarchy between models. Different models may now be classified as weaker and stronger if a reduction between them exists. We propose different extensions of the generic group model with different queries, explicitly capturing different information that an algorithm may need to exploit. Finally, we use the hierarchy between these models to systematically compare and improve the results in the literature. First we strengthen the model in which the baby-step giant-step algorithm is proven and weaken the model in which the matching lower bound is proven. We then analyse the discrete logarithm with preprocessing. Upper and lower bounds have been proven in the literature in mismatching models. We weaken the model of the lower bound and strengthen the model of the upper bound to close the gap between the two.
