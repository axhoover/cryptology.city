---
type: reduction
status: draft
title: "IND-secure FE ⇒ selectively secure FE"
aliases: []
id: red-functional-encryption-to-fe-selective-security
kind: implication
hypotheses: [functional-encryption]
conclusion: fe-selective-security
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction runs the selective adversary unchanged inside the IND game."
---

# IND-secure FE ⇒ selectively secure FE

## Statement

Every [[functional-encryption#indistinguishability-based-security|IND-secure]] [[functional-encryption|FE]] scheme is [[functional-encryption#selective-security|selectively IND-secure]] — folklore.

## Sketch

On input $\pp$, the IND adversary runs the selective adversary on $1^\secpar$ alone to obtain $(m_0, m_1)$, submits them as its challenge without key queries before the challenge, gives the selective adversary $\pp$ and $c^*$, and forwards every later key query, so admissibility and the advantage carry over unchanged.
