---
type: reduction
status: draft
title: LWE with polynomial ratio ⇒ LWE
aliases: []
id: red-polynomial-ratio-lwe-to-lwe
kind: implication
hypotheses: [polynomial-ratio-lwe]
conclusion: lwe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the LWE distribution, and the reduction forwards any distinguisher unchanged."
---

# LWE with polynomial ratio ⇒ LWE

## Statement

Hardness of [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]] is hardness of [[learning-with-errors|LWE]] for one family of parameters, with the same advantage — folklore.
