---
type: reduction
status: stub
title: "Noise Level ⇒ DEPIR"
aliases: []
id: red-noise-level-to-depir-cimr25
kind: implication
hypotheses: [lpn-mid-noise]
conclusion: depir
class: unstated
model: standard
source:
  - "[[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]]"
security-loss: ""
---

# Noise Level ⇒ DEPIR

[[learning-parity-with-noise#noise-level|Noise Level]] implies [[doubly-efficient-pir|DEPIR]].

## Statement

Migrated verbatim from [[learning-parity-with-noise]] § Known results:

> - [[doubly-efficient-pir|SK-DEPIR]] can be built from mid and high-noise LPN — [[CIMR25 - Secret-Key PIR from Random Linear Codes]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- AMBIGUOUS CONJUNCTION: mid and high-noise LPN reads as two hypotheses, but the regimes are mutually exclusive parameter settings, so this is almost certainly a disjunction (either regime suffices) and should be two separate reductions.
- The citation wikilink has no display alias, unlike every other bullet on the page, so it renders the full filename.
- Display text SK-DEPIR differs from the target page (doubly-efficient-pir); the secret-key qualifier is not in the identifier.
