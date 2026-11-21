---
type: reference
status: stub
title: "BCCT13"
source: https://eprint.iacr.org/2012/095
authors: Nir Bitansky, Ran Canetti, Alessandro Chiesa, Eran Tromer
venue: STOC 2013
published: 2013
aliases:
  - BCCT13
cryptobib_key: STOC:BCCT13
---

# [BCCT13] Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data

**Authors:** Nir Bitansky, Ran Canetti, Alessandro Chiesa, Eran Tromer | **Venue:** STOC 2013 | [Source](https://eprint.iacr.org/2012/095)

## Abstract

_Succinct non-interactive arguments_ (SNARGs) enable verifying NP statements with much lower complexity than required for classical NP verification (in fact, with complexity that is _independent_ of the NP language at hand). In particular, SNARGs provide strong solutions to the problem of verifiably delegating computation.

Despite recent progress in the understanding and construction of SNARGs, there remain unattained goals. First, _publicly-verifiable SNARGs_ are only known either in the random oracle model, or in a model that allows expensive offline preprocessing. Second, known SNARGs require from the prover significantly more time or space than required for classical NP verification.

We show that, assuming collision-resistant hashing, _any_ SNARG having a natural _proof of knowledge_ property (i.e., a SNARK) can be “bootstrapped” to obtain a _complexity-preserving_ SNARK, i.e., one without expensive preprocessing and where the prover's time and space complexity is essentially the same as that required for classical NP verification. By applying our transformation to known publicly-verifiable SNARKs with expensive preprocessing, we obtain the first publicly-verifiable complexity-preserving SNARK in the plain model (and in particular, eliminate the expensive preprocessing), thereby attaining the aforementioned goals. We also show an analogous transformation for privately-verifiable SNARKs, assuming fully-homomorphic encryption. Curiously, our transformations do not rely on PCPs.

At the heart of our transformations is _recursive composition_ of SNARKs and, more generally, new techniques for constructing and using _proof-carrying data_ (PCD) systems, which extend the notion of a SNARK to the distributed setting. Concretely, to bootstrap a given SNARK, we recursively compose the SNARK to obtain a “weak” PCD system for shallow distributed computations, and then use the PCD framework to attain stronger, complexity-preserving SNARKs and PCD systems.
