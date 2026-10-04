---
type: reduction
status: draft
title: "P ⊆ BPP"
aliases: []
id: red-p-to-bpp
kind: inclusion
hypotheses: [p]
conclusion: bpp
class: free
model: standard
source: folklore
security-loss: ""
---

# P ⊆ BPP

## Statement

[[polynomial-time|P]] $\subseteq$ [[bounded-error-probabilistic-polynomial-time|BPP]] — folklore.

## Sketch

A deterministic polynomial-time machine is a probabilistic polynomial-time machine that ignores its random tape and errs with probability $0$.
