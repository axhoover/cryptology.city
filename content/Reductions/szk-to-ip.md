---
type: reduction
status: stub
title: "SZK ⊆ IP"
aliases: []
id: red-szk-to-ip
kind: inclusion
hypotheses: [szk]
conclusion: ip
class: free
model: standard
source: folklore
security-loss: ""
---

# SZK ⊆ IP

[[statistical-zero-knowledge|SZK]] is contained in [[interactive-proof-systems|IP]].

## Statement

Migrated verbatim from [[statistical-zero-knowledge]] § Statistical zero-knowledge:

> The class of decision problems for which a "yes" answer can be verified by a _statistical zero-knowledge proof protocol_. In such an interactive proof (see [[interactive-proof-systems|IP]]), we have a probabilistic polynomial-time verifier, and a prover who has unbounded computational resources.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

`class: free` because a containment between complexity classes is proved
by any argument at all; the reduction-class axis does not discriminate
here, and `unstated` would wrongly suggest the information is missing.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Definitional: SZK ⊆ IP is implied by 'in such an interactive proof' but never stated as a relation. Recorded at low confidence so the edge is not lost.
- No citation.
