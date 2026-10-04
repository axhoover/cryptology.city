---
type: reduction
status: draft
title: "OIHF ⇒ OT"
aliases: []
id: red-oihf-to-ot-bh26
kind: implication
hypotheses: [oblivious-interactive-hash-function]
conclusion: ot
class: free
model: standard
source:
  - "[[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]"
security-loss: ""
rationale:
  class: "BH26 call the reduction non-black-box without placing it in the RTV04 hierarchy, so only the implication itself is recorded."
---

# OIHF ⇒ OT

## Statement

An [[oblivious-interactive-hash-function|OIHF]] implies [[oblivious-transfer|OT]] via a non-black-box reduction — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]. The reduction cannot be fully black-box ([[no-oihf-to-ot-bh26|barrier]]): OIHFs exist relative to a random oracle ([[rom-to-oihf-bh26|ROM ⇒ OIHF]]), while no fully-black-box construction of OT from a random oracle exists — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].

## Notes

- Conversely, OT implies OIHFs, and standard-model OIHFs are known only from Cryptomania assumptions, so the result does not place OT in Minicrypt — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]].
