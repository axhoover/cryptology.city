---
type: reduction
status: stub
title: "P ⊆ ZPP"
aliases: []
id: red-p-to-zpp
kind: inclusion
hypotheses: [p]
conclusion: zpp
class: free
model: standard
source: folklore
security-loss: ""
---

# P ⊆ ZPP

[[polynomial-time|P]] is contained in [[zero-error-probabilistic-polynomial-time|ZPP]].

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

- Uncited and not marked '- standard' or '- folklore', which the house style requires for uncited folklore.
- zero-error-probabilistic-polynomial-time exists as a page but appears only as the \classZPP macro, with no wikilink.
- Uncited and unjustified (textbook, no '— standard' label).
