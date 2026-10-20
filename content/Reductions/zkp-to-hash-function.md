---
type: reduction
status: draft
title: "CZK ⊄ BPP ⇒ Auxiliary-input OWF"
aliases: []
id: red-zkp-to-hash-function
kind: implication
hypotheses: [czk-worst-case-hardness]
conclusion: auxiliary-input-owf
class: unstated
model: standard
source:
  - "[[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]]"
security-loss: ""
rationale:
  class: "The hypothesis is worst-case hardness of a language with a zero-knowledge proof rather than an RTV04 primitive."
---

# CZK ⊄ BPP ⇒ Auxiliary-input OWF

## Statement

If [[computational-zero-knowledge#worst-case-hardness|CZK is hard in the worst case]], that is, some language $L \notin \classBPP$ has a computational [[zero-knowledge-proof|zero-knowledge proof]], then an [[hash-function#auxiliary-input-one-wayness|auxiliary-input one-way function]] exists: a function $f(x,\cdot)$, efficiently computable given $x$, such that for all efficient $\calA$ there are infinitely many $x$ on which $\calA$ inverts $f(x,\cdot)$ on a uniform input with probability negligible in $|x|$ — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]].

## Notes

- The set of hard $x$ depends on $\calA$; one set for all $\calA$ gives a stronger notion — [[Vad06 - An Unconditional Study of Computational Zero Knowledge|Vad06]].
- Zero knowledge against the honest verifier suffices — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]], [[GSV98 - Honest-Verifier Statistical Zero-Knowledge Equals General Statistical Zero-Knowledge|GSV98]]; honest-verifier and general computational zero knowledge define the same class — [[Vad06 - An Unconditional Study of Computational Zero Knowledge|Vad06]].
- If the language is hard on average over a samplable distribution, a standard one-way function exists ([[czk-hardness-to-owf-ow93|Average-case-hard CZK ⇒ OWF]]) — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]].
- For all of $\classNP$ the auxiliary-input relaxation is unnecessary: a one-way function exists if and only if $\classNP \subseteq \classCZK$ and $\classNP$ is hard in the worst case — [[HN24 - One-Way Functions and Zero Knowledge|HN24]].
