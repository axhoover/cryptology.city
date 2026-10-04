---
type: reduction
status: draft
title: "BPP ⊆ coAM"
aliases: []
id: red-bpp-to-coam-gs86
kind: inclusion
hypotheses: [bpp]
conclusion: coam
class: free
model: standard
source: folklore
security-loss: ""
---

# BPP ⊆ coAM

## Statement

[[bounded-error-probabilistic-polynomial-time|BPP]] $\subseteq$ [[co-arthur-merlin|coAM]] — folklore.

## Sketch

$\classBPP$ is closed under complement, and $\classBPP \subseteq \classAM$ by the [[arthur-merlin|Arthur–Merlin]] protocol in which Arthur ignores Merlin's message and runs the BPP decider, so the complement of every BPP language is in $\classAM$.
