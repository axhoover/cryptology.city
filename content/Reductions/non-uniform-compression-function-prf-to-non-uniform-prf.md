---
type: reduction
status: draft
title: "Non-uniform compression-function PRF ⇒ Non-uniform PRF"
aliases: []
id: red-non-uniform-compression-function-prf-to-non-uniform-prf
kind: implication
hypotheses: [non-uniform-compression-function-prf]
conclusion: non-uniform-prf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the function family, and the reduction forwards any non-uniform PRF distinguisher unchanged."
---

# Non-uniform compression-function PRF ⇒ Non-uniform PRF

## Statement

A [[pseudorandom-function#non-uniform-compression-function-prfs|compression-function PRF secure against non-uniform adversaries]] $f : \bits^c \times \bits^b \to \bits^c$ with uniform keys is a [[pseudorandom-function#security-against-non-uniform-adversaries|PRF secure against non-uniform adversaries]] with $\calK = \calR = \bits^c$ and $\calD = \bits^b$, with the same advantage — folklore.
