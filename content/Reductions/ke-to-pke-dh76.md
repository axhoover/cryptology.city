---
type: reduction
status: stub
title: "KE ⇒ PKE"
aliases: []
id: red-ke-to-pke-dh76
kind: implication
hypotheses: [ke]
conclusion: pke
class: unstated
model: standard
source:
  - "[[DH76 - New Directions in Cryptography|DH76]]"
security-loss: ""
---

# KE ⇒ PKE

[[key-exchange|KE]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[key-exchange]] § Other results:

> - KE implies [[public-key-encryption|PKE]] (the session key can be used with a symmetric cipher) — [[DH76 - New Directions in Cryptography|DH76]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Hidden extra hypothesis: the parenthetical ('the session key can be used with a symmetric cipher') means the reduction really needs an SKE/OWF alongside KE, so it may be conjunctive; the bullet names only KE.
- SUSPECT: a general (multi-round) KE does not give PKE; the construction needs a 2-message / non-interactive KE. Report only; do not fix.
- DH76 does not contain this reduction as a theorem.
