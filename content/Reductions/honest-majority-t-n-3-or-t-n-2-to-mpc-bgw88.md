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
---

# Honest majority ($t < n/3$) ⇒ MPC

[[secure-multi-party-computation#honest-majority-t-n3|Honest majority ($t < n/3$)]] implies [[secure-multi-party-computation|MPC]].

## Statement

In the secure-channels model with [[secure-multi-party-computation#honest-majority-t-n3|honest majority $t < n/3$]], every $n$-party functionality has an [[secure-multi-party-computation|MPC]] protocol that is perfectly secure against a malicious adversary corrupting $t < n/3$ parties — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]].

## Sketch

Each party Shamir-shares its input with a degree-$t$ polynomial; addition gates are local on shares, and each multiplication gate is followed by degree reduction and re-randomization. Against malicious parties, inputs are distributed by verifiable secret sharing, and the Reed–Solomon structure of Shamir shares corrects $t < n/3$ corrupted shares.

Each input is VSS-shared with a degree-$t$ polynomial; addition gates are local. For a multiplication gate each party VSS-shares the product of its two shares and the parties verify it, then take the Lagrange combination of these sub-sharings, which is a degree-$t$ sharing of the product. Reconstructing a degree-$t$ sharing with $t$ corrupted shares is Reed-Solomon decoding, which needs $n \ge 3t + 1$.

## Notes

`class: free`: the theorem is unconditional; the corruption threshold is a setting, not an object a construction could use as an oracle, so the black-box classes do not apply. `free` is the repo convention for unconditional implications.

- Independent, concurrent proof of unconditional MPC feasibility for $t < n/3$, with exponentially small error — [[CCD88 - Multiparty Unconditionally Secure Protocols|CCD88]]
- Complete simulation-based proof of the BGW protocol — [[AL17 - A Full Proof of the BGW Protocol for Perfectly Secure Multiparty Computation|AL17]]
- Perfect security against a semi-honest adversary corrupting $t < n/2$ parties, in the same model — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]
- The malicious $t < n/2$ case, with statistical security and a broadcast channel, is [[honest-majority-t-lt-n-over-2-to-mpc-rb89]].
- The hyperedge model needs a way to express 'no hypotheses, setting $t < n/3$'; the hypothesis id stands in for the setting.
- The flat `mpc` conclusion loses the security level (perfect or statistical) and the adversary model.
