---
type: reduction
status: draft
title: "Hash function ⇒ CZK"
aliases: []
id: red-hash-function-to-czk
kind: implication
hypotheses: [hash-function]
conclusion: czk
class: fully-black-box
model: standard
source:
  - "[[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]"
security-loss: ""
---

# Hash function ⇒ CZK

[[hash-function|One-way functions]] imply $\classNP \subseteq$ [[computational-zero-knowledge|CZK]].

## Statement

If one-way functions ([[hash-function|OWF]]) exist, 3-coloring — hence every language in $\classNP$ — has a computational zero-knowledge interactive proof, so $\classNP \subseteq$ [[computational-zero-knowledge|CZK]] [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]. The protocol uses only a computationally hiding, statistically binding bit commitment, which any OWF yields [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], [[Naor91 - Bit commitment using pseudorandomness|Naor91]].

## Sketch

Each round the prover commits to a uniformly re-permuted 3-coloring; the verifier names a random edge and the prover opens its two endpoints, which must carry distinct colors. A non-3-colorable graph has a monochromatic edge, caught with probability at least $1/|E|$ per round; a simulator that guesses the edge, commits to a coloring valid only there, and rewinds on a wrong guess gives zero knowledge from commitment hiding.

## Notes

`class: fully-black-box`: The GMW 3-coloring protocol uses the bit-commitment scheme only as an oracle, and the OWF-to-commitment chain (HILL99 PRG, Naor91 commitment) is fully black-box. Soundness is unconditional given a statistically binding commitment; zero knowledge reduces to commitment hiding via a black-box simulator that rewinds the cheating verifier. Same class as [[hash-function-to-zkp-gmw91]].

- GMW91 assume a generic commitment scheme; [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]] + [[Naor91 - Bit commitment using pseudorandomness|Naor91]] instantiate it from any OWF, making the OWF hypothesis exact.
