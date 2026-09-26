---
type: barrier
status: draft
title: "No fully-black-box reduction from Injective OWF to OWP"
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
  - "[[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11]]"
---

# No fully-black-box reduction from Injective OWF to OWP

A reduction of class `fully-black-box` from a length-increasing [[injective-one-way-function|injective OWF]] to [[one-way-permutation|OWP]] would imply a contradiction.

## Statement

There is no fully black-box construction of a [[one-way-permutation|one-way permutation]] from a length-increasing [[injective-one-way-function|injective one-way function]], even one that stretches its input by a single bit and is adaptively one-way; as a corollary, none from a regular one-way function of regularity greater than $1$ — [[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11]].

## Notes

`class: fully-black-box`: MM11 states a fully black-box separation in the RTV04 sense, ruling out every construction that uses the injective OWF only as an oracle paired with a reduction that uses any OWP inverter only as an oracle. The paper claims no stronger class, so `relativizing` would overstate it.

- Length-increasing is load-bearing: a one-way permutation is itself a length-preserving injective one-way function, so without the qualifier the separation is false.
