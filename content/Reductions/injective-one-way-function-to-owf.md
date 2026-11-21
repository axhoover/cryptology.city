---
type: reduction
status: draft
title: "Injective OWF ⇒ OWF"
aliases: []
id: red-injective-one-way-function-to-owf
kind: implication
hypotheses: [injective-one-way-function]
conclusion: owf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on functions, and the reduction forwards any inverter unchanged."
---

# Injective OWF ⇒ OWF

## Statement

An [[injective-one-way-function|injective one-way function]] is a [[hash-function#preimage-resistance-one-wayness|one-way function]], with the same inversion advantage for every adversary: by injectivity, an output $\hat{x}$ with $f(\hat{x}) = f(x)$ is $x$ itself — folklore.
