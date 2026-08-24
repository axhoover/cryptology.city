---
type: reduction
status: draft
title: "Noise Level ⇒ PKE"
aliases: []
id: red-noise-level-to-pke-ale03
kind: implication
hypotheses: [lpn-mid-noise]
conclusion: pke
class: unstated
model: standard
source:
  - "[[Ale03 - More on average case vs approximation complexity|Ale03]]"
security-loss: ""
---

# Noise Level ⇒ PKE

[[learning-parity-with-noise#noise-level|Noise Level]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[learning-parity-with-noise]] § Known results:

> - Mid-noise (and hence low-noise) LPN implies [[public-key-encryption|PKE]] — [[Ale03 - More on average case vs approximation complexity|Ale03]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- (and hence low-noise) silently invokes the regime ordering from lines 48-51 — arguably two relations in one bullet.
- The noise-regime qualifier is not part of the hypothesis identifier.
- Security notion of the resulting PKE is not stated.
