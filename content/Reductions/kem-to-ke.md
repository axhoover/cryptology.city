---
type: reduction
status: draft
title: "KEM ⇒ KE"
aliases: []
id: red-kem-to-ke
kind: implication
hypotheses: [kem]
conclusion: ke
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the eavesdropper's distinguishing advantage equals the KEM IND-CPA advantage"
rationale:
  class: "The protocol calls KeyGen, Encap and Decap only as oracles, and the fixed reduction runs the eavesdropper once as an oracle on the KEM challenge."
---

# KEM ⇒ KE

## Statement

A [[key-encapsulation-mechanism|KEM]] $(\KeyGen, \mathsf{Encap}, \mathsf{Decap})$ yields a two-message [[key-exchange|key exchange]] over an authenticated channel: the receiver samples $(\pk, \sk) \gets \KeyGen(1^\secpar)$ and sends $\pk$; the sender runs $(c, k) \gets \mathsf{Encap}(\pk)$, sends $c$, and outputs $k$; the receiver outputs $\mathsf{Decap}(\sk, c)$. If the KEM is [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA-secure]], the protocol is secure against eavesdroppers — folklore.

## Sketch

An eavesdropper's view $(\pk, c, k)$ is the IND-CPA KEM challenge $(\pk, c^*, k_b)$, so a key-exchange distinguisher is forwarded unchanged as a KEM distinguisher.

## Notes

- A bare KEM gives unauthenticated key exchange, not [[key-exchange#authenticated-key-exchange-ake|AKE]], which requires mutual authentication — folklore.
