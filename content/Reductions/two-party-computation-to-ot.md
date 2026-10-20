---
type: reduction
status: draft
title: 2PC ⇒ OT
aliases: []
id: red-two-party-computation-to-ot
kind: implication
hypotheses: [two-party-computation]
conclusion: ot
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The OT protocol is the general protocol run on the OT functionality, and every attack on it is an attack on that protocol."
---

# 2PC ⇒ OT

## Statement

A protocol that securely computes every polynomial-time two-party functionality against [[secure-multi-party-computation#privacy-semi-honest|semi-honest]] adversaries ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]) is, run on the functionality $((x_0, x_1), c) \mapsto (\bot, x_c)$, a semi-honest [[oblivious-transfer|OT]] protocol; the same holds against malicious adversaries — folklore.

## Notes

- The converse is [[ot-to-mpc-kil88|OT ⇒ MPC]], so OT is complete for secure computation — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].
