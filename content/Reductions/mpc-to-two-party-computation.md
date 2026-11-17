---
type: reduction
status: draft
title: MPC ⇒ 2PC
aliases: []
id: red-mpc-to-two-party-computation
kind: implication
hypotheses: [mpc]
conclusion: two-party-computation
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: the two-party protocols are the members of the family with n = 2, and their simulators are unchanged."
---

# MPC ⇒ 2PC

## Statement

A family of protocols that securely computes, for every $n$, every $n$-party functionality with abort against $t = n - 1$ corruptions ([[secure-multi-party-computation#security-with-abort|MPC]]) contains, for $n = 2$, a protocol that securely computes every two-party functionality with abort against a malicious adversary corrupting either party ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]) — folklore.
