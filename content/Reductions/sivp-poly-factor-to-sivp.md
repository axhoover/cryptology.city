---
type: reduction
status: draft
title: SIVP for polynomial factors ⇒ SIVP
aliases: []
id: red-sivp-poly-factor-to-sivp
kind: implication
hypotheses: [sivp-poly-factor]
conclusion: sivp
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on SIVP instances, and the reduction forwards any algorithm unchanged."
---

# SIVP for polynomial factors ⇒ SIVP

## Statement

Hardness of [[shortest-independent-vectors-problem#polynomial-factors|SIVP for polynomial factors]] at $c = 1$ is [[shortest-independent-vectors-problem|hardness of SIVP]] for the polynomial-time computable factor $\gamma(n) = n$ — folklore.
