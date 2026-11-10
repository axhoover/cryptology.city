---
type: reduction
status: draft
title: Post-quantum injective OWF ⇒ Injective OWF
aliases: []
id: red-post-quantum-injective-owf-to-injective-one-way-function
kind: implication
hypotheses: [post-quantum-injective-owf]
conclusion: injective-one-way-function
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity construction; the reduction forwards any classical adversary, run as a quantum one, unchanged."
---

# Post-quantum injective OWF ⇒ Injective OWF

## Statement

A [[injective-one-way-function#post-quantum-one-wayness|post-quantum injective one-way function]] is an [[injective-one-way-function|injective one-way function]], with the same advantage, since an efficient quantum algorithm simulates every efficient classical algorithm with the same output distribution — folklore.
