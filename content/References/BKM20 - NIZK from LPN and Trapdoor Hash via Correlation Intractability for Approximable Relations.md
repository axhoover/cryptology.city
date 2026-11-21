---
type: reference
status: stub
title: "BKM20"
source: https://eprint.iacr.org/2020/258
authors: Zvika Brakerski, Venkata Koppula, Tamer Mour
venue: CRYPTO 2020
published: 2020
aliases:
  - BKM20
cryptobib_key: C:BraKopMou20
---

# [BKM20] NIZK from LPN and Trapdoor Hash via Correlation Intractability for Approximable Relations

**Authors:** Zvika Brakerski, Venkata Koppula, Tamer Mour | **Venue:** CRYPTO 2020 | [Source](https://eprint.iacr.org/2020/258)

## Abstract

We present new non-interactive zero-knowledge argument systems (NIZK), based on standard assumptions that were previously not known to imply it. In particular, we rely on the hardness of both the learning parity with noise (LPN) assumption, and the existence of trapdoor hash functions (TDH, defined by Döttling et al., Crypto 2019). Such TDH can be based on a number of standard assumptions, including DDH, QR, DCR, and LWE. We revisit the correlation intractability (CI) framework for converting $\Sigma$-protocols into NIZK, and present a different strategy for instantiating it by putting together two new components. First, while prior works considered the search-complexity of the relations for which CI is sought,we consider their probabilistic representation. Namely, a distribution over lower-complexity functions that bitwise-computes the target function with all but small (constant) probability. The second component is a new perspective for quantifying the class of relations for which CI is achieved. We show that it is instructive to consider CI for approximable relations (CI-Apx) which is quantified by a class of relations, but requires CI to hold against any approximation of any relation in this class. We show that CI-Apx for just constant-degree polynomials suffices for NIZK, if the under-lying $\Sigma$-protocol is implemented using a suitable commitment scheme. We show that such a commitment scheme can be constructed based on LPN. We then show how to construct CI-Apx for constant-degree polynomials from any suitable TDH (with an enhanced correctness property that is satisfied by all existing TDH constructions).
