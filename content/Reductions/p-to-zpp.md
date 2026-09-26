---
type: reduction
status: draft
title: "P ⊆ ZPP"
aliases: []
id: red-p-to-zpp
kind: inclusion
hypotheses: [p]
conclusion: zpp
class: free
model: standard
source: folklore
security-loss: ""
---

# P ⊆ ZPP

[[polynomial-time|P]] is contained in [[zero-error-probabilistic-polynomial-time|ZPP]].

## Statement

[[polynomial-time|P]] $\subseteq$ [[zero-error-probabilistic-polynomial-time|ZPP]]: a deterministic polynomial-time machine is a Las Vegas machine that never outputs "?" and whose expected running time equals its worst-case polynomial running time — folklore.

## Notes

`class: free`: Unconditional containment between complexity classes; the reduction-class axis does not apply.
