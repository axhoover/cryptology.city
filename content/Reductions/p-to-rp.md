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

[[polynomial-time|P]] is contained in [[randomized-polynomial-time|RP]].

## Statement

[[polynomial-time|P]] $\subseteq$ [[randomized-polynomial-time|RP]]: a deterministic polynomial-time machine, viewed as a probabilistic machine that ignores its randomness, accepts every yes-instance with probability $1$ and every no-instance with probability $0$ — folklore.

## Notes

`class: free`: Unconditional containment between complexity classes; the reduction-class axis does not apply.
