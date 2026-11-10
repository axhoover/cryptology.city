---
type: reduction
status: draft
title: Linear-output PRS ⇒ Exponential-dimension PRS
aliases: []
id: red-linear-output-prs-to-exponential-dimension-prs
kind: implication
hypotheses: [linear-output-prs]
conclusion: exponential-dimension-prs
class: fully-black-box
model: quantum
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the generator, and the reduction forwards any distinguisher unchanged."
  model: "PRS generators output quantum states and are secure against quantum adversaries."
---

# Linear-output PRS ⇒ Exponential-dimension PRS

## Statement

A [[pseudorandom-quantum-state#prs-with-output-length-linear-in-the-key|PRS generator with output length linear in the key]], $n \ge c\secpar$ for a constant $c > 1$, has [[pseudorandom-quantum-state#prs-with-exponential-dimension|exponential dimension]], with the same advantage — folklore.
