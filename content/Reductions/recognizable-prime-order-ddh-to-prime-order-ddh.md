---
type: reduction
status: draft
title: Prime-order DDH with decidable membership ⇒ Prime-order DDH
aliases: []
id: red-recognizable-prime-order-ddh-to-prime-order-ddh
kind: implication
hypotheses: [recognizable-prime-order-ddh]
conclusion: prime-order-ddh
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the group generator, and the reduction forwards any DDH distinguisher unchanged."
---

# Prime-order DDH with decidable membership ⇒ Prime-order DDH

## Statement

A group generator for which [[decisional-diffie-hellman#ddh-in-prime-order-groups-with-decidable-membership|DDH is hard in prime-order groups with decidable membership]] is one for which [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH is hard in prime-order groups]], with the same advantage — folklore.
