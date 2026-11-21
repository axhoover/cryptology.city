---
type: reduction
status: draft
title: "Key-expanding weak PRF ⇒ Weak PRF"
aliases: []
id: red-key-expanding-weak-prf-to-weak-prf
kind: implication
hypotheses: [key-expanding-weak-prf]
conclusion: weak-prf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the function family, and the reduction forwards any weak-PRF distinguisher unchanged."
---

# Key-expanding weak PRF ⇒ Weak PRF

## Statement

A [[pseudorandom-function#key-expanding-weak-prfs|key-expanding weak PRF]] is a [[pseudorandom-function#weak-prfs|weak PRF]], with the same advantage — folklore.
