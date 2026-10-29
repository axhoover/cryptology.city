---
type: reduction
status: draft
title: Two-round MPC ⇒ MPC
aliases: []
id: red-two-round-mpc-to-mpc
kind: implication
hypotheses: [two-round-mpc]
conclusion: mpc
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: the two-round protocol is a protocol secure with abort, and its simulator is unchanged."
---

# Two-round MPC ⇒ MPC

## Statement

A two-round protocol that securely computes $f$ with abort against $n - 1$ corruptions ([[secure-multi-party-computation#two-round-mpc|two-round MPC]]) is a protocol that securely computes $f$ with abort against $n - 1$ corruptions ([[secure-multi-party-computation#security-with-abort|MPC]]) — folklore.
