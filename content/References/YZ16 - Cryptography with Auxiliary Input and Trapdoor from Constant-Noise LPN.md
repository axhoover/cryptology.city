---
title: "YZ16"
source: https://eprint.iacr.org/2016/514
authors: Yu Yu, Jiang Zhang
venue: CRYPTO 2016
published: 2016-05-29
created: 2025-05-20
aliases:
  - YZ16
tags:
  - CRYPTO

---
# [YZ16] Cryptography with Auxiliary Input and Trapdoor from Constant-Noise LPN

**Authors:** Yu Yu, Jiang Zhang | **Venue:** CRYPTO 2016 | [Source](https://eprint.iacr.org/2016/514)

## Abstract
Dodis, Kalai and Lovett (STOC 2009) initiated the study of the Learning Parity with Noise (LPN) problem with (static) exponentially hard-to-invert auxiliary input. In particular, they showed that under a new assumption (called Learning Subspace with Noise) the above is quasi-polynomially hard in the high (polynomially close to uniform) noise regime.

Inspired by the "sampling from subspace" technique by Yu (eprint 2009 / 467) and Goldwasser et al. (ITCS 2010), we show that standard LPN can work in a mode (reducible to itself) where the constant-noise LPN (by sampling its matrix from a random subspace) is robust against sub-exponentially hard-to-invert auxiliary input with comparable security to the underlying LPN. Plugging this into the framework of [DKL09], we obtain the same applications as considered in [DKL09] (i.e., CPA/CCA secure symmetric encryption schemes, average-case obfuscators, reusable and robust extractors) with resilience to a more general class of leakages, improved efficiency and better security under standard assumptions.

As a main contribution, under constant-noise LPN with certain sub-exponential hardness (i.e., $2^{\omega(n^{1/2})}$ for secret size $n$) we obtain a variant of the LPN with security on poly-logarithmic entropy sources, which in turn implies CPA/CCA secure public-key encryption (PKE) schemes and oblivious transfer (OT) protocols. Prior to this, basing PKE and OT on constant-noise LPN had been an open problem since Alekhnovich's work (FOCS 2003).