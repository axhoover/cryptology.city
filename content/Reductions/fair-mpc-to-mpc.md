---
type: reduction
status: draft
title: Fair MPC ⇒ MPC
aliases: []
id: red-fair-mpc-to-mpc
kind: implication
hypotheses: [fair-mpc]
conclusion: mpc
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: a simulator for the fair ideal execution becomes one for the ideal execution with abort by emulating an early abort, using the adversary only as an oracle."
---

# Fair MPC ⇒ MPC

## Statement

A protocol that securely computes $f$ with complete fairness against $t$ corruptions ([[secure-multi-party-computation#fairness|fairness]]) securely computes $f$ with abort against $t$ corruptions ([[secure-multi-party-computation#security-with-abort|MPC]]) — folklore.

## Sketch

The simulator for the ideal execution with abort runs the fair simulator; where the fair simulator aborts before the outputs are computed, it submits arbitrary inputs and aborts once it receives the corrupted parties' outputs, which it discards, so the honest parties output $\bot$ in both cases — standard.
