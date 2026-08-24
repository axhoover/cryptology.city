---
type: reduction
status: stub
title: "COM ⇒ MPC"
aliases: []
id: red-com-to-mpc-gmw87
kind: implication
hypotheses: [com]
conclusion: mpc
class: unstated
model: standard
source:
  - "[[GMW87 - How to play ANY mental game|GMW87]]"
security-loss: ""
---

# COM ⇒ MPC

[[commitment-scheme|COM]] implies [[secure-multi-party-computation|MPC]].

## Statement

Migrated verbatim from [[commitment-scheme]] § Other results:

> - COM is complete for [[secure-multi-party-computation|MPC]] in the semi-honest model: any two-party functionality can be computed given a commitment scheme — [[GMW87 - How to play ANY mental game|GMW87]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED MATHEMATICAL ERROR (reported, not fixed): GMW87's semi-honest two-party protocol is built from OBLIVIOUS TRANSFER, not from commitments; commitments appear in the GMW compiler that lifts semi-honest security to malicious security. As stated, 'commitments imply semi-honest 2PC' would place OT inside Minicrypt (commitments follow from OWFs), contradicting the Impagliazzo-Rudich black-box separation.
- 'complete for' is not one of the directions in the target model and is untyped here — completeness (everything reduces to it) is not the same as an implication.
- The citation is attached to a claim the cited paper does not make in this form.
