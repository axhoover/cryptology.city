---
type: reduction
status: draft
title: "Non-uniform OWF ⇒ CZK"
aliases: []
id: red-hash-function-to-czk
kind: implication
hypotheses: [non-uniform-owf]
conclusion: czk
class: unstated
model: standard
source:
  - "[[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]"
security-loss: "polynomial: zero knowledge reduces to commitment hiding by a hybrid over the polynomially many unopened commitments, on top of the polynomial loss of the commitment from the one-way function"
rationale:
  class: "The protocol uses the commitment, and through HILL99 and Naor91 the one-way function, only as oracles, but the zero-knowledge reduction hard-wires the instance and a 3-coloring of it as non-uniform advice, and the vocabulary has no non-uniform class."
---

# Non-uniform OWF ⇒ CZK

## Statement

If [[hash-function#one-wayness-against-non-uniform-adversaries|one-way functions secure against non-uniform adversaries]] exist, Graph 3-Coloring, and hence every language in $\classNP$, has a computational zero-knowledge interactive proof, so $\classNP$ is contained in [[computational-zero-knowledge|CZK]] — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]. GMW91 state the protocol for a generic bit commitment; a computationally hiding, statistically binding one suffices, and any one-way function yields one — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], [[Naor91 - Bit commitment using pseudorandomness|Naor91]]. The zero-knowledge reduction to hiding hard-wires the instance and a 3-coloring of it, so it needs non-uniform hardness; the HILL99 and Naor91 reductions are uniform and black-box, so the commitment inherits it — standard ([[uniform-and-non-uniform-adversaries#relation-between-the-notions|uniform and non-uniform adversaries]]).

## Sketch

Each round the prover commits to a uniformly re-permuted 3-coloring, the verifier names a random edge, and the prover opens its two endpoints, which must carry distinct colors. If the graph is not 3-colorable, every assignment of the three colors to its vertices has a monochromatic edge, so by binding a cheating prover is caught with probability at least $1/|E|$ per round, and sequential repetition makes the soundness error negligible. A simulator that guesses the edge, commits to a coloring valid only there, and rewinds on a wrong guess gives zero knowledge from commitment hiding.
