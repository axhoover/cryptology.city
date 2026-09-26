---
type: reduction
status: draft
title: "BPP ⊆ AM"
aliases: []
id: red-bpp-to-am-gs86
kind: inclusion
hypotheses: [bpp]
conclusion: am
class: free
model: standard
source: folklore
security-loss: ""
---

# BPP ⊆ AM

[[bounded-error-probabilistic-polynomial-time|BPP]] is contained in [[arthur-merlin|AM]].

## Statement

Every [[bounded-error-probabilistic-polynomial-time|BPP]] language has an [[arthur-merlin|Arthur–Merlin]] protocol in which Arthur ignores Merlin's message and runs the BPP decider, so $\classBPP \subseteq \classAM$ — folklore.

## Sketch

With Merlin's message discarded, completeness $2/3$ and soundness $1/3$ are exactly the BPP acceptance conditions, so the containment is definitional.

## Notes

`class: free`: Proven complexity-class containment; per repo convention the reduction-class axis does not discriminate here.
