---
type: reduction
status: draft
title: "Module LWE (degree 1) ⇔ LWE"
aliases: []
id: red-module-lwe-to-lwe-ls15
kind: equivalence
hypotheses: [module-lwe-rank-n]
conclusion: lwe
class: fully-black-box
model: standard
source:
  - "[[LS15 - Worst-case to average-case reductions for module lattices|LS15]]"
security-loss: ""
---

# Module LWE (degree 1) ⇔ LWE

[[learning-with-errors#degree-1-module-lwe|Module LWE]] over ring degree 1 is equivalent to [[learning-with-errors|LWE]].

## Statement

[[learning-with-errors#degree-1-module-lwe|Module LWE]] over the degree-1 ring $R = \ZZ$ (so $R_q = \ZZ_q$) at module rank $n$ is [[learning-with-errors|LWE]] in dimension $n$: $\mathbf{A} \in \ZZ_q^{m \times n}$ and $\mathbf{s} \in \ZZ_q^n$, so the sample distributions, hence the problems, coincide — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]]. Rank $n$ over a degree-$n$ ring does not recover LWE: the module has $\ZZ_q$-dimension $n^2$, and $\mathbf{A}$ has structured $n \times n$ blocks (negacyclic for $f = x^n + 1$).

## Sketch

A degree-1 Module LWE sample $(\mathbf{A}, \mathbf{A}\mathbf{s} + \mathbf{e})$ over $\ZZ_q$ is an LWE sample; the identity map is a reduction in both directions.

## Notes

`class: fully-black-box`: Both directions are the identity map, so instances and adversaries pass through unchanged — one fixed construction and one fixed reduction, each using its input only as an oracle.
