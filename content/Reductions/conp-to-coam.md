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

## Statement

[[co-nondeterministic-polynomial-time|coNP]] $\subseteq$ [[co-arthur-merlin|coAM]] — folklore.

## Sketch

$\classNP \subseteq \classAM$ via the [[arthur-merlin|AM]] protocol in which Arthur ignores his coins and accepts iff Merlin's message is an $\classNP$ witness ([[np-to-am-gs86|NP ⊆ AM]]); complementing both sides gives the claim.
