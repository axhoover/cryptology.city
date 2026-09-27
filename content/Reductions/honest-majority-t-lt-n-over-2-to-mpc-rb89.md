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
---

# Honest majority ($t < n/2$) ⇒ MPC

[[secure-multi-party-computation#honest-majority-t-n2|Honest majority ($t < n/2$)]] implies [[secure-multi-party-computation|MPC]].

## Statement

In the secure-channels model with a broadcast channel and [[secure-multi-party-computation#honest-majority-t-n2|honest majority $t < n/2$]], every $n$-party functionality has an [[secure-multi-party-computation|MPC]] protocol that is statistically secure against a malicious adversary corrupting $t < n/2$ parties — [[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]].

## Notes

`class: free`: the theorem is unconditional; the corruption threshold is a setting, not an object a construction could use as an oracle, so the black-box classes do not apply. `free` is the repo convention for unconditional implications.

- The protocol rests on a [[secret-sharing#verifiable-secret-sharing-vss|VSS]] with negligible error for $t < n/2$, given broadcast — [[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]]
- Perfect security for $t < n/3$ is [[honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88]].
