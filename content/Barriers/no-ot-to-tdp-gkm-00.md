---
type: barrier
status: draft
title: "No fully-black-box reduction from OT to TDP"
aliases: []
id: bar-ot-to-tdp-gkm-00
hypotheses: [ot]
conclusion: tdp
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]]"
---

# No fully-black-box reduction from OT to TDP

A reduction of class `fully-black-box` from [[oblivious-transfer|OT]] to [[trapdoor-permutation|TDP]] would imply a contradiction.

## Statement

There is no fully-black-box construction of a [[trapdoor-permutation|trapdoor permutation]] from [[oblivious-transfer|OT]], shown by an oracle separation following Impagliazzo–Rudich — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]]. In the other direction, [[trapdoor-permutation#enhanced-trapdoor-permutations|enhanced trapdoor permutations]] imply OT — [[EGL85 - A randomized protocol for signing contracts|EGL85]]; see [[enhanced-trapdoor-permutations-to-ot-gkm-00]].

## Notes

`class: fully-black-box`: GKM+00 separate the primitives under black-box reductions, which rules out at least constructions that use OT, with proofs that use the TDP inverter, only as oracles. The abstract does not settle whether a single oracle separates them, which would rule out the broader class `relativizing`, so the narrower value is recorded.
