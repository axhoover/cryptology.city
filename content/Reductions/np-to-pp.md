---
type: reduction
status: stub
title: "NP ⊆ PP"
aliases: []
id: red-np-to-pp
kind: inclusion
hypotheses: [np]
conclusion: pp
class: free
model: standard
source: folklore
security-loss: ""
---

# NP ⊆ PP

[[nondeterministic-polynomial-time|NP]] is contained in [[probabilistic-polynomial-time|PP]].

## Statement

Migrated verbatim from [[probabilistic-polynomial-time]] § Known relationships:

> - $\classNP \subseteq \classPP$: given an NP machine, accept iff strictly more than half the nondeterministic paths lead to accepting, which is a PP criterion.

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

- SUSPECTED MATHEMATICAL ERROR in the proof sketch (the inclusion itself is correct, do not fix): an NP machine on a yes-instance may have as few as one accepting path out of exponentially many, so 'accept iff strictly more than half the nondeterministic paths accept' does not decide the NP language. The standard argument first pads the machine (e.g. add a coin flip that accepts on half the paths) so that yes-instances cross the 1/2 threshold. Reported, not corrected.
- No citation.
