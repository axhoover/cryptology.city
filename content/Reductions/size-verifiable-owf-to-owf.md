---
type: reduction
status: draft
title: "Size-verifiable OWF ⇒ OWF"
aliases: []
id: red-size-verifiable-owf-to-owf
kind: implication
hypotheses: [size-verifiable-owf]
conclusion: owf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on functions, and the reduction forwards any inverter unchanged."
---

# Size-verifiable OWF ⇒ OWF

## Statement

A [[hash-function#size-verifiable-one-wayness|size-verifiable one-way function]] is a [[hash-function#preimage-resistance-one-wayness|one-way function]], with the same inversion advantage for every adversary — folklore.
