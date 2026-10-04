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
rationale:
  class: "The hypothesis is a model of computation, not a primitive, so no black-box class applies; Den06 prove the statement for every generic adversary, which is the free class scoped by the model."
  model: "The extraction holds only for generic adversaries; nothing is claimed in the standard model."
---

# GGM ⇒ KEA

## Statement

The [[knowledge-of-exponent|knowledge-of-exponent assumption]] KEA1 (Damgård's DHK problem) holds against every adversary in the [[generic-group-model|generic group model]] — [[Den06 - The Hardness of the DHK Problem in the Generic Group Model|Den06]].
