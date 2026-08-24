---
type: reduction
status: draft
title: "cPIR ⇒ OT"
aliases: []
id: red-cpir-to-ot-dmo00
kind: implication
hypotheses: [cpir]
conclusion: ot
class: unstated
model: standard
source:
  - "[[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]]"
security-loss: ""
---

# cPIR ⇒ OT

[[single-server-private-information-retrieval|cPIR]] implies [[oblivious-transfer|OT]].

## Statement

Migrated verbatim from [[oblivious-transfer]] § Other results:

> - OT is implied by non-trivial [[single-server-private-information-retrieval|PIR]] — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]]

Migrated verbatim from [[single-server-private-information-retrieval]] § Other results:

> - Non-trivial PIR implies [[oblivious-transfer|OT]] — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]]

## Notes

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'non-trivial' PIR is an unquantified qualifier on the hypothesis (DMO00 requires communication sublinear in the database size); the qualifier needs to survive the migration or the hypothesis is wrong.
- 'Non-trivial' (communication less than the trivial n-bit download) is a qualifier on the hypothesis that a flat slug loses; the page defines 'trivial PIR' at line 15, so the qualifier is at least anchored.
