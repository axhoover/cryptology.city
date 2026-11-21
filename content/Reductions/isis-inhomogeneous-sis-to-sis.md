---
type: reduction
status: draft
title: "SIS ⇒ ISIS (Inhomogeneous SIS)"
aliases: []
id: red-sis-to-inhomogeneous-sis
kind: implication
hypotheses: [sis]
conclusion: inhomogeneous-sis
class: fully-black-box
model: standard
source: folklore
security-loss: "none: one oracle call on an exactly uniform ISIS instance"
rationale:
  class: "The reduction splits off the last column of its SIS instance as a uniform ISIS target and calls an arbitrary ISIS solver once as an oracle."
---

# SIS ⇒ ISIS (Inhomogeneous SIS)

## Statement

If [[shortest-integer-solution|SIS]] is hard for $(n, m, q, \sqrt{\beta^2 + 1})$, then [[shortest-integer-solution#isis-inhomogeneous-sis|ISIS]] is hard for $(n, m - 1, q, \beta)$ — folklore.

## Sketch

Write a SIS instance as $\mathbf{A} = [\mathbf{A}' \mid \mathbf{a}]$; then $(\mathbf{A}', \mathbf{a})$ is a uniform ISIS instance, and one ISIS-oracle call returning $\mathbf{z}'$ with $\mathbf{A}'\mathbf{z}' = \mathbf{a} \pmod q$ and $\|\mathbf{z}'\| \le \beta$ gives the nonzero kernel vector $(\mathbf{z}', -1)$ of $\mathbf{A}$, of norm at most $\sqrt{\beta^2 + 1}$.
