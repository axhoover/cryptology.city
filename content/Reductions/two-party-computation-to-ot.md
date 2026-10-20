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

## Sketch

With empty $\pp$, the protocol for $f((x_0, x_1), c) = (\bot, x_c)$ is correct as an OT, and semi-honest privacy makes the sender's view simulatable from $(x_0, x_1)$, hence indistinguishable for $c = 0$ and $c = 1$ ([[oblivious-transfer#receiver-privacy|receiver privacy]]), and the receiver's view simulatable from $(c, x_c)$, hence indistinguishable for two sender pairs that agree on $x_c$ ([[oblivious-transfer#sender-privacy|sender privacy]]). Against malicious adversaries, security with abort for $f$ gives [[oblivious-transfer#malicious-security|malicious OT security]] once the honest receiver answers an abort with the $c$-th entry of a fixed default pair: the simulator for a corrupted sender receives only $\bot$ from the trusted party, so its decision to abort does not depend on $c$ and can be replaced by submitting the default pair, and a corrupted receiver's abort withholds only the sender's output $\bot$ — standard.

## Notes

- The converse is [[ot-to-mpc-kil88|OT ⇒ MPC]], so OT is complete for secure computation — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].
