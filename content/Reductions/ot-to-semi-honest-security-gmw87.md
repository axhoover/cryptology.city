---
type: reduction
status: draft
title: "Semi-honest OT ⇒ Semi-honest MPC (GMW)"
aliases: []
id: red-ot-to-semi-honest-security-gmw87
kind: implication
hypotheses: [ot]
conclusion: semi-honest-security
class: fully-black-box
model: standard
source:
  - "[[GMW87 - How to play ANY mental game|GMW87]]"
  - "[[Gol04 - Foundations of Cryptography Basic Applications|Gol04]]"
security-loss: "polynomial: a hybrid over the OT invocations, $n(n-1)$ per AND gate; in the OT-hybrid model the protocol is perfectly secure"
rationale:
  class: "The protocol calls the OT protocol only through its next-message functions, and the hybrid reduction turns any view distinguisher, used as an oracle, into a distinguisher for an OT privacy game."
---

# Semi-honest OT ⇒ Semi-honest MPC (GMW)

## Statement

If a semi-honest [[oblivious-transfer|OT]] protocol exists, every polynomial-time $n$-party functionality has a protocol that is [[secure-multi-party-computation#semi-honest-security|secure against semi-honest adversaries]] corrupting any $t \le n - 1$ parties — [[GMW87 - How to play ANY mental game|GMW87]]. The full proof is in [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]]: in the OT-hybrid model the protocol is perfectly secure against semi-honest adversaries, and the composition theorem for the semi-honest model replaces each ideal call by the OT protocol — [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]].

## Sketch

The parties XOR-share every wire, so XOR gates are local. For an AND gate with $a = \bigoplus_i a_i$ and $b = \bigoplus_i b_i$, for each ordered pair $i \neq j$ party $P_i$ picks a uniform bit $r$ and acts as OT sender on $(r, r \oplus a_i)$ while $P_j$ selects with $b_j$, so the two hold XOR shares $r$ and $r \oplus a_i b_j$ of $a_i b_j$; each party XORs $a_i b_i$ with its shares of the cross terms, and output shares are sent to the output parties — standard.

## Notes

- Efficiency: each AND gate costs $n(n-1)$ 1-out-of-2 OTs on bits, or equivalently $n(n-1)/2$ 1-out-of-4 OTs on bits, and XOR gates are free; the AND gates of one layer run in parallel, so the protocol has $O(d)$ rounds for AND-depth $d$ given a constant-round OT — standard.
- Security with abort against malicious adversaries does not imply semi-honest security in general — [[HL10 - A Note on the Relation between the Definitions of Security for Semi-Honest and Malicious Adversaries|HL10]] — so [[ot-to-mpc-hiklp10|semi-honest OT ⇒ MPC]] — [[HIKLP10 - Black-Box Constructions of Protocols for Secure Computation|HIKLP10]] — does not give this result.
- With one-way functions, the GMW compiler turns these protocols into protocols secure with abort against malicious adversaries ([[semi-honest-security-and-owf-to-mpc-gmw87|semi-honest MPC + OWF ⇒ MPC]]) — [[GMW87 - How to play ANY mental game|GMW87]].
