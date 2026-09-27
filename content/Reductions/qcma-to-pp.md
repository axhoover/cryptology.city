---
type: reduction
status: stub
title: "QCMA ⊆ PP"
aliases: []
id: red-qcma-to-pp
kind: inclusion
hypotheses: [qcma]
conclusion: pp
class: free
model: quantum
source: folklore
security-loss: ""
---

# QCMA ⊆ PP

[[quantum-classical-merlin-arthur|QCMA]] is contained in [[probabilistic-polynomial-time|PP]].

## Statement

Migrated verbatim from [[quantum-classical-merlin-arthur]] § Known relationships:

> - $\classQCMA \subseteq \classPP \subseteq \classPSPACE$, since $\classQMA \subseteq \classPP$.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: free`: an unconditional containment between complexity classes; the reduction-class axis does not apply.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Derived (QCMA subset QMA subset PP), not an independent theorem, and nothing in the record marks it as derived - the bullet presents a two-step chain as a fact.
- Uncited.
