---
type: reduction
status: draft
title: Two-round semi-honest MPC ⇒ Semi-honest MPC
aliases: []
id: red-two-round-semi-honest-mpc-to-semi-honest-security
kind: implication
hypotheses: [two-round-semi-honest-mpc]
conclusion: semi-honest-security
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: the two-round protocol is a semi-honest secure protocol, and its simulator is unchanged."
---

# Two-round semi-honest MPC ⇒ Semi-honest MPC

## Statement

A two-round protocol secure against semi-honest adversaries corrupting up to $n - 1$ parties ([[secure-multi-party-computation#two-round-semi-honest-mpc|two-round semi-honest MPC]]) is a protocol secure against semi-honest adversaries corrupting up to $n - 1$ parties ([[secure-multi-party-computation#semi-honest-security|semi-honest security]]) — folklore.
