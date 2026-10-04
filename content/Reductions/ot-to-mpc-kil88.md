---
type: reduction
status: draft
title: "OT ⇒ MPC"
aliases: []
id: red-ot-to-mpc-kil88
kind: implication
hypotheses: [ot]
conclusion: mpc
class: fully-black-box
model: standard
source:
  - "[[Kil88 - Founding cryptography on oblivious transfer|Kil88]]"
  - "[[GMW87 - How to play ANY mental game|GMW87]]"
security-loss: ""
rationale:
  class: "Kil88's protocol uses OT only as an ideal functionality, with zero-knowledge proofs about the evaluated circuit rather than the OT implementation, and against a real OT protocol the reduction uses any adversary only as an oracle."
---

# OT ⇒ MPC

## Statement

[[oblivious-transfer|OT]] is complete for [[secure-multi-party-computation|MPC]]: in the OT-hybrid model every two-party functionality can be computed with unconditional security against malicious parties — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]]. The $n$-party protocol of [[GMW87 - How to play ANY mental game|GMW87]], with OT for each multiplication gate and OT-based commitments in its zero-knowledge steps, extends this to any number of parties, with security with abort against a malicious dishonest majority.

## Sketch

Parties hold XOR shares of every wire; XOR gates are local, and each AND gate costs one 1-out-of-4 OT per pair of parties. Commitments and zero-knowledge proofs, both obtainable from OT alone — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]] — force malicious parties to follow the protocol on their committed inputs and randomness.

## Notes

- Constant-rate, unconditionally secure MPC in the OT-hybrid model against malicious adversaries corrupting any number of parties, via a compiler that uses an honest-majority protocol as a black box — [[IPS08 - Founding Cryptography on Oblivious Transfer Efficiently|IPS08]].
- The converse holds: OT is itself a two-party functionality, so MPC for every functionality gives OT — standard.
