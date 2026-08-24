---
type: reduction
status: draft
title: "FAC ⇒ DCR"
aliases: []
id: red-fac-to-dcr-pai99
kind: implication
hypotheses: [fac]
conclusion: dcr
class: unstated
model: standard
source:
  - "[[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]"
security-loss: ""
---

# FAC ⇒ DCR

[[factoring|FAC]] implies [[decisional-composite-residuosity|DCR]].

## Statement

Migrated verbatim from [[decisional-composite-residuosity]] § Known Results:

> - DCR follows from [[factoring|factoring hardness]] — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]

Migrated verbatim from [[factoring]] § Known Results:

> - The [[decisional-composite-residuosity|DCR assumption]] (Paillier) follows from factoring hardness — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED MATHEMATICAL ERROR: DCR is not known to follow from the hardness of factoring. The known direction is the converse — factoring n breaks DCR — so DCR hardness implies factoring hardness. Pai99 does not prove factoring implies DCR.
- Directly contradicts the Attacks bullet at line 44 of this same page, which correctly says DCR is broken if factoring is easy.
- The same inverted direction is repeated on factoring.md line 31, so the error appears systematic.
- SUSPECTED MATHEMATICAL ERROR: same inverted direction as line 30 and as decisional-composite-residuosity.md line 30. Factoring hardness is implied by DCR hardness, not the other way round.
- The identical error on two pages suggests a systematic convention problem across the wiki.
