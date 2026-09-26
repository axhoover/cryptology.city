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

[[polynomial-time|P]] is contained in [[co-nondeterministic-polynomial-time|coNP]].

## Statement

[[polynomial-time|P]] $\subseteq$ [[co-nondeterministic-polynomial-time|coNP]]: P is closed under complement, so for $L \in \classP$ the complement $\bar{L}$ lies in $\classP \subseteq \classNP$, placing $L$ in $\classcoNP$ — folklore.

## Notes

`class: free`: Unconditional containment between complexity classes; the reduction-class axis does not apply.
