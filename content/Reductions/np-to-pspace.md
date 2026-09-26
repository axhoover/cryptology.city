---
type: reduction
status: draft
title: "NP ⊆ PSPACE"
aliases: []
id: red-np-to-pspace
kind: inclusion
hypotheses: [np]
conclusion: pspace
class: free
model: standard
source: folklore
security-loss: ""
---

# NP ⊆ PSPACE

[[nondeterministic-polynomial-time|NP]] is contained in [[polynomial-space|PSPACE]].

## Statement

$\classNP \subseteq \classPSPACE$: every language in [[nondeterministic-polynomial-time|NP]] is decidable in [[polynomial-space|polynomial space]] — folklore.

## Sketch

Enumerate all candidate certificates, reusing one polynomial-size tape to run the NP verifier on each; accept iff some candidate is accepted.

## Notes

`class: free`: an unconditional containment between complexity classes; the reduction-class axis does not apply.
