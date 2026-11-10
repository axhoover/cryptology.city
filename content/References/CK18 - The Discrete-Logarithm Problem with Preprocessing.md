---
type: reference
status: stub
title: "CK18"
source: https://eprint.iacr.org/2017/1113
authors: Henry Corrigan-Gibbs, Dmitry Kogan
venue: EUROCRYPT 2018
published: 2018
aliases:
  - CK18
cryptobib_key: EC:CorKog18
---

# [CK18] The Discrete-Logarithm Problem with Preprocessing

**Authors:** Henry Corrigan-Gibbs, Dmitry Kogan | **Venue:** EUROCRYPT 2018 | [Source](https://eprint.iacr.org/2017/1113)

## Abstract

This paper studies discrete-log algorithms that use preprocessing. In our model, an adversary may use a very large amount of precomputation to produce an "advice" string about a specific group (e.g., NIST P-256). In a subsequent online phase, the adversary's task is to use the preprocessed advice to quickly compute discrete logarithms in the group. Motivated by surprising recent preprocessing attacks on the discrete-log problem, we study the power and limits of such algorithms. In particular, we focus on generic algorithms -- these are algorithms that operate in every cyclic group. We show that any generic discrete-log algorithm with preprocessing that uses an $S$-bit advice string, runs in online time $T$, and succeeds with probability $\epsilon$, in a group of prime order $N$, must satisfy $ST^2 = \tilde{\Omega}(\epsilon N)$.

Our lower bound, which is tight up to logarithmic factors, uses a synthesis of incompressibility techniques and classic methods for generic-group lower bounds. We apply our techniques to prove related lower bounds for the CDH, DDH, and multiple-discrete-log problems.

Finally, we demonstrate two new generic preprocessing attacks: one for the multiple-discrete-log problem and one for certain decisional-type problems in groups. This latter result demonstrates that, for generic algorithms with preprocessing, distinguishing tuples of the form $(g, g^x, g^{(x^2)})$ from random is much easier than the discrete-log problem.
