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
---

# No fully-black-box reduction from TDP to enhanced TDP

A reduction of class `fully-black-box` from [[trapdoor-permutation|TDP]] to [[trapdoor-permutation#enhanced-trapdoor-permutations|enhanced TDP]] would imply a contradiction.

## Statement

There is no fully black-box construction of an [[trapdoor-permutation#enhanced-trapdoor-permutations|enhanced trapdoor permutation]] from a standard [[trapdoor-permutation|trapdoor permutation]] — [[Haj18 - Enhancements Are Blackbox Non-Trivial Impossibility of Enhanced Trapdoor Permutations from Standard Trapdoor Permutations|Haj18]]. The barrier concerns the enhancement alone, not [[oblivious-transfer|OT]]: the TDP-based OT and NIZK constructions use enhanced TDPs ([[EGL85 - A randomized protocol for signing contracts|EGL85]], [[GR13 - Enhancements of Trapdoor Permutations|GR13]]), and the barrier does not separate OT from standard TDPs.

## Notes

`class: fully-black-box`: Haj18 state a fully black-box impossibility in the RTV04 sense and claim no stronger class.

- Replaces a migrated barrier (no TDP ⇒ OT). That barrier misread "this stronger property is necessary for constructing OT from TDPs", a remark about the EGL85 proof, as an impossibility result.
