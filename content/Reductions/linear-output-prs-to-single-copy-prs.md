---
type: reduction
status: draft
title: Linear-output PRS ⇒ Single-copy PRS
aliases: []
id: red-linear-output-prs-to-single-copy-prs
kind: implication
hypotheses: [linear-output-prs]
conclusion: single-copy-prs
class: fully-black-box
model: quantum
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the generator, and the reduction forwards any distinguisher unchanged."
  model: "PRS generators output quantum states and are secure against quantum adversaries."
---

# Linear-output PRS ⇒ Single-copy PRS

## Statement

A [[pseudorandom-quantum-state#prs-with-output-length-linear-in-the-key|PRS generator with output length linear in the key]], $n \ge c\secpar$ for a constant $c > 1$, is [[pseudorandom-quantum-state#single-copy-security|single-copy secure]], with the same advantage: $n \ge c\secpar > \secpar$ for every $\secpar \ge 1$, and pseudorandomness for $t = 1$ is the case $t = 1$ of pseudorandomness for every polynomial $t$ — folklore.
