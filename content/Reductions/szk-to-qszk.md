---
type: reduction
status: stub
title: "SZK ⊆ QSZK"
aliases: []
id: red-szk-to-qszk
kind: inclusion
hypotheses: [szk]
conclusion: qszk
class: free
model: quantum
source: folklore
security-loss: ""
---

# SZK ⊆ QSZK

[[statistical-zero-knowledge|SZK]] is contained in [[quantum-statistical-zero-knowledge|QSZK]].

## Statement

Migrated verbatim from [[quantum-statistical-zero-knowledge]] § Known relationships:

> - $\classSZK \subseteq \classQSZK$: any classical SZK protocol is a special case of a quantum one.

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

- No citation.
- The one-line justification glosses over the nontrivial point that a classical protocol must remain zero-knowledge against a QUANTUM verifier for the inclusion to hold (quantum rewinding); 'special case' understates it. Possible imprecision — reported, not corrected.
