---
type: reduction
status: draft
title: "Statistically binding COM ⇒ COM"
aliases: []
id: red-statistically-binding-commitment-to-com
kind: implication
hypotheses: [statistically-binding-commitment]
conclusion: com
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reductions forward any hiding or binding adversary unchanged."
---

# Statistically binding COM ⇒ COM

## Statement

A [[commitment-scheme#statistically-binding-commitments|statistically binding commitment]] is a [[commitment-scheme|commitment scheme]]: binding against unbounded committers implies binding against efficient ones, and correctness, the message space and computational hiding are unchanged — folklore.
