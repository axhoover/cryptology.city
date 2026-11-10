---
type: reduction
status: draft
title: "Quantum-secure OWF ⇒ OWF"
aliases: []
id: red-quantum-secure-owf-to-owf
kind: implication
hypotheses: [quantum-secure-owf]
conclusion: owf
class: fully-black-box
model: quantum
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the function, and the reduction forwards any inverter unchanged."
  model: "The hypothesis' adversaries are quantum."
---

# Quantum-secure OWF ⇒ OWF

## Statement

A [[hash-function#quantum-secure-one-wayness|quantum-secure one-way function]] is [[hash-function#preimage-resistance-one-wayness|one-way]]: every efficient classical inverter is an efficient quantum inverter — folklore.
