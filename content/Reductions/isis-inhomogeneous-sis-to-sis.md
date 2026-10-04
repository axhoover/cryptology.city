---
type: reduction
status: draft
title: "ISIS (Inhomogeneous SIS) ⇔ SIS"
aliases: []
id: red-isis-inhomogeneous-sis-to-sis
kind: equivalence
hypotheses: [inhomogeneous-sis]
conclusion: sis
class: fully-black-box
model: standard
source: folklore
security-loss: ""
rationale:
  class: "Each direction calls a solver for the other problem only as an oracle, on instances derived from its own, and post-processes the answers."
---

# ISIS (Inhomogeneous SIS) ⇔ SIS

## Statement

[[shortest-integer-solution#isis-inhomogeneous-sis|ISIS]] and [[shortest-integer-solution|SIS]] are equivalent up to a polynomial change of the column count and norm bound — folklore. One direction is immediate: if SIS is hard for $(n, m, q, \sqrt{\beta^2 + 1})$, then ISIS is hard for $(n, m - 1, q, \beta)$. The other, solving ISIS with a SIS oracle, holds only under conditions on the column count and norm bound.

## Sketch

Write a SIS instance as $\mathbf{A} = [\mathbf{A}' \mid \mathbf{a}]$; then $(\mathbf{A}', \mathbf{a})$ is a uniform ISIS instance, and one ISIS-oracle call returning $\mathbf{z}'$ with $\mathbf{A}'\mathbf{z}' = \mathbf{a} \pmod q$ and $\|\mathbf{z}'\| \le \beta$ gives the nonzero kernel vector $(\mathbf{z}', -1)$ of $\mathbf{A}$, of norm at most $\sqrt{\beta^2 + 1}$.
