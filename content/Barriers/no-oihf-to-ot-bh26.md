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
rationale:
  class: "The composition with the random-oracle OIHF needs the OT construction to use the OIHF, and its security proof the OT adversary, only as oracles."
---

# No fully-black-box reduction from OIHF to OT

## Statement

There is no fully-black-box construction of [[oblivious-transfer|OT]] from an [[oblivious-interactive-hash-function|OIHF]]: a [[random-oracle-model|random oracle]] yields an OIHF ([[rom-to-oihf-bh26|ROM ⇒ OIHF]]) — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]] — so such a construction would compose into a fully-black-box construction of OT, hence of [[key-exchange|key agreement]], from a random oracle alone, which [[IR89 - Limits on the provable consequences of one-way permutations|IR89]] rules out.

## Notes

- BH26's reduction from an OIHF to OT is non-black-box ([[oihf-to-ot-bh26|OIHF ⇒ OT]]) and so gets around the barrier; standard-model OIHFs are known only from Cryptomania assumptions, so the Minicrypt–Cryptomania separation stands for black-box constructions — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]].
