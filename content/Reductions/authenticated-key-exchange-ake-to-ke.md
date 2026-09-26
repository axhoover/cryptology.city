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
---

# Authenticated key exchange (AKE) ⇒ KE

[[key-exchange#authenticated-key-exchange-ake|Authenticated key exchange (AKE)]] implies [[key-exchange|KE]].

## Statement

An [[key-exchange#authenticated-key-exchange-ake|authenticated key exchange (AKE)]] protocol is a [[key-exchange|key exchange]] protocol whose security game additionally gives the adversary control of the network and requires the parties to authenticate each other. A passive eavesdropper is an AKE adversary that relays every message faithfully, so every AKE protocol is, unchanged, a KE protocol — folklore.

## Sketch

The construction is the identity; a KE eavesdropper is run as an AKE adversary that relays one honest session's messages faithfully and tests that session's key.

## Notes

`class: fully-black-box`: the construction is the identity and the reduction runs the KE eavesdropper unchanged inside a relaying AKE adversary; both are fixed and oracle-only.

- `authenticated-key-exchange` has no page; it resolves as a variant (section anchor) of [[key-exchange]].
