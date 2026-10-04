---
type: reduction
status: draft
title: "Attribute-Hiding Security ⇒ Payload-Hiding Security"
aliases: []
id: red-attribute-hiding-security-to-payload-hiding-security
kind: implication
hypotheses: [hve-attribute-hiding]
conclusion: hve-payload-hiding
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the reduction preserves the advantage exactly"
rationale:
  class: "The construction is the identity on HVE schemes, and the reduction runs the payload-hiding adversary unchanged, using it only as an oracle."
---

# Attribute-Hiding Security ⇒ Payload-Hiding Security

## Statement

Every [[hidden-vector-encryption#attribute-hiding-security|attribute-hiding]] [[hidden-vector-encryption|HVE]] scheme is [[hidden-vector-encryption#payload-hiding-security|payload-hiding]]: for every efficient admissible payload-hiding adversary there is an efficient admissible attribute-hiding adversary with the same advantage — folklore.

## Sketch

Setting $x_0 = x_1 = x^*$ specializes the attribute-hiding game to the payload-hiding game: the challenge $(x^*, m_0, m_1)$ becomes $((x^*, m_0), (x^*, m_1))$, and payload-hiding admissibility (no queried pattern matches $x^*$) implies attribute-hiding admissibility.
