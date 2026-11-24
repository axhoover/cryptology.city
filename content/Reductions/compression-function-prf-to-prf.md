---
type: reduction
status: draft
title: "Compression-function PRF ⇒ PRF"
aliases: []
id: red-compression-function-prf-to-prf
kind: implication
hypotheses: [compression-function-prf]
conclusion: prf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the function family, and the reduction forwards any PRF distinguisher unchanged."
---

# Compression-function PRF ⇒ PRF

## Statement

A [[pseudorandom-function#compression-function-prfs|compression-function PRF]] $f : \bits^c \times \bits^b \to \bits^c$ with uniform keys, for polynomially bounded $c$ and $b$ computable from $1^\secpar$ in polynomial time with $c \ge 1$, $c = \omega(\log \secpar)$ and $c \le b$, is a [[pseudorandom-function|PRF]] with $\calK = \calR = \bits^c$ and $\calD = \bits^b$, with the same advantage for every distinguisher: $\bits^b$ and $\bits^c$ have uniform samplers, $|\calD_\secpar| = 2^{b(\secpar)} \ge 2^{c(\secpar)}$ is superpolynomial since $c = \omega(\log \secpar)$, and $|\calR_\secpar| = 2^{c(\secpar)} \ge 2$ for every $\secpar$ since $c \ge 1$ — folklore.
