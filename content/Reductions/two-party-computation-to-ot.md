---
type: reduction
status: draft
title: Semi-honest 2PC ⇒ OT
aliases: []
id: red-two-party-computation-to-ot
kind: implication
hypotheses: [semi-honest-two-party-computation]
conclusion: ot
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The OT protocol is the general protocol run on the OT functionality, and every attack on it is an attack on that protocol."
---

# Semi-honest 2PC ⇒ OT

## Statement

A protocol that securely computes every polynomial-time two-party functionality against semi-honest adversaries ([[secure-multi-party-computation#semi-honest-two-party-computation|semi-honest 2PC]]) is, run on the functionality $((x_0, x_1), c) \mapsto (\bot, x_c)$, a semi-honest [[oblivious-transfer|OT]] protocol — folklore.

## Sketch

With $\pp$ the protocol's reference string, empty in the plain model, the protocol for $f((x_0, x_1), c) = (\bot, x_c)$ is correct as an OT, and semi-honest security makes the sender's view simulatable from $(x_0, x_1)$, hence indistinguishable for $c = 0$ and $c = 1$ ([[oblivious-transfer#receiver-privacy|receiver privacy]]), and the receiver's view simulatable from $(c, x_c)$, hence indistinguishable for two sender pairs that agree on $x_c$ ([[oblivious-transfer#sender-privacy|sender privacy]]) — standard.

## Notes

- Against malicious adversaries the same construction gives [[oblivious-transfer#malicious-security|maliciously secure OT]] ([[two-party-computation-to-malicious-ot-security|2PC ⇒ malicious OT]]) — folklore.
- Conversely, semi-honest OT and a garbling scheme give semi-honest 2PC ([[gc-and-ot-to-two-party-computation-2pc|Yao's protocol]]) — [[Yao86 - How to Generate and Exchange Secrets|Yao86]] — and ideal OT gives 2PC secure against malicious parties unconditionally ([[ot-to-mpc-kil88|ideal OT ⇒ 2PC]]) — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].
