---
type: reduction
status: draft
title: "GapSVP ⇒ SIS"
aliases: []
id: red-gapsvp-to-sis-ajt96
kind: implication
hypotheses: [gapsvp]
conclusion: sis
class: unstated
model: standard
source:
  - "[[Ajt96 - Generating hard instances of lattice problems|Ajt96]]"
security-loss: ""
---

# GapSVP ⇒ SIS

[[shortest-vector-problem|GapSVP]] implies [[shortest-integer-solution|SIS]].

## Statement

Migrated verbatim from [[shortest-integer-solution]] § Worst-case hardness:

> Solving SIS on average (over a uniformly random $\mathbf{A}$) is at least as hard as approximating the **Shortest Vector Problem (GapSVP)** and the **Shortest Independent Vectors Problem (SIVP)** to within polynomial factors in the **worst case** — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]]. This is a classical (non-quantum) worst-case-to-average-case reduction: any efficient algorithm that breaks SIS with noticeable probability on random inputs can be converted into an efficient algorithm for these worst-case lattice problems.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Bullet packs TWO independent worst-case-to-average-case reductions (from GapSVP and from SIVP); they are disjunctive and are recorded as two records sharing the verbatim.
- GapSVP has no wiki page.
- The GapSVP form of this worst-case connection is usually attributed to Micciancio-Regev rather than Ajt96, and the approximation factors differ between the two; the page cites Ajt96 for both.
