---
type: barrier
status: draft
title: "No reduction from NP to cPIR"
aliases: []
id: bar-np-to-cpir-lv15
hypotheses: [np]
conclusion: cpir
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[LV15 - On Basing Private Information Retrieval on NP-Hardness|LV15]]"
---

# No reduction from NP to cPIR

A reduction of class `unstated` from [[nondeterministic-polynomial-time|NP]] to [[single-server-private-information-retrieval|cPIR]] would imply a contradiction.

## Statement

Migrated verbatim from [[single-server-private-information-retrieval]] § Other results:

> - Single-round PIR cannot be based on NP-hardness unless [[polynomial-time-hierarchy|PH]] collapses to the second level — [[LV15 - On Basing Private Information Retrieval on NP-Hardness|LV15]]

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Barrier Q is a complexity claim ('PH collapses to the second level') — fits the barrier schema exactly; hypothesis is 'NP-hardness of the underlying problem', typed here as the class NP.
- The reduction class is not named on the page (LV15 concerns general/black-box reductions from an NP-hard problem); 'black-box' is my inference, not the page's word.
