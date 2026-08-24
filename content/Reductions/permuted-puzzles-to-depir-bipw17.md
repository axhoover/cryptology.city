---
type: reduction
status: draft
title: "Permuted puzzles ⇒ DEPIR"
aliases: []
id: red-permuted-puzzles-to-depir-bipw17
kind: implication
hypotheses: [bipw17-permuted-puzzles-assumption]
conclusion: depir
class: unstated
model: standard
source:
  - "[[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]]"
security-loss: ""
---

# Permuted puzzles ⇒ DEPIR

[[permuted-puzzles|Permuted puzzles]] implies [[doubly-efficient-pir|DEPIR]].

## Statement

Migrated verbatim from [[doubly-efficient-pir]] § Other results:

> - SK-DEPIR can be built from a non-standard assumption — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]]
>   - This was analyzed further in [[BHMW21 - On the Security of Doubly Efficient PIR|BHMW21]], which didn't break the core assumption but broke the generalized proposed assumption

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The hypothesis is literally 'a non-standard assumption' — unnamed, so the edge cannot be typed. BIPW17's assumption is a permuted-puzzles / Reed-Muller-code hardness conjecture; the identifier used here is my reconstruction, not the page's.
- No page exists for the assumption.
- 'SK-DEPIR' is an alias of this page rather than a node of its own.
