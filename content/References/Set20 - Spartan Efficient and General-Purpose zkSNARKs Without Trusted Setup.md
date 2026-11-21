---
type: reference
status: stub
title: "Set20"
source: https://eprint.iacr.org/2019/550
authors: Srinath Setty
venue: CRYPTO 2020
published: 2020
aliases:
  - Set20
cryptobib_key: C:Setty20
---

# [Set20] Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup

**Authors:** Srinath Setty | **Venue:** CRYPTO 2020 | [Source](https://eprint.iacr.org/2019/550)

## Abstract

This paper introduces Spartan, a new family of zero-knowledge succinct non-interactive arguments of knowledge (zkSNARKs) for the rank-1 constraint satisfiability (R1CS), an NP-complete language that generalizes arithmetic circuit satisfiability. A distinctive feature of Spartan is that it offers the first zkSNARKs without trusted setup (i.e., transparent zkSNARKs) for NP where verifying a proof incurs sub-linear costs—without requiring uniformity in the NP statement’s structure. Furthermore,
Spartan offers zkSNARKs with a time-optimal prover, a property that has remained elusive for nearly all zkSNARKs in the literature.

To achieve these results, we introduce new techniques that we compose with the sum-check protocol, a seminal interactive proof protocol: (1) computation commitments, a primitive to create a succinct commitment to a description of a computation; this technique is crucial for a verifier to achieve sub-linear costs after investing a one-time, public computation to preprocess a given NP statement; (2) SPARK, a cryptographic compiler to transform any existing extractable polynomial commitment scheme for multilinear polynomials to one that efficiently handles sparse multilinear polynomials; this technique is critical for achieving a time-optimal prover; and (3) a compact encoding of an R1CS instance as a low-degree polynomial. The end result is a public-coin succinct interactive argument of knowledge for NP (which can be viewed as a succinct variant of the sum-check protocol); we transform it into a zkSNARK using prior techniques. By applying SPARK to different commitment schemes, we obtain several zkSNARKs where the verifier’s costs and the proof size range from $O(\log^2{n})$ to $O(\sqrt{n})$ depending on the underlying commitment scheme ($n$ denotes the size of the NP statement). These schemes do not require a trusted setup except for one that requires a universal trusted setup.

We implement Spartan as a library in about 8,000 lines of Rust. We use the library to build a transparent zkSNARK in the random oracle model where security holds under the discrete logarithm assumption. We experimentally evaluate it and compare it with recent zkSNARKs for R1CS instance sizes up to $2^{20}$ constraints. Among transparent zkSNARKs, Spartan offers the fastest prover with speedups of $36$–$152\times$ depending on the baseline, produces proofs that are shorter by $1.2$–$416\times$, and incurs the lowest verification times with speedups of $3.6$–$1326\times$. The only exception is proof sizes under Bulletproofs, but Bulletproofs incurs slower verification both asymptotically and concretely. When compared to the state-of-the-art zkSNARK with trusted setup, Spartan’s prover is $2\times$ faster for arbitrary R1CS instances and $16\times$ faster for data-parallel workloads.

Spartan’s code is available from: https://github.com/Microsoft/Spartan.
