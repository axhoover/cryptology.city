---
type: reduction
status: draft
title: "Module LWE (rank 1) ⇔ Ring LWE"
aliases: []
id: red-module-lwe-to-ring-lwe-ls15
kind: equivalence
hypotheses: [module-lwe-rank-1]
conclusion: ring-lwe
class: fully-black-box
model: standard
source:
  - "[[LS15 - Worst-case to average-case reductions for module lattices|LS15]]"
security-loss: ""
rationale:
  class: "Both directions are the identity map on instances, so each reduction runs the adversary unchanged as an oracle."
---

# Module LWE (rank 1) ⇔ Ring LWE

## Statement

[[learning-with-errors#rank-1-module-lwe|Module LWE]] at module rank $k = 1$ over $R_q$ is [[learning-with-errors#ring-lwe|Ring LWE]] over $R_q$ with the same error distribution and number of samples, so each is hard if and only if the other is — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]].

## Sketch

A rank-1 module over $R_q$ is $R_q$ itself: at $k = 1$, $\mathbf{A} \in R_q^{m \times 1}$ is a column of ring elements $a_i$ and $\mathbf{s} = s \in R_q$, so $(\mathbf{A}, \mathbf{A}\mathbf{s} + \mathbf{e})$ lists the Ring LWE samples $(a_i, a_i s + e_i)$. The identity map is a reduction in both directions.
