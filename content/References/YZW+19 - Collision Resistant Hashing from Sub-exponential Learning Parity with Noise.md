---
title: "YZW+19"
source: https://eprint.iacr.org/2017/1260
authors: Yu Yu, Jiang Zhang, Jian Weng, Chun Guo, Xiangxue Li
venue: ASIACRYPT 2019
published: 2017-12-30
aliases:
  - YZW+19
tags:
  - Asiacrypt

---
# [YZW+19] Collision Resistant Hashing from Sub-exponential Learning Parity with Noise

**Authors:** Yu Yu, Jiang Zhang, Jian Weng, Chun Guo, Xiangxue Li | **Venue:** ASIACRYPT 2019 | [Source](https://eprint.iacr.org/2017/1260)

## Abstract
The Learning Parity with Noise (LPN) problem has recently found many cryptographic applications such as authentication protocols, pseudorandom generators/functions and even asymmetric tasks including public-key encryption (PKE) schemes and oblivious transfer (OT) protocols. It however remains a long-standing open problem whether LPN implies collision resistant hash (CRH) functions. Based on the recent work of Applebaum et al. (ITCS 2017), we introduce a general framework for constructing CRH from LPN for various parameter choices. We show that, just to mention a few notable ones, under any of the following hardness assumptions (for the two most common variants of LPN)

1) constant-noise LPN is $2^{n^{0.5+\epsilon}}$-hard for any constant $\epsilon>0$;

2) constant-noise LPN is $2^{\Omega(n/\log n)}$-hard given $q=poly(n)$ samples;

3) low-noise LPN (of noise rate $1/\sqrt{n}$) is $2^{\Omega(\sqrt{n}/\log n)}$-hard given $q=poly(n)$ samples.

there exists CRH functions with constant (or even poly-logarithmic) shrinkage, which can be implemented using polynomial-size depth-3 circuits with NOT, (unbounded fan-in) AND and XOR gates. Our technical route LPN$\rightarrow$bSVP$\rightarrow$CRH is reminiscent of the known reductions for the large-modulus analogue, i.e., LWE$\rightarrow$SIS$\rightarrow$CRH, where the binary Shortest Vector Problem (bSVP) was recently introduced by Applebaum et al. (ITCS 2017) that enables CRH in a similar manner to Ajtai's CRH functions based on the Short Integer Solution (SIS) problem.

Furthermore, under additional (arguably minimal) idealized assumptions such as small-domain random functions or random permutations (that trivially imply collision resistance), we still salvage a simple and elegant collision-resistance-preserving domain extender that is (asymptotically) more parallel and efficient than previously known. In particular, assume $2^{n^{0.5+\epsilon}}$-hard constant-noise LPN or $2^{n^{0.25+\epsilon}}$-hard low-noise LPN, we obtain a polynomially shrinking collision resistant hash function that evaluates in parallel only a single layer of small-domain random functions (or random permutations) and produces their XOR sum as output.