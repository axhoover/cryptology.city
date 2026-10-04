---
type: reduction
status: draft
title: "NP ⊆ AM"
aliases: []
id: red-np-to-am-gs86
kind: inclusion
hypotheses: [np]
conclusion: am
class: free
model: standard
source: folklore
security-loss: ""
---

# NP ⊆ AM

## Statement

$\classNP \subseteq \classAM$: every language in [[nondeterministic-polynomial-time|NP]] has an [[arthur-merlin|Arthur–Merlin]] proof system with perfect completeness and perfect soundness — folklore.

## Sketch

Arthur's message is ignored, Merlin sends an $\classNP$ witness, and Arthur checks it with the deterministic $\classNP$ verifier, so completeness and soundness are those of that verifier.
