---
type: reduction
status: stub
title: "co-CDH ⇒ DS"
aliases: []
id: red-co-cdh-to-ds
kind: implication
hypotheses: [co-cdh]
conclusion: ds
class: unstated
model: rom
source: folklore
security-loss: ""
---

# co-CDH ⇒ DS

[[co-computational-diffie-hellman|co-CDH]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[digital-signature]] § BLS signatures:

> - **Security**: EUF-CMA under the co-CDH assumption in the random oracle model

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation.
- 'co-CDH' has no page or slug; `[[computational-diffie-hellman]]` exists but co-CDH (the asymmetric-pairing variant) is not defined anywhere in content/.
- `[[random-oracle-model]]` not wikilinked.
