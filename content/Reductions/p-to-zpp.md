---
type: reduction
status: draft
title: "P ⊆ ZPP"
aliases: []
id: red-p-to-zpp
kind: inclusion
hypotheses: [p]
conclusion: zpp
class: free
model: standard
source: folklore
security-loss: ""
---

# P ⊆ ZPP

## Statement

[[polynomial-time|P]] $\subseteq$ [[zero-error-probabilistic-polynomial-time|ZPP]] — folklore.

## Sketch

A deterministic polynomial-time machine is a zero-error probabilistic machine that ignores its random tape and never outputs $?$; its expected running time is its worst-case polynomial running time.
