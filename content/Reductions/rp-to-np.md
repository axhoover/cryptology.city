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

[[randomized-polynomial-time|RP]] is contained in [[nondeterministic-polynomial-time|NP]].

## Statement

$\classRP \subseteq \classNP$: for $x \in L$ at least half of the machine's polynomial-length random strings accept, and any accepting one is a certificate that a deterministic verifier checks by running the machine on it; for $x \notin L$ none accepts — folklore.

## Notes

`class: free`: A containment between complexity classes, proved by any argument; the reduction-class axis does not discriminate. Matches the sibling complexity-inclusion pages.
