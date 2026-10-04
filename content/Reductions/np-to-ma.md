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

## Statement

$\classNP \subseteq \classMA$: every language in [[nondeterministic-polynomial-time|NP]] has a [[merlin-arthur|Merlin–Arthur]] proof system with perfect completeness and perfect soundness — folklore.

## Sketch

Merlin sends an $\classNP$ witness and Arthur, ignoring his coins, checks it with the deterministic $\classNP$ verifier, so completeness and soundness are those of that verifier.
