---
type: reduction
status: stub
title: "OWP ⇒ Hash function"
aliases: []
id: red-owp-to-hash-function
kind: implication
hypotheses: [owp]
conclusion: hash-function
class: unstated
model: standard
source: folklore
security-loss: ""
---

# OWP ⇒ Hash function

[[one-way-permutation|OWP]] implies [[hash-function|Hash function]].

## Statement

Migrated verbatim from [[hash-function]] § Other results:

> - One-way functions exist if [[one-way-permutation|OWP]]s exist

Migrated verbatim from [[one-way-permutation]] § Other results:

> - A OWP is trivially a [[hash-function|OWF]].

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation and no folklore flag (trivially true by definition, but the house style still requires the '— folklore' marker).
- Conclusion node is the merged hash-function page rather than a dedicated OWF node.
- No citation and no '— standard'/'— folklore' label ('trivially' is not the required label).
- Wikilink target surprise: OWF resolves to `[[hash-function]]`, the page that also holds CRHF/collision resistance. The migration will conflate OWF with CRHF unless hash-function is split into distinct objects.
