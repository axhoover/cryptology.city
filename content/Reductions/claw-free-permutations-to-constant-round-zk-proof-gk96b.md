---
type: reduction
status: draft
title: Claw-free permutations ⇒ Constant-round ZK proofs for NP (Goldreich–Kahan)
aliases: []
id: red-claw-free-permutations-to-constant-round-zk-proof-gk96b
kind: implication
hypotheses: [claw-free-permutations]
conclusion: constant-round-zk-proof
class: unstated
model: standard
source:
  - "[[GK96b - How to Construct Constant-Round Zero-Knowledge Proof Systems for NP|GK96b]]"
security-loss: "polynomial"
---

# Claw-free permutations ⇒ Constant-round ZK proofs for NP (Goldreich–Kahan)

## Statement

If [[trapdoor-permutation#claw-free-permutations|claw-free permutation collections]] exist, every language in $\classNP$ has a [[zero-knowledge-proof#constant-round-zero-knowledge-proofs|constant-round zero-knowledge proof]] with negligible soundness error, sound against unbounded provers — [[GK96b - How to Construct Constant-Round Zero-Knowledge Proof Systems for NP|GK96b]].

## Sketch

The verifier first commits to all its challenges with a statistically hiding commitment, built from the claw-free pair; the prover then runs many parallel copies of a three-message zero-knowledge proof, committing with statistically binding commitments, and the verifier opens its challenges. Statistical hiding keeps the challenges independent of the prover's first messages, so soundness holds against unbounded provers, and the commitment to the challenges lets the simulator rewind the verifier to learn them before answering — [[GK96b - How to Construct Constant-Round Zero-Knowledge Proof Systems for NP|GK96b]].

## Notes

- Three rounds do not suffice for black-box simulation, and constant-round public-coin protocols with negligible soundness error cannot have black-box simulators, for languages outside $\classBPP$: [[no-zkp-to-argument-systems|No constant-round public-coin black-box ZK]] — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]]. The verifier's commitment makes the protocol private-coin.
- Claw-free permutations follow from factoring: [[factoring-blum-integers-to-claw-free-permutations-gmr88|Factoring ⇒ claw-free permutations]] — [[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]].
