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

The prover sends a claw-free pair, under which the verifier commits to all its challenges with a statistically hiding commitment; the prover sends the first messages of many parallel copies of a three-message zero-knowledge proof, committing with statistically binding commitments; the verifier opens its challenges and the prover answers. Statistical hiding keeps the challenges independent of the prover's first messages, so soundness holds against unbounded provers, and the commitment to the challenges lets the simulator rewind the verifier to learn them before answering — [[GK96b - How to Construct Constant-Round Zero-Knowledge Proof Systems for NP|GK96b]].

## Notes

- For languages outside $\classBPP$, no zero-knowledge proof with negligible soundness error and a black-box simulator has three messages, or is constant-round and public-coin: [[no-zkp-to-argument-systems|No constant-round public-coin black-box ZK]] — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]]. The GK96b protocol has five messages and is private-coin, since the verifier commits to its challenges — [[GK96b - How to Construct Constant-Round Zero-Knowledge Proof Systems for NP|GK96b]].
- Claw-free permutations follow from factoring: [[factoring-blum-integers-to-claw-free-permutations-gmr88|Factoring ⇒ claw-free permutations]] — [[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]].
