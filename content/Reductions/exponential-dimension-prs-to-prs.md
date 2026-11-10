---
type: reduction
status: draft
title: Exponential-dimension PRS ⇒ PRS
aliases: []
id: red-exponential-dimension-prs-to-prs
kind: implication
hypotheses: [exponential-dimension-prs]
conclusion: prs
class: fully-black-box
model: quantum
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the generator, and the reduction forwards any distinguisher unchanged."
  model: "PRS generators output quantum states and are secure against quantum adversaries."
---

# Exponential-dimension PRS ⇒ PRS

## Statement

A [[pseudorandom-quantum-state#prs-with-exponential-dimension|PRS generator with exponential dimension]] is a [[pseudorandom-quantum-state|PRS generator]], with the same advantage — folklore.
