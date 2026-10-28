---
type: reduction
status: draft
title: Prime-order DDH ⇒ DDH
aliases: []
id: red-prime-order-ddh-to-ddh
kind: implication
hypotheses: [prime-order-ddh]
conclusion: ddh
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the group generator, and the reduction forwards any DDH distinguisher unchanged."
---

# Prime-order DDH ⇒ DDH

## Statement

A group generator for which [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH is hard in prime-order groups]] is one for which [[decisional-diffie-hellman|DDH]] is hard, with the same advantage — folklore.
