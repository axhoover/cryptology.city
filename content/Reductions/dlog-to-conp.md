---
type: reduction
status: stub
title: "DLOG ⊆ coNP"
aliases: []
id: red-dlog-to-conp
kind: inclusion
hypotheses: [dlog]
conclusion: conp
class: free
model: standard
source: folklore
security-loss: ""
---

# DLOG ⊆ coNP

[[discrete-logarithm|DLOG]] is contained in [[co-nondeterministic-polynomial-time|coNP]].

## Statement

Migrated verbatim from [[co-nondeterministic-polynomial-time]] § Known relationships:

> - Integer factorization and discrete logarithm are both in $\classNP \cap \classcoNP$: there are short certificates for both "yes" and "no" answers. This is one reason these problems are considered unlikely to be NP-complete — an NP-complete problem in coNP would imply $\classNP = \classcoNP$.

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

- Same unconditional-statement imprecision as sub-edge 2.
- Not wikilinked.
- Uncited.
