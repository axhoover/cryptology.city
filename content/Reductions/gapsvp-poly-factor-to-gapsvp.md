---
type: reduction
status: draft
title: GapSVP for polynomial factors ⇒ GapSVP
aliases: []
id: red-gapsvp-poly-factor-to-gapsvp
kind: implication
hypotheses: [gapsvp-poly-factor]
conclusion: gapsvp
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on GapSVP instances, and the reduction forwards any algorithm unchanged."
---

# GapSVP for polynomial factors ⇒ GapSVP

## Statement

Hardness of [[shortest-vector-problem#polynomial-factors|GapSVP for polynomial factors]] is worst-case hardness of [[shortest-vector-problem|GapSVP]] for one family of approximation factors, $\gamma = n^c$ — folklore.
