---
type: reduction
status: draft
title: "PRF ⇒ Weak PRF"
aliases: []
id: red-prf-to-weak-prf
kind: implication
hypotheses: [prf]
conclusion: weak-prf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the function family, and the reduction answers each of the weak-PRF adversary's requests by querying its own oracle at a fresh uniform point."
---

# PRF ⇒ Weak PRF

## Statement

A [[pseudorandom-function|PRF]] is a [[pseudorandom-function#weak-prfs|weak PRF]]: a distinguisher that sees $(x, \calO(x))$ for uniformly random $x \getsr \calD$ is simulated by a PRF distinguisher that samples each $x$ itself and queries $\calO$ there, with the same advantage — folklore.
