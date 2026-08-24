---
type: barrier
status: stub
title: "No reduction from Falsifiable assumption to KEA"
aliases: []
id: bar-falsifiable-assumption-to-kea
hypotheses: [falsifiable-assumption]
conclusion: kea
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source: folklore
---

# No reduction from Falsifiable assumption to KEA

A reduction of class `unstated` from [[falsifiable-assumptions|Falsifiable assumption]] to [[knowledge-of-exponent|KEA]] would imply a contradiction.

## Statement

Migrated verbatim from [[knowledge-of-exponent]] § Known Results:

> - KEA-like assumptions cannot be derived from falsifiable assumptions via black-box reductions — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation; GW11 (Gentry-Wichs) is the canonical barrier and is missing.
- SUSPECTED IMPRECISION: GW11 rules out black-box reductions proving succinct non-interactive arguments sound from falsifiable assumptions; KEA-like assumptions cannot be derived from falsifiable assumptions is a vaguer and different claim.
- Marked standard for an attributable barrier result.
- The barrier consequence Q is left implicit — as written it is only a non-existence claim about reductions.
- NO CITATION, marked '— standard'. This is the Gentry-Wichs barrier (STOC 2011) — a named, heavily cited theorem, not folklore. No GW11 reference page exists in content/References/. CLAUDE.md's folklore exception explicitly does not cover 'obvious to a working cryptographer'.
- The statement is also imprecise: GW11 rules out black-box reductions from falsifiable assumptions to the ADAPTIVE SOUNDNESS of succinct non-interactive arguments (for sub-exponentially hard languages), not 'KEA-like assumptions' generically. The hypothesis and conclusion objects are both wrong.
- The closely related claim at content/Primitives/succinct-argument.md:95 states the same barrier and cites Gro16, which is the wrong paper (Gro16 is a construction, not a barrier).
- line 28 on the same page ('KEA is non-falsifiable ... — standard') is a definitional observation, also marked standard, blurring the line between a definition and a theorem.
