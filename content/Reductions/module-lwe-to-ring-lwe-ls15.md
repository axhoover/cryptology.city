---
type: reduction
status: draft
title: "Module LWE ⇔ Ring LWE"
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
---

# Module LWE ⇔ Ring LWE

[[learning-with-errors#module-lwe|Module LWE]] at module rank 1 is equivalent to [[learning-with-errors#ring-lwe|Ring LWE]].

## Statement

[[learning-with-errors#module-lwe|Module LWE]] at module rank $k = 1$ is [[learning-with-errors#ring-lwe|Ring LWE]]: a rank-1 module over $R_q$ is $R_q$ itself, so the sample distributions, hence the problems, coincide — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]].

## Sketch

A rank-1 Module LWE sample $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle + e)$ with $\mathbf{a}, \mathbf{s} \in R_q$ is a Ring LWE sample $(a, a \cdot s + e)$; the identity map is a reduction in both directions.

## Notes

`class: fully-black-box`: Both directions are the identity map, so instances and adversaries pass through unchanged — one fixed construction and one fixed reduction, each using its input only as an oracle.
