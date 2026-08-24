---
type: reduction
status: stub
title: "Secret-Key PIR (SK-PIR) ⇒ DEPIR"
aliases: []
id: red-secret-key-pir-sk-pir-to-depir-bipw17
kind: implication
hypotheses: [secret-key-pir]
conclusion: depir
class: unstated
model: standard
source:
  - "[[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]]"
security-loss: ""
---

# Secret-Key PIR (SK-PIR) ⇒ DEPIR

[[single-server-private-information-retrieval#secret-key-pir-sk-pir|Secret-Key PIR (SK-PIR)]] implies [[doubly-efficient-pir|DEPIR]].

## Statement

Migrated verbatim from [[CIMR25 - Secret-Key PIR from Random Linear Codes]] § Notes:

> - Note that this will build very mildly doubly efficient PIR the way that [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]] build SK-DEPIR

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'very mildly doubly efficient PIR' is not a defined notion anywhere in content/; the qualifier makes the conclusion node untypable.
- The claim is the wiki editor's inference by analogy ('the way that BIPW17 build SK-DEPIR'), not a theorem asserted by CIMR25 or BIPW17. It should not enter the graph as a literature reduction.
- The BIPW17 wikilink resolves correctly, but no theorem or section anchor is given.
- Not in the existing inventory in any form.
