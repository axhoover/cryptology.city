---
type: reduction
status: stub
title: "QR ⇒ COM"
aliases: []
id: red-qr-to-com
kind: implication
hypotheses: [qr]
conclusion: com
class: unstated
model: standard
source: folklore
security-loss: ""
---

# QR ⇒ COM

[[quadratic-residuosity|QR]] implies [[commitment-scheme|COM]].

## Statement

Migrated verbatim from [[quadratic-residuosity]] § Known Results:

> - QR → statistically hiding [[commitment-scheme|commitment scheme]] — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Folklore-labelled with "— standard", which CLAUDE.md permits in place of a citation.
- SUSPECTED ERROR (report only): the textbook QR commitment (commit to b as r^2 y^b for y in J_N minus QR_N) is PERFECTLY BINDING and COMPUTATIONALLY HIDING, not statistically hiding. A statistically hiding commitment from QR needs a different construction, so the folklore label may be covering an incorrect claim.
