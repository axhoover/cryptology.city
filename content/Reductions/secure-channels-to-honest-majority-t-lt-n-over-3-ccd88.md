---
type: reduction
status: draft
title: "Secure channels ⇒ MPC with honest majority ($t < n/3$) (Chaum–Crépeau–Damgård)"
aliases: []
id: red-secure-channels-to-honest-majority-t-lt-n-over-3-ccd88
kind: implication
hypotheses: [secure-channels]
conclusion: honest-majority-t-lt-n-over-3
class: free
model: standard
source:
  - "[[CCD88 - Multiparty Unconditionally Secure Protocols|CCD88]]"
security-loss: ""
rationale:
  class: "The theorem is unconditional and information-theoretic in the secure-channels model, so there is no hardness assumption for a black-box reduction to break."
---

# Secure channels ⇒ MPC with honest majority ($t < n/3$) (Chaum–Crépeau–Damgård)

## Statement

If each pair of parties can communicate secretly ([[interactive-protocol#secure-channels|secure channels]]), every $n$-party functionality has a protocol secure against a malicious adversary corrupting any $t < n/3$ of the parties, with unconditional, statistical security and [[secure-multi-party-computation#honest-majority-t--n3|guaranteed output delivery]]: once the parties have committed to their inputs, fewer than a third of them cannot stop the protocol from completing correctly — [[CCD88 - Multiparty Unconditionally Secure Protocols|CCD88]]. No complexity assumption is used.

## Notes

- The result was obtained concurrently with a perfectly secure protocol for the same threshold ([Secure channels ⇒ MPC with honest majority ($t < n/3$) (BGW)](honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88)) — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]].
- For $t < n/3$ the broadcast channel can be emulated over the point-to-point channels in time polynomial in $n$, so none is needed — [[GM93 - Fully Polynomial Byzantine Agreement in t+1 Rounds|GM93]].
