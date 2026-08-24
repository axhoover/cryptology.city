---
type: reduction
status: stub
title: "NIZK ⇒ COM"
aliases: []
id: red-nizk-to-com
kind: implication
hypotheses: [nizk]
conclusion: com
class: unstated
model: standard
source: folklore
security-loss: ""
---

# NIZK ⇒ COM

[[non-interactive-zero-knowledge|NIZK]] implies [[commitment-scheme|COM]].

## Statement

Migrated verbatim from [[non-interactive-zero-knowledge]] § Other results:

> - NIZK → [[commitment-scheme|COM]]: every NIZK scheme gives a non-interactive commitment

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation and no folklore label.
- SUSPECT MATH: 'every NIZK scheme gives a non-interactive commitment' is doubtful as stated. A commitment needs hiding and binding; obtaining them from a NIZK generally requires the NIZK's CRS plus an underlying hard language / one-way function, and NIZK for a trivial language gives nothing. Report only; do not fix.
- Also inconsistent with the CRS model default: a non-interactive commitment in the CRS model is a weaker object than a plain-model one, and the bullet does not say which.
