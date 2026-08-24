---
type: reduction
status: stub
title: "coNP ⊆ PSPACE"
aliases: []
id: red-conp-to-pspace
kind: inclusion
hypotheses: [conp]
conclusion: pspace
class: free
model: standard
source: folklore
security-loss: ""
---

# coNP ⊆ PSPACE

[[co-nondeterministic-polynomial-time|coNP]] is contained in [[polynomial-space|PSPACE]].

## Statement

Migrated verbatim from [[co-nondeterministic-polynomial-time]] § Known relationships:

> - $\classcoNP \subseteq \classPSPACE$.

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

- Bare inclusion with no justification, no citation, and no folklore/standard marker.
- PSPACE is not wikilinked to `[[polynomial-space]]`.
