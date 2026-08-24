---
type: reduction
status: stub
title: "RP ⊆ NP"
aliases: []
id: red-rp-to-np
kind: inclusion
hypotheses: [rp]
conclusion: np
class: free
model: standard
source: folklore
security-loss: ""
---

# RP ⊆ NP

[[randomized-polynomial-time|RP]] is contained in [[nondeterministic-polynomial-time|NP]].

## Statement

Migrated verbatim from [[randomized-polynomial-time]] § Known relationships:

> - $\classRP \subseteq \classNP$: a polynomial-time machine that accepts on at least half of its random strings provides an NP witness (any accepting random string serves as the certificate).

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

- No citation (folklore but unlabeled).
