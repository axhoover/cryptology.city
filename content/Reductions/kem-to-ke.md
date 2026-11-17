---
type: reduction
status: draft
title: "KEM ⇒ KE"
aliases: []
id: red-kem-to-ke
kind: implication
hypotheses: [ind-cpa-kem]
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

A [[key-encapsulation-mechanism|KEM]] $(\KeyGen, \Encap, \Decap)$ yields a two-message [[key-exchange|key exchange]] over an authenticated channel: the receiver samples $(\pk, \sk) \gets \KeyGen(1^\secpar)$ and sends $\pk$; the sender runs $(c, k) \gets \Encap(\pk)$, sends $c$, and outputs $k$; the receiver outputs $\Decap(\sk, c)$. If the KEM is [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA-secure]], the protocol is secure against eavesdroppers, and it is $(1-\varepsilon)$-correct when the KEM is — folklore.

## Sketch

The eavesdropper's input, the transcript $(\pk, c)$ with the real or a uniform key, is the IND-CPA KEM challenge $(\pk, c^*, k_b)$, so a key-exchange distinguisher is forwarded unchanged as a KEM distinguisher.

## Notes

- A bare KEM exchange is not a secure [[key-exchange#authenticated-key-exchange-ake|AKE]]: an active adversary sends its own public key or encapsulation in an honest party's name, and the accepting instance is fresh — folklore.
