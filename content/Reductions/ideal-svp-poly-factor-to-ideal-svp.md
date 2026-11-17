---
type: reduction
status: draft
title: Ideal-SVP for polynomial factors ⇒ Ideal-SVP
aliases: []
id: red-ideal-svp-poly-factor-to-ideal-svp
kind: implication
hypotheses: [ideal-svp-poly-factor]
conclusion: ideal-svp
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on Ideal-SVP instances, and the reduction forwards any algorithm unchanged."
---

# Ideal-SVP for polynomial factors ⇒ Ideal-SVP

## Statement

Hardness of [[ideal-svp#polynomial-factors|Ideal-SVP for polynomial factors]] is worst-case hardness of [[ideal-svp|Ideal-SVP]] for one family of approximation factors, $\gamma = n^c$ — folklore.
