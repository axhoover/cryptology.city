---
type: reduction
status: draft
title: "ZKP ⇒ Auxiliary-input OWF"
aliases: []
id: red-zkp-to-hash-function
kind: implication
hypotheses: [zkp]
conclusion: auxiliary-input-owf
class: unstated
model: standard
source:
  - "[[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]]"
security-loss: ""
rationale:
  class: "The hypothesis, a zero-knowledge proof for a language outside $\\classBPP$, is a hardness statement about a language rather than an RTV04 primitive."
---

# ZKP ⇒ Auxiliary-input OWF

## Statement

If some language outside $\classBPP$ has a computational [[zero-knowledge-proof|zero-knowledge proof]], then [[hash-function#auxiliary-input-one-wayness|auxiliary-input one-way functions]] exist: functions $f(x,\cdot)$ such that for all efficient $\calA$ there is an infinite set of $x$ on which $\calA$ inverts $f(x,\cdot)$ with probability negligible in $|x|$. If the language is hard on average, a standard [[hash-function#preimage-resistance-one-wayness|one-way function]] exists — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]].

## Sketch

Without auxiliary-input one-way functions, the map from the simulator's coins to a prefix of its transcript can be inverted, so an efficient prover can extend any partial conversation with the honest verifier as the simulator would. By zero knowledge this prover convinces the verifier on $x \in L$, and by soundness it fails on $x \notin L$, so $L \in \classBPP$. For $L$ hard on average, the function samples $x$ from the hard distribution itself and is a standard one-way function.

## Notes

- For all of $\classNP$ the auxiliary-input relaxation is unnecessary: a one-way function exists if and only if $\classNP \subseteq \classCZK$ and $\classNP$ is hard in the worst case — [[HN24 - One-Way Functions and Zero Knowledge|HN24]].
- The statistical-zero-knowledge, hard-on-average case, with a standard one-way function as conclusion, predates OW93 — [[Ost91 - One-way functions, hard on average problems, and statistical zero-knowledge proofs|Ost91]].
