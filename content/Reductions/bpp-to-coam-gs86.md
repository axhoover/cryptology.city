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

[[bounded-error-probabilistic-polynomial-time|BPP]] is contained in [[co-arthur-merlin|coAM]].

## Statement

[[bounded-error-probabilistic-polynomial-time|BPP]] is closed under complement and $\classBPP \subseteq \classAM$ via the protocol in which Arthur ignores Merlin, so the complement of every BPP language is in $\classAM$: $\classBPP \subseteq \classcoAM$ ([[co-arthur-merlin|coAM]]) — folklore.

## Notes

`class: free`: Proven complexity-class containment; per repo convention `class: free`.
