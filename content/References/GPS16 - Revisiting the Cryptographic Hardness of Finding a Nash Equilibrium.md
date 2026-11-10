---
type: reference
status: stub
title: "GPS16"
source: https://eprint.iacr.org/2015/1078
authors: Sanjam Garg, Omkant Pandey, Akshayaram Srinivasan
venue: CRYPTO 2016
published: 2016
aliases:
  - GPS16
cryptobib_key: C:GarPanSri16
---

# [GPS16] Revisiting the Cryptographic Hardness of Finding a Nash Equilibrium

**Authors:** Sanjam Garg, Omkant Pandey, Akshayaram Srinivasan | **Venue:** CRYPTO 2016 | [Source](https://eprint.iacr.org/2015/1078)

## Abstract

The exact hardness of computing a Nash equilibrium is a fundamental open question in algorithmic game theory. This problem is complete for the complexity class $\mathbf{PPAD}$. It is well known that problems in $\mathbf{PPAD}$ cannot be $\classNP$-complete unless $\classNP=\classcoNP$. Therefore, a natural direction is to reduce the hardness of $\mathbf{PPAD}$ to the hardness of problems used in cryptography.

Bitansky, Paneth, and Rosen [FOCS 2015] prove the hardness of $\mathbf{PPAD}$ assuming the existence of quasi-polynomially hard indistinguishability obfuscation and sub-exponentially hard one-way functions. This leaves open the possibility of basing $\mathbf{PPAD}$ hardness on simpler, polynomially hard, computational assumptions.

We make further progress in this direction and reduce $\mathbf{PPAD}$ hardness directly to polynomially hard assumptions.
Our first result proves hardness of $\mathbf{PPAD}$ assuming the existence of _polynomially hard_ indistinguishability obfuscation ($i\mathcal{O}$) and one-way permutations. While this improves upon Bitansky et al.'s work, it does not give us a reduction to simpler, polynomially hard computational assumption because constructions of $i\mathcal{O}$ inherently seems to require assumptions with sub-exponential hardness. In contrast, _public key functional encryption_ is a much simpler primitive and does not suffer from this drawback. Our second result shows that $\mathbf{PPAD}$ hardness can be based on _polynomially hard_ compact public key functional encryption and one-way permutations. Our results further demonstrate the power of polynomially hard compact public key functional encryption which is believed to be weaker than indistinguishability obfuscation. Our techniques are general and we expect them to have various applications.
