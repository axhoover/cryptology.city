---
type: reduction
status: draft
title: "Attribute-hiding HVE ⇒ selectively attribute-hiding HVE"
aliases: []
id: red-hve-attribute-hiding-to-hve-selective-attribute-hiding
kind: implication
hypotheses: [hve-attribute-hiding]
conclusion: hve-selective-attribute-hiding
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on HVE schemes, and the reduction runs any selective adversary unchanged as an adaptive one, using it only as an oracle."
---

# Attribute-hiding HVE ⇒ selectively attribute-hiding HVE

## Statement

Every [[hidden-vector-encryption#attribute-hiding-security|attribute-hiding]] [[hidden-vector-encryption|HVE]] scheme is [[hidden-vector-encryption#selective-attribute-hiding-security|selectively attribute-hiding]], with the same correctness and message space: an efficient admissible selective adversary, which fixes $x_0, x_1$ before $\Setup$ and $m_0, m_1$ after its first key queries, is an efficient admissible adversary in the adaptive game with the same advantage — folklore.
