---
type: reduction
status: draft
title: "NP ⊆ AM"
aliases: []
id: red-np-to-am-gs86
kind: inclusion
hypotheses: [np]
conclusion: am
class: free
model: standard
source:
  - "[[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]]"
security-loss: ""
---

# NP ⊆ AM

[[nondeterministic-polynomial-time|NP]] is contained in [[arthur-merlin|AM]].

## Statement

Migrated verbatim from [[co-arthur-merlin]] § Known relationships:

> - $\classcoNP \subseteq \classcoAM$, since $\classNP \subseteq \classAM$ (by [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]]) and taking complements.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

`class: free` because a containment between complexity classes is proved
by any argument at all; the reduction-class axis does not discriminate
here, and `unstated` would wrongly suggest the information is missing.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- CITATION LOOKS WRONG (recorded, not fixed): NP inside AM is immediate from the definitions; GS86 is the private-coin/public-coin equivalence and is not the source of this inclusion.
