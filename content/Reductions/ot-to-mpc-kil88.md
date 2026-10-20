---
type: reduction
status: draft
title: "OT ⇒ MPC"
aliases: []
id: red-ot-to-mpc-kil88
kind: implication
hypotheses: [malicious-ot-security]
conclusion: mpc
class: fully-black-box
model: standard
source:
  - "[[Kil88 - Founding cryptography on oblivious transfer|Kil88]]"
  - "[[IPS08 - Founding Cryptography on Oblivious Transfer Efficiently|IPS08]]"
security-loss: ""
rationale:
  class: "Kil88 and IPS08 use OT only as an ideal functionality, and by the composition theorem a maliciously secure OT protocol replaces it, with the reduction using the adversary only as an oracle."
---

# OT ⇒ MPC

## Statement

[[oblivious-transfer#malicious-security|OT]] is complete for [[secure-multi-party-computation|MPC]]: in the OT-hybrid model every two-party functionality can be computed with unconditional security against malicious parties — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]]. In the OT-hybrid model, every $n$-party functionality can be computed with statistical security with abort against a malicious adversary corrupting any number of parties — [[IPS08 - Founding Cryptography on Oblivious Transfer Efficiently|IPS08]]. A maliciously secure OT protocol instantiates the hybrid.

## Sketch

Parties hold XOR shares of every wire; XOR gates are local, and each AND gate costs one 1-out-of-4 OT per pair of parties. This suffices against semi-honest parties. A zero-knowledge proof cannot certify the inputs a party gives an ideal OT, so against malicious parties Kil88 builds commitments from OT and makes each transfer consistent with committed inputs — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].

## Notes

- Constant-rate two-party computation in the OT-hybrid model, statistically UC-secure against malicious adversaries, with communication $O(s) + \poly(\secpar, d, \log s)$ for a circuit of size $s$ and depth $d$, extending to any constant number of parties, via a compiler that uses an honest-majority protocol as a black box — [[IPS08 - Founding Cryptography on Oblivious Transfer Efficiently|IPS08]].
- The converse holds: OT is itself a two-party functionality, so MPC for every functionality gives OT — standard.
- Semi-honest OT gives maliciously secure OT through [[ot-to-malicious-ot-security-hai08|OT ⇒ malicious OT]] — [[Hai08 - Semi-honest to Malicious Oblivious Transfer - The Black-Box Way|Hai08]].
- Efficiency: the number of rounds of the GMW protocol grows with the multiplicative depth of the circuit, while [[gc-and-ot-to-two-party-computation-2pc|Yao's garbled-circuit protocol]] has a constant number — standard.
