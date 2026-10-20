---
type: reduction
status: draft
title: GapSVP ∈ NP
aliases: []
id: red-gapsvp-to-np
kind: inclusion
hypotheses: [gapsvp]
conclusion: np
class: free
model: standard
source: folklore
security-loss: ""
---

# GapSVP ∈ NP

## Statement

For every $\gamma \ge 1$, the promise problem $\mathrm{GapSVP}_\gamma$ ([[shortest-vector-problem|GapSVP]]) is in [[nondeterministic-polynomial-time|NP]]: on a yes-instance, a nonzero lattice vector of norm at most $d$ is a witness that the verifier checks by solving a linear system over the integers — folklore.

## Notes

- The complement is in $\classNP$ for $\gamma \ge \sqrt{n}$ ([[gapsvp-to-conp-ar04|GapSVP ∈ coNP]]) — [[AR04 - Lattice Problems in NP intersect coNP|AR04]] — and in $\classAM$ for $\gamma \ge \sqrt{n / \log n}$ ([[gapsvp-to-coam-gg00|GapSVP ∈ coAM]]) — [[GG00 - On the limits of non-approximability of lattice problems|GG00]].
