---
type: reduction
status: draft
title: Subset sum at constant density below one ⇒ Subset sum
aliases: []
id: red-subset-sum-constant-density-below-one-to-subset-sum
kind: implication
hypotheses: [subset-sum-constant-density-below-one]
conclusion: subset-sum
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the instance distribution, and the reduction forwards any solver unchanged."
---

# Subset sum at constant density below one ⇒ Subset sum

## Statement

If [[subset-sum#subset-sum-at-constant-density-below-one|subset sum is hard at constant density below one]] for a constant $c > 0$, then [[subset-sum|subset sum]] is hard for $(n, M)$ with $M = 2^{(1+c)n}$, with the same advantage — folklore.
