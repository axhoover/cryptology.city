---
type: reduction
status: draft
title: "RP ⊆ NP"
aliases: []
id: red-rp-to-np
kind: inclusion
hypotheses: [rp]
conclusion: np
class: free
model: standard
source: folklore
security-loss: ""
---

# RP ⊆ NP

## Statement

[[randomized-polynomial-time|RP]] $\subseteq$ [[nondeterministic-polynomial-time|NP]]: for $L \in \classRP$ and $x \in L$, at least half of the $\classRP$ machine's polynomial-length random strings accept, and any accepting one is a certificate that a deterministic verifier checks by running the machine on it; for $x \notin L$ none accepts — folklore.
