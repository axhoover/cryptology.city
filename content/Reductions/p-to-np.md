---
type: reduction
status: stub
title: "P ⊆ NP"
aliases: []
id: red-p-to-np
kind: inclusion
hypotheses: [p]
conclusion: np
class: free
model: standard
source: folklore
security-loss: ""
---

# P ⊆ NP

[[polynomial-time|P]] is contained in [[nondeterministic-polynomial-time|NP]].

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
- Class names appear only as macros with no wikilinks, though both pages exist.
