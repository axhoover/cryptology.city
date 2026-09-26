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
security-loss: ""
---

# BPP ⊆ P/poly

[[bounded-error-probabilistic-polynomial-time|BPP]] is contained in [[p-poly|P/poly]].

## Statement

Every language in [[bounded-error-probabilistic-polynomial-time|BPP]] is decided by a family of polynomial-size Boolean circuits: $\classBPP \subseteq \classPpoly$ ([[p-poly|P/poly]]) [[Adl78 - Two theorems on random polynomial time|Adl78]].

## Sketch

Amplify the error below $2^{-n}$; a union bound over the $2^n$ inputs of length $n$ shows some random string is correct on all of them, and hardwiring it as advice gives the circuit family. Adleman proves the $\classRP$ case.

## Notes

`class: free`: Proven complexity-class containment; per repo convention `class: free`.

- The two-sided-error ($\classBPP$) form of Adleman's theorem, by the same argument with a majority vote — [[BG81 - Relative to a random oracle A, P^A != NP^A != co-NP^A with probability 1|BG81]].
