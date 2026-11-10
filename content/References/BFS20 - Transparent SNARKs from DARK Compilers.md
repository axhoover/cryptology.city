---
type: reference
status: stub
title: "BFS20"
source: https://eprint.iacr.org/2019/1229
authors: Benedikt Bünz, Ben Fisch, Alan Szepieniec
venue: EUROCRYPT 2020
published: 2020
aliases:
  - BFS20
cryptobib_key: EC:BunFisSze20
---

# [BFS20] Transparent SNARKs from DARK Compilers

**Authors:** Benedikt Bünz, Ben Fisch, Alan Szepieniec | **Venue:** EUROCRYPT 2020 | [Source](https://eprint.iacr.org/2019/1229)

## Abstract

We construct a new polynomial commitment scheme for univariate and multivariate polynomials over finite fields, with logarithmic size evaluation proofs and verification time, measured in the number of coefficients of the polynomial. The underlying technique is a Diophantine Argument of Knowledge (DARK), leveraging integer representations of polynomials and groups of unknown order. Security is shown from the strong RSA and the adaptive root assumptions. Moreover, the scheme does not require a trusted setup if instantiated with class groups. We apply this new cryptographic compiler to a restricted class of algebraic linear IOPs, which we call Polynomial IOPs, to obtain doubly-efficient public-coin interactive arguments of knowledge for any NP relation with succinct communication. With linear preprocessing, the online verifier's work is logarithmic in the circuit complexity of the relation.

There are many existing examples of Polynomial IOPs (PIOPs) dating back to the first PCP (BFLS, STOC'91).
We present a generic compilation of any PIOP using our DARK polynomial commitment scheme. In particular, compiling the PIOP from PLONK (GWC, ePrint'19), an improvement on Sonic (MBKM, CCS'19), yields a public-coin interactive argument with quasi-linear preprocessing, quasi-linear (online) prover time, logarithmic communication, and logarithmic (online) verification time in the circuit size. Applying Fiat-Shamir results in a SNARK, which we call _Supersonic_.

Supersonic is also concretely efficient with 10KB proofs and under 100ms verification time for circuits with 1 million gates (estimated for 120-bit security). Most importantly, this SNARK is transparent: it does not require a trusted setup. We obtain zk-SNARKs by applying a hiding variant of our polynomial commitment scheme with zero-knowledge evaluations. Supersonic is the first complete zk-SNARK system that has both a practical prover time as well as asymptotically logarithmic proof size and verification time.

The original proof had a significant gap that was discovered by Block et al. (CRYPTO 2021). The new security proof closes the gap and shows that the original protocol with a slightly adjusted parameter is still secure. Towards this goal, we introduce the notion of almost-special-sound protocols which likely has broader applications.
