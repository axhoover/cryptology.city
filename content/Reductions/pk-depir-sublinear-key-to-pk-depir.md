---
type: reduction
status: draft
title: "PK-DEPIR with a sublinear key ⇒ PK-DEPIR"
aliases: []
id: red-pk-depir-sublinear-key-to-pk-depir
kind: implication
hypotheses: [pk-depir-sublinear-key]
conclusion: pk-depir
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any privacy adversary unchanged."
---

# PK-DEPIR with a sublinear key ⇒ PK-DEPIR

## Statement

A [[doubly-efficient-pir#pk-depir-with-a-sublinear-key|public-key DEPIR scheme with a sublinear key]] is a [[doubly-efficient-pir#public-key-depir|public-key DEPIR]] scheme, with the same privacy advantage, since its query-time bound $p(\secpar) \cdot n^c$, $c < 1$, implies the doubly-efficient bound $p(\secpar)^{2/(1-c)} + n^{(1+c)/2}$ — folklore.
