---
type: reference
status: draft
title: "DLO24"
source: https://eprint.iacr.org/2022/1261
authors: Dana Dachman-Soled, Julian Loss, Adam O'Neill
venue: ITC 2024
published: 2024
aliases:
  - DLO24
cryptobib_key: ITC:DacLosONe24
---

# [DLO24] Breaking RSA Generically Is Equivalent to Factoring, with Preprocessing

**Authors:** Dana Dachman-Soled, Julian Loss, Adam O'Neill | **Venue:** ITC 2024 | [Source](https://eprint.iacr.org/2022/1261)

## Abstract

We investigate the relationship between the classical RSA and factoring problems when preprocessing is considered. In such a model, adversaries can use an unbounded amount of precomputation to produce an “advice” string to then use during the online phase, when a problem instance becomes known. Previous work (e.g., [Bernstein, Lange ASIACRYPT ’13]) has shown that preprocessing attacks significantly improve the runtime of the best-known factoring algorithms. Due to these improvements, we ask whether the relationship between factoring and RSA fundamentally changes when preprocessing is allowed. Specifically, we investigate whether there is a superpolynomial gap between the runtime of the best attack on RSA with preprocessing and on factoring with preprocessing.

Our main result rules this out with respect to algorithms in a careful adaptation of the generic ring model [Aggarwal and Maurer, Eurocrypt 2009] to the preprocessing setting. In particular, in this setting we show the existence of a factoring algorithm with polynomially related parameters, for any setting of RSA parameters.

