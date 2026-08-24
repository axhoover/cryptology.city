---
type: reduction
status: draft
title: "SIVP ⇒ SIS"
aliases: []
id: red-sivp-to-sis-ajt96
kind: implication
hypotheses: [sivp]
conclusion: sis
class: unstated
model: standard
source:
  - "[[Ajt96 - Generating hard instances of lattice problems|Ajt96]]"
security-loss: ""
---

# SIVP ⇒ SIS

[[shortest-independent-vectors-problem|SIVP]] implies [[shortest-integer-solution|SIS]].

## Statement

Migrated verbatim from [[shortest-integer-solution]] § Worst-case hardness:

> Solving SIS on average (over a uniformly random $\mathbf{A}$) is at least as hard as approximating the **Shortest Vector Problem (GapSVP)** and the **Shortest Independent Vectors Problem (SIVP)** to within polynomial factors in the **worst case** — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]]. This is a classical (non-quantum) worst-case-to-average-case reduction: any efficient algorithm that breaks SIS with noticeable probability on random inputs can be converted into an efficient algorithm for these worst-case lattice problems.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Second of the two reductions packed into one bullet.
- SIVP has no wiki page.
