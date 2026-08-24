---
type: reduction
status: stub
title: "Ring-LPN ⇒ MAC"
aliases: []
id: red-ring-lpn-to-mac
kind: implication
hypotheses: [ring-lpn]
conclusion: mac
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Ring-LPN ⇒ MAC

[[learning-parity-with-noise#ring-lpn|Ring-LPN]] implies [[message-authentication-code|MAC]].

## Statement

Migrated verbatim from [[learning-parity-with-noise]] § Ring-LPN:

> Ring-LPN underlies practical authentication protocols (e.g., Lapin) and efficient pseudorandom correlation generator constructions.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'underlies' is not a reduction claim; the sentence asserts a design relationship, not an implication.
- Lapin is an interactive two-message authentication protocol, not a MAC, so message-authentication-code is the wrong conclusion node.
- Uncited (HKL+12 / Lapin) and not marked folklore.
- ring-lpn has no page of its own; it is a variation section inside learning-parity-with-noise.
- Two conclusions bundled (authentication protocols such as Lapin, and PCG constructions).
- No citation (Lapin / HKLPT12 missing).
- underlies is weaker than a reduction claim.
- Lapin is a two-message authentication protocol; message-authentication-code is only an approximate identifier and pseudorandom-correlation-generator has no page.
