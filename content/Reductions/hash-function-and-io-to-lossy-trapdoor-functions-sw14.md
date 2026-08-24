---
type: reduction
status: stub
title: "Hash function + iO ⇒ Lossy trapdoor functions"
aliases: []
id: red-hash-function-and-io-to-lossy-trapdoor-functions-sw14
kind: implication
hypotheses: [hash-function, io]
conclusion: lossy-functions
class: unstated
model: standard
source:
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
security-loss: ""
---

# Hash function + iO ⇒ Lossy trapdoor functions

[[hash-function|Hash function]] together with [[indistinguishability-obfuscation|iO]] implies [[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]].

## Statement

Migrated verbatim from [[indistinguishability-obfuscation]] § Other results:

> - iO + OWF → deniable encryption, lossy functions, and many other primitives — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Second conclusion packed into the same bullet.
- 'lossy functions' is ambiguous (lossy trapdoor functions? lossy encryption?) and has no page.
