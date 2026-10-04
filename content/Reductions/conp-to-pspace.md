---
type: reduction
status: draft
title: "coNP ⊆ PSPACE"
aliases: []
id: red-conp-to-pspace
kind: inclusion
hypotheses: [conp]
conclusion: pspace
class: free
model: standard
source: folklore
security-loss: ""
---

# coNP ⊆ PSPACE

## Statement

[[co-nondeterministic-polynomial-time|coNP]] $\subseteq$ [[polynomial-space|PSPACE]] — folklore.

## Sketch

$\classNP \subseteq \classPSPACE$ by enumerating all candidate certificates in reused space ([[np-to-pspace|NP ⊆ PSPACE]]), and $\classPSPACE$ is closed under complement.
