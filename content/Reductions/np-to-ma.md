---
type: reduction
status: draft
title: "NP ⊆ MA"
aliases: []
id: red-np-to-ma
kind: inclusion
hypotheses: [np]
conclusion: ma
class: free
model: standard
source: folklore
security-loss: ""
---

# NP ⊆ MA

[[nondeterministic-polynomial-time|NP]] is contained in [[merlin-arthur|MA]].

## Statement

$\classNP \subseteq \classMA$: every language in [[nondeterministic-polynomial-time|NP]] has a [[merlin-arthur|Merlin–Arthur]] proof in which Merlin sends an NP witness and Arthur verifies it deterministically — folklore.

## Sketch

Completeness and soundness are those of the NP verifier, hence perfect.

## Notes

`class: free`: an unconditional containment between complexity classes; the reduction-class axis does not apply.
