---
type: reduction
status: stub
title: "PKE ⇒ KEM"
aliases: []
id: red-pke-to-kem
kind: implication
hypotheses: [pke]
conclusion: kem
class: unstated
model: standard
source: folklore
security-loss: ""
---

# PKE ⇒ KEM

[[public-key-encryption|PKE]] implies [[key-encapsulation-mechanism|KEM]].

## Statement

Migrated verbatim from [[key-encapsulation-mechanism]] § Other results:

> - Any IND-CCA PKE scheme immediately gives an IND-CCA KEM by encapsulating a random key — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- '- standard' folklore label used in place of a citation; acceptable under the folklore policy but the reduction is attributable to CS03.
- IND-CCA PKE and IND-CCA KEM are security notions with no distinct object identifiers on the wiki.
