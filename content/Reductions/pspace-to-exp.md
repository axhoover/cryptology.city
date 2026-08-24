---
type: reduction
status: stub
title: "PSPACE ⊆ EXP"
aliases: []
id: red-pspace-to-exp
kind: inclusion
hypotheses: [pspace]
conclusion: exp
class: free
model: standard
source: folklore
security-loss: ""
---

# PSPACE ⊆ EXP

[[polynomial-space|PSPACE]] is contained in [[exponential-time|EXP]].

## Statement

Migrated verbatim from [[exponential-time]] § Known relationships:

> - $\classPSPACE \subseteq \classEXP$: anything computable in polynomial space can be simulated in exponential time.

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

- No citation and no folklore/standard marker.
- Duplicated by the second '## Known relationships' section of the same page (line 25).
- Uncited and unlabelled folklore.
- Restates line 19 of the same page, which gives this inclusion with a justification.
- STRUCTURAL BUG on the page: this bullet sits under a SECOND '## Known relationships' heading at line 23 that duplicates the one at line 17.
