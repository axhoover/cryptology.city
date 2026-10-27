---
type: reduction
status: draft
title: Semi-honest MPC ⇒ Semi-honest 2PC
aliases: []
id: red-semi-honest-security-to-semi-honest-two-party-computation
kind: implication
hypotheses: [semi-honest-security]
conclusion: semi-honest-two-party-computation
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: the two-party protocols are the members of the family with n = 2, and their simulators are unchanged."
---

# Semi-honest MPC ⇒ Semi-honest 2PC

## Statement

A family of protocols that securely computes, for every $n$, every $n$-party functionality against semi-honest adversaries corrupting up to $n - 1$ parties ([[secure-multi-party-computation#semi-honest-security|semi-honest security]]) contains, for $n = 2$, a protocol that securely computes every two-party functionality against a semi-honest adversary corrupting either party ([[secure-multi-party-computation#semi-honest-two-party-computation|semi-honest 2PC]]) — folklore.
