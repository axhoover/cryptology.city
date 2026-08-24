---
type: reduction
status: stub
title: "AGM ⇒ KEA"
aliases: []
id: red-agm-to-kea
kind: implication
hypotheses: [agm]
conclusion: kea
class: unstated
model: algebraic-group
source: folklore
security-loss: ""
---

# AGM ⇒ KEA

[[algebraic-group-model|AGM]] implies [[knowledge-of-exponent|KEA]].

## Statement

Migrated verbatim from [[knowledge-of-exponent]]:

> In the [[algebraic-group-model|AGM]], every algorithm must explicitly output the representation of any group element it computes. This is a heuristic model that makes KEA-like extraction implicit: any output group element is accompanied by its algebraic derivation from the inputs.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation (FKL18 missing).
- makes KEA-like extraction implicit is a modelling statement, not a proved implication.
