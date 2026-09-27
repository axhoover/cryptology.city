---
type: reduction
status: draft
title: "QM ⇒ OWSG"
aliases: []
id: red-owsg-to-qm
kind: implication
hypotheses: [quantum-money]
conclusion: one-way-state-generator
class: unstated
model: quantum
source:
  - "[[MY22 - One-Wayness in Quantum Cryptography|MY22]]"
security-loss: ""
---

# QM ⇒ OWSG

Private-key [[quantum-money|quantum money]] with pure banknotes implies [[one-way-state-generator|OWSG]].

## Statement

Private-key [[quantum-money|quantum money]] whose banknotes are pure states implies [[one-way-state-generator|one-way state generators]] — [[MY22 - One-Wayness in Quantum Cryptography|MY22]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- The hypothesis key `quantum-money` drops the load-bearing qualifiers private-key and pure banknotes; the Statement keeps them.
- This page replaces a migrated bullet claiming quantum money from OWSGs, which inverts this result; no such construction is known. The slug and id keep the old direction because filenames are live URLs and ids are stable.
