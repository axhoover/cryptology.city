---
type: reference
status: stub
title: "Tha13"
source: https://eprint.iacr.org/2013/351
authors: Justin Thaler
venue: CRYPTO 2013
published: 2013
aliases:
  - Tha13
cryptobib_key: C:Thaler13
---

# [Tha13] Time-Optimal Interactive Proofs for Circuit Evaluation

**Authors:** Justin Thaler | **Venue:** CRYPTO 2013 | [Source](https://eprint.iacr.org/2013/351)

## Abstract

Several research teams have recently been working toward the development of practical general-purpose protocols for verifiable computation. These protocols enable a computationally weak verifier to offload computations to a powerful but untrusted prover while providing the verifier with a guarantee that the prover performed the requested computations correctly. Despite substantial progress, existing implementations require further improvements before they become practical for most settings. The main bottleneck is typically the extra effort required by the prover to return an answer with a guarantee of correctness, compared to returning an answer with no guarantee.

We describe a refinement of a powerful interactive proof protocol due to Goldwasser, Kalai, and Rothblum. Cormode, Mitzenmacher, and Thaler show how to implement the prover in this protocol in time $O(S \log S)$, where $S$ is the size of an arithmetic circuit computing the function of interest. Our refinements apply to circuits with sufficiently "regular" wiring patterns; for these circuits, we bring the runtime of the prover down to $O(S)$. That is, our prover can evaluate the circuit with a guarantee of correctness, with only a constant-factor blowup in work compared to evaluating the circuit with no guarantee.

We argue that our refinements capture a large class of circuits, and we complement our theoretical results with experiments on problems such as matrix multiplication and determining the number of distinct elements in a data stream. Experimentally, our refinements yield a 200x speedup for the prover over the implementation of Cormode et al., and our prover is less than 10x slower than a C++ program that simply evaluates the circuit. Along the way, we describe a special-purpose protocol for matrix multiplication that is of interest in its own right.

Our final contribution is the design of an interactive proof protocol targeted at general data parallel computation. Compared to prior work, this protocol can more efficiently verify complicated computations as long as that computation is applied independently to many different pieces of data.
