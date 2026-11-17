---
type: reduction
status: draft
title: "Non-uniform OWF ⇒ ZKP"
aliases: []
id: red-hash-function-to-zkp-gmw91
kind: implication
hypotheses: [non-uniform-owf]
conclusion: zkp
class: unstated
model: standard
source:
  - "[[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]"
security-loss: "polynomial: soundness is statistical, and zero knowledge reduces to commitment hiding by a hybrid over the polynomially many unopened commitments, on top of the polynomial loss of the commitment from the one-way function"
rationale:
  class: "The protocol uses the commitment, and through HILL99 and Naor91 the one-way function, only as oracles, but the zero-knowledge reduction hard-wires the instance and a 3-coloring of it as non-uniform advice, and the vocabulary has no non-uniform class."
---

# Non-uniform OWF ⇒ ZKP

## Statement

If [[hash-function#one-wayness-against-non-uniform-adversaries|one-way functions secure against non-uniform adversaries]] exist, every language in $\classNP$ has a computational [[zero-knowledge-proof|zero-knowledge proof]] — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]. The protocol proves graph 3-colorability with a statistically binding commitment, which one-way functions yield — [[Naor91 - Bit commitment using pseudorandomness|Naor91]], [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]. The zero-knowledge reduction to hiding hard-wires the instance and a 3-coloring of it, so it needs non-uniform hardness; the HILL99 and Naor91 reductions are uniform and black-box, so the commitment inherits it — standard ([[uniform-and-non-uniform-adversaries#relation-between-the-notions|uniform and non-uniform adversaries]]).

## Sketch

The prover commits to a uniformly permuted 3-coloring of the graph; the verifier picks a random edge and the prover opens its two endpoints, which must carry distinct colors. Sequential repetition drives the per-round soundness error $1 - 1/|E|$ down to a negligible one; a simulator that guesses the challenged edge and rewinds gives computational zero knowledge.
