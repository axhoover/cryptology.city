---
type: reduction
status: draft
title: "DCR ⇒ PKE"
aliases: []
id: red-dcr-to-pke-pai99
kind: implication
hypotheses: [dcr]
conclusion: pke
class: unstated
model: standard
source:
  - "[[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]"
security-loss: ""
---

# DCR ⇒ PKE

[[decisional-composite-residuosity|DCR]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[decisional-composite-residuosity]] § Known Results:

> - DCR → CPA-secure [[public-key-encryption|PKE]] with additive homomorphism — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Overlaps line 29 (same scheme, same citation).
- Security notion (IND-CPA) and the additive-homomorphism qualifier live in prose, not in the conclusion identifier.
