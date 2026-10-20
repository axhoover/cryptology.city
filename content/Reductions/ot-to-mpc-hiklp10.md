---
type: reduction
status: draft
title: "Semi-honest OT ⇒ MPC (HIKLP)"
aliases: []
id: red-ot-to-mpc-hiklp10
kind: implication
hypotheses: [ot]
conclusion: mpc
class: fully-black-box
model: standard
source:
  - "[[HIKLP10 - Black-Box Constructions of Protocols for Secure Computation|HIKLP10]]"
security-loss: ""
rationale:
  class: "HIKLP10 compile semi-honest OT into malicious OT by a fully black-box reduction and plug it into protocols that use OT only as an ideal functionality, so the construction calls the semi-honest protocol and the reduction calls the adversary only as oracles."
---

# Semi-honest OT ⇒ MPC (HIKLP)

## Statement

If a semi-honest secure [[oblivious-transfer|OT]] protocol exists, every functionality has a stand-alone [[secure-multi-party-computation|MPC]] protocol secure with abort against a malicious adversary corrupting any number of parties, which uses the OT protocol only as a black box — [[HIKLP10 - Black-Box Constructions of Protocols for Secure Computation|HIKLP10]]. The protocol combines a fully black-box compiler from semi-honest to [[oblivious-transfer#malicious-security|malicious]] OT with protocols in the OT-hybrid model — [[HIKLP10 - Black-Box Constructions of Protocols for Secure Computation|HIKLP10]].

## Notes

- HIKLP10 combine the compilers of [[IKLP06 - Black-box constructions for secure computation|IKLP06]], from enhanced trapdoor permutations or homomorphic encryption, and of [[Hai08 - Semi-honest to Malicious Oblivious Transfer - The Black-Box Way|Hai08]], from semi-honest OT — [[HIKLP10 - Black-Box Constructions of Protocols for Secure Computation|HIKLP10]].
- The GMW compiler gives the same implication non-black-box, by proving in zero knowledge that every message follows the protocol: [[semi-honest-security-and-owf-to-mpc-gmw87|semi-honest MPC + OWF ⇒ MPC]] — [[GMW87 - How to play ANY mental game|GMW87]].
