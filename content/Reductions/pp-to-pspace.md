---
type: reduction
status: draft
title: "PP ⊆ PSPACE"
aliases: []
id: red-pp-to-pspace
kind: inclusion
hypotheses: [pp]
conclusion: pspace
class: free
model: standard
source: folklore
security-loss: ""
---

# PP ⊆ PSPACE

## Statement

[[probabilistic-polynomial-time|PP]] $\subseteq$ [[polynomial-space|PSPACE]] — folklore.

## Sketch

Run the $\classPP$ machine on each of its $2^{\poly(n)}$ random strings in turn, reusing space across runs and keeping a $\poly(n)$-bit count of accepting runs; accept iff a strict majority accept.
