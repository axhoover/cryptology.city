---
type: reference
status: draft
title: "BPS25"
source: https://eprint.iacr.org/2025/1079
authors: Maiara F. Bollauf, Roberto Parisella, Janno Siim
venue: IACR Communications in Cryptology (CiC) 2025
published: 2025-06-09
aliases:
  - BPS25
cryptobib_key: CiC:BolParSii25
---

# [BPS25] Revisiting Discrete Logarithm Reductions

**Authors:** Maiara F. Bollauf, Roberto Parisella, Janno Siim | **Venue:** IACR Communications in Cryptology (CiC) 2025 | [Source](https://eprint.iacr.org/2025/1079)

## Abstract

A reduction showing that the hardness of the discrete logarithm ($\mathsf{DL}$) assumption implies the hardness of the computational Diffie-Hellman ($\mathsf{CDH}$) assumption in groups of order $p$, where $p - 1$ is smooth, was first presented by den Boer [Crypto, 88]. We also consider groups of prime order $p$, where $p - 1$ is somewhat smooth (say, every prime $q$ that divides $p - 1$ is less than $2^{100}$). Several practically relevant groups satisfy this condition.

1. We present a concretely efficient version of the reduction for such groups. In particular, among practically relevant groups, we obtain the most efficient and tightest reduction in the literature for BLS12-381, showing that $\mathsf{DL}$ = $\mathsf{CDH}$.
2. By generalizing the reduction, we show that in these groups the $n$-Power $\mathsf{DL}$ ($n$-$\mathsf{PDL}$) assumption implies $n$-Diffie-Hellman Exponent ($n$-$\mathsf{DHE}$) assumption, where $n$ is polynomial in the security parameter.

On the negative side, we show there is no generic reduction, which could demonstrate that $n$-$\mathsf{PDL}$ implies the $n$-Generalized Diffie-Hellman Exponent ($n$-$\mathsf{GDHE}$) assumption. This is in stark contrast with the algebraic group model, where this implication holds.
