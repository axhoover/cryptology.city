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

[[co-nondeterministic-polynomial-time|coNP]] is contained in [[polynomial-space|PSPACE]].

## Statement

$\classcoNP \subseteq \classPSPACE$: $\classNP \subseteq \classPSPACE$ by enumerating all candidate certificates in reused space, and $\classPSPACE$ is closed under complement — folklore.

## Notes

`class: free`: Proven complexity-class containment; per repo convention `class: free`.
