---
type: reduction
status: draft
title: 2PC ⇒ Malicious OT
aliases: []
id: red-two-party-computation-to-malicious-ot-security
kind: implication
hypotheses: [two-party-computation]
conclusion: malicious-ot-security
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The OT protocol is the general protocol run on the OT functionality with a default sender input after an abort, and its simulators are those of the general protocol."
---

# 2PC ⇒ Malicious OT

## Statement

A protocol that securely computes every polynomial-time two-party functionality with abort against a malicious adversary ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]), run on the functionality $((x_0, x_1), c) \mapsto (\bot, x_c)$ with the honest receiver outputting the $c$-th entry of a fixed default pair after an abort, is an OT protocol with [[oblivious-transfer#malicious-security|malicious security]] — folklore.

## Sketch

A corrupted receiver's abort withholds only the sender's output $\bot$, so the 2PC simulator serves as the OT simulator. The simulator for a corrupted sender receives only $\bot$ from the trusted party before deciding whether to abort, so that decision does not depend on $c$ and can be replaced by submitting the default pair — standard.
