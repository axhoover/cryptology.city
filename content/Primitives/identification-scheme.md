---
type: primitive
status: stub
aliases:
  - ID
  - Identification scheme
title: Identification scheme
id: identification-scheme
variants:
  schnorr-identification-protocol: "#schnorr-identification-protocol"
unlisted: true
---

# Identification scheme

A protocol in which a prover holding a secret key convinces a verifier holding the matching public key of its identity, canonically as a three-message commit-challenge-response sigma protocol such as Schnorr's proof of knowledge of a discrete logarithm.

TODO: syntax and security definition.

# Variations

## Schnorr identification protocol

For $h = g^x$ in a group of prime order $p$, the prover sends $a = g^r$ for $r \getsr \ZZ_p$, receives a uniform challenge $e$, and replies $z = r + ex \bmod p$; the verifier accepts iff $g^z = a h^e$. The protocol is special sound and perfectly honest-verifier zero-knowledge — [[Sch91 - Efficient signature generation by smart cards|Sch91]].

<!-- BEGIN GENERATED participates-in 32c0dac240bc -->

## Participates in

**Builds on Identification scheme**

- [[fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91|Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)]] (via [[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]])
- [[id-and-rom-to-ds|ID ⇒ DS]]

**Produces Identification scheme**

- [[dlog-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr identification protocol]] (via [[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]])

<!-- END GENERATED participates-in -->
