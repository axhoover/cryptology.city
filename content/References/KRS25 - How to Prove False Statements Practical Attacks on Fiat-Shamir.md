---
title: "KRS25"
source: https://eprint.iacr.org/2025/118
authors: Dmitry Khovratovich, Ron Rothblum, Oleg Soukhanov
venue: CRYPTO 2025
published: 2025-01-01
aliases:
  - KRS25
tags:
  - CRYPTO
---

# [KRS25] How to Prove False Statements: Practical Attacks on Fiat-Shamir

**Authors:** Dmitry Khovratovich, Ron Rothblum, Oleg Soukhanov | **Venue:** CRYPTO 2025 | [Source](https://eprint.iacr.org/2025/118)

## Abstract

The Fiat-Shamir (FS) transform is a prolific technique for compiling public-coin interactive protocols into non-interactive ones by replacing verifier randomness with hash function evaluations. The FS transform is provably sound in the random oracle model. However, when instantiating the random oracle with a concrete hash function, there exist protocols for which soundness fails. Until this work, all known counterexamples were contrived — specifically engineered to make Fiat-Shamir fail. We show that Fiat-Shamir fails for the GKR succinct interactive argument (a standard, widely-studied protocol): we exhibit explicit families of circuits for which an efficient prover can produce an accepting non-interactive GKR proof of a _false_ statement. This is the first counterexample to Fiat-Shamir applied to a natural protocol, raising fundamental questions about the security of deployed non-interactive succinct arguments.
