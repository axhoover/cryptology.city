---
type: reduction
status: draft
title: "KE with bit-string keys ⇒ KE"
aliases: []
id: red-bit-string-key-exchange-to-ke
kind: implication
hypotheses: [bit-string-key-exchange]
conclusion: ke
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the protocol itself, and the reduction forwards the eavesdropper unchanged."
---

# KE with bit-string keys ⇒ KE

## Statement

A two-party [[key-exchange#key-exchange-with-bit-string-keys|key exchange with bit-string keys]] is a [[key-exchange|key exchange]], with the same protocol, correctness error and eavesdropper advantage — folklore.
