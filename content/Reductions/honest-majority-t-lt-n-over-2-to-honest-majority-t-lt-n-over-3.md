---
type: reduction
status: draft
title: "MPC with honest majority ($t < n/2$) ⇒ MPC with honest majority ($t < n/3$)"
aliases: []
id: red-honest-majority-t-lt-n-over-2-to-honest-majority-t-lt-n-over-3
kind: implication
hypotheses: [honest-majority-t-lt-n-over-2]
conclusion: honest-majority-t-lt-n-over-3
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: an adversary corrupting fewer than n/3 parties also corrupts fewer than n/2, so the same simulator applies."
---

# MPC with honest majority ($t < n/2$) ⇒ MPC with honest majority ($t < n/3$)

## Statement

A protocol with guaranteed output delivery against malicious adversaries corrupting fewer than $n/2$ parties ([honest majority, $t < n/2$](secure-multi-party-computation#honest-majority-t--n2)) has guaranteed output delivery against malicious adversaries corrupting fewer than $n/3$ parties ([honest majority, $t < n/3$](secure-multi-party-computation#honest-majority-t--n3)), since those adversaries are among the former — folklore.
