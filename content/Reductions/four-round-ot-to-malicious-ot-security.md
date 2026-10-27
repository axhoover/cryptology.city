---
type: reduction
status: draft
title: Four-round OT ⇒ Malicious OT with expected-time simulation
aliases: []
id: red-four-round-ot-to-malicious-ot-with-expected-time-simulation
kind: implication
hypotheses: [four-round-ot]
conclusion: malicious-ot-with-expected-time-simulation
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: the four-message protocol is an OT protocol with malicious security, and its simulator, which runs in expected polynomial time, is unchanged."
---

# Four-round OT ⇒ Malicious OT with expected-time simulation

## Statement

A four-message plain-model OT protocol with [[oblivious-transfer#malicious-security-with-expected-polynomial-time-simulation|malicious security with expected polynomial-time simulation]] and a black-box simulator ([[oblivious-transfer#four-round-ot|four-round OT]]) is an OT protocol with [[oblivious-transfer#malicious-security-with-expected-polynomial-time-simulation|malicious security with expected polynomial-time simulation]] — folklore.
