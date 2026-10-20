---
type: reduction
status: draft
title: Lossy TDF ⇒ CRHF
aliases: []
id: red-lossy-trapdoor-function-to-crhf-pw08
kind: implication
hypotheses: [lossy-trapdoor-function]
conclusion: crhf
class: unstated
model: standard
source:
  - "[[PW08 - Lossy trapdoor functions and their applications|PW08]]"
security-loss: ""
---

# Lossy TDF ⇒ CRHF

## Statement

[[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]] with sufficient lossiness yield [[hash-function#collision-resistance|collision-resistant hash functions]] — [[PW08 - Lossy trapdoor functions and their applications|PW08]].

## Notes

- The hash is evaluated in the lossy mode; in the injective mode, which is indistinguishable from it, the function has no collisions at all — [[PW08 - Lossy trapdoor functions and their applications|PW08]].
