---
type: reduction
status: draft
title: "P ⊆ coNP"
aliases: []
id: red-p-to-conp
kind: inclusion
hypotheses: [p]
conclusion: conp
class: free
model: standard
source: folklore
security-loss: ""
---

# P ⊆ coNP

## Statement

[[polynomial-time|P]] $\subseteq$ [[co-nondeterministic-polynomial-time|coNP]] — folklore.

## Sketch

$\classP$ is closed under complement, so for $L \in \classP$ the complement $\bar{L}$ lies in $\classP \subseteq \classNP$, placing $L$ in $\classcoNP$.
