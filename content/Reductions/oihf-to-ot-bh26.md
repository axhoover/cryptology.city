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
---

# OIHF ⇒ OT

[[oblivious-interactive-hash-function|OIHF]] implies [[oblivious-transfer|OT]].

## Statement

An [[oblivious-interactive-hash-function|OIHF]] implies [[oblivious-transfer|OT]] via a non-black-box reduction — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]. The reduction cannot be fully black-box ([[no-oihf-to-ot-bh26|barrier]]): OIHFs exist relative to a random oracle ([[rom-to-oihf-bh26|ROM ⇒ OIHF]]), while no fully-black-box construction of OT from a random oracle exists — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].

## Notes

`class: free`: BH26 call the reduction non-black-box without placing it in the RTV hierarchy, so it is recorded as `free`, the broadest class in `schema/reduction-classes.yaml`. `free` does not imply fully-black-box, so the edge is consistent with [[no-oihf-to-ot-bh26]].

- Standard-model OIHFs are known only from Cryptomania assumptions — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]] — so this edge does not by itself place OT in Minicrypt.
