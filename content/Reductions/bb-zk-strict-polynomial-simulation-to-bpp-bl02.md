---
type: reduction
status: draft
title: "Constant-round black-box ZK with strict polynomial-time simulation ⊆ BPP"
aliases: []
id: red-bb-zk-strict-polynomial-simulation-to-bpp-bl02
kind: inclusion
hypotheses: [bb-zk-strict-polynomial-simulation]
conclusion: bpp
class: free
model: standard
source:
  - "[[BL02 - Strict Polynomial-Time in Simulation and Extraction|BL02]]"
security-loss: ""
---

# Constant-round black-box ZK with strict polynomial-time simulation ⊆ BPP

## Statement

Suppose a language $L$ has a [[computational-zero-knowledge#strict-polynomial-time-black-box-simulation|constant-round interactive proof or argument]] with negligible soundness error that is zero-knowledge with a black-box simulator running in strict, not expected, polynomial time. Then $L \in$ [[bounded-error-probabilistic-polynomial-time|BPP]] — [[BL02 - Strict Polynomial-Time in Simulation and Extraction|BL02]].

## Notes

- Constant-round zero knowledge with black-box simulation therefore needs expected polynomial-time simulators, as the simulator of [[claw-free-permutations-to-constant-round-zk-proof-gk96b|Goldreich–Kahan]] is — [[BL02 - Strict Polynomial-Time in Simulation and Extraction|BL02]], [[GK96b - How to Construct Constant-Round Zero-Knowledge Proof Systems for NP|GK96b]]. Barak's constant-round argument ([[crhf-to-constant-round-zk-argument-bar01|CRHF ⇒ Constant-round ZK argument (Barak)]]) has a strict polynomial-time simulator that uses the verifier's code — [[BL02 - Strict Polynomial-Time in Simulation and Extraction|BL02]], [[Bar01 - How to Go Beyond the Black-Box Simulation Barrier|Bar01]].
- No constant-round zero-knowledge argument of knowledge for a relation outside $\classBPP$ has a strict polynomial-time black-box knowledge extractor — [[BL02 - Strict Polynomial-Time in Simulation and Extraction|BL02]].
- With non-negligible soundness error the bound fails: one execution of the 3-coloring protocol of [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]], whose soundness error is $1 - 1/|E|$, has a strict polynomial-time black-box simulator that guesses the challenged edge $n|E|$ times — standard.
