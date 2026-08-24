---
type: reduction
status: draft
title: "DLOG ⇒ PRG"
aliases: []
id: red-dlog-to-prg-bm84
kind: implication
hypotheses: [dlog]
conclusion: prg
class: unstated
model: standard
source:
  - "[[BM84 - How to Generate Cryptographically Strong Sequences of Pseudo-Random Bits|BM84]]"
security-loss: ""
---

# DLOG ⇒ PRG

[[discrete-logarithm|DLOG]] implies [[pseudorandom-generator|PRG]].

## Statement

Migrated verbatim from [[pseudorandom-generator]] § Other results:

> - The first PRG from a concrete assumption: discrete-log hardness implies a PRG — [[BM84 - How to Generate Cryptographically Strong Sequences of Pseudo-Random Bits|BM84]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'discrete-log hardness' is not wikilinked, although content/Assumptions/discrete-logarithm.md exists.
- 'The first PRG from a concrete assumption' is a historical claim bundled into the same bullet.
