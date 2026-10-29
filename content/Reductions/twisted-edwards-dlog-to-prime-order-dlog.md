---
type: reduction
status: draft
title: "Twisted Edwards DLOG ⇒ Prime-order DLOG"
aliases: []
id: red-twisted-edwards-dlog-to-prime-order-dlog
kind: implication
hypotheses: [twisted-edwards-dlog]
conclusion: prime-order-dlog
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the group generator, and the reduction forwards any DLOG solver unchanged."
---

# Twisted Edwards DLOG ⇒ Prime-order DLOG

## Statement

A group generator for which [[discrete-logarithm#dlog-in-prime-order-subgroups-of-twisted-edwards-curves|DLOG is hard in prime-order subgroups of twisted Edwards curves]] is one for which [[discrete-logarithm#dlog-in-prime-order-groups|DLOG is hard in prime-order groups]], with the same advantage — folklore.
