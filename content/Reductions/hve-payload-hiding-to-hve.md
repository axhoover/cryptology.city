---
type: reduction
status: draft
title: "Payload-hiding HVE ⇒ HVE"
aliases: []
id: red-hve-payload-hiding-to-hve
kind: implication
hypotheses: [hve-payload-hiding]
conclusion: hve
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on HVE schemes, and the reduction runs any selective payload-hiding adversary unchanged as an adaptive one, using it only as an oracle."
---

# Payload-hiding HVE ⇒ HVE

## Statement

Every [[hidden-vector-encryption#payload-hiding-security|payload-hiding]] HVE scheme is a [[hidden-vector-encryption#selective-security|selectively payload-hiding]] [[hidden-vector-encryption|HVE]] scheme, with the same correctness and message space: an efficient admissible selective adversary, which fixes $x^*$ before $\Setup$, is an efficient admissible adversary in the adaptive game with the same advantage — folklore.
