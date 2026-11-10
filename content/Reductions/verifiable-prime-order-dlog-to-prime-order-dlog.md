---
type: reduction
status: draft
title: Verifiable prime-order DLOG ⇒ Prime-order DLOG
aliases: []
id: red-verifiable-prime-order-dlog-to-prime-order-dlog
kind: implication
hypotheses: [verifiable-prime-order-dlog]
conclusion: prime-order-dlog
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the group generator, and the reduction forwards any DLOG solver unchanged."
---

# Verifiable prime-order DLOG ⇒ Prime-order DLOG

## Statement

A group generator for which [[discrete-logarithm#dlog-in-verifiable-prime-order-groups|DLOG is hard in verifiable prime-order groups]] is one for which [[discrete-logarithm#dlog-in-prime-order-groups|DLOG is hard in prime-order groups]], with the same advantage — folklore.
