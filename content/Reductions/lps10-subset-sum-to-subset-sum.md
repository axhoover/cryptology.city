---
type: reduction
status: draft
title: Subset sum at the LPS10 parameters ⇒ Subset sum
aliases: []
id: red-lps10-subset-sum-to-subset-sum
kind: implication
hypotheses: [lps10-subset-sum]
conclusion: subset-sum
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the instance distribution, and the reduction forwards any solver unchanged."
---

# Subset sum at the LPS10 parameters ⇒ Subset sum

## Statement

If [[subset-sum#subset-sum-at-the-lps10-parameters|subset sum is hard at the LPS10 parameters]], then [[subset-sum|subset sum]] is hard for $(n, M)$ with $M = M(n)$ the LPS10 modulus, with the same advantage — folklore.
