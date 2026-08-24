---
type: reduction
status: stub
title: "NP ⊆ PSPACE"
aliases: []
id: red-np-to-pspace
kind: inclusion
hypotheses: [np]
conclusion: pspace
class: free
model: standard
source: folklore
security-loss: ""
---

# NP ⊆ PSPACE

[[nondeterministic-polynomial-time|NP]] is contained in [[polynomial-space|PSPACE]].

## Statement

Migrated verbatim from [[exponential-time]] § Known relationships:

> - $\classP \subseteq \classNP \subseteq \classPSPACE \subseteq \classEXP$.

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

- Uncited and unlabelled folklore.
