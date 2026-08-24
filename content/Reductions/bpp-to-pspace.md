---
type: reduction
status: stub
title: "BPP ⊆ PSPACE"
aliases: []
id: red-bpp-to-pspace
kind: inclusion
hypotheses: [bpp]
conclusion: pspace
class: free
model: standard
source: folklore
security-loss: ""
---

# BPP ⊆ PSPACE

[[bounded-error-probabilistic-polynomial-time|BPP]] is contained in [[polynomial-space|PSPACE]].

## Statement

Migrated verbatim from [[bounded-error-probabilistic-polynomial-time]] § Known relationships:

> - $\classBPP \subseteq \classPSPACE$: randomized computation can be simulated deterministically in polynomial space by trying all random strings.

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

- No citation and no folklore/standard marker.
