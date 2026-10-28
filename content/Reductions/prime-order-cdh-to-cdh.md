---
type: reduction
status: draft
title: Prime-order CDH ⇒ CDH
aliases: []
id: red-prime-order-cdh-to-cdh
kind: implication
hypotheses: [prime-order-cdh]
conclusion: cdh
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the group generator, and the reduction forwards any CDH solver unchanged."
---

# Prime-order CDH ⇒ CDH

## Statement

A group generator for which [[computational-diffie-hellman#cdh-in-prime-order-groups|CDH is hard in prime-order groups]] is one for which [[computational-diffie-hellman|CDH]] is hard, with the same advantage — folklore.
