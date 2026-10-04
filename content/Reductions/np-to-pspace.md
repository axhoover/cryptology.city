---
type: reduction
status: draft
title: "NP ⊆ PSPACE"
aliases: []
id: red-np-to-pspace
kind: inclusion
hypotheses: [np]
conclusion: pspace
class: free
model: standard
source: folklore
security-loss: ""
---

# NP ⊆ PSPACE

## Statement

[[nondeterministic-polynomial-time|NP]] $\subseteq$ [[polynomial-space|PSPACE]] — folklore.

## Sketch

Enumerate all candidate certificates, reusing one polynomial-size tape to run the $\classNP$ verifier on each; accept iff some candidate is accepted.
