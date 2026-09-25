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

`class: fully-black-box`: The construction is the identity: an AKE protocol has the KE syntax. The reduction runs any passive KE eavesdropper unchanged as an AKE adversary that relays one honest session faithfully; both are fixed and oracle-only: the RTV04 fully-black-box shape.

- No slug 'authenticated-key-exchange' exists in content/; the hypothesis resolves via the section anchor on key-exchange.
