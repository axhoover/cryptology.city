---
type: reference
status: stub
title: "BCG+20"
source: https://eprint.iacr.org/2022/1035
authors: Elette Boyle, Geoffroy Couteau, Niv Gilboa, Yuval Ishai, Lisa Kohl, Peter Scholl
venue: CRYPTO 2020
published: 2020
aliases:
  - BCG+20
cryptobib_key: C:BCGIKS20
---

# [BCG+20] Efficient Pseudorandom Correlation Generators from Ring-LPN

**Authors:** Elette Boyle, Geoffroy Couteau, Niv Gilboa, Yuval Ishai, Lisa Kohl, Peter Scholl | **Venue:** CRYPTO 2020 | [Source](https://eprint.iacr.org/2022/1035)

## Abstract

Secure multiparty computation can often utilize a trusted source of correlated randomness to achieve better efficiency. A recent line of work, initiated by Boyle et al. (CCS 2018, Crypto 2019), showed how useful forms of correlated randomness can be generated using a cheap, one-time interaction, followed by only "silent" local computation. This is achieved via a pseudorandom correlation generator (PCG), a deterministic function that stretches short correlated seeds into long instances of a target correlation. Previous works constructed concretely efficient PCGs for simple but useful correlations, including random oblivious transfer and vector-OLE, together with efficient protocols to distribute the PCG seed generation. Most of these constructions were based on variants of the Learning Parity with Noise (LPN) assumption. PCGs for other useful correlations had poor asymptotic and concrete efficiency.

In this work, we design a new class of efficient PCGs based on different flavors of the ring-LPN assumption. Our new PCGs can generate OLE correlations, authenticated multiplication triples, matrix product correlations, and other types of useful correlations over large fields. These PCGs are more efficient by orders of magnitude than the previous constructions and can be used to improve the preprocessing phase of many existing MPC protocols.
