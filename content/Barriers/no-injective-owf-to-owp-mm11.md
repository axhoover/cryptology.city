---
type: barrier
status: draft
title: "No fully-black-box reduction from length-increasing injective OWF to OWP"
aliases: []
id: bar-injective-owf-to-owp-mm11
hypotheses: [injective-one-way-function]
conclusion: owp
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11a]]"
rationale:
  class: "MM11a rule out every construction that uses the injective OWF only as an oracle paired with a reduction that uses any OWP inverter only as an oracle, the RTV04 fully-black-box notion, and claim no stronger class."
---

# No fully-black-box reduction from length-increasing injective OWF to OWP

## Statement

There is no fully black-box construction of a [[one-way-permutation|one-way permutation]] from a length-increasing [[injective-one-way-function|injective one-way function]], even one that stretches its input by a single bit and is adaptively one-way; as a corollary, there is none from a regular one-way function of regularity greater than $1$ — [[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11a]].

## Notes

- Length-increasing is necessary: a one-way permutation is itself a length-preserving injective one-way function, so without the qualifier the identity construction refutes the separation — folklore.
