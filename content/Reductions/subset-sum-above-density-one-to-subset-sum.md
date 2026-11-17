---
type: reduction
status: draft
title: Subset sum at constant density above one ⇒ Subset sum
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

# Subset sum at constant density above one ⇒ Subset sum

## Statement

If [[subset-sum#subset-sum-at-constant-density-above-one|subset sum is hard at constant density above one]] for $\ell(n) = (1-c)n$ and a constant $c \in (0, 1)$, then [[subset-sum|subset sum]] is hard for $(n, M)$ with $M = 2^{\ell(n)}$, with the same advantage — folklore.
