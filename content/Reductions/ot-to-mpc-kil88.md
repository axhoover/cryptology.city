---
type: reduction
status: draft
title: "Ideal OT ⇒ 2PC (Kilian)"
aliases: []
id: red-ideal-ot-to-two-party-computation-kil88
kind: implication
hypotheses: [ideal-ot]
conclusion: two-party-computation
class: free
model: standard
source:
  - "[[Kil88 - Founding cryptography on oblivious transfer|Kil88]]"
security-loss: ""
rationale:
  class: "The theorem is unconditional: the protocol is statistically secure given ideal OT calls, so there is no hardness assumption for a black-box reduction to break."
---

# Ideal OT ⇒ 2PC (Kilian)

## Statement

[[oblivious-transfer|OT]] is complete for secure two-party computation: in the OT-hybrid model, where the two parties may call an [[oblivious-transfer#ideal-ot-functionality|ideal OT functionality]] any number of times, every two-party functionality has a protocol that is statistically secure with abort against a malicious adversary corrupting either party ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]), with no complexity assumption — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].

## Sketch

The parties hold XOR shares of every wire; XOR gates are local, and each AND gate costs one 1-out-of-4 OT on bits, which suffices against semi-honest parties — standard. A zero-knowledge proof cannot certify the inputs a party gives an ideal OT, so against malicious parties Kil88 builds commitments from OT and makes each transfer consistent with committed inputs — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].

## Notes

- Kil88 works with Rabin's OT, which is information-theoretically equivalent to 1-out-of-2 OT ([[rabin-ot-to-ot|Rabin OT ⇔ OT]]) — [[Cre87 - Equivalence Between Two Flavours of Oblivious Transfers|Cre87]].
- Calling a protocol that [[oblivious-transfer#uc-secure-ot|UC-realizes OT]] in place of the ideal functionality preserves security, by the composition theorem, in the common reference string model — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].
- Efficiency: in the OT-hybrid model there is a statistically UC-secure two-party protocol with communication $O(s) + \poly(\secpar, d, \log s)$ and $O(d)$ rounds for a circuit of size $s$ and depth $d$, which extends to any constant number of parties; the compiler uses an honest-majority protocol and a semi-honest OT-hybrid protocol as black boxes, and with a PRG it gives constant-round UC MPC for any number of parties ([[ideal-ot-and-prg-to-uc-mpc-ips08|ideal OT + PRG ⇒ UC MPC]]) — [[IPS08 - Founding Cryptography on Oblivious Transfer Efficiently|IPS08]].
- Rounds: Kilian's reduction uses OT alone, with a number of rounds linear in the circuit's depth; Yao-based cut-and-choose gives a black-box reduction to OT with rounds linear in a statistical parameter, and a constant-round one given also perfectly hiding commitments ([[malicious-ot-security-to-two-party-computation-lp07|malicious OT ⇒ 2PC]]) — [[LP07 - An Efficient Protocol for Secure Two-Party Computation in the Presence of Malicious Adversaries|LP07]].
- The converse holds: OT is a two-party functionality, so 2PC gives maliciously secure OT ([[two-party-computation-to-malicious-ot-security|2PC ⇒ malicious OT]]) — folklore.
- From computational OT: semi-honest OT gives maliciously secure OT through [[ot-to-malicious-ot-security-hai08|OT ⇒ malicious OT]] — [[Hai08 - Semi-honest to Malicious Oblivious Transfer - The Black-Box Way|Hai08]] — and stand-alone maliciously secure MPC through [[ot-to-mpc-hiklp10|semi-honest OT ⇒ MPC]] — [[HIKLP10 - Black-Box Constructions of Protocols for Secure Computation|HIKLP10]].
