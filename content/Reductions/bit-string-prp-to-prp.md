---
type: reduction
status: draft
title: "PRP on bit strings ⇒ PRP"
aliases: []
id: red-bit-string-prp-to-prp
kind: implication
hypotheses: [bit-string-prp]
conclusion: prp
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction runs any PRP distinguisher unchanged."
---

# PRP on bit strings ⇒ PRP

## Statement

Let $\PRP = (\KeyGen, \Eval, \Invert)$ be a [[pseudorandom-permutation#prps-on-bit-strings|PRP on bit strings]], with domain $\calD_\secpar = \bits^{n(\secpar)}$ for a polynomially bounded $n = \omega(\log \secpar)$ computable from $1^\secpar$ in polynomial time. Its domain is a family of sets of strings of polynomial length, sampled uniformly by computing $n(\secpar)$ and drawing $n(\secpar)$ uniform bits, and $1/|\calD_\secpar| = 2^{-n(\secpar)}$ is negligible because $n = \omega(\log \secpar)$. So $\PRP$ is a [[pseudorandom-permutation|PRP]] with the same algorithms, correctness and game $\Game^{\mathrm{prp}}$, and $\Adv^{\mathrm{prp}}_{\PRP,\calA}(\secpar)$ is unchanged for every $\calA$ — folklore.

## Notes

- Scheme by scheme the converse fails: for a PRP $E$ on $\bits^n$, the map $1x \mapsto 1\,E_k(x)$ is a PRP on $\{1x : x \in \bits^n\}$, since every adversary against it has the advantage of the adversary against $E$ that prepends and strips the leading $1$, and its domain is neither $\bits^{n+1}$ nor closed under $\oplus$ — standard.
