---
type: reduction
status: draft
title: Four-round MPC ⇒ MPC with expected-time simulation
aliases: []
id: red-four-round-mpc-to-mpc-with-expected-time-simulation
kind: implication
hypotheses: [four-round-mpc]
conclusion: mpc-with-expected-time-simulation
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction runs the four-round protocol unchanged and appends one broadcast round, and its simulator runs the four-round protocol's simulator, using the adversary only as an oracle."
---

# Four-round MPC ⇒ MPC with expected-time simulation

## Statement

A four-round plain-model protocol that securely computes $f$ with selective abort against $n - 1$ corruptions ([[secure-multi-party-computation#four-round-mpc|four-round MPC]]), followed by one round in which every party broadcasts whether it aborted and every party outputs $\bot$ if any party reports an abort or broadcasts nothing, securely computes $f$ with unanimous abort against $n - 1$ corruptions, with a simulator running in expected polynomial time ([[secure-multi-party-computation#expected-polynomial-time-simulation|MPC with expected polynomial-time simulation]]) — folklore.

## Sketch

All honest parties see the same broadcast messages in the last round, so they output $\bot$ together or output together. The simulator runs the four-round simulator, in expected polynomial time, derives each honest party's last-round broadcast from whether that simulator lets the party receive its output, runs $\calA$ for the corrupted parties' last-round broadcasts, and tells the trusted party to abort for all if any broadcast reports an abort or is missing — folklore.
