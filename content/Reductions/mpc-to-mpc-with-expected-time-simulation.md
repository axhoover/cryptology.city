---
type: reduction
status: draft
title: MPC ⇒ MPC with expected-time simulation
aliases: []
id: red-mpc-to-mpc-with-expected-time-simulation
kind: implication
hypotheses: [mpc]
conclusion: mpc-with-expected-time-simulation
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: a simulator running in strict polynomial time runs in expected polynomial time, so the protocol and its simulator are unchanged."
---

# MPC ⇒ MPC with expected-time simulation

## Statement

A protocol that securely computes $f$ with abort against $n - 1$ corruptions ([[secure-multi-party-computation#security-with-abort|MPC]]) securely computes it with [[secure-multi-party-computation#expected-polynomial-time-simulation|expected polynomial-time simulation]]: a simulator running in strict polynomial time runs in expected polynomial time — folklore.
