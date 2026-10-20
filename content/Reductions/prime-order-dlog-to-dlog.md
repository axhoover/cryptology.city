---
type: reduction
status: draft
title: Prime-order DLOG ⇒ DLOG
aliases: []
id: red-prime-order-dlog-to-dlog
kind: implication
hypotheses: [prime-order-dlog]
conclusion: dlog
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the group generator, and the reduction forwards any DLOG solver unchanged."
---

# Prime-order DLOG ⇒ DLOG

## Statement

A group generator for which [[discrete-logarithm#dlog-in-prime-order-groups|DLOG is hard in prime-order groups]] is one for which [[discrete-logarithm|DLOG]] is hard, with the same advantage — folklore.
