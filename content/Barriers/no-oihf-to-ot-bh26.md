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

[[oblivious-interactive-hash-function|OIHFs]] can be constructed from a [[random-oracle-model|random oracle]] — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]. A fully-black-box reduction from an OIHF to [[oblivious-transfer|OT]] would therefore compose into a black-box construction of OT, hence of [[key-exchange|key agreement]], from a random oracle alone, which the Impagliazzo–Rudich separation rules out — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]]. BH26's reduction from an OIHF to OT is accordingly non-black-box, and the Minicrypt/Cryptomania separation stands for black-box constructions — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]].

## Notes

`class: fully-black-box`: the composition in the Statement needs the OT construction to use the OIHF, and its security reduction the OT adversary, only as oracles. Whether OIHFs exist relative to the IR89 oracle (a random permutation plus a $\classPSPACE$-complete oracle), which would extend the barrier to `relativizing`, is not settled by BH26's abstract.

- The data model has no edge type for 'circumvents barrier X by leaving class C', which is what BH26's non-black-box OIHF ⇒ OT reduction does to IR89.
