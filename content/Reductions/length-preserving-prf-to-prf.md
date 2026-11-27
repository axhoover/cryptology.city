---
type: reduction
status: draft
title: "Length-preserving PRF ⇒ PRF"
aliases: []
id: red-length-preserving-prf-to-prf
kind: implication
hypotheses: [length-preserving-prf]
conclusion: prf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the function family, and the reduction forwards any PRF distinguisher unchanged."
---

# Length-preserving PRF ⇒ PRF

## Statement

A [[pseudorandom-function#length-preserving-prfs|length-preserving PRF]] $\PRF = (\KeyGen, \Eval)$, with $\calD_\secpar = \calR_\secpar = \bits^{n(\secpar)}$ for a polynomially bounded $n = \omega(\log \secpar)$ computable from $1^\secpar$ in polynomial time, is a [[pseudorandom-function|PRF]] with the same key generation, domain and range, and the same advantage for every distinguisher: $\bits^n$ has a uniform sampler, $|\calD_\secpar| = 2^{n(\secpar)}$ is superpolynomial since $n = \omega(\log \secpar)$, and $|\calR_\secpar| = 2^{n(\secpar)} \ge 2$ for every $\secpar$ with $n(\secpar) \ge 1$, which $n = \omega(\log \secpar)$ guarantees for all but finitely many $\secpar$ — folklore.
