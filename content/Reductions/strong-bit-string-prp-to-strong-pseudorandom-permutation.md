---
type: reduction
status: draft
title: "Strong PRP on bit strings ⇒ Strong PRP"
aliases: []
id: red-strong-bit-string-prp-to-strong-pseudorandom-permutation
kind: implication
hypotheses: [strong-bit-string-prp]
conclusion: strong-pseudorandom-permutation
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction runs any strong-PRP distinguisher unchanged."
---

# Strong PRP on bit strings ⇒ Strong PRP

## Statement

Let $\PRP = (\KeyGen, \Eval, \Invert)$ be a [[pseudorandom-permutation#strong-prps-on-bit-strings|strong PRP on bit strings]], with domain $\calD_\secpar = \bits^{n(\secpar)}$ for a polynomially bounded $n = \omega(\log \secpar)$ computable from $1^\secpar$ in polynomial time. Its domain is a family of sets of strings of polynomial length, sampled uniformly by computing $n(\secpar)$ and drawing $n(\secpar)$ uniform bits, and $1/|\calD_\secpar| = 2^{-n(\secpar)}$ is negligible because $n = \omega(\log \secpar)$. So $\PRP$ is a [[pseudorandom-permutation#strong-security|strong PRP]] with the same algorithms, correctness and game $\Game^{\mathrm{sprp}}$, and $\Adv^{\mathrm{sprp}}_{\PRP,\calA}(\secpar)$ is unchanged for every $\calA$ — folklore.
