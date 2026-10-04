---
type: reduction
status: draft
title: "RP ⊆ BPP"
aliases: []
id: red-rp-to-bpp
kind: inclusion
hypotheses: [rp]
conclusion: bpp
class: free
model: standard
source: folklore
security-loss: ""
---

# RP ⊆ BPP

## Statement

[[randomized-polynomial-time|RP]] $\subseteq$ [[bounded-error-probabilistic-polynomial-time|BPP]] — folklore.

## Sketch

Run the $\classRP$ machine twice on independent coins and accept if either run accepts: the acceptance probability rises from at least $1/2$ to at least $3/4 \ge 2/3$ on yes-instances and stays $0$ on no-instances.
