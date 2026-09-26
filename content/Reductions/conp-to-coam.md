---
type: reduction
status: draft
title: "coNP ⊆ coAM"
aliases: []
id: red-conp-to-coam
kind: inclusion
hypotheses: [conp]
conclusion: coam
class: free
model: standard
source: folklore
security-loss: ""
---

# coNP ⊆ coAM

[[co-nondeterministic-polynomial-time|coNP]] is contained in [[co-arthur-merlin|coAM]].

## Statement

$\classcoNP \subseteq \classcoAM$: $\classNP \subseteq \classAM$ via the [[arthur-merlin|AM]] protocol in which Arthur ignores his coins and accepts iff Merlin's message is an $\classNP$ witness, and complementing both sides gives the claim — folklore.

## Notes

`class: free`: Proven complexity-class containment; per repo convention `class: free`.
