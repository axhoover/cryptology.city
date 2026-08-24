---
type: reduction
status: stub
title: "PCS ⇔ Vector commitments"
aliases: []
id: red-pcs-to-vector-commitments
kind: equivalence
hypotheses: [pcs]
conclusion: vector-commitment
class: unstated
model: standard
source: folklore
security-loss: ""
---

# PCS ⇔ Vector commitments

[[polynomial-commitment|PCS]] is equivalent to [[commitment-scheme#vector-commitments|Vector commitments]].

## Statement

Migrated verbatim from [[polynomial-commitment]] § Other results:

> - Polynomial commitments are equivalent to vector commitments with position-binding under certain reductions — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'under certain reductions' is an untypeable hedge — the reduction class is exactly what the target model needs and the page refuses to name it.
- 'vector commitment' has no page (dangling object).
- Uncited, '— standard' label on a non-obvious equivalence.
