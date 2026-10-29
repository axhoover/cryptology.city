---
type: reduction
status: draft
title: DLOG ⇒ Succinct arguments for NP (Bootle et al.)
aliases: []
id: red-prime-order-dlog-to-interactive-succinct-argument-bccgp16
kind: implication
hypotheses: [prime-order-dlog]
conclusion: interactive-succinct-argument
class: fully-black-box
model: crs
source:
  - "[[BCCGP16 - Efficient Zero-Knowledge Arguments for Arithmetic Circuits in the Discrete Log Setting|BCCGP16]]"
security-loss: ""
rationale:
  class: "One fixed construction uses the group only through group operations on the public generators, and the extractor runs the prover only as an oracle, rewinding it over a tree of challenges and turning two distinct openings into a nontrivial discrete-log relation among the generators."
  model: "The public parameters are uniformly random group elements sampled by the setup, and soundness needs that no party knows discrete-logarithm relations among them."
---

# DLOG ⇒ Succinct arguments for NP (Bootle et al.)

## Statement

If [[discrete-logarithm#dlog-in-prime-order-groups|DLOG is hard in prime-order groups]], arithmetic circuit satisfiability has a public-coin zero-knowledge [[succinct-argument#interactive-succinct-arguments|interactive argument]] with $O(\log N)$ rounds and $O(\log N)$ group and field elements of communication for circuits with $N$ fan-in-2 gates, in which prover and verifier computation is linear in $N$; its public parameters are uniformly random group elements, the generators of a Pedersen multicommitment — [[BCCGP16 - Efficient Zero-Knowledge Arguments for Arithmetic Circuits in the Discrete Log Setting|BCCGP16]]. Its core is a zero-knowledge argument of knowledge of openings of two Pedersen multicommitments satisfying an inner-product relation, with logarithmic communication and interaction and linear computation for prover and verifier — [[BCCGP16 - Efficient Zero-Knowledge Arguments for Arithmetic Circuits in the Discrete Log Setting|BCCGP16]].

## Notes

- [[fiat-shamir-heuristic|Fiat–Shamir]] leaves the verifier's running time unchanged, so the non-interactive argument it gives in the random-oracle model has logarithmic proofs and a linear-time verifier — standard.
- Bulletproofs shorten the inner-product argument, giving range proofs of $2 \log_2 n + 9$ group and field elements for $n$-bit ranges, aggregation of $m$ range proofs at an additive $O(\log m)$ group elements, and logarithmic-size proofs for general arithmetic circuits, from DLOG with no trusted setup and linear-time verification — [[BBB+18 - Bulletproofs Short Proofs for Confidential Transactions and More|BBB+18]].
- BCCGP16 also give a commitment to a polynomial with verifiable evaluation at any point, which gives an optimized version of Groth's constant-round argument with square-root communication — [[BCCGP16 - Efficient Zero-Knowledge Arguments for Arithmetic Circuits in the Discrete Log Setting|BCCGP16]]. Committing to the coefficient vector with a Pedersen multicommitment and proving evaluations with the inner-product argument gives a transparent polynomial commitment scheme with logarithmic openings: [[dlog-to-pcs|DLOG ⇒ PCS]] — [[BCMS20 - Recursive Proof Composition from Accumulation Schemes|BCMS20]].
