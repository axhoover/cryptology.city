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

## Statement

$\classBPP \subseteq \classAM$: every [[bounded-error-probabilistic-polynomial-time|BPP]] language has an [[arthur-merlin|Arthur–Merlin]] proof system — folklore.

## Sketch

Arthur ignores Merlin's message and runs the BPP decider; completeness $2/3$ and soundness error $1/3$ are then exactly the BPP acceptance conditions.
