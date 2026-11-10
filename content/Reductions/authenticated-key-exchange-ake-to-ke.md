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
  class: "The protocol has each party run KeyGen and send its public key, then runs one initiator and one responder instance of the AKE protocol, all only as oracles, and the fixed reduction relays one session between two uncorrupted parties and runs the eavesdropper once as an oracle on their public keys, the session's messages and the Test answer."
---

# Authenticated key exchange (AKE) ⇒ KE

## Statement

Let $\Pi$ be a secure [[key-exchange#authenticated-key-exchange-ake|authenticated key exchange (AKE)]] protocol with long-term key-generation algorithm $\KeyGen$. The protocol in which $A$ and $B$ sample $(\pk_A, \sk_A), (\pk_B, \sk_B) \gets \KeyGen(1^\secpar)$, send their public keys, and run one session of $\Pi$, $A$ as an initiator instance with intended peer $B$ and $B$ as a responder instance, each outputting its session key, is a [[key-exchange|key exchange]] secure against eavesdroppers whose parties output the same key except with negligible probability — folklore.

## Sketch

A KE eavesdropper is run as an AKE adversary that relays one honest session's messages faithfully and tests that session's key.

## Notes

- The AKE security game additionally gives the adversary control of the network; the reduction uses only an adversary that delivers messages unchanged.
