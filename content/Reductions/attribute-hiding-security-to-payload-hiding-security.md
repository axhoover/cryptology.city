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
---

# Attribute-Hiding Security ⇒ Payload-Hiding Security

[[hidden-vector-encryption#attribute-hiding-security|Attribute-Hiding Security]] implies [[hidden-vector-encryption#payload-hiding-security|Payload-Hiding Security]].

## Statement

For any [[hidden-vector-encryption|HVE]] scheme, [[hidden-vector-encryption#attribute-hiding-security|attribute-hiding]] implies [[hidden-vector-encryption#payload-hiding-security|payload-hiding]], with equal advantage — folklore.

## Sketch

Setting $x_0 = x_1 = x^*$ specializes the attribute-hiding game to the payload-hiding game: a payload-hiding adversary with challenge $(x^*, m_0, m_1)$ runs unchanged with challenge pairs $(x^*, m_0)$ and $(x^*, m_1)$, and payload-hiding admissibility (no queried pattern matches $x^*$) implies attribute-hiding admissibility.

## Notes

`class: fully-black-box`: identity construction (the same HVE scheme); the reduction runs the payload-hiding adversary unchanged, using it only as an oracle.

- The [[hidden-vector-encryption|HVE]] page's 'strictly implies' also asserts the separation payload-hiding $\not\Rightarrow$ attribute-hiding, uncited there and not covered by this edge.
- Both endpoints are security notions of the same primitive, not distinct objects — the target model needs notion-level nodes.
