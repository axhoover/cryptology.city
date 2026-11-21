---
type: reduction
status: draft
title: Prime-field DLOG ⇒ efficiently represented DLOG
aliases: []
id: red-zp-star-dlog-to-efficiently-represented-dlog
kind: implication
hypotheses: [zp-star-dlog]
conclusion: efficiently-represented-dlog
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the group generator, and the reduction forwards any DLOG solver unchanged."
---

# Prime-field DLOG ⇒ efficiently represented DLOG

## Statement

A group generator for which [DLOG is hard in $\ZZ_P^*$](discrete-logarithm#dlog-in-the-multiplicative-group-of-a-prime-field) is one for which [[discrete-logarithm#dlog-in-efficiently-represented-groups|DLOG is hard in efficiently represented groups]], with the same advantage: $a \mapsto a - 1$ and $i \mapsto i + 1$ are mutually inverse bijections between $\ZZ_P^* = \{1, \ldots, P - 1\}$ and $[P - 1]$, and they and multiplication modulo $P$ are computable in deterministic polynomial time — folklore.
