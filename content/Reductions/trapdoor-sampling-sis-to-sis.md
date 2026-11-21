---
type: reduction
status: draft
title: SIS at trapdoor-sampling parameters ⇒ SIS
aliases: []
id: red-trapdoor-sampling-sis-to-sis
kind: implication
hypotheses: [trapdoor-sampling-sis]
conclusion: sis
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on parameters, and the reduction forwards any SIS solver unchanged."
---

# SIS at trapdoor-sampling parameters ⇒ SIS

## Statement

If [[shortest-integer-solution#sis-at-trapdoor-sampling-parameters|SIS is hard at trapdoor-sampling parameters]] $(n, m, q, \beta)$, then [[shortest-integer-solution|SIS]] is hard for $(n, m, q, \beta)$, with the same advantage: the parameters satisfy $m \ge 2n \log q > n \log q$ and $\sqrt{m} \le \beta < q$, so this is SIS hardness at a point of the SIS regime — folklore.
