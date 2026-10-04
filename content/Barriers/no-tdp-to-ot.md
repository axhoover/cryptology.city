---
type: barrier
status: draft
title: "No fully-black-box reduction from TDP to enhanced TDP"
aliases: []
id: bar-tdp-to-enhanced-trapdoor-permutation-haj18
hypotheses: [tdp]
conclusion: enhanced-trapdoor-permutation
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[Haj18 - Enhancements Are Blackbox Non-Trivial Impossibility of Enhanced Trapdoor Permutations from Standard Trapdoor Permutations|Haj18]]"
rationale:
  class: "Haj18 state a fully-black-box impossibility in the RTV04 sense and claim no broader class."
---

# No fully-black-box reduction from TDP to enhanced TDP

## Statement

There is no fully-black-box construction of an [[trapdoor-permutation#enhanced-trapdoor-permutations|enhanced trapdoor permutation]] from a standard [[trapdoor-permutation|trapdoor permutation]] — [[Haj18 - Enhancements Are Blackbox Non-Trivial Impossibility of Enhanced Trapdoor Permutations from Standard Trapdoor Permutations|Haj18]].

## Notes

- The separation concerns the enhancement alone and does not separate [[oblivious-transfer|OT]] from standard trapdoor permutations; the trapdoor-permutation-based constructions of OT and NIZK use enhanced, and for NIZK doubly enhanced, trapdoor permutations ([[enhanced-trapdoor-permutations-to-ot-gkm-00|Enhanced trapdoor permutations ⇒ OT]]) — [[EGL85 - A randomized protocol for signing contracts|EGL85]], [[GR13 - Enhancements of Trapdoor Permutations|GR13]].
