---
type: reference
status: stub
title: "KLV23"
source: https://eprint.iacr.org/2022/1409
authors: Yael Tauman Kalai, Alex Lombardi, Vinod Vaikuntanathan
venue: EUROCRYPT 2023
published: 2023
aliases:
  - KLV23
cryptobib_key: EC:KalLomVai23
---

# [KLV23] SNARGs and PPAD Hardness from the Decisional Diffie-Hellman Assumption

**Authors:** Yael Tauman Kalai, Alex Lombardi, Vinod Vaikuntanathan | **Venue:** EUROCRYPT 2023 | [Source](https://eprint.iacr.org/2022/1409)

## Abstract

We construct succinct non-interactive arguments (SNARGs) for bounded-depth computations assuming that the decisional Diffie-Hellman (DDH) problem is sub-exponentially hard. This is the first construction of such SNARGs from a Diffie-Hellman assumption. Our SNARG is also unambiguous: for every (true) statement $x$, it is computationally hard to find any accepting proof for $x$ other than the proof produced by the prescribed prover strategy.

We obtain our result by showing how to instantiate the Fiat-Shamir heuristic, under DDH, for a variant of the Goldwasser-Kalai-Rothblum (GKR) interactive proof system. Our new technical contributions are (1) giving a $TC^0$ circuit family for finding roots of cubic polynomials over a special family of characteristic $2$ fields (Healy-Viola, STACS '06) and (2) constructing a variant of the GKR protocol whose invocations of the sumcheck protocol (Lund-Fortnow-Karloff-Nisan, STOC '90) only involve degree $3$ polynomials over said fields.

Along the way, since we can instantiate Fiat-Shamir for certain variants of the sumcheck protocol, we also show the existence of (sub-exponentially) computationally hard problems in the complexity class $\mathsf{PPAD}$, assuming the sub-exponential hardness of DDH. Previous $\mathsf{PPAD}$ hardness results all required either bilinear maps or the learning with errors assumption.
