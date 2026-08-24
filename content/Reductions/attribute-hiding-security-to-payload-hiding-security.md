---
type: reduction
status: stub
title: "Attribute-Hiding Security ⇒ Payload-Hiding Security"
aliases: []
id: red-attribute-hiding-security-to-payload-hiding-security
kind: implication
hypotheses: [hve-attribute-hiding]
conclusion: hve-payload-hiding
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Attribute-Hiding Security ⇒ Payload-Hiding Security

[[hidden-vector-encryption#attribute-hiding-security|Attribute-Hiding Security]] implies [[hidden-vector-encryption#payload-hiding-security|Payload-Hiding Security]].

## Statement

Migrated verbatim from [[hidden-vector-encryption]] § Attribute-Hiding Security:

> is negligible. Attribute-hiding strictly implies payload-hiding (take $(x_0, m_0) = (x^*, m_0)$ and $(x_1, m_1) = (x^*, m_1)$).

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation (folklore not flagged).
- 'strictly implies' also asserts a separation (payload-hiding =/=> attribute-hiding), which the parenthetical does not prove and nothing on the page substantiates.
- Both endpoints are security notions of the same primitive, not distinct objects — the target model needs notion-level nodes.
