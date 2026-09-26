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

[[nondeterministic-polynomial-time|NP]] is contained in [[arthur-merlin|AM]].

## Statement

$\classNP \subseteq \classAM$: every language in [[nondeterministic-polynomial-time|NP]] has an [[arthur-merlin|Arthur–Merlin]] proof in which Arthur's message is ignored, Merlin sends an NP witness, and Arthur verifies it deterministically — folklore.

## Sketch

Completeness and soundness are those of the NP verifier, hence perfect.

## Notes

`class: free`: an unconditional containment between complexity classes; the reduction-class axis does not apply.
