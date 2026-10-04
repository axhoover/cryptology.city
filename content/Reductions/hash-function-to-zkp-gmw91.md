---
type: reduction
status: draft
title: "OWF ⇒ ZKP"
aliases: []
id: red-hash-function-to-zkp-gmw91
kind: implication
hypotheses: [owf]
conclusion: zkp
class: fully-black-box
model: standard
source:
  - "[[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]"
security-loss: ""
rationale:
  class: "The protocol uses the commitment only as an oracle and Naor's commitment on the HILL generator uses the one-way function only as an oracle; soundness is statistical, and the zero-knowledge reduction runs any simulation distinguisher only as an oracle to break hiding, hence to invert the function."
---

# OWF ⇒ ZKP

## Statement

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, every language in $\classNP$ has a computational [[zero-knowledge-proof|zero-knowledge proof]] — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]. The protocol proves graph 3-colorability with a statistically binding commitment, which one-way functions yield — [[Naor91 - Bit commitment using pseudorandomness|Naor91]], [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]].

## Sketch

The prover commits to a uniformly permuted 3-coloring of the graph; the verifier picks a random edge and the prover opens its two endpoints, which must carry distinct colors. Sequential repetition drives the per-round soundness error $1 - 1/|E|$ down to a negligible one; a simulator that guesses the challenged edge and rewinds gives computational zero knowledge.
