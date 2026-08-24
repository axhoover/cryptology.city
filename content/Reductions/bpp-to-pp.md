---
type: reduction
status: stub
title: "BPP ⊆ PP"
aliases: []
id: red-bpp-to-pp
kind: inclusion
hypotheses: [bpp]
conclusion: pp
class: free
model: standard
source: folklore
security-loss: ""
---

# BPP ⊆ PP

[[bounded-error-probabilistic-polynomial-time|BPP]] is contained in [[probabilistic-polynomial-time|PP]].

## Statement

Migrated verbatim from [[probabilistic-polynomial-time]] § Known relationships:

> - $\classBPP \subseteq \classPP \subseteq \classPSPACE$: BPP has a constant gap (and thus sits inside PP), and PP's computation can be simulated in polynomial space.

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

- Uncited and not labelled '- standard' or '- folklore' as the house style requires.
