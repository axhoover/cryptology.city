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
rationale:
  class: "GKM+00 separate the primitives under black-box reductions, which rules out at least every construction that uses OT, with a proof that uses the PKE adversary, only as an oracle."
---

# No fully-black-box reduction from OT to PKE

## Statement

There is no fully-black-box construction of [[public-key-encryption|PKE]], taken as a trapdoor predicate (single-bit PKE), from [[oblivious-transfer|OT]]: the two primitives are incomparable under black-box reductions, by oracle separations following [[IR89 - Limits on the provable consequences of one-way permutations|IR89]] — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]]. A multi-bit scheme restricted to one-bit messages is a trapdoor predicate, so no fully-black-box construction of multi-bit PKE from OT exists either — folklore.

## Notes

- A restricted, strengthened form of each primitive does imply the other — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]].
- The converse separation: [[no-pke-to-ot-gkm-00|PKE ⇏ OT]] — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]].
