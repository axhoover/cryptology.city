---
type: reference
status: stub
title: "Zha22"
source: https://eprint.iacr.org/2022/226
authors: Mark Zhandry
venue: CRYPTO 2022
published: 2022
aliases:
  - Zha22
cryptobib_key: C:Zhandry22b
---

# [Zha22] To Label, or Not To Label (in Generic Groups)

**Authors:** Mark Zhandry | **Venue:** CRYPTO 2022 | [Source](https://eprint.iacr.org/2022/226)

## Abstract

Generic groups are an important tool for analyzing the feasibility and in-feasibility of group-based cryptosystems. There are two distinct wide-spread versions of generic groups, Shoup's and Maurer's, the main difference being whether or not group elements are given explicit labels. The two models are often treated as equivalent. In this work, however, we demonstrate that the models are in fact quite different, and care is needed when stating generic group results:

- We show that numerous textbook constructions are _not_ captured by Maurer, but are captured by Shoup. In the other direction, any construction captured by Maurer _is_ captured by Shoup.

- For constructions that exist in both models, we show that security is equivalent for "single stage" games, but Shoup security is strictly stronger than Maurer security for some "multi-stage" games.

- The existing generic group un-instantiability results do not apply to Maurer. We fill this gap with a new un-instantiability result.

- We explain how the known black box separations between generic groups and identity-based encryption do not fully apply to Shoup, and resolve this by providing such a separation.

- We give a new un-instantiability result for the _algebraic_ group model.
