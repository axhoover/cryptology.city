---
type: barrier
status: draft
title: "No fully-black-box reduction from OT to PKE"
aliases: []
id: bar-ot-to-pke-gkm-00
hypotheses: [ot]
conclusion: pke
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]]"
---

# No fully-black-box reduction from OT to PKE

A reduction of class `fully-black-box` from [[oblivious-transfer|OT]] to [[public-key-encryption|PKE]] would imply a contradiction.

## Statement

There is no fully-black-box construction of [[public-key-encryption|PKE]] from [[oblivious-transfer|OT]]: the two primitives are incomparable under black-box reductions, shown by oracle separations following Impagliazzo–Rudich. A restricted, strengthened form of each primitive does imply the other — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]]. The converse separation is [[no-pke-to-ot-gkm-00]].

## Notes

`class: fully-black-box`: GKM+00 separate the primitives under black-box reductions, which rules out at least constructions that use OT, with proofs that use the PKE adversary, only as oracles. The abstract does not settle whether a single oracle separates them, which would rule out the broader class `relativizing`, so the narrower value is recorded.

- GKM+00 take PKE to be a trapdoor predicate, i.e. single-bit PKE; a multi-bit scheme restricted to one-bit messages is one, so the barrier covers `pke` — folklore.
