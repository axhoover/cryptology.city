---
type: reduction
status: stub
title: "PKE ⇒ Hash function"
aliases: []
id: red-pke-to-hash-function
kind: implication
hypotheses: [pke]
conclusion: hash-function
class: unstated
model: standard
source: folklore
security-loss: ""
---

# PKE ⇒ Hash function

[[public-key-encryption|PKE]] implies [[hash-function|Hash function]].

## Statement

Migrated verbatim from [[public-key-encryption]] § Other results:

> - PKE implies [[hash-function|OWF]]

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation and no folklore label.
- OWF resolves to `[[hash-function]]` (shared page with CRHF) — conflation risk; PKE implies OWF, it does NOT imply CRHF, so the shared slug makes this bullet read as a false claim after migration.
