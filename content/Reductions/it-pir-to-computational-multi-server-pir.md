---
type: reduction
status: stub
title: "IT-PIR ⇒ Computational Multi-server PIR"
aliases: []
id: red-it-pir-to-computational-multi-server-pir
kind: implication
hypotheses: [it-pir]
conclusion: computational-multi-server-pir
class: unstated
model: standard
source: folklore
security-loss: ""
---

# IT-PIR ⇒ Computational Multi-server PIR

[[multi-server-private-information-retrieval|IT-PIR]] implies [[multi-server-private-information-retrieval#computational-multi-server-pir|Computational Multi-server PIR]].

## Statement

Migrated verbatim from [[multi-server-private-information-retrieval]] § Computational Multi-server PIR:

> Similar to the [[single-server-private-information-retrieval|PIR]], one can weaken the notion of multi-server PIR to only be private against polynomial-time non-colluding servers. In this setting, the syntax remains the same, but now the query distribution is only required to be computationally indistinguishable for any two index pairs.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Variation section: weakening IT-privacy to computational privacy; the implication (IT-PIR => computational PIR) is implicit and uncited.
- Wikilink `[[single-server-private-information-retrieval|PIR]]` displays as bare 'PIR' while pointing at the single-server page - confusing on a multi-server page.
- 'non-colluding servers' is a model assumption that is not carried anywhere in the typing.
