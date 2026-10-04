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
rationale:
  class: "GKM+00 separate the primitives under black-box reductions, which rules out at least every construction that uses PKE, with a proof that uses the OT adversary, only as an oracle."
---

# No fully-black-box reduction from PKE to OT

## Statement

There is no fully-black-box construction of [[oblivious-transfer|OT]] from a trapdoor predicate, i.e. single-bit [[public-key-encryption|PKE]]: the two primitives are incomparable under black-box reductions, by oracle separations following [[IR89 - Limits on the provable consequences of one-way permutations|IR89]] — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]]. Bitwise encryption under a trapdoor predicate is a semantically secure multi-bit PKE — [[GM84 - Probabilistic encryption|GM84]] — so a fully-black-box construction of OT from multi-bit PKE would compose into one from trapdoor predicates, and none exists.

## Notes

- A restricted, strengthened form of each primitive does imply the other — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]].
- The converse separation: [[no-ot-to-pke-gkm-00|OT ⇏ PKE]] — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]].
