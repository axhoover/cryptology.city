---
type: reduction
status: draft
title: Adaptive injective OWF ⇒ Injective OWF
aliases: []
id: red-adaptive-injective-owf-to-injective-one-way-function
kind: implication
hypotheses: [adaptive-injective-owf]
conclusion: injective-one-way-function
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the function, and the reduction forwards any inverter unchanged; the forwarded inverter makes no inversion queries."
---

# Adaptive injective OWF ⇒ Injective OWF

## Statement

An [[injective-one-way-function#adaptive-one-wayness|adaptively one-way]] injective function is an [[injective-one-way-function|injective one-way function]]: an adversary in the one-wayness game is an adversary in the adaptive game that never queries $\calO$, with the same advantage — folklore.
