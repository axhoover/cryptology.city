---
type: reduction
status: stub
title: "DCR ⇒ COM"
aliases: []
id: red-dcr-to-com
kind: implication
hypotheses: [dcr]
conclusion: com
class: unstated
model: standard
source: folklore
security-loss: ""
---

# DCR ⇒ COM

[[decisional-composite-residuosity|DCR]] implies [[commitment-scheme|COM]].

## Statement

Migrated verbatim from [[decisional-composite-residuosity]] § Known Results:

> - DCR → [[commitment-scheme|COM]] (statistically hiding, computationally binding) — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Marked standard; statistically hiding commitments from DCR are attributable (Damgard-Fujisaki), so the folklore exception is likely misapplied.
- SUSPECTED IMPRECISION: the hiding/binding flavours claimed (statistically hiding, computationally binding) should be checked against the standard DCR-based construction.
- Commitment flavour is not part of the conclusion identifier.
