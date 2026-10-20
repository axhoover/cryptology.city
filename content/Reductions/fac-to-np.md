---
type: reduction
status: draft
title: FAC ∈ NP
aliases: []
id: red-fac-to-np
kind: inclusion
hypotheses: [fac]
conclusion: np
class: free
model: standard
source: folklore
security-loss: ""
---

# FAC ∈ NP

## Statement

The decision version of [[factoring|factoring]], $\{(N, k) : N \text{ has a nontrivial divisor } d \le k\}$, is in [[nondeterministic-polynomial-time|NP]]: such a divisor is a witness checked by one division — folklore. A search algorithm for factors follows from a decision algorithm by binary search on $k$ — folklore.

## Notes

- The complement is in $\classNP$ as well: [[fac-to-conp-pra75|FAC ∈ coNP]] — [[Pra75 - Every Prime Has a Succinct Certificate|Pra75]].
