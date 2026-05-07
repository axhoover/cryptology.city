---
title: "DLO24"
source: https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ITC.2024.8
authors: Dana Dachman-Soled, Julian Loss, Adam O'Neill
venue: ITC 2024
published: 2024
aliases:
  - DLO24
tags:
  - ITC
cryptobib_key: ITC:DacLosONe24
---

# [DLO24] Breaking RSA Generically Is Equivalent to Factoring, with Preprocessing

**Authors:** Dana Dachman-Soled, Julian Loss, Adam O'Neill | **Venue:** ITC 2024 | [Source](https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ITC.2024.8)

## Abstract

We show that in the generic ring model, breaking RSA — i.e., computing $e$-th roots modulo $n$ — is equivalent to factoring $n$, even when the adversary is allowed arbitrary preprocessing. Concretely, we consider adversaries that run in two phases: an unbounded preprocessing phase that produces an advice string, followed by an efficient online phase that uses the advice to break RSA. We prove that any such adversary can be converted into a factoring adversary with polynomially related online complexity and only a polynomial loss in the advice length. This rules out a superpolynomial separation between RSA and factoring in the generic ring model with preprocessing, strengthening prior results that held only for preprocessing-free adversaries.
