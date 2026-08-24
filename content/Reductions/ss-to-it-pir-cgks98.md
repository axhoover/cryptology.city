---
type: reduction
status: draft
title: "SS ⇒ IT-PIR"
aliases: []
id: red-ss-to-it-pir-cgks98
kind: implication
hypotheses: [ss]
conclusion: it-pir
class: unstated
model: standard
source:
  - "[[CGKS98 - Private information retrieval|CGKS98]]"
security-loss: ""
---

# SS ⇒ IT-PIR

[[secret-sharing|SS]] implies [[multi-server-private-information-retrieval|IT-PIR]].

## Statement

Migrated verbatim from [[secret-sharing]] § Other results:

> - Multi-server [[multi-server-private-information-retrieval|PIR]] follows directly from secret sharing by sharing the database index query — [[CGKS98 - Private information retrieval|CGKS98]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'follows directly ... by sharing the database index query' is a one-clause sketch; the non-collusion assumption on the servers (essential to multi-server PIR) is not stated as part of the claim.
