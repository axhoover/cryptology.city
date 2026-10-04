---
type: reduction
status: draft
title: "PSPACE ⊆ EXP"
aliases: []
id: red-pspace-to-exp
kind: inclusion
hypotheses: [pspace]
conclusion: exp
class: free
model: standard
source: folklore
security-loss: ""
---

# PSPACE ⊆ EXP

## Statement

[[polynomial-space|PSPACE]] $\subseteq$ [[exponential-time|EXP]] — folklore.

## Sketch

A deterministic machine running in space $p(n) = \poly(n)$ has at most $2^{O(p(n))}$ configurations, so on any input it halts within $2^{O(p(n))}$ steps or never; simulating it for that many steps decides its language in time $2^{\poly(n)}$.
