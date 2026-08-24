---
type: barrier
status: draft
title: "No reduction from NP to Hash function"
aliases: []
id: bar-np-to-hash-function-aggm06
hypotheses: [np]
conclusion: hash-function
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[AGGM06 - On basing one-way functions on NP-hardness|AGGM06]]"
---

# No reduction from NP to Hash function

A reduction of class `unstated` from [[nondeterministic-polynomial-time|NP]] to [[hash-function|Hash function]] would imply a contradiction.

## Statement

Migrated verbatim from [[hash-function]] § Other results:

> - Basing OWFs on worst-case NP-hardness is unlikely: any black-box reduction would imply a collapse of the polynomial hierarchy — [[AGGM06 - On basing one-way functions on NP-hardness|AGGM06]]

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Canonical barrier shape: (exists black-box reduction from worst-case NP-hardness to OWF) => (PH collapses). Q is a complexity claim.
- SUSPECTED OVERSTATEMENT: AGGM06 rules out NON-ADAPTIVE black-box reductions (with the collapse landing at a low level of PH); the bullet says 'any black-box reduction'.
- `[[polynomial-time-hierarchy]]` exists as a page but 'the polynomial hierarchy' is not wikilinked.
