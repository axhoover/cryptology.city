---
type: reduction
status: draft
title: Semi-honest OT ⇒ Malicious OT (Haitner)
aliases: []
id: red-ot-to-malicious-ot-security-hai08
kind: implication
hypotheses: [ot]
conclusion: malicious-ot-security
class: fully-black-box
model: standard
source:
  - "[[Hai08 - Semi-honest to Malicious Oblivious Transfer - The Black-Box Way|Hai08]]"
security-loss: "polynomial"
rationale:
  class: "Hai08 construct malicious-secure OT that calls the semi-honest protocol only as a black box, with a black-box security reduction."
---

# Semi-honest OT ⇒ Malicious OT (Haitner)

## Statement

A semi-honest secure [[oblivious-transfer|OT]] protocol yields an OT protocol secure against [[oblivious-transfer#malicious-security|malicious]] adversaries by a black-box construction — [[Hai08 - Semi-honest to Malicious Oblivious Transfer - The Black-Box Way|Hai08]].

## Notes

- The GMW compiler gives the same implication non-black-box, by proving in zero knowledge that every message follows the protocol, which needs the code of the semi-honest protocol: [[semi-honest-security-and-owf-to-mpc-gmw87|semi-honest MPC + OWF ⇒ MPC]] — [[GMW87 - How to play ANY mental game|GMW87]].
- Combined with protocols in the OT-hybrid model ([[ot-to-mpc-kil88|OT ⇒ MPC]]), this gives malicious-secure computation of every functionality using semi-honest OT only as a black box — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]], [[IPS08 - Founding Cryptography on Oblivious Transfer Efficiently|IPS08]].
