---
type: reduction
status: draft
title: "BPP ⊆ PSPACE"
aliases: []
id: red-bpp-to-pspace
kind: inclusion
hypotheses: [bpp]
conclusion: pspace
class: free
model: standard
source: folklore
security-loss: ""
---

# BPP ⊆ PSPACE

[[bounded-error-probabilistic-polynomial-time|BPP]] is contained in [[polynomial-space|PSPACE]].

## Statement

A [[polynomial-space|PSPACE]] machine decides any [[bounded-error-probabilistic-polynomial-time|BPP]] language by enumerating all polynomially long random strings, reusing space across runs, and accepting on the majority outcome: $\classBPP \subseteq \classPSPACE$ — folklore.

## Sketch

Only a $\poly(n)$-bit counter of accepting runs persists across the $2^{\poly(n)}$ runs.

## Notes

`class: free`: Proven complexity-class containment; per repo convention `class: free`.
