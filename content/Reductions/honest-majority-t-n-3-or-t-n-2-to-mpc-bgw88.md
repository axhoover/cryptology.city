---
type: reduction
status: draft
title: "Honest majority ($t < n/3$ or $t < n/2$) ⇒ MPC"
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
---

# Honest majority ($t < n/3$ or $t < n/2$) ⇒ MPC

[[secure-multi-party-computation#honest-majority-t-n3-or-t-n2|Honest majority ($t < n/3$ or $t < n/2$)]] implies [[secure-multi-party-computation|MPC]].

## Statement

In the secure-channels model with [[secure-multi-party-computation#honest-majority-t-n3-or-t-n2|honest majority]], every $n$-party functionality has an unconditionally secure [[secure-multi-party-computation|MPC]] protocol: perfect security against a semi-honest adversary corrupting $t < n/2$ parties, and against a malicious adversary corrupting $t < n/3$ parties — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]. With a broadcast channel in addition, statistical security against a malicious adversary corrupting $t < n/2$ parties is achievable — [[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]].

## Sketch

Each party Shamir-shares its input with a degree-$t$ polynomial; addition gates are local on shares, and each multiplication gate is followed by degree reduction and re-randomization. Against malicious parties, inputs are distributed by verifiable secret sharing, and the Reed–Solomon structure of Shamir shares corrects $t < n/3$ corrupted shares.

## Notes

`class: free`: the theorem is unconditional; the corruption threshold is a setting, not an object a construction could use as an oracle, so the black-box classes do not apply. `free` is the repo convention for unconditional implications.

- Independent, concurrent proof of unconditional MPC feasibility for $t < n/3$, with exponentially small error — [[CCD88 - Multiparty Unconditionally Secure Protocols|CCD88]]
- Complete simulation-based proof of the BGW protocol — [[AL17 - A Full Proof of the BGW Protocol for Perfectly Secure Multiparty Computation|AL17]]
- The hyperedge model needs a way to express 'no hypotheses, setting $t < n/3$'; the hypothesis id names only $t < n/3$, though the statement also covers $t < n/2$.
- The flat `mpc` conclusion loses the security level (perfect or statistical) and the adversary model.
