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
---

# ISIS (Inhomogeneous SIS) ⇔ SIS

[[shortest-integer-solution#isis-inhomogeneous-sis|ISIS (Inhomogeneous SIS)]] is equivalent to [[shortest-integer-solution|SIS]] up to a polynomial change of parameters.

## Statement

[[shortest-integer-solution#isis-inhomogeneous-sis|ISIS]] and [[shortest-integer-solution|SIS]] are equivalent up to a polynomial change of parameters (column count and norm bound). SIS hardness implies ISIS hardness immediately: for $\mathbf{A} = [\mathbf{A}' \mid \mathbf{a}]$ with $\mathbf{a}$ uniform, a short $\mathbf{z}'$ with $\mathbf{A}'\mathbf{z}' = \mathbf{a} \pmod q$ gives the nonzero kernel vector $(\mathbf{z}', -1)$ of $\mathbf{A}$, of norm at most $\sqrt{\beta^2 + 1}$ when $\|\mathbf{z}'\| \le \beta$, so one ISIS-oracle call solves SIS. The converse (solving ISIS with a SIS oracle) holds only under conditions on the column count and norm bound — folklore.

## Notes

`class: fully-black-box`: Each direction is an oracle reduction: it invokes a solver for the other problem as a black box on an instance derived from its own and post-processes the answer by linear algebra.

- The direction from a SIS oracle to an ISIS solver (ISIS hardness ⇒ SIS hardness, in the hardness convention) is documented in the literature only as folklore, and its parameter conditions are load-bearing.
