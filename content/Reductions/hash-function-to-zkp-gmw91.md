---
type: reduction
status: draft
title: "Hash function ⇒ ZKP"
aliases: []
id: red-hash-function-to-zkp-gmw91
kind: implication
hypotheses: [hash-function]
conclusion: zkp
class: fully-black-box
model: standard
source:
  - "[[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]"
security-loss: ""
---

# Hash function ⇒ ZKP

[[hash-function|Hash function]] implies [[zero-knowledge-proof|ZKP]].

## Statement

If [[hash-function|one-way functions]] exist, every language in $\classNP$ has a computational [[zero-knowledge-proof|zero-knowledge proof]] — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]. The protocol proves 3-colorability with a statistically binding commitment, which one-way functions yield — [[Naor91 - Bit commitment using pseudorandomness|Naor91]], [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]].

## Sketch

The prover commits to a uniformly permuted 3-coloring of the graph; the verifier picks a random edge and the prover opens its two endpoints, which must carry distinct colors. Sequential repetition makes the per-round soundness error $1 - 1/|E|$ negligible; a simulator that guesses the challenged edge and rewinds gives computational zero knowledge.

## Notes

`class: fully-black-box`: the protocol uses the commitment only as an oracle, and Naor's PRG-based commitment on the HILL PRG uses the OWF only as an oracle. Soundness is statistical; the zero-knowledge reduction runs every simulation distinguisher as an oracle to break hiding, hence to invert the OWF.

- The conclusion is 'ZK proofs for all of NP', a language-class-qualified object the flat slug zero-knowledge-proof cannot express.
