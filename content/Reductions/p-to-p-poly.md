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

[[polynomial-time|P]] is contained in [[p-poly|P/poly]].

## Statement

[[polynomial-time|P]] $\subseteq$ [[p-poly|P/poly]]: the tableau simulation turns a Turing machine running in time $t(n)$ into a circuit of size $O(t(n)^2)$ for each input length, so a polynomial-time machine yields a polynomial-size circuit family; in the advice formulation, empty advice suffices — folklore.

## Notes

`class: free`: Unconditional containment between complexity classes; the reduction-class axis does not apply.
