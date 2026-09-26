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

[[bounded-error-probabilistic-polynomial-time|BPP]] is contained in [[probabilistic-polynomial-time|PP]].

## Statement

A [[bounded-error-probabilistic-polynomial-time|BPP]] machine accepts yes-instances with probability at least $2/3$ and no-instances with probability at most $1/3$, so it satisfies the strict-majority criterion of [[probabilistic-polynomial-time|PP]] as is: $\classBPP \subseteq \classPP$ — folklore.

## Notes

`class: free`: Proven complexity-class containment; per repo convention `class: free`.
