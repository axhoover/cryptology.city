---
type: reduction
status: draft
title: q-DLOG ⇒ Prime-order DLOG
aliases: []
id: red-q-dlog-to-prime-order-dlog
kind: implication
hypotheses: [q-dlog]
conclusion: prime-order-dlog
class: fully-black-box
model: standard
source: folklore
security-loss: "none: the reduction forwards the adversary's answer"
rationale:
  class: "The construction keeps only the first source group of the bilinear group generator, and the reduction runs any DLOG solver unchanged on part of a $(1, 1)$-DLOG instance."
---

# q-DLOG ⇒ Prime-order DLOG

## Statement

If [$q$-DLOG](discrete-logarithm#q-dlog) is hard for a bilinear group generator, then [[discrete-logarithm#dlog-in-prime-order-groups|DLOG is hard in prime-order groups]] for the generator that runs it and outputs $(\GG_1, g_1, p)$: a solver given $(\GG_1, g_1, p, g_1^x)$ is a $(1, 1)$-DLOG solver that ignores $g_2^x$ and the rest of the bilinear group, with the same advantage — folklore.
