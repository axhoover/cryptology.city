---
type: reduction
status: draft
title: Prime-field DLOG ⇒ DLOG
aliases: []
id: red-zp-star-dlog-to-dlog
kind: implication
hypotheses: [zp-star-dlog]
conclusion: dlog
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the group generator, and the reduction forwards any DLOG solver unchanged."
---

# Prime-field DLOG ⇒ DLOG

## Statement

A group generator for which [DLOG is hard in $\ZZ_P^*$](discrete-logarithm#dlog-in-the-multiplicative-group-of-a-prime-field) is one for which [[discrete-logarithm|DLOG]] is hard, with the same advantage — folklore.
