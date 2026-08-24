---
type: reduction
status: stub
title: "P ⊆ RP"
aliases: []
id: red-p-to-rp
kind: inclusion
hypotheses: [p]
conclusion: rp
class: free
model: standard
source: folklore
security-loss: ""
---

# P ⊆ RP

[[polynomial-time|P]] is contained in [[randomized-polynomial-time|RP]].

## Statement

Migrated verbatim from [[randomized-polynomial-time]] § Known relationships:

> - $\classP \subseteq \classRP \subseteq \classBPP$: RP is a "one-sided" restriction of BPP (which allows two-sided error).

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

- The bullet's gloss justifies only the second containment; this one is left unexplained.
- Uncited and unlabelled folklore.
