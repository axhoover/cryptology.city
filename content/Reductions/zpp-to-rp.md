---
type: reduction
status: stub
title: "ZPP ⊆ RP"
aliases: []
id: red-zpp-to-rp
kind: inclusion
hypotheses: [zpp]
conclusion: rp
class: free
model: standard
source: folklore
security-loss: ""
---

# ZPP ⊆ RP

[[zero-error-probabilistic-polynomial-time|ZPP]] is contained in [[randomized-polynomial-time|RP]].

## Statement

Migrated verbatim from [[bounded-error-probabilistic-polynomial-time]] § Known relationships:

> - $\classP \subseteq \classZPP \subseteq \classRP \subseteq \classBPP$: deterministic algorithms are a special case of Las Vegas, which are a special case of one-sided error, which are a special case of two-sided error.

Migrated verbatim from [[zero-error-probabilistic-polynomial-time]] § Known relationships:

> - $\classP \subseteq \classZPP \subseteq \classRP \subseteq \classBPP$.

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
- randomized-polynomial-time exists as a page but appears only as the \classRP macro, with no wikilink.
- Uncited and unjustified.
- Follows immediately from the page's own ZPP = RP intersect coRP identity at line 15, which the bullet does not connect.
