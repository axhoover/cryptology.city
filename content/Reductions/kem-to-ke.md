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
---

# KEM ⇒ KE

[[key-encapsulation-mechanism|KEM]] implies [[key-exchange|KE]].

## Statement

A [[key-encapsulation-mechanism|KEM]] yields a two-message [[key-exchange|key exchange]] over an authenticated channel: the receiver samples $(\pk, \sk) \gets \KeyGen(1^\secpar)$ and sends $\pk$; the sender runs $(c, k) \gets \mathsf{Encap}(\pk)$, sends $c$, and outputs $k$; the receiver outputs $\mathsf{Decap}(\sk, c)$. Indistinguishability of $k$ from uniform given the transcript $(\pk, c)$ is IND-CPA security of the KEM — folklore.

## Sketch

A passive adversary's view $(\pk, c, k)$ is the IND-CPA KEM challenge $(\pk, c^*, k_b)$, so a key-exchange distinguisher is forwarded unchanged as a KEM distinguisher.

## Notes

`class: fully-black-box`: the protocol calls $\KeyGen$, $\mathsf{Encap}$ and $\mathsf{Decap}$ only as oracles; the reduction is fixed and runs the eavesdropper as an oracle on the KEM challenge. RTV04 fully-black-box shape.

- A bare KEM gives unauthenticated key exchange; the AKE variant of [[key-exchange|KE]] requires mutual authentication.
