---
type: reduction
status: stub
title: "NP = coNP"
aliases: []
id: red-np-to-conp
kind: equivalence
hypotheses: [np]
conclusion: conp
class: free
model: standard
source: folklore
security-loss: ""
---

# NP = coNP

[[nondeterministic-polynomial-time|NP]] is equal to [[co-nondeterministic-polynomial-time|coNP]].

## Statement

Migrated verbatim from [[co-nondeterministic-polynomial-time]] § Co-nondeterministic polynomial-time:

> The complement class of [[nondeterministic-polynomial-time|NP]]: a decision problem is in coNP if its complement (swapping "yes" and "no" answers) is in NP. Equivalently, coNP is the class of problems for which a "no" answer can be verified in polynomial time given an appropriate certificate.

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

- Definitional (complementation), not a theorem; wants a distinct 'complement-of' edge type in the target model.
