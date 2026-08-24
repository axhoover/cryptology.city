---
type: reduction
status: draft
title: "coNP ⊆ AM"
aliases: []
id: red-conp-to-am-gs86
kind: inclusion
hypotheses: [conp]
conclusion: am
class: free
model: standard
source:
  - "[[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]]"
security-loss: ""
---

# coNP ⊆ AM

[[co-nondeterministic-polynomial-time|coNP]] is contained in [[arthur-merlin|AM]].

## Statement

Migrated verbatim from [[co-nondeterministic-polynomial-time]] § Known relationships:

> - $\classcoNP \subseteq \classAM$: this follows from the result of [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]] showing that coNP has Arthur-Merlin protocols.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

`class: free` because a containment between complexity classes is proved
by any argument at all; the reduction-class axis does not discriminate
here, and `unstated` would wrongly suggest the information is missing.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED MATHEMATICAL ERROR (report only): coNP contained in AM is NOT known — it would collapse the polynomial hierarchy to AM (in particular to the second level). GS86 proves the private-coin/public-coin equivalence, not that coNP has AM protocols.
- The claim also contradicts content/Complexity/co-arthur-merlin.md:21, whose collapse argument presumes coNP is NOT known to be in AM, and content/Complexity/co-arthur-merlin.md:20, which only claims coNP in coAM.
- Citation is attached to a statement the cited paper does not make.
