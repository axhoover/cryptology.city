---
type: primitive
status: stub
aliases:
  - KE
  - Key exchange
  - Key agreement
  - DH key exchange
title: Key exchange
id: ke
variants:
  authenticated-key-exchange: "#authenticated-key-exchange-ake"
  multi-party-key-exchange: "#multi-party-key-exchange"
  non-interactive-key-exchange: "#non-interactive-key-exchange-nike"
---

# Key exchange

A _key exchange_ (or _key agreement_) protocol allows two parties communicating over a public, authenticated channel to establish a shared secret key that is computationally indistinguishable from uniformly random to any eavesdropper. Unlike [[public-key-encryption|PKE]], key exchange does not require a pre-established public key infrastructure.

## Syntax

A two-party key exchange protocol is a pair of interactive algorithms $(\mathsf{KE}_A, \mathsf{KE}_B)$ run between parties $A$ and $B$ over a shared transcript. Following execution, both parties output a key $k \in \calK$. In the non-interactive setting:

- $\mathsf{KE} = (\Gen, \mathsf{Combine})$ where $\Gen(1^\secpar) \to (\pk, \sk)$ and each party publishes $\pk_A, \pk_B$, then computes $k = \mathsf{Combine}(\sk_A, \pk_B) = \mathsf{Combine}(\sk_B, \pk_A)$.

## Properties

### Correctness

Both parties output the same key $k$ with probability 1 (over their randomness).

### Security (indistinguishability from random)

A key exchange protocol is **secure** if for all efficient adversaries $\calA$ that observe the full transcript, the session key $k$ is computationally indistinguishable from a uniformly random key $k' \getsr \calK$.

# Variations

## Non-interactive key exchange (NIKE)

A NIKE allows any two parties to derive the same shared key from each other's public keys alone, with no interaction at all. Diffie-Hellman over a cyclic group is the canonical example: $k = g^{ab}$ given public keys $g^a$ and $g^b$.

## Authenticated key exchange (AKE)

An AKE additionally guarantees that the parties authenticate each other's identities during the protocol, preventing man-in-the-middle attacks.

## Multi-party key exchange

Generalizes two-party KE to $n$ parties. Requires additional rounds or structure (e.g., Burmester-Desmedt, pairing-based constructions).

# Other results

- [[ddh-to-ke-dh76|DDH ⇒ KE]]
- [[ke-to-pke-dh76|KE ⇒ PKE]]
- [[no-owp-to-ke-ir89|No reduction from OWP to KE]]
- [[no-rom-to-ke-hmo-19|No reduction from ROM to KE]]
- [[lwe-to-pke-reg05|LWE ⇒ PKE]]
- [[pke-to-ke|PKE ⇒ KE]]
- [[no-rom-to-ke-hmo-19|No reduction from ROM to KE]]
