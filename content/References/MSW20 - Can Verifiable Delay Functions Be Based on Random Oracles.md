---
type: reference
status: stub
title: "MSW20"
source: https://eprint.iacr.org/2019/663
authors: Mohammad Mahmoody, Caleb Smith, David J. Wu
venue: ICALP 2020
published: 2020
aliases:
  - MSW20
cryptobib_key: ICALP:MahSmiWu20
---

# [MSW20] Can Verifiable Delay Functions Be Based on Random Oracles?

**Authors:** Mohammad Mahmoody, Caleb Smith, David J. Wu | **Venue:** ICALP 2020 | [Source](https://eprint.iacr.org/2019/663)

## Abstract

Boneh, Bonneau, Bünz, and Fisch (CRYPTO 2018) recently introduced the notion of a verifiable delay function (VDF). VDFs are functions that take a long sequential time $T$ to compute, but whose outputs $y = \mathsf{Eval}(x)$ can be efficiently verified (possibly given a proof $\pi$) in time $t \ll T$ (e.g., $t=\mathrm{poly}(\lambda, \log T)$ where $\lambda$ is the security parameter). The first security requirement on a VDF, called uniqueness, is that no polynomial-time algorithm can find a convincing proof $\pi'$ that verifies for an input $x$ and a different output $y' \neq y$. The second security requirement, called sequentiality, is that no polynomial-time algorithm running in time $\sigma<T$ for some parameter $\sigma$ (e.g., $\sigma=T^{1/10}$) can compute $y$, even with $\mathrm{poly} (T,\lambda)$ many parallel processors. Starting from the work of Boneh et al., there are now multiple constructions of VDFs from various algebraic assumptions.

In this work, we study whether VDFs can be constructed from ideal hash functions in a black-box way, as modeled in the random oracle model (ROM). In the ROM, we measure the running time by the number of oracle queries and the sequentiality by the number of rounds of oracle queries. We rule out two classes of constructions of VDFs in the ROM:

(1) We show that VDFs satisfying perfect uniqueness (i.e., no different convincing solution $y' \neq y$ exists) cannot be constructed in the ROM. More formally, we give an attacker that finds the solution $y$ in $\approx t$ rounds of queries, asking only $\mathrm{poly}(T)$ queries in total.

(2) We also rule out tight VDFs in the ROM. Tight VDFs were recently studied by Döttling, Garg, Malavolta, and Vasudevan (ePrint Report 2019) and require sequentiality $\sigma \approx T-T^\rho$ for some constant $0 < \rho <1$. More generally, our lower bound also applies to proofs of sequential work (i.e., VDFs without the uniqueness property), even in the private verification setting, and sequentiality $\sigma > T-\frac{T}{2t}$ for a concrete verification time $t$.
