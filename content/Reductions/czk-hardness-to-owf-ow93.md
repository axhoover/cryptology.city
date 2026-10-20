---
type: reduction
status: draft
title: "Average-case-hard CZK ⇒ OWF"
aliases: []
id: red-czk-hardness-to-owf-ow93
kind: implication
hypotheses: [czk-hardness]
conclusion: owf
class: unstated
model: standard
source:
  - "[[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]]"
security-loss: ""
rationale:
  class: "The hypothesis is average-case hardness of a language with a zero-knowledge proof rather than an RTV04 primitive."
---

# Average-case-hard CZK ⇒ OWF

## Statement

If [[computational-zero-knowledge#average-case-hardness|CZK is hard on average]], that is, a language $L$ with a computational [[zero-knowledge-proof|zero-knowledge proof]] and a PPT sampler $D$ satisfy $\Pr_{x \gets D(1^n)}[\calA(x) = L(x)] \le 1/2 + \negl(n)$ for all efficient $\calA$, then [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]].

## Notes

- Worst-case hardness, $\classCZK \not\subseteq \classBPP$, yields auxiliary-input one-way functions ([[zkp-to-hash-function|CZK ⊄ BPP ⇒ Auxiliary-input OWF]]) — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]].
- The statistical-zero-knowledge case predates OW93 ([[szk-hardness-to-owf-ost91|Average-case-hard SZK ⇒ OWF]]) — [[Ost91 - One-way functions, hard on average problems, and statistical zero-knowledge proofs|Ost91]].
