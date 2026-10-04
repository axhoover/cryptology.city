---
type: reduction
status: draft
title: "OT ⇒ OIHF"
aliases: []
id: red-ot-to-oihf-bh26
kind: implication
hypotheses: [ot]
conclusion: oblivious-interactive-hash-function
class: unstated
model: standard
source:
  - "[[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]"
security-loss: ""
---

# OT ⇒ OIHF

## Statement

[[oblivious-transfer|OT]] implies an [[oblivious-interactive-hash-function|OIHF]] — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]].

## Notes

- Conversely, an OIHF implies OT via a non-black-box reduction ([[oihf-to-ot-bh26|OIHF ⇒ OT]]) — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]].
- OIHFs also exist relative to a random oracle ([[rom-to-oihf-bh26|ROM ⇒ OIHF]]), but in the standard model they are known only from Cryptomania assumptions such as OT — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]].
