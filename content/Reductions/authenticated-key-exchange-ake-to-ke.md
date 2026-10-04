---
type: reduction
status: draft
title: "Authenticated key exchange (AKE) ⇒ KE"
aliases: []
id: red-authenticated-key-exchange-ake-to-ke
kind: implication
hypotheses: [authenticated-key-exchange]
conclusion: ke
class: fully-black-box
model: standard
source: folklore
security-loss: ""
rationale:
  class: "The construction is the identity, and the reduction runs the KE eavesdropper unchanged inside an AKE adversary that relays messages faithfully, using it only as an oracle."
---

# Authenticated key exchange (AKE) ⇒ KE

## Statement

Every [[key-exchange#authenticated-key-exchange-ake|authenticated key exchange (AKE)]] protocol is, unchanged, a [[key-exchange|key exchange]] protocol secure against eavesdroppers — folklore. The AKE security game additionally gives the adversary control of the network and requires the parties to authenticate each other; a passive eavesdropper is the AKE adversary that relays every message faithfully.

## Sketch

A KE eavesdropper is run as an AKE adversary that relays one honest session's messages faithfully and tests that session's key.
