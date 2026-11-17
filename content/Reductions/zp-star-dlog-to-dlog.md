---
type: reduction
status: draft
title: DLOG modulo a prime ⇒ DLOG
aliases: []
id: red-zp-star-dlog-to-dlog
kind: implication
hypotheses: [zp-star-dlog]
conclusion: dlog
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the solver and its advantage are unchanged"
rationale:
  class: "The construction is the identity on the group generator, and the reduction forwards any DLOG solver unchanged."
---

# DLOG modulo a prime ⇒ DLOG

## Statement

A group generator for which [DLOG is hard in $\ZZ_P^*$](discrete-logarithm#dlog-in-multiplicative-groups-modulo-a-prime) is one for which [[discrete-logarithm|DLOG]] is hard, with the same advantage — folklore.
