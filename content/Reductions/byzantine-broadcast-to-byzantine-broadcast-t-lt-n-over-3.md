---
type: reduction
status: draft
title: "Byzantine broadcast ⇒ Broadcast against $t < n/3$"
aliases: []
id: red-byzantine-broadcast-to-byzantine-broadcast-t-lt-n-over-3
kind: implication
hypotheses: [byzantine-broadcast]
conclusion: byzantine-broadcast-t-lt-n-over-3
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: an adversary corrupting fewer than n/3 parties also corrupts at most n - 1, so the same protocol wins with the same probability bound."
---

# Byzantine broadcast ⇒ Broadcast against $t < n/3$

## Statement

A broadcast protocol against $n - 1$ corruptions ([[byzantine-broadcast|Byzantine broadcast]]) is a broadcast protocol against every $t < n/3$ corruptions ([broadcast against $t < n/3$](byzantine-broadcast#broadcast-against-t--n3)), since those adversaries are among the former — folklore.
