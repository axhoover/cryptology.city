---
type: reduction
status: stub
title: "COM ⇒ Two-party computation (2PC)"
aliases: []
id: red-com-to-two-party-computation-2pc-gmw87
kind: implication
hypotheses: [com]
conclusion: two-party-computation
class: unstated
model: standard
source:
  - "[[GMW87 - How to play ANY mental game|GMW87]]"
security-loss: ""
---

# COM ⇒ Two-party computation (2PC)

[[commitment-scheme|COM]] implies [[secure-multi-party-computation#two-party-computation-2pc|Two-party computation (2PC)]].

## Statement

Migrated verbatim from [[secure-multi-party-computation]] § Other results:

> - [[commitment-scheme|COM]] is complete for two-party computation in the semi-honest model — [[GMW87 - How to play ANY mental game|GMW87]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED ERROR (reported, not fixed): commitments are complete for compiling semi-honest protocols into malicious-secure ones (the GMW compiler); the completeness result for semi-honest two-party computation is OT, not commitment. Commitments live in Minicrypt and are not believed to imply 2PC/OT, so 'COM is complete for two-party computation in the semi-honest model' looks wrong as stated.
- Conclusion 'two-party-computation' is an alias/section, not its own page.
