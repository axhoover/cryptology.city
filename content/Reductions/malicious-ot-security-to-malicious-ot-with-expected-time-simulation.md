---
type: reduction
status: draft
title: Malicious OT ⇒ Malicious OT with expected-time simulation
aliases: []
id: red-malicious-ot-security-to-malicious-ot-with-expected-time-simulation
kind: implication
hypotheses: [malicious-ot-security]
conclusion: malicious-ot-with-expected-time-simulation
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: a simulator running in strict polynomial time runs in expected polynomial time, so the protocol and its simulator are unchanged."
---

# Malicious OT ⇒ Malicious OT with expected-time simulation

## Statement

An OT protocol with [[oblivious-transfer#malicious-security|malicious security]] has [[oblivious-transfer#malicious-security-with-expected-polynomial-time-simulation|malicious security with expected polynomial-time simulation]]: a simulator running in strict polynomial time runs in expected polynomial time — folklore.
