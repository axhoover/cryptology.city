---
type: reduction
status: draft
title: "Honest majority ($t < n/2$) ⇒ MPC"
aliases: []
id: red-honest-majority-t-lt-n-over-2-to-mpc-rb89
kind: implication
hypotheses: [honest-majority-t-lt-n-over-2]
conclusion: mpc
class: free
model: standard
source:
  - "[[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]]"
security-loss: ""
rationale:
  class: "The theorem is unconditional, and the corruption threshold is a setting rather than a primitive a construction could call as an oracle, so no black-box class applies."
---

# Honest majority ($t < n/2$) ⇒ MPC

## Statement

In the secure-channels model with a broadcast channel, every $n$-party functionality has an [[secure-multi-party-computation|MPC]] protocol that is statistically secure against a malicious adversary corrupting $t < n/2$ parties (an [[secure-multi-party-computation#honest-majority-t--n2|honest majority]]) — [[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]].

## Notes

- The protocol rests on a [[secret-sharing#verifiable-secret-sharing-vss|VSS]] with negligible error for $t < n/2$, given broadcast — [[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]].
- For $t < n/3$, perfect security against a malicious adversary is achievable — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]; see [Honest majority ($t < n/3$) ⇒ MPC](honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88).
