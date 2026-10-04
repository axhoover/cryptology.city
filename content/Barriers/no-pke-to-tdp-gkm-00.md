---
type: barrier
status: draft
title: "No fully-black-box reduction from PKE to TDP"
aliases: []
id: bar-pke-to-tdp-gkm-00
hypotheses: [pke]
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
  class: "GKM+00 separate the primitives under black-box reductions, which rules out at least every construction that uses PKE, with a proof that uses the TDP inverter, only as an oracle."
---

# No fully-black-box reduction from PKE to TDP

## Statement

There is no fully-black-box construction of a [[trapdoor-permutation|trapdoor permutation]] from a trapdoor predicate, i.e. single-bit [[public-key-encryption|PKE]], by an oracle separation following [[IR89 - Limits on the provable consequences of one-way permutations|IR89]] — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]]. Bitwise encryption under a trapdoor predicate is a semantically secure multi-bit PKE — [[GM84 - Probabilistic encryption|GM84]] — so a fully-black-box construction of a trapdoor permutation from multi-bit PKE would compose into one from trapdoor predicates, and none exists.

## Notes

- The converse holds: a trapdoor permutation with a hard-core predicate gives semantically secure PKE ([[tdp-to-pke|TDP ⇒ PKE]]) — [[GM84 - Probabilistic encryption|GM84]].
- OT does not give trapdoor permutations either: [[no-ot-to-tdp-gkm-00|No fully-black-box reduction from OT to TDP]] — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]].
