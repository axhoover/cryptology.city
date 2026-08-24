---
type: reduction
status: stub
title: "AM = coAM"
aliases: []
id: red-am-to-coam
kind: equivalence
hypotheses: [am]
conclusion: coam
class: free
model: standard
source: folklore
security-loss: ""
---

# AM = coAM

[[arthur-merlin|AM]] is equal to [[co-arthur-merlin|coAM]].

## Statement

Migrated verbatim from [[co-arthur-merlin]] § Co-Arthur-Merlin:

> The complement class of [[arthur-merlin|AM]]: a problem is in coAM if its complement is in AM. Equivalently, coAM is the class of problems for which a "no" answer has an Arthur-Merlin protocol — Arthur sends a random challenge, Merlin responds, and Arthur can verify "no" answers with high probability.

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

- Definitional (complementation), not a theorem; the migration probably wants a distinct 'complement-of' edge type.
