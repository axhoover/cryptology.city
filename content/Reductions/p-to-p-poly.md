---
type: reduction
status: draft
title: "P ⊆ P/poly"
aliases: []
id: red-p-to-p-poly
kind: inclusion
hypotheses: [p]
conclusion: ppoly
class: free
model: standard
source: folklore
security-loss: ""
---

# P ⊆ P/poly

## Statement

[[polynomial-time|P]] $\subseteq$ [[p-poly|P/poly]] — folklore.

## Sketch

The tableau simulation turns a Turing machine running in time $t(n)$ into a circuit of size $O(t(n)^2)$ for each input length $n$, so a polynomial-time decider yields a polynomial-size circuit family; in the advice formulation, empty advice suffices.
