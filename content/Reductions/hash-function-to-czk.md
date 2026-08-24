---
type: reduction
status: stub
title: "Hash function ⇒ CZK"
aliases: []
id: red-hash-function-to-czk
kind: implication
hypotheses: [hash-function]
conclusion: czk
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Hash function ⇒ CZK

[[hash-function|Hash function]] implies [[computational-zero-knowledge|CZK]].

## Statement

Migrated verbatim from [[computational-zero-knowledge]] § Notable problems:

> - 3-coloring — assuming [[hash-function|OWFs]] exist

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation (GMW87/GMW91 is the source, and GMW91 IS cited six lines later for the general NP statement).
- The wikilink target for OWF is `[[hash-function]]` — the wiki has no one-way-function page, so OWF, CRH, and 'hash function' all collapse onto one node. This will lose the OWF-vs-CRH distinction in the migrated graph.
- Elliptical bullet: the actual claim is '3-coloring has a CZK proof system', with membership implicit.
