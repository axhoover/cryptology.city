---
type: reduction
status: draft
title: "KEM ⇒ KE with bit-string keys"
aliases: []
id: red-kem-to-ke
kind: implication
hypotheses: [ind-cpa-kem]
conclusion: bit-string-key-exchange
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the eavesdropper's distinguishing advantage equals the KEM IND-CPA advantage"
rationale:
  class: "The protocol calls KeyGen, Encap and Decap only as oracles, and the fixed reduction runs the eavesdropper once as an oracle on the KEM challenge."
---

# KEM ⇒ KE with bit-string keys

## Statement

A [[key-encapsulation-mechanism|KEM]] $(\KeyGen, \Encap, \Decap)$ yields a two-message [[key-exchange|key exchange]] over an authenticated channel: the receiver $B$ samples $(\pk, \sk) \gets \KeyGen(1^\secpar)$ and sends $\pk$; the sender $A$ runs $(c, k) \gets \Encap(\pk)$, sends $c$, and outputs $k_A := k$; $B$ outputs $k_B := \Decap(\sk, c)$ if that value lies in $\bits^{\ell(\secpar)}$, and $0^{\ell(\secpar)}$ otherwise, in particular on $\bot$. Since $k_A = k_B$ whenever $\Decap(\sk, c) = k$, the protocol is $(1-\varepsilon)$-correct when the KEM is, and if the KEM is [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA-secure]], it is secure against eavesdroppers — folklore. Its key space is the KEM's, $\bits^{\ell(\secpar)}$ with $\secpar \le \ell(\secpar) \le \poly(\secpar)$, so it is a [[key-exchange#key-exchange-with-bit-string-keys|key exchange with bit-string keys]].

## Sketch

The key-exchange challenge, the transcript $(\pk, c)$ with $k_A = k$ or a uniform key in $\bits^{\ell(\secpar)}$, is exactly the IND-CPA KEM challenge $(\pk, c^*, k_b)$, so a key-exchange distinguisher is forwarded unchanged as a KEM distinguisher.

## Notes

- A bare KEM exchange is not a secure [[key-exchange#authenticated-key-exchange-ake|AKE]]: an active adversary sends its own public key or encapsulation in an honest party's name, and the accepting instance is fresh — folklore.
