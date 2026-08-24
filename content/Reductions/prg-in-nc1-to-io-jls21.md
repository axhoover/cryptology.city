---
type: reduction
status: stub
title: "PRG in NC1 ⇒ iO"
aliases: []
id: red-prg-in-nc1-to-io-jls21
kind: implication
hypotheses: [low-complexity-prg-nc1]
conclusion: io
class: unstated
model: standard
source:
  - "[[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]]"
security-loss: ""
---

# PRG in NC1 ⇒ iO

[[low-complexity-prg|PRG in NC1]] implies [[indistinguishability-obfuscation|iO]].

## Statement

Migrated verbatim from [[alternating-moduli]] § Known Results:

> - Low-complexity PRG in $\mathrm{NC}^1$ is required by the iO construction from well-founded assumptions — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Phrased as is required by — a necessary-ingredient claim, not a reduction; direction is only implicit.
- JLS21 actual hypothesis set is conjunctive (SXDH, LPN over large fields, and a PRG in NC^0); the bullet names only one ingredient, so conjunctive is under-recorded here.
- Says NC^1 while JLS21 uses a PRG in NC^0 — suspected imprecision.
- low-complexity-prg-nc1 has no page.
