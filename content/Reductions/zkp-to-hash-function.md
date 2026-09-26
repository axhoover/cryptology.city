---
type: reduction
status: draft
title: "ZKP ⇒ Hash function"
aliases: []
id: red-zkp-to-hash-function
kind: implication
hypotheses: [zkp]
conclusion: hash-function
class: unstated
model: standard
source:
  - "[[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]]"
security-loss: ""
---

# ZKP ⇒ Hash function

A [[zero-knowledge-proof|ZKP]] for a language outside $\classBPP$ implies auxiliary-input [[hash-function|one-way functions]].

## Statement

If some language outside $\classBPP$ has a computational [[zero-knowledge-proof|zero-knowledge proof]], then auxiliary-input one-way functions exist: functions $f(x,\cdot)$ such that for all efficient $\calA$ there is an infinite set of $x$ on which $\calA$ inverts $f(x,\cdot)$ with probability negligible in $|x|$. If the language is hard on average, a standard [[hash-function|one-way function]] exists — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]].

## Sketch

Suppose no auxiliary-input one-way function exists. Then the map from the simulator's coins to a prefix of its output transcript can be inverted, so an efficient prover can extend any partial conversation with the honest verifier the way the simulator would. By zero knowledge this prover makes the verifier accept on $x \in L$; by soundness it fails on $x \notin L$; hence $L \in \classBPP$. When $L$ is hard on average, the instance $x$ is sampled from the hard distribution inside the function, so a single function suffices and it is a standard one-way function.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant, and its hypothesis — a zero-knowledge proof for a language outside $\classBPP$ — is a language-hardness statement, not an RTV04 primitive.

- For all of $\classNP$ the auxiliary-input relaxation is unnecessary: a one-way function exists if and only if $\classNP \subseteq \classCZK$ and $\classNP$ is hard in the worst case — [[HN24 - One-Way Functions and Zero Knowledge|HN24]]
- The statistical-zero-knowledge, hard-on-average case (standard one-way function as conclusion) predates OW93 — [[Ost91 - One-way functions, hard on average problems, and statistical zero-knowledge proofs|Ost91]]
- The conclusion node `hash-function` also owns collision-resistant hashing; only the one-wayness variant is meant here.
- The hyperedge `hypotheses: [zkp]` cannot carry OW93's non-triviality qualifier (the language must lie outside $\classBPP$, or be hard on average for the standard-OWF conclusion); the qualifier survives only in the statement.
