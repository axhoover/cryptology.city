---
type: reference
status: stub
title: "CHKPRR19"
source: https://eprint.iacr.org/2019/549
authors: Arka Rai Choudhuri, Pavel Hubácek, Chethan Kamath, Krzysztof Pietrzak, Alon Rosen, Guy N. Rothblum
venue: STOC 2019
published: 2019
aliases:
  - CHKPRR19
cryptobib_key: STOC:CHKPRR19
---

# [CHKPRR19] Finding a Nash equilibrium is no easier than breaking Fiat-Shamir

**Authors:** Arka Rai Choudhuri, Pavel Hubácek, Chethan Kamath, Krzysztof Pietrzak, Alon Rosen, Guy N. Rothblum | **Venue:** STOC 2019 | [Source](https://eprint.iacr.org/2019/549)

## Abstract

The Fiat-Shamir heuristic transforms a public-coin interactive proof into a non-interactive argument, by replacing the verifier with a cryptographic hash function that is applied to the protocol’s transcript. Constructing hash functions for which this transformation is sound is a central and long-standing open question in cryptography.

We show that solving the End-of-Metered-Line problem is no easier than breaking the soundness of the Fiat-Shamir transformation when applied to the sumcheck protocol. In particular, if the transformed protocol is sound, then any hard problem in #P gives rise to a hard distribution in the class CLS, which is contained in PPAD.

Our main technical contribution is a stateful incrementally verifiable procedure that, given a SAT instance over n variables, counts the number of satisfying assignments. This is accomplished via an exponential sequence of small steps, each computable in time poly(n). Incremental verifiability means that each intermediate state includes a sumcheck-based proof of its correctness, and the proof can be updated and verified in time poly(n).

Combining our construction with a hash family proposed by Canetti et al. [STOC 2019] gives rise to a distribution in the class CLS, which is provably hard under the assumption that any one of a class of fully homomorphic encryption (FHE) schemes has almost-optimal security against quasi-polynomial time adversaries, and under the additional worst-case assumption that there is no polynomial time algorithm for counting the number of satisfying assignments for formulas over a polylogarithmic number of variables.
