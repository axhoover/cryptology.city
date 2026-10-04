---
type: reduction
status: draft
title: "OWF ⇒ CZK"
aliases: []
id: red-hash-function-to-czk
kind: implication
hypotheses: [owf]
conclusion: czk
class: fully-black-box
model: standard
source:
  - "[[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]"
security-loss: ""
rationale:
  class: "The 3-coloring protocol uses the commitment only as an oracle, the HILL99 and Naor91 commitment uses the one-way function only as an oracle, and zero knowledge reduces to hiding through a simulator that runs the cheating verifier only as an oracle."
---

# OWF ⇒ CZK

## Statement

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, Graph 3-Coloring, and hence every language in $\classNP$, has a computational zero-knowledge interactive proof, so $\classNP$ is contained in [[computational-zero-knowledge|CZK]] — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]. GMW91 state the protocol for a generic bit commitment; a computationally hiding, statistically binding one suffices, and any one-way function yields one — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], [[Naor91 - Bit commitment using pseudorandomness|Naor91]].

## Sketch

Each round the prover commits to a uniformly re-permuted 3-coloring, the verifier names a random edge, and the prover opens its two endpoints, which must carry distinct colors. Every coloring of a non-3-colorable graph has a monochromatic edge, so by binding a cheating prover is caught with probability at least $1/|E|$ per round, and sequential repetition makes the soundness error negligible. A simulator that guesses the edge, commits to a coloring valid only there, and rewinds on a wrong guess gives zero knowledge from commitment hiding.
