---
type: reduction
status: stub
title: "FE ⇒ iO"
aliases: []
id: red-fe-to-io
kind: implication
hypotheses: [functional-encryption]
conclusion: io
class: unstated
model: standard
source: folklore
security-loss: ""
---

# FE ⇒ iO

[[functional-encryption|FE]] implies [[indistinguishability-obfuscation|iO]].

## Statement

Migrated verbatim from [[indistinguishability-obfuscation]] § Other results:

> - iO is implied by functional encryption for $\classPpoly$ (circuits of any polynomial size) in a strong sense — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Labelled '- standard' but this is attributable (AJ15 / BV15 FE-to-iO); the folklore exception is being misused.
- 'in a strong sense' is a hedge that hides the real hypothesis: sub-exponentially secure, compact, public-key FE. Not typeable as written.
- No page for functional encryption.
