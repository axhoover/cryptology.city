---
type: reduction
status: draft
title: "GGM ⇒ KEA"
aliases: []
id: red-ggm-to-kea-den06
kind: implication
hypotheses: [ggm]
conclusion: kea
class: free
model: generic-group
source:
  - "[[Den06 - The Hardness of the DHK Problem in the Generic Group Model|Den06]]"
security-loss: ""
---

# GGM ⇒ KEA

[[knowledge-of-exponent|KEA]] holds in the [[generic-group-model|generic group model]].

## Statement

The [[knowledge-of-exponent|knowledge-of-exponent assumption]] KEA1 (Damgård's DHK problem) holds against generic adversaries — [[Den06 - The Hardness of the DHK Problem in the Generic Group Model|Den06]].

## Notes

`class: free`: The hypothesis is a computational model, not a primitive, so the black-box classes do not apply; Den06 proves the statement for every generic adversary, which is the `free` class scoped by the model.

`model: generic-group`: The extraction holds only for generic adversaries; nothing is claimed in the standard model.
