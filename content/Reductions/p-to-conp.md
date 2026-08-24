---
type: reduction
status: stub
title: "P ⊆ coNP"
aliases: []
id: red-p-to-conp
kind: inclusion
hypotheses: [p]
conclusion: conp
class: free
model: standard
source: folklore
security-loss: ""
---

# P ⊆ coNP

[[polynomial-time|P]] is contained in [[co-nondeterministic-polynomial-time|coNP]].

## Statement

Migrated verbatim from [[co-nondeterministic-polynomial-time]] § Known relationships:

> - $\classP \subseteq \classcoNP$, since P is closed under complement.

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
- P is written only as a macro, not wikilinked to `[[polynomial-time]]`.
