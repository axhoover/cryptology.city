---
type: barrier
status: draft
title: "No fully-black-box reduction from TDP to VRF"
aliases: []
id: bar-tdp-to-verifiable-random-function-fs12
hypotheses: [tdp]
conclusion: verifiable-random-function
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[FS12 - Uniqueness Is a Different Story Impossibility of Verifiable Random Functions from Trapdoor Permutations|FS12]]"
rationale:
  class: "FS12 rule out constructions that use the permutation only as an oracle together with security proofs that use the adversary only as an oracle."
---

# No fully-black-box reduction from TDP to VRF

## Statement

There is no fully-black-box construction of a [[verifiable-random-function|verifiable random function]] from [[trapdoor-permutation|trapdoor permutations]]. FS12 separate VRFs from adaptive trapdoor permutations in a black-box manner, and an adaptive trapdoor permutation is a trapdoor permutation that stays one-way even given an inversion oracle on other points, so the separation from trapdoor permutations follows — [[FS12 - Uniqueness Is a Different Story Impossibility of Verifiable Random Functions from Trapdoor Permutations|FS12]]. This extends the black-box impossibility of VRFs from one-way permutations — [[BGRV09 - Weak Verifiable Random Functions|BGRV09]].

## Notes

- CCA-secure [[public-key-encryption|public-key encryption]], [[oblivious-transfer|oblivious transfer]] and [[key-exchange|key agreement]] follow from adaptive trapdoor permutations, so none of them gives VRFs by a fully-black-box construction — [[FS12 - Uniqueness Is a Different Story Impossibility of Verifiable Random Functions from Trapdoor Permutations|FS12]].
- VRFs follow non-uniformly from subexponentially hard trapdoor permutations, and uniformly under a standard derandomization assumption — [[Bit17 - Verifiable Random Functions from Non-interactive Witness-Indistinguishable Proofs|Bit17]].
