---
type: reduction
status: draft
title: "SIVP ⇒ LWE"
aliases: []
id: red-sivp-to-lwe-reg05
kind: implication
hypotheses: [sivp]
conclusion: lwe
class: unstated
model: quantum
source:
  - "[[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]"
security-loss: ""
---

# SIVP ⇒ LWE

[[shortest-independent-vectors-problem|SIVP]] implies [[learning-with-errors|LWE]].

## Statement

Migrated verbatim from [[learning-with-errors]] § Reduction to lattice problems:

> The hardness of LWE rests on worst-case lattice problems via a quantum reduction — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]:
>
> - Solving decision (or search) LWE on a noticeable fraction of inputs is at least as hard as quantum-approximating the **Shortest Vector Problem (GapSVP)** and the **Shortest Independent Vectors Problem (SIVP)** to within polynomial factors in the worst case

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Second of the two reductions packed into one bullet (see the GapSVP record at the same line).
- SIVP has no wiki page; identifier is ad hoc.
