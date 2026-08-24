---
type: reduction
status: stub
title: "P ⊆ P/poly"
aliases: []
id: red-p-to-p-poly
kind: inclusion
hypotheses: [p]
conclusion: ppoly
class: free
model: standard
source: folklore
security-loss: ""
---

# P ⊆ P/poly

[[polynomial-time|P]] is contained in [[p-poly|P/poly]].

## Statement

Migrated verbatim from [[p-poly]] § Known relationships:

> - $\classP \subseteq \classPpoly$: any uniform polynomial-time algorithm is also a polynomial-size circuit family.

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
