---
type: reduction
status: stub
title: "SPIR ⇒ IT-PIR"
aliases: []
id: red-spir-to-it-pir
kind: implication
hypotheses: [spir]
conclusion: it-pir
class: unstated
model: standard
source: folklore
security-loss: ""
---

# SPIR ⇒ IT-PIR

[[symmetric-private-information-retrieval-multi-server|SPIR]] implies [[multi-server-private-information-retrieval|IT-PIR]].

## Statement

Migrated verbatim from [[symmetric-private-information-retrieval-multi-server]]:

> Symmetric private information retrieval is a stronger version of [[multi-server-private-information-retrieval|Multi-server PIR]] that in addition to protecting the querier's privacy, also protects the data privacy. It was first introduced by [[GIKM00 - Protecting Data Privacy in Private Information Retrieval Scheme|GIKM00]], which showed how to construct it in the multi-server setting with information-theoretic security.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The implication is implicit in 'stronger version of' — the page never states SPIR => PIR as a result, and gives no citation for it.
- Duplicates the same sentence on content/Primitives/single-server-private-information-retrieval.md line 87 (near-verbatim copy across two pages).
