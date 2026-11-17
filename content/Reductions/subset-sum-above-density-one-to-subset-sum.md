---
type: reduction
status: draft
title: Subset sum above density one ⇒ Subset sum
aliases: []
id: red-subset-sum-above-density-one-to-subset-sum
kind: implication
hypotheses: [subset-sum-above-density-one]
conclusion: subset-sum
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the instance distribution, and the reduction forwards any solver unchanged."
---

# Subset sum above density one ⇒ Subset sum

## Statement

If [[subset-sum#subset-sum-above-density-one|subset sum is hard above density one]] for $\ell(n) < n$, then [[subset-sum|subset sum]] is hard for $(n, M)$ with $M = 2^{\ell(n)}$, with the same advantage — folklore.
