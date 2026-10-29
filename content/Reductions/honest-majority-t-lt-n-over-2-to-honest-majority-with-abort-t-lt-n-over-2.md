---
type: reduction
status: draft
title: "MPC with honest majority ($t < n/2$) ⇒ MPC with abort and honest majority ($t < n/2$)"
aliases: []
id: red-honest-majority-t-lt-n-over-2-to-honest-majority-with-abort-t-lt-n-over-2
kind: implication
hypotheses: [honest-majority-t-lt-n-over-2]
conclusion: honest-majority-with-abort-t-lt-n-over-2
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: the simulator for guaranteed output delivery is a simulator for the ideal execution with abort that never aborts, and it uses the adversary only as an oracle."
---

# MPC with honest majority ($t < n/2$) ⇒ MPC with abort and honest majority ($t < n/2$)

## Statement

A protocol that securely computes $f$ with guaranteed output delivery against $t < n/2$ corruptions ([honest majority, $t < n/2$](secure-multi-party-computation#honest-majority-t--n2)) securely computes $f$ with abort against the same corruptions ([honest majority with abort, $t < n/2$](secure-multi-party-computation#honest-majority-with-abort-t--n2)): the guaranteed-output-delivery simulator, submitting the default input itself wherever it would submit none, is a simulator for the ideal execution with abort that never aborts — folklore.
