---
type: reduction
status: stub
title: "Symmetric private information retrieval (Single-server) ⇒ cPIR"
aliases: []
id: red-symmetric-private-information-retrieval-single-server-to-cpir
kind: implication
hypotheses: [single-server-symmetric-pir]
conclusion: cpir
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Symmetric private information retrieval (Single-server) ⇒ cPIR

[[single-server-private-information-retrieval#symmetric-private-information-retrieval-single-server|Symmetric private information retrieval (Single-server)]] implies [[single-server-private-information-retrieval|cPIR]].

## Statement

Migrated verbatim from [[single-server-private-information-retrieval]] § Variations:

> - [[single-server-private-information-retrieval#Symmetric private information retrieval (Single-server)|Single-server Symmetric PIR (SPIR)]] additionally protects the server's data privacy

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The implication (a strictly stronger object implies the weaker one) is only implicit in the word 'additionally'; the page never asserts it.
- 'single-server-symmetric-pir' is a section of this same page, not its own slug — a self-referential wikilink to an in-page anchor.
- No citation.
