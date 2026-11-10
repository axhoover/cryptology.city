---
type: reference
status: stub
title: "GWC19"
source: https://eprint.iacr.org/2019/953
authors: Ariel Gabizon, Zachary J. Williamson, Oana Ciobotaru
venue: Cryptology ePrint Archive 2019
published: 2019
aliases:
  - GWC19
cryptobib_key: EPRINT:GabWilCio19
---

# [GWC19] PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge

**Authors:** Ariel Gabizon, Zachary J. Williamson, Oana Ciobotaru | **Venue:** Cryptology ePrint Archive 2019 | [Source](https://eprint.iacr.org/2019/953)

## Abstract

zk-SNARK constructions that utilize an updatable universal structured reference string remove one of the main obstacles in deploying zk-SNARKs [GKMMM, Crypto 2018]. The important work of Maller et al. [MBKM, CCS 2019] presented $\mathsf{Sonic}$ - the first potentially practical zk-SNARK with fully succinct verification for general arithmetic circuits with such an SRS.
However, the version of $\mathsf{Sonic}$ enabling fully succinct verification still requires relatively high proof construction overheads. We present a universal SNARK construction with fully succinct verification, and significantly lower prover running time (roughly 7.5-20 less group exponentiations than [MBKM] in the fully succinct verifier mode depending on circuit structure).

Similarly to [MBKM], we rely on a permutation argument based on Bayer and Groth [Eurocrypt 2012]. However, we focus on “Evaluations on a subgroup rather than coefficients of monomials”; which enables simplifying both the permutation argument and the artihmetization step.
