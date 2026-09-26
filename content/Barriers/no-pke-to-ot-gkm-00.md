---
type: barrier
status: draft
title: "No fully-black-box reduction from PKE to OT"
aliases: []
id: bar-pke-to-ot-gkm-00
hypotheses: [pke]
conclusion: ot
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]]"
---

# No fully-black-box reduction from PKE to OT

A reduction of class `fully-black-box` from [[public-key-encryption|PKE]] to [[oblivious-transfer|OT]] would imply a contradiction.

## Statement

There is no fully-black-box construction of [[oblivious-transfer|OT]] from [[public-key-encryption|PKE]]: the two primitives are incomparable under black-box reductions, shown by oracle separations following Impagliazzo–Rudich. A restricted, strengthened form of each primitive does imply the other — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]].

## Notes

`class: fully-black-box`: GKM+00 separate the primitives under black-box reductions, which rules out at least constructions that use PKE, with proofs that use the OT adversary, only as oracles. The abstract does not settle whether a single oracle separates them, which would rule out the broader class `relativizing`, so the narrower value is recorded.
