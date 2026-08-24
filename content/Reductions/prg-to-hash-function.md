---
type: reduction
status: stub
title: "PRG ⇒ Hash function"
aliases: []
id: red-prg-to-hash-function
kind: implication
hypotheses: [prg]
conclusion: hash-function
class: unstated
model: standard
source: folklore
security-loss: ""
---

# PRG ⇒ Hash function

[[pseudorandom-generator|PRG]] implies [[hash-function|Hash function]].

## Statement

Migrated verbatim from [[pseudorandom-generator]] § Other results:

> - Conversely, any PRG is a one-way function (the seed is a preimage of the output), so OWF $\Leftrightarrow$ PRG

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Sub-bullet under line 85; states the converse direction and then asserts the EQUIVALENCE 'OWF <=> PRG'. The equivalence is a third claim derived from the two directions and should not be migrated as a separate primitive fact.
- No citation on the converse direction (folklore, but unlabelled).
- The parenthetical justification ('the seed is a preimage of the output') silently relies on the PRG being length-expanding.
