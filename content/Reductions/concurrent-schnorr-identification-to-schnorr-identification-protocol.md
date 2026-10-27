---
type: reduction
status: draft
title: "Schnorr identification under concurrent attack ⇒ Schnorr identification protocol"
aliases: []
id: red-concurrent-schnorr-identification-to-schnorr-identification-protocol
kind: implication
hypotheses: [concurrent-schnorr-identification]
conclusion: schnorr-identification-protocol
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the protocol, and the reduction runs any passive impersonator as an oracle, producing its transcripts by playing the honest verifier in prover sessions."
---

# Schnorr identification under concurrent attack ⇒ Schnorr identification protocol

## Statement

If the [[identification-scheme#schnorr-identification-under-concurrent-attack|Schnorr identification protocol]] is secure against impersonation under concurrent attack, it is [[identification-scheme#schnorr-identification-protocol|secure against impersonation under passive attack]], with the same advantage — folklore.

## Sketch

A concurrent attacker simulates the passive attacker's transcript oracle by running prover sessions one at a time as the honest verifier, with uniform challenges, and then forwards the impersonation phase unchanged.
