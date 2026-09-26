---
type: barrier
status: draft
title: "No fully-black-box reduction from OIHF to OT"
aliases: []
id: bar-oihf-to-ot-bh26
hypotheses: [oblivious-interactive-hash-function]
conclusion: ot
class: fully-black-box
consequences:
  - kind: reduction
    target: "ot-from-oihf-non-black-box"
    class: fully-black-box
strength: conditional
conditional-on:
  - standard-model OIHF currently requires Cryptomania assumptions
source:
  - "[[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]"
---

# No fully-black-box reduction from OIHF to OT

A reduction of class `fully-black-box` from [[oblivious-interactive-hash-function|OIHF]] to [[oblivious-transfer|OT]] would imply `ot-from-oihf-non-black-box`.

## Statement

OIHFs can be constructed from a random oracle, so a fully-black-box reduction from an [[oblivious-interactive-hash-function|OIHF]] to [[oblivious-transfer|OT]] would compose into a black-box construction of OT, hence of key agreement, from a random oracle alone, which the Impagliazzo–Rudich separation rules out — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]]. BH26's reduction from an OIHF to OT is accordingly non-black-box, and the Minicrypt/Cryptomania separation stands for black-box constructions — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]].

## Notes

`class: fully-black-box`: BH26 construct an OIHF from a random oracle. A fully-black-box reduction from an OIHF to OT would compose with that construction into a black-box construction of OT, hence of key agreement, from a random oracle alone, which the Impagliazzo-Rudich separation rules out. The barrier is therefore against `fully-black-box`, and BH26's own OIHF ⇒ OT reduction is non-black-box for exactly this reason. Whether OIHFs also exist relative to the IR89 oracle (random permutation plus PSPACE), which would lift the barrier to `relativizing`, is not settled by the abstract.

- This is a barrier-circumvention record: the IR89 Minicrypt/Cryptomania separation is partially bridged by a non-black-box reduction while the black-box separation stands. The data model has no edge type for 'circumvents barrier X by leaving class C'.
