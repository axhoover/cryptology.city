---
type: reference
status: stub
title: "BCCGP16"
source: https://eprint.iacr.org/2016/263
authors: Jonathan Bootle, Andrea Cerulli, Pyrros Chaidos, Jens Groth, Christophe Petit
venue: EUROCRYPT 2016
published: 2016
aliases:
  - BCCGP16
cryptobib_key: EC:BCCGP16
---

# [BCCGP16] Efficient Zero-Knowledge Arguments for Arithmetic Circuits in the Discrete Log Setting

**Authors:** Jonathan Bootle, Andrea Cerulli, Pyrros Chaidos, Jens Groth, Christophe Petit | **Venue:** EUROCRYPT 2016 | [Source](https://eprint.iacr.org/2016/263)

## Abstract

We provide a zero-knowledge argument for arithmetic circuit satisfiability with a communication complexity that grows logarithmically in the size of the circuit. The round complexity is also logarithmic and for an arithmetic circuit with fan-in 2 gates the computation of the prover and verifier is linear in the size of the circuit. The soundness of our argument relies solely on the well-established discrete logarithm assumption in prime order groups.

At the heart of our new argument system is an efficient zero-knowledge argument of knowledge of openings of two Pedersen multicommitments satisfying an inner product relation, which is of independent interest. The inner product argument requires logarithmic communication, logarithmic interaction and linear computation for both the prover and the verifier. We also develop a scheme to commit to a polynomial and later reveal the evaluation at an arbitrary point, in a verifiable manner. This is used to build an optimized version of the constant round square root complexity argument of Groth (CRYPTO 2009), which reduces both communication and round complexity.
