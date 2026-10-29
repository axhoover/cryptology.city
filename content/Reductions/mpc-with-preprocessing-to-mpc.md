---
type: reduction
status: draft
title: MPC with preprocessing ⇒ MPC
aliases: []
id: red-mpc-with-preprocessing-to-mpc
kind: implication
hypotheses: [mpc-with-preprocessing]
conclusion: mpc
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: the two-phase protocol is a protocol secure with abort, and its simulator is unchanged."
---

# MPC with preprocessing ⇒ MPC

## Statement

A protocol in the two-phase form of [[secure-multi-party-computation#mpc-with-preprocessing|MPC with preprocessing]], secure with abort against $n - 1$ corruptions, is in particular a protocol that securely computes $f$ with abort against $n - 1$ corruptions ([[secure-multi-party-computation#security-with-abort|MPC]]) — folklore.
