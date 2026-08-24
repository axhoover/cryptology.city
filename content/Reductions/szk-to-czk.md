---
type: reduction
status: stub
title: "SZK ⊆ CZK"
aliases: []
id: red-szk-to-czk
kind: inclusion
hypotheses: [szk]
conclusion: czk
class: free
model: standard
source: folklore
security-loss: ""
---

# SZK ⊆ CZK

[[statistical-zero-knowledge|SZK]] is contained in [[computational-zero-knowledge|CZK]].

## Statement

Migrated verbatim from [[computational-zero-knowledge]] § Known relationships:

> - Contains [[statistical-zero-knowledge|SZK]]

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

- No citation and no folklore/standard marker (it is immediate from the definitions).
- Subject of the sentence is elided ('Contains SZK'), so direction must be inferred from page context.
