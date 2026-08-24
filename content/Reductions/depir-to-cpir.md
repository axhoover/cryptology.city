---
type: reduction
status: stub
title: "DEPIR ⇒ cPIR"
aliases: []
id: red-depir-to-cpir
kind: implication
hypotheses: [depir]
conclusion: cpir
class: unstated
model: standard
source: folklore
security-loss: ""
---

# DEPIR ⇒ cPIR

[[doubly-efficient-pir|DEPIR]] implies [[single-server-private-information-retrieval|cPIR]].

## Statement

Migrated verbatim from [[doubly-efficient-pir]] § Doubly-efficient PIR:

> Double efficient PIR is a type of [[single-server-private-information-retrieval|single-server PIR]] that allows the database to be _preprocessed_ before the client queries the data. A PIR is considered a DEPIR if both the communication and computation at **query time** is $o(n)$, where $n$ is the size of the database.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Taxonomy statement ('is a type of'), not a reduction with a proof; no citation.
- The implication direction is DEPIR => single-server PIR, opposite to the surface word order.
