---
type: reduction
status: draft
title: "OWF ⇒ garbled RAM (black-box)"
aliases: []
id: red-owf-to-garbled-ram-glo15
kind: implication
hypotheses: [owf]
conclusion: garbled-ram
class: fully-black-box
model: standard
source:
  - "[[GLO15 - Black-Box Garbled RAM|GLO15]]"
security-loss: ""
rationale:
  class: "GLO15's construction calls the one-way function only as an oracle, and its hybrid security proof runs any distinguisher only as an oracle."
---

# OWF ⇒ garbled RAM (black-box)

## Statement

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, there is a [[garbled-ram|garbled RAM]] scheme with polylogarithmic overhead that uses the one-way function only as a black box — [[GLO15 - Black-Box Garbled RAM|GLO15]]. [[GLOS15 - Garbled RAM From One-Way Functions|GLOS15]] earlier gave a garbled RAM from one-way functions alone with strictly polylogarithmic overhead in space and time and a persistent garbled database, using the one-way function in a non-black-box way — [[GLOS15 - Garbled RAM From One-Way Functions|GLOS15]], [[GLO15 - Black-Box Garbled RAM|GLO15]].

## Notes

- The earlier construction of [[LO13 - How to Garble RAM Programs|LO13]] from one-way functions has a security proof that relies on a circular use of Yao garbled circuits and PRFs; IBE removes the circularity ([[ibe-to-garbled-ram-ghl-14|IBE ⇒ garbled RAM]]) — [[GHL+14 - Garbled RAM Revisited|GHL+14]].
- GLO15 also give the first constant-round secure RAM computation protocol that uses one-way functions only as a black box, in the OT-hybrid model — [[GLO15 - Black-Box Garbled RAM|GLO15]].
