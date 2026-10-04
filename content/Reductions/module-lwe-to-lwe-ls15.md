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
rationale:
  class: "Both directions are the identity map on instances, so each reduction runs the adversary unchanged as an oracle."
---

# Module LWE (degree 1) ⇔ LWE

## Statement

[[learning-with-errors#degree-1-module-lwe|Module LWE]] over the degree-1 ring $R = \ZZ$ at module rank $n$ is [[learning-with-errors|LWE]] in dimension $n$ with the same modulus, error distribution and number of samples, so each is hard if and only if the other is — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]].

## Sketch

With $R_q = \ZZ_q$, the Module LWE sample $(\mathbf{A}, \mathbf{A}\mathbf{s} + \mathbf{e})$ has $\mathbf{A} \in \ZZ_q^{m \times n}$ and $\mathbf{s} \in \ZZ_q^n$, so it is an LWE sample; the identity map is a reduction in both directions.

## Notes

- Rank $n$ over a degree-$n$ ring does not recover LWE: the module has $\ZZ_q$-dimension $n^2$, and $\mathbf{A}$ has structured $n \times n$ blocks (negacyclic for $f = x^n + 1$) — folklore.
