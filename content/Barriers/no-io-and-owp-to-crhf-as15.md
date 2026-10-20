---
type: barrier
status: draft
title: "No fully-black-box reduction from iO + OWP to CRHF"
aliases: []
id: bar-io-and-owp-to-crhf-as15
hypotheses: [io, owp]
conclusion: crhf
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[AS15 - Limits on the Power of Indistinguishability Obfuscation and Functional Encryption|AS15]]"
rationale:
  class: "AS15 rule out constructions that may obfuscate circuits with one-way-permutation gates, a class containing every construction that uses the obfuscator and the permutation only as oracles, with proofs that use the adversary only as an oracle."
---

# No fully-black-box reduction from iO + OWP to CRHF

## Statement

There is no fully-black-box construction of a [[hash-function#collision-resistance|collision-resistant hash function]] family from [[indistinguishability-obfuscation|iO]] and a [[one-way-permutation|one-way permutation]], even when the construction obfuscates circuits that call the permutation — [[AS15 - Limits on the Power of Indistinguishability Obfuscation and Functional Encryption|AS15]]. Allowing such oracle-aided circuits covers the non-black-box use of the underlying primitives in punctured programming, with the obfuscator itself used as a black box; every such construction has an exponential security loss, so sub-exponential security assumptions do not help.

## Notes

- The proof extends [[no-owp-to-crhf-sim98|Simon's collision-finding oracle]] to oracles that also answer obfuscation queries — [[Sim98 - Finding Collisions on a One-Way Street Can Secure Hash Functions Be Based on General Assumptions|Sim98]], [[AS15 - Limits on the Power of Indistinguishability Obfuscation and Functional Encryption|AS15]].
- The same framework shows that every fully-black-box construction of key agreement with perfect completeness from private-key functional encryption for oracle-aided circuits has an exponential security loss — [[AS15 - Limits on the Power of Indistinguishability Obfuscation and Functional Encryption|AS15]].
