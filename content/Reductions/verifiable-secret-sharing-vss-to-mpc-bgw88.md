---
type: reduction
status: draft
title: "Verifiable secret sharing (VSS) ⇒ MPC"
aliases: []
id: red-verifiable-secret-sharing-vss-to-mpc-bgw88
kind: implication
hypotheses: [verifiable-secret-sharing]
conclusion: mpc
class: unstated
model: standard
source:
  - "[[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]"
security-loss: ""
---

# Verifiable secret sharing (VSS) ⇒ MPC

[[secret-sharing#verifiable-secret-sharing-vss|Verifiable secret sharing (VSS)]] implies perfectly secure [[secure-multi-party-computation|MPC]] against $t < n/3$ malicious corruptions.

## Statement

[[secret-sharing#verifiable-secret-sharing-vss|Verifiable secret sharing]] of degree-$t$ Shamir sharings, with a sub-protocol that multiplies two shared values and returns a degree-$t$ sharing of the product, gives perfectly secure [[secure-multi-party-computation|MPC]] for every function against a malicious adversary corrupting $t < n/3$ of the $n$ parties, over pairwise private channels — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]].

## Sketch

Each input is VSS-shared with a degree-$t$ polynomial; addition gates are local. For a multiplication gate each party VSS-shares the product of its two shares and the parties verify it, then take the Lagrange combination of these sub-sharings, which is a degree-$t$ sharing of the product. Reconstructing a degree-$t$ sharing with $t$ corrupted shares is Reed-Solomon decoding, which needs $n \ge 3t + 1$.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant; the protocol uses one specific VSS (bivariate polynomials), not an arbitrary VSS as an oracle.

- With a broadcast channel and statistical rather than perfect security, VSS with negligible error raises the threshold to $t < n/2$ — [[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]]
- The corruption threshold $t < n/3$ is a hypothesis of this result that the hyperedge does not carry; [[honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88]] records it as a separate edge.
