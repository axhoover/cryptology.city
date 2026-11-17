---
type: reduction
status: draft
title: "Selectively attribute-hiding HVE ⇒ HVE"
aliases: []
id: red-hve-selective-attribute-hiding-to-hve
kind: implication
hypotheses: [hve-selective-attribute-hiding]
conclusion: hve
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on HVE schemes, and the reduction runs any selective payload-hiding adversary unchanged with both challenge attribute vectors set to its x*, using it only as an oracle."
---

# Selectively attribute-hiding HVE ⇒ HVE

## Statement

Every [[hidden-vector-encryption#selective-attribute-hiding-security|selectively attribute-hiding]] HVE scheme is a [[hidden-vector-encryption#selective-security|selectively payload-hiding]] [[hidden-vector-encryption|HVE]] scheme, with the same correctness and message space: an efficient admissible selective payload-hiding adversary committing to $x^*$ becomes, with $x_0 = x_1 = x^*$, an efficient selective attribute-hiding adversary with the same advantage, admissible since no queried pattern matches $x^*$, which makes the clause $m_0 = m_1$ vacuous — folklore.
