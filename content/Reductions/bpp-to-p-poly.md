---
type: reduction
status: draft
title: "BPP ⊆ P/poly"
aliases: []
id: red-bpp-to-p-poly
kind: inclusion
hypotheses: [bpp]
conclusion: ppoly
class: free
model: standard
source:
  - "[[Adl78 - Two theorems on random polynomial time|Adl78]]"
  - "[[BG81 - Relative to a random oracle A, P^A != NP^A != co-NP^A with probability 1|BG81]]"
security-loss: ""
---

# BPP ⊆ P/poly

## Statement

[[bounded-error-probabilistic-polynomial-time|BPP]] $\subseteq$ [[p-poly|P/poly]]: every language in $\classBPP$ is decided by a family of polynomial-size Boolean circuits. [[Adl78 - Two theorems on random polynomial time|Adl78]] proves the $\classRP$ case; [[BG81 - Relative to a random oracle A, P^A != NP^A != co-NP^A with probability 1|BG81]] extend it to $\classBPP$ by the same argument with a majority vote.

## Sketch

Amplify the error below $2^{-n}$ by a majority vote over independent runs; a union bound over the $2^n$ inputs of length $n$ shows some random string is correct on all of them, and hardwiring it as advice gives the circuit family.
