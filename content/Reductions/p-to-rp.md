---
type: reduction
status: draft
title: "P ⊆ RP"
aliases: []
id: red-p-to-rp
kind: inclusion
hypotheses: [p]
conclusion: rp
class: free
model: standard
source: folklore
security-loss: ""
---

# P ⊆ RP

## Statement

[[polynomial-time|P]] $\subseteq$ [[randomized-polynomial-time|RP]] — folklore.

## Sketch

A deterministic polynomial-time machine, viewed as a probabilistic machine that ignores its random tape, accepts every yes-instance with probability $1$ and every no-instance with probability $0$.
