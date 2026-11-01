---
type: barrier
status: draft
title: "No fully-black-box reduction from CRHF to average-case-hard SZK"
aliases: []
id: bar-crhf-to-szk-hardness-bd19
hypotheses: [crhf]
conclusion: szk-hardness
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[BD19 - On the Complexity of Collision Resistant Hash Functions New and Old Black-Box Separations|BD19]]"
rationale:
  class: "BD19 rule out black-box constructions of hard problems in SZK from collision-resistant hashing, and fully-black-box, the narrowest class, is the weakest claim that covers them."
---

# No fully-black-box reduction from CRHF to average-case-hard SZK

## Statement

[[hash-function#collision-resistance|Collision-resistant hashing]] does not imply hard problems in [[statistical-zero-knowledge|SZK]] in a black-box way — [[BD19 - On the Complexity of Collision Resistant Hash Functions New and Old Black-Box Separations|BD19]]. In particular there is no fully-black-box construction of an [[statistical-zero-knowledge#average-case-hardness|average-case-hard]] SZK problem from a collision-resistant hash function.

## Notes

- From iO and one-way permutations no fully-black-box construction of hard SZK problems exists either ([[no-io-and-owp-to-szk-hardness-bdv17|No fully-black-box reduction from iO + OWP to average-case-hard SZK]]) — [[BDV17 - Structure vs Hardness Through the Obfuscation Lens|BDV17]].
