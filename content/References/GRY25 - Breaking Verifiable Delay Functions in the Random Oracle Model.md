---
type: reference
status: stub
title: "GRY25"
source: https://eprint.iacr.org/2024/766
authors: Ziyi Guan, Artur Riazanov, Weiqiang Yuan
venue: CRYPTO 2025
published: 2025
aliases:
  - GRY25
cryptobib_key: C:GuaRiaYua25
---

# [GRY25] Breaking Verifiable Delay Functions in the Random Oracle Model

**Authors:** Ziyi Guan, Artur Riazanov, Weiqiang Yuan | **Venue:** CRYPTO 2025 | [Source](https://eprint.iacr.org/2024/766)

## Abstract

This work resolves the open problem of whether verifiable delay functions (VDFs) can be constructed in the random oracle model.A VDF is a cryptographic primitive that requires a long time to compute (even with parallelization), but produces a unique output that is efficiently and publicly verifiable.

We prove that VDFs do not exist in the random oracle model. This also rules out black-box constructions of VDFs from other cryptographic primitives, such as one-way functions, one-way permutations and collision-resistant hash functions.

Prior to our work, Mahmoody, Smith and Wu (ICALP 2020) prove that _perfectly unique_ VDFs (a much stronger form of VDFs) do not exist in the random oracle model; on the other hand, Ephraim, Freitag, Komargodski, and Pass (Eurocrypt 2020) construct VDFs in the random oracle model assuming the hardness of repeated squaring. Our result is optimal -- we bridge the current gap between previously known impossibility results and existing constructions.

We initiate the study of _proof of work functions_, a new cryptographic primitive that shares similarities with both VDFs and proof of works. We show that a stronger form of it does not exist in the random oracle model, leaving open the fascinating possibility of a random-oracle-based construction.
