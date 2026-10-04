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
rationale:
  class: "GKM+00 separate the primitives under black-box reductions, which rules out at least every construction that uses OT, with a proof that uses the TDP inverter, only as an oracle."
---

# No fully-black-box reduction from OT to TDP

## Statement

There is no fully-black-box construction of a [[trapdoor-permutation|trapdoor permutation]] from [[oblivious-transfer|OT]], by an oracle separation following [[IR89 - Limits on the provable consequences of one-way permutations|IR89]] — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]].

## Notes

- The converse holds for the enhanced notion: an [[trapdoor-permutation#enhanced-trapdoor-permutations|enhanced trapdoor permutation]] yields OT ([[enhanced-trapdoor-permutations-to-ot-gkm-00|Enhanced trapdoor permutations ⇒ OT]]) — [[EGL85 - A randomized protocol for signing contracts|EGL85]].
- Trapdoor predicates do not give trapdoor permutations either: [[no-pke-to-tdp-gkm-00|No fully-black-box reduction from PKE to TDP]] — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]].
