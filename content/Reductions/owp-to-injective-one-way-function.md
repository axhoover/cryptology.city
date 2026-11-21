---
type: reduction
status: draft
title: "OWP ⇒ Injective OWF"
aliases: []
id: red-owp-to-injective-one-way-function
kind: implication
hypotheses: [owp]
conclusion: injective-one-way-function
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on functions, and the reduction forwards any inverter unchanged."
---

# OWP ⇒ Injective OWF

## Statement

A [[one-way-permutation|one-way permutation]] is a length-preserving [[injective-one-way-function|injective one-way function]], with the same inversion advantage for every adversary — folklore.
