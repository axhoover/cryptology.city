---
type: reduction
status: draft
title: Two-round OT ⇒ OT
aliases: []
id: red-two-round-ot-to-ot
kind: implication
hypotheses: [two-round-ot]
conclusion: ot
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: the protocol and its privacy games are unchanged."
---

# Two-round OT ⇒ OT

## Statement

A two-message semi-honest OT protocol ([[oblivious-transfer#two-round-ot|two-round OT]]) is a semi-honest [[oblivious-transfer|OT]] protocol, with the same [[oblivious-transfer#sender-privacy|sender privacy]] and [[oblivious-transfer#receiver-privacy|receiver privacy]] — folklore.
