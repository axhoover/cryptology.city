---
type: reduction
status: draft
title: "P ⊆ NP"
aliases: []
id: red-p-to-np
kind: inclusion
hypotheses: [p]
conclusion: np
class: free
model: standard
source: folklore
security-loss: ""
---

# P ⊆ NP

[[polynomial-time|P]] is contained in [[nondeterministic-polynomial-time|NP]].

## Statement

[[polynomial-time|P]] $\subseteq$ [[nondeterministic-polynomial-time|NP]]: a polynomial-time decider is a polynomial-time verifier that ignores its certificate (a nondeterministic machine that makes no nondeterministic choices) — folklore.

## Notes

`class: free`: Unconditional containment between complexity classes; the reduction-class axis does not apply.
