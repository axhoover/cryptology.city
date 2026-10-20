---
type: reduction
status: draft
title: DLOG ∈ SZK
aliases: []
id: red-dlog-to-szk-gk93
kind: inclusion
hypotheses: [dlog]
conclusion: szk
class: free
model: standard
source:
  - "[[GK93 - A Perfect Zero-Knowledge Proof System for a Problem Equivalent to the Discrete Logarithm|GK93]]"
security-loss: ""
---

# DLOG ∈ SZK

## Statement

A decision problem equivalent to the [[discrete-logarithm|discrete logarithm]] under polynomial-time reductions has a perfect zero-knowledge proof, so it lies in [[statistical-zero-knowledge|SZK]] — [[GK93 - A Perfect Zero-Knowledge Proof System for a Problem Equivalent to the Discrete Logarithm|GK93]].

## Notes

- The discrete logarithm is also in $\classNP \cap \classcoNP$ ([[dlog-to-np|DLOG ∈ NP]], [[dlog-to-conp|DLOG ∈ coNP]]) and in [[bqp-to-dlog-shor97|BQP]] — folklore, [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]].
