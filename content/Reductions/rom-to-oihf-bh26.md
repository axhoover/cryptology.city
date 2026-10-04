---
type: reduction
status: draft
title: "ROM ⇒ OIHF"
aliases: []
id: red-rom-to-oihf-bh26
kind: implication
hypotheses: [rom]
conclusion: oblivious-interactive-hash-function
class: free
model: rom
source:
  - "[[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]"
security-loss: ""
rationale:
  class: "The construction is proved secure unconditionally in the random-oracle model, which is the free class scoped by the model, and BH26 do not classify it in RTV04 terms."
---

# ROM ⇒ OIHF

## Statement

A [[random-oracle-model|random oracle]] yields an [[oblivious-interactive-hash-function|oblivious interactive hash function]] secure, unconditionally, against every adversary with a bounded query budget, placing OIHFs in Minicrypt — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]].

## Notes

- In the standard model OIHFs are known only from Cryptomania assumptions such as [[oblivious-transfer|OT]] ([[ot-to-oihf-bh26|OT ⇒ OIHF]]), so the non-black-box [[oihf-to-ot-bh26|OIHF ⇒ OT]] does not place OT in Minicrypt, and the Minicrypt–Cryptomania separation stands for black-box constructions ([[no-oihf-to-ot-bh26|No fully-black-box reduction from OIHF to OT]]) — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]].
