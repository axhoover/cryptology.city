---
type: reduction
status: stub
title: "coNP ⊆ coAM"
aliases: []
id: red-conp-to-coam
kind: inclusion
hypotheses: [conp]
conclusion: coam
class: free
model: standard
source: folklore
security-loss: ""
---

# coNP ⊆ coAM

[[co-nondeterministic-polynomial-time|coNP]] is contained in [[co-arthur-merlin|coAM]].

## Statement

Migrated verbatim from [[co-arthur-merlin]] § Known relationships:

> - $\classcoNP \subseteq \classcoAM$, since $\classNP \subseteq \classAM$ (by [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]]) and taking complements.

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

- UNCITED SUB-EDGE WHILE THE PARENT IS CITED: GS86 sits on the parent but is attached to the NP-in-AM half only.
- CONTRADICTION ACROSS PAGES (recorded, not fixed): co-nondeterministic-polynomial-time.md:20 asserts coNP subset AM, which would collapse the polynomial hierarchy; only one of the two pages can be right.
- 'taking complements' is a meta-derivation step rather than a reduction, and has no representation in the model.
