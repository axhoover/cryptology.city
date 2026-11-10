---
type: reduction
status: draft
title: Post-quantum injective OWF ⇒ Quantum-secure OWF
aliases: []
id: red-post-quantum-injective-owf-to-quantum-secure-owf
kind: implication
hypotheses: [post-quantum-injective-owf]
conclusion: quantum-secure-owf
class: fully-black-box
model: quantum
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the function, and the reduction forwards any quantum inverter unchanged."
  model: "The inverters are quantum."
---

# Post-quantum injective OWF ⇒ Quantum-secure OWF

## Statement

A [[injective-one-way-function#post-quantum-one-wayness|post-quantum injective one-way function]] is a [[hash-function#quantum-secure-one-wayness|quantum-secure one-way function]]: it is classical and efficiently computable, and every efficient quantum inverter has negligible advantage, with the same advantage in both games — folklore.
