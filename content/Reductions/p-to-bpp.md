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

[[polynomial-time|P]] is contained in [[bounded-error-probabilistic-polynomial-time|BPP]].

## Statement

[[polynomial-time|P]] $\subseteq$ [[bounded-error-probabilistic-polynomial-time|BPP]]: a deterministic polynomial-time machine is a probabilistic polynomial-time machine that ignores its random tape and errs with probability $0$ — folklore.

## Notes

`class: free`: Unconditional containment between complexity classes; the reduction-class axis does not apply.
