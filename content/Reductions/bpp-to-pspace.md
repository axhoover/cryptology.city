---
type: reduction
status: draft
title: "BPP ⊆ PSPACE"
aliases: []
id: red-bpp-to-pspace
kind: inclusion
hypotheses: [bpp]
conclusion: pspace
class: free
model: standard
source: folklore
security-loss: ""
---

# BPP ⊆ PSPACE

## Statement

[[bounded-error-probabilistic-polynomial-time|BPP]] $\subseteq$ [[polynomial-space|PSPACE]] — folklore.

## Sketch

Run the $\classBPP$ machine on each of its $2^{\poly(n)}$ random strings in turn, reusing space across runs and keeping a $\poly(n)$-bit count of accepting runs; accept iff a majority accept.
