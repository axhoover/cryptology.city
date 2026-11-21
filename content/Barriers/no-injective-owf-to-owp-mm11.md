---
type: barrier
status: draft
title: "No fully-black-box reduction from length-increasing injective OWF to OWP"
aliases: []
id: bar-injective-owf-to-owp-mm11
hypotheses: [length-increasing-injective-owf]
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
  class: "MM11a state the separation for the RTV04 fully-black-box class: a construction using the injective OWF only as an oracle, paired with a reduction using any inverter of the constructed permutation only as an oracle."
---

# No fully-black-box reduction from length-increasing injective OWF to OWP

## Statement

There is no fully black-box construction of a [[one-way-permutation|one-way permutation]] from a [[injective-one-way-function#length-increasing-injective-owfs|length-increasing injective one-way function]], even one that stretches its input by a single bit and is adaptively one-way; as a corollary, there is none from a regular one-way function of regularity greater than $1$ — [[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11a]].

## Notes

- The length condition is what separates this from the length-preserving case: a length-preserving injective one-way function permutes each $\bits^n$, so it is a one-way permutation and the identity is a fully black-box construction — folklore. With no length condition the separation holds a fortiori, since a construction from all injective one-way functions is in particular one from the length-increasing ones — folklore.
