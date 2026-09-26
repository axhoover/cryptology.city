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

[[polynomial-space|PSPACE]] is contained in [[exponential-time|EXP]].

## Statement

$\classPSPACE \subseteq \classEXP$: a deterministic machine running in space $p(n) = \poly(n)$ has at most $2^{O(p(n))}$ configurations, so on any input it halts within $2^{O(p(n))}$ steps or never; simulating it for that many steps decides its language in time $2^{\poly(n)}$ — folklore.

## Notes

`class: free`: Proven complexity-class containment; the reduction-class axis does not discriminate here (repo convention for containments).
