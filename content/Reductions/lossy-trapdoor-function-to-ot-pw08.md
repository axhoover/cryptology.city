---
type: reduction
status: draft
title: Lossy TDF ⇒ OT
aliases: []
id: red-lossy-trapdoor-function-to-ot-pw08
kind: implication
hypotheses: [lossy-trapdoor-function]
conclusion: ot
class: unstated
model: standard
source:
  - "[[PW08 - Lossy trapdoor functions and their applications|PW08]]"
security-loss: ""
---

# Lossy TDF ⇒ OT

## Statement

[[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]] yield [[oblivious-transfer|oblivious transfer]] — [[PW08 - Lossy trapdoor functions and their applications|PW08]].

## Notes

- Combined with [[ddh-to-lossy-trapdoor-function-pw08|DDH ⇒ lossy TDF]] and [[lwe-to-lossy-trapdoor-function-pw08|LWE ⇒ lossy TDF]], this gives OT from DDH and from lattice assumptions — [[PW08 - Lossy trapdoor functions and their applications|PW08]].
