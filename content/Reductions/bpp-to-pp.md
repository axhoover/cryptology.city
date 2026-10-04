---
type: reduction
status: draft
title: "BPP ⊆ PP"
aliases: []
id: red-bpp-to-pp
kind: inclusion
hypotheses: [bpp]
conclusion: pp
class: free
model: standard
source: folklore
security-loss: ""
---

# BPP ⊆ PP

## Statement

[[bounded-error-probabilistic-polynomial-time|BPP]] $\subseteq$ [[probabilistic-polynomial-time|PP]]: a $\classBPP$ machine accepts yes-instances with probability at least $2/3$ and no-instances with probability at most $1/3$, so it meets the strict-majority criterion of $\classPP$ as is — folklore.
