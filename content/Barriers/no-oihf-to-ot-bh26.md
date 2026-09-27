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
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
circumvented-by: [red-oihf-to-ot-bh26]
source:
  - "[[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]"
---

# No fully-black-box reduction from OIHF to OT

A reduction of class `fully-black-box` from [[oblivious-interactive-hash-function|OIHF]] to [[oblivious-transfer|OT]] would imply a contradiction.

## Statement

[[oblivious-interactive-hash-function|OIHFs]] can be constructed from a [[random-oracle-model|random oracle]] — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]. A fully-black-box reduction from an OIHF to [[oblivious-transfer|OT]] would therefore compose into a black-box construction of OT, hence of [[key-exchange|key agreement]], from a random oracle alone, which the Impagliazzo–Rudich separation rules out — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]]. BH26's reduction from an OIHF to OT is accordingly non-black-box, and the Minicrypt/Cryptomania separation stands for black-box constructions — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]].

## Notes

`class: fully-black-box`: the composition in the Statement needs the OT construction to use the OIHF, and its security reduction the OT adversary, only as oracles. Whether OIHFs exist relative to the IR89 oracle (a random permutation plus a $\classPSPACE$-complete oracle), which would extend the barrier to `relativizing`, is not settled by BH26's abstract.

`circumvented-by`: BH26's [[oihf-to-ot-bh26|OIHF ⇒ OT]] is non-black-box (`class: free`), outside the class this barrier rules out.

- Derived: the barrier composes [[rom-to-oihf-bh26|ROM ⇒ OIHF]] with [[IR89 - Limits on the provable consequences of one-way permutations|IR89]]. BH26's abstract calls its reduction non-black-box but does not state the barrier, and the full text has not been checked for an explicit statement.
