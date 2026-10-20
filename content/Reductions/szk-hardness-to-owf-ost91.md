---
type: reduction
status: draft
title: "Average-case-hard SZK ⇒ OWF"
aliases: []
id: red-szk-hardness-to-owf-ost91
kind: implication
hypotheses: [szk-hardness]
conclusion: owf
class: unstated
model: standard
source:
  - "[[Ost91 - One-way functions, hard on average problems, and statistical zero-knowledge proofs|Ost91]]"
security-loss: "polynomial"
rationale:
  class: "The hypothesis is average-case hardness of a promise problem in SZK rather than an RTV04 primitive."
---

# Average-case-hard SZK ⇒ OWF

## Statement

If [[statistical-zero-knowledge#average-case-hardness|SZK is hard on average]], that is, some promise problem $\Pi \in \classSZK$ and PPT sampler $D$ over $\Pi_Y \cup \Pi_N$ satisfy $\Pr_{x \gets D(1^n)}[\calA(x) = \Pi(x)] \le 1/2 + \negl(n)$ for all efficient $\calA$, then [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist — [[Ost91 - One-way functions, hard on average problems, and statistical zero-knowledge proofs|Ost91]].

## Sketch

The candidate one-way function maps the coins of $D$ and of the simulator, together with a round index $i$, to the instance $x$ and the first $i$ messages of the simulated transcript on $x$. If no one-way function exists, it can be inverted with nearly uniform preimages — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]] — so an efficient prover can extend partial conversations with the honest verifier as the simulator would. The verifier then accepts on yes-instances by statistical zero knowledge and rejects on no-instances by soundness, which decides $\Pi$ on most $x \gets D(1^n)$ and contradicts its hardness.

## Notes

- From worst-case hardness alone, $\classSZK \not\subseteq \classBPP$, auxiliary-input one-way functions exist, and the argument extends to computational zero knowledge ([[zkp-to-hash-function|CZK ⊄ BPP ⇒ Auxiliary-input OWF]]) — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]].
