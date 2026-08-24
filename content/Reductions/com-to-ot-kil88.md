---
type: reduction
status: stub
title: "COM ⇒ OT"
aliases: []
id: red-com-to-ot-kil88
kind: implication
hypotheses: [com]
conclusion: ot
class: unstated
model: standard
source:
  - "[[Kil88 - Founding cryptography on oblivious transfer|Kil88]]"
security-loss: ""
---

# COM ⇒ OT

[[commitment-scheme|COM]] implies [[oblivious-transfer|OT]].

## Statement

Migrated verbatim from [[commitment-scheme]] § Other results:

> - [[oblivious-transfer|OT]] can be constructed from any non-trivial commitment scheme — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED MATHEMATICAL ERROR / INVERTED CITATION (reported, not fixed): Kilian's 'Founding cryptography on oblivious transfer' proves that OT is COMPLETE for secure computation (OT => everything), not that OT can be built FROM commitments. Building OT from commitments would place OT in Minicrypt, contradicting Impagliazzo-Rudich. The edge is almost certainly reversed.
- 'any non-trivial commitment scheme' is an undefined qualifier — 'non-trivial' is never defined on the page, so the hypothesis cannot be typed.
- Directly contradicts the neighbouring line 63 bullet (COM from PRG/OWF) if taken at face value: it would make OT follow from OWFs.
