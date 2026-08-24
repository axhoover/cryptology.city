---
type: reduction
status: stub
title: "Higher residuosity ⇒ PKE"
aliases: []
id: red-higher-residuosity-to-pke
kind: implication
hypotheses: [higher-residuosity]
conclusion: pke
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Higher residuosity ⇒ PKE

[[quadratic-residuosity#higher-residuosity|Higher residuosity]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[quadratic-residuosity]] § Higher residuosity:

> Generalizes QR to $d$-th power residuosity modulo $N$. Underlies Goldwasser-Micali generalizations and the Benaloh cryptosystem.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- "Underlies Goldwasser-Micali generalizations and the Benaloh cryptosystem" packs two implications into one clause with no citation.
- The Benaloh cryptosystem has no reference page.
