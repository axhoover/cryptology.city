---
type: reduction
status: draft
title: "LWE ⇒ PRC"
aliases: []
id: red-lwe-to-prc-cg24
kind: implication
hypotheses: [lwe]
conclusion: prc
class: unstated
model: standard
source:
  - "[[CG24 - Pseudorandom Error-Correcting Codes|CG24]]"
security-loss: ""
---

# LWE ⇒ PRC

[[learning-with-errors|LWE]] implies [[pseudorandom-error-correcting-code|PRC]].

## Statement

Migrated verbatim from [[pseudorandom-error-correcting-code]] § Other results:

> - PRCs can be constructed from [[learning-with-errors|LWE]]: the LWE ciphertext structure naturally yields a pseudorandom, decodable code robust to bounded noise — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED MIS-ATTRIBUTED ASSUMPTION (recorded, not fixed): CG24's PRC constructions are usually stated from (sparse/planted) LPN — see also content/References/'GG24 - New constructions of pseudorandom codes.md' — not from LWE. Verify which assumption the cited construction actually uses before migrating the hypothesis as `[[learning-with-errors]]`.
- The 'LWE ciphertext structure naturally yields ...' clause is a hand-wave, not a construction.
