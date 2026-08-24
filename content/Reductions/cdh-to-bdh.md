---
type: reduction
status: stub
title: "CDH ⇒ BDH"
aliases: []
id: red-cdh-to-bdh
kind: implication
hypotheses: [cdh]
conclusion: bdh
class: unstated
model: generic-group
source: folklore
security-loss: ""
---

# CDH ⇒ BDH

[[computational-diffie-hellman|CDH]] implies [[bilinear-map-assumptions|BDH]].

## Statement

Migrated verbatim from [[bilinear-map-assumptions]] § Known Results:

> - BDH is implied by [[computational-diffie-hellman|CDH]] in the generic group model, but no standard-model reduction is known

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation.
- SUSPECTED ERROR: hardness of BDH in the generic (bilinear) group model is an unconditional lower bound, not a reduction from CDH.
- Direction looks reversed: BDH hardness is normally seen to imply CDH hardness, since an algorithm for CDH in the pairing group breaks BDH.
