---
type: barrier
status: stub
title: "No reduction from Binding + Hiding to COM"
aliases: []
id: bar-binding-and-hiding-to-com
hypotheses: [statistically-binding-commitment, statistically-hiding-commitment]
conclusion: com
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source: folklore
---

# No reduction from Binding + Hiding to COM

A reduction of class `unstated` from [[commitment-scheme#binding|Binding]] together with [[commitment-scheme#hiding|Hiding]] to [[commitment-scheme|COM]] would imply a contradiction.

## Statement

Migrated verbatim from [[commitment-scheme]] § Properties / Binding:

> **Note:** Perfect (simultaneously statistically hiding and statistically binding) commitment schemes are impossible by a simple entropy argument. The four regimes are: (1) perfectly binding / computationally hiding, (2) computationally binding / statistically hiding, (3) computationally binding / computationally hiding, and (4) perfectly binding / perfectly hiding — which is impossible.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- NO CITATION and no folklore marker. CLAUDE.md requires either a citation or an explicit '— standard' / '— folklore' label; this has neither, it just asserts 'by a simple entropy argument'.
- A genuine unconditional two-hypothesis impossibility ({statistically hiding, statistically binding} => contradiction) — a good barrier-page candidate, and one of the few on the wiki with an actual proof idea attached.
- The four-regime enumeration that follows is useful taxonomy, but regime (4) 'perfectly binding / perfectly hiding — which is impossible' restates the first sentence, an anti-pattern.
