---
type: reduction
status: draft
title: "Honest majority ($t < n/3$) ⇒ MPC"
aliases: []
id: red-honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88
kind: implication
hypotheses: [honest-majority-t-lt-n-over-3]
conclusion: mpc
class: free
model: standard
source:
  - "[[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]"
security-loss: ""
rationale:
  class: "The theorem is unconditional and its hypothesis is a corruption threshold, not a primitive a construction could use as an oracle, so no black-box class applies."
---

# Honest majority ($t < n/3$) ⇒ MPC

## Statement

In the secure-channels model, every $n$-party functionality has an [[secure-multi-party-computation|MPC]] protocol that is perfectly secure against a malicious adversary corrupting any $t < n/3$ of the parties ([[secure-multi-party-computation#honest-majority-t--n3|honest majority]]) — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]].

## Sketch

Each party Shamir-shares its input with a degree-$t$ polynomial; addition gates are local, and at a multiplication gate each party shares the product of its two shares and the parties take the Lagrange combination of these sub-sharings, a degree-$t$ sharing of the product. Against malicious parties every sharing is verifiable and every product sharing is checked, and opening a degree-$t$ sharing with $t$ corrupted shares is Reed–Solomon decoding, which needs $n \ge 3t + 1$.

## Notes

- Against a semi-honest adversary, perfect security holds for $t < n/2$ in the same model; both thresholds are optimal for perfect security — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]].
- Unconditionally secure MPC for $t < n/3$ with exponentially small error was obtained concurrently and independently — [[CCD88 - Multiparty Unconditionally Secure Protocols|CCD88]].
- The BGW protocol has a complete simulation-based proof — [[AL17 - A Full Proof of the BGW Protocol for Perfectly Secure Multiparty Computation|AL17]].
- Against a malicious adversary corrupting $t < n/2$ parties, statistical security is achievable given a broadcast channel — [[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]] ([Honest majority ($t < n/2$) ⇒ MPC](honest-majority-t-lt-n-over-2-to-mpc-rb89)).
