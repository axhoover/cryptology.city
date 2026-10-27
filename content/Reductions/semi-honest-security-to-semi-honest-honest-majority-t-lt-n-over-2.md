---
type: reduction
status: draft
title: Semi-honest MPC ⇒ Semi-honest MPC with honest majority
aliases: []
id: red-semi-honest-security-to-semi-honest-honest-majority-t-lt-n-over-2
kind: implication
hypotheses: [semi-honest-security]
conclusion: semi-honest-honest-majority-t-lt-n-over-2
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: an adversary corrupting fewer than n/2 parties also corrupts at most n - 1, so the same simulator applies."
---

# Semi-honest MPC ⇒ Semi-honest MPC with honest majority

## Statement

A protocol secure against semi-honest adversaries corrupting up to $n - 1$ parties ([[secure-multi-party-computation#semi-honest-security|semi-honest security]]) is secure against semi-honest adversaries corrupting fewer than $n/2$ parties ([[secure-multi-party-computation#semi-honest-honest-majority-t--n2|semi-honest, honest majority]]), since those adversaries are among the former — folklore.
