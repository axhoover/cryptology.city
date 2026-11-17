---
type: reduction
status: draft
title: Length-increasing injective OWF ⇒ Injective OWF
aliases: []
id: red-length-increasing-injective-owf-to-injective-one-way-function
kind: implication
hypotheses: [length-increasing-injective-owf]
conclusion: injective-one-way-function
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the function, and the reduction forwards any inverter unchanged."
---

# Length-increasing injective OWF ⇒ Injective OWF

## Statement

A [[injective-one-way-function#length-increasing-injective-owfs|length-increasing injective one-way function]] is an [[injective-one-way-function|injective one-way function]], with the same advantage for every adversary — folklore.
