---
type: reduction
status: draft
title: Four-round OT ⇒ Malicious OT
aliases: []
id: red-four-round-ot-to-malicious-ot-security
kind: implication
hypotheses: [four-round-ot]
conclusion: malicious-ot-security
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: the four-message protocol is an OT protocol with malicious security, and its simulator is unchanged."
---

# Four-round OT ⇒ Malicious OT

## Statement

A four-message plain-model OT protocol with [[oblivious-transfer#malicious-security|malicious security]] and a black-box simulator ([[oblivious-transfer#four-round-ot|four-round OT]]) is an OT protocol with malicious security — folklore.
