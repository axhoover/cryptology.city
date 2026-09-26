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

[[randomized-polynomial-time|RP]] is contained in [[bounded-error-probabilistic-polynomial-time|BPP]].

## Statement

$\classRP \subseteq \classBPP$: running an $\classRP$ machine twice independently and accepting if either run accepts raises the acceptance probability on yes-instances from at least $1/2$ to at least $3/4 \ge 2/3$ and leaves it at $0$ on no-instances — folklore.

## Notes

`class: free`: A containment between complexity classes, proved by any argument; the reduction-class axis does not discriminate. Matches the sibling pages [[p-to-bpp]], [[zpp-to-rp]] and [[rp-to-np]].
