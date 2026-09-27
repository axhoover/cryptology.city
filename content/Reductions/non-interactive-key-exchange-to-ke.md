---
type: reduction
status: draft
title: "NIKE ⇒ KE"
aliases: []
id: red-non-interactive-key-exchange-to-ke
kind: implication
hypotheses: [non-interactive-key-exchange]
conclusion: ke
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the NIKE challenge is forwarded unchanged"
---

# NIKE ⇒ KE

[[key-exchange#non-interactive-key-exchange-nike|Non-interactive key exchange (NIKE)]] implies [[key-exchange|KE]].

## Statement

Let $(\Gen, \mathsf{Combine})$ be a [[key-exchange#non-interactive-key-exchange-nike|NIKE]]. In the one-round protocol where $A$ and $B$ each sample $(\pk_A, \sk_A), (\pk_B, \sk_B) \gets \Gen(1^\secpar)$, send their public keys, and output $k = \mathsf{Combine}(\sk_A, \pk_B) = \mathsf{Combine}(\sk_B, \pk_A)$, the transcript is $(\pk_A, \pk_B)$, so the protocol is a [[key-exchange|KE]] secure against eavesdroppers — folklore.

## Sketch

A distinguisher between $(\pk_A, \pk_B, k)$ and $(\pk_A, \pk_B, u)$ for $u \getsr \calK$ is verbatim a NIKE distinguisher for one honest pair.

## Notes

`class: fully-black-box`: the protocol calls $\Gen$ and $\mathsf{Combine}$ only as oracles, and the fixed reduction forwards its NIKE challenge $(\pk_A, \pk_B, k)$ as transcript and candidate key and runs the eavesdropper once as an oracle.

- Instantiated with the Diffie–Hellman NIKE ([[ddh-to-non-interactive-key-exchange-nike]]), this is the Diffie–Hellman protocol of [[DH76 - New Directions in Cryptography|DH76]].
