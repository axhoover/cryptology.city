---
type: reduction
status: draft
title: "Post-quantum OWF ⇒ OWF"
aliases: []
id: red-post-quantum-owf-to-owf
kind: implication
hypotheses: [post-quantum-owf]
conclusion: owf
class: fully-black-box
model: quantum
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on functions, and the reduction forwards any PPT inverter unchanged as an efficient quantum inverter."
  model: "The hypothesis is one-wayness against quantum inverters."
---

# Post-quantum OWF ⇒ OWF

## Statement

A [[hash-function#one-wayness-against-quantum-adversaries|function that is one-way against quantum adversaries]] is a [[hash-function#preimage-resistance-one-wayness|one-way function]], with the same inversion advantage for every adversary: a $\PPT$ inverter is an efficient quantum inverter — folklore.
