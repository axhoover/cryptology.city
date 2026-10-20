---
type: primitive
status: stub
aliases:
  - KE
  - Key exchange
  - Key agreement
  - DH key exchange
  - Diffie-Hellman key exchange
title: Key exchange
id: ke
variants:
  authenticated-key-exchange: "#authenticated-key-exchange-ake"
  multi-party-key-exchange: "#multi-party-key-exchange"
  non-interactive-key-exchange: "#non-interactive-key-exchange-nike"
  multi-party-nike: "#multiparty-non-interactive-key-exchange"
  three-party-nike: "#three-party-nike"
---

# Key exchange

A _key exchange_ (or _key agreement_) protocol allows two parties communicating over a public, authenticated channel to establish a shared secret key that is computationally indistinguishable from uniformly random to any eavesdropper. Unlike [[public-key-encryption|PKE]], key exchange does not require a pre-established public key infrastructure.

## Syntax

A two-party key exchange protocol is a pair of interactive algorithms $(\mathsf{KE}_A, \mathsf{KE}_B)$ run between parties $A$ and $B$ over a shared transcript. Following execution, both parties output a key $k \in \calK$. In the non-interactive setting:

- $\mathsf{KE} = (\Gen, \Combine)$ where $\Gen(1^\secpar) \to (\pk, \sk)$ and each party publishes $\pk_A, \pk_B$, then computes $k = \Combine(\sk_A, \pk_B) = \Combine(\sk_B, \pk_A)$.

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

## Multiparty non-interactive key exchange

An $N$-party NIKE lets each of $N$ parties publish one message, after which each party derives, from its own secret, the $N - 1$ other published values and any public parameters, a key that all $N$ parties share and that is pseudorandom to an eavesdropper. Two-party NIKE is the case $N = 2$; iO and one-way functions give it for any polynomial $N$ fixed in advance, without trusted setup — [[BZ14 - Multiparty Key Exchange, Efficient Traitor Tracing, and More from Indistinguishability Obfuscation|BZ14]].

### Three-party NIKE

The case $N = 3$ of multiparty NIKE, with each of three parties publishing one message.

# Other results

- [[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ NIKE]]
- [[ke-to-pke-dh76|NIKE ⇒ PKE]]
- [[no-owp-to-ke-ir89|No relativizing reduction from OWP to KE]] — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]]
- [[no-rom-to-ke-hmo-19|No reduction from ROM to KE]]
- [[lwe-to-pke-reg05|LWE ⇒ PKE]]
- [[pke-to-ke|PKE ⇒ KE]]

<!-- BEGIN GENERATED participates-in dadef7600532 -->

## Participates in

**Builds on Key exchange**

- [[authenticated-key-exchange-ake-to-ke|Authenticated key exchange (AKE) ⇒ KE]] (via [[key-exchange#authenticated-key-exchange-ake|Authenticated key exchange (AKE)]])
- [[ke-to-multi-party-key-exchange|KE ⇒ Multi-party key exchange]]
- [[ke-to-pke-dh76|NIKE ⇒ PKE]] (via [[key-exchange#non-interactive-key-exchange-nike|Non-interactive key exchange (NIKE)]])
- [[non-interactive-key-exchange-to-ke|NIKE ⇒ KE]] (via [[key-exchange#non-interactive-key-exchange-nike|Non-interactive key exchange (NIKE)]])

**Produces Key exchange**

- [[authenticated-key-exchange-ake-to-ke|Authenticated key exchange (AKE) ⇒ KE]]
- [[dbdh-to-three-party-nike-jou04|DBDH ⇒ Three-party NIKE (Joux)]] (via [[key-exchange#three-party-nike|Three-party NIKE]])
- [[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ Non-interactive key exchange (NIKE)]] (via [[key-exchange#non-interactive-key-exchange-nike|Non-interactive key exchange (NIKE)]])
- [[io-and-owf-to-multi-party-nike-bz14|iO + OWF ⇒ Multiparty NIKE (Boneh–Zhandry)]] (via [[key-exchange#multiparty-non-interactive-key-exchange|Multiparty non-interactive key exchange]])
- [[ke-to-multi-party-key-exchange|KE ⇒ Multi-party key exchange]] (via [[key-exchange#multi-party-key-exchange|Multi-party key exchange]])
- [[kem-to-ke|KEM ⇒ KE]]
- [[non-interactive-key-exchange-to-ke|NIKE ⇒ KE]]
- [[ot-to-ke|OT ⇒ KE]]
- [[pke-to-ke|PKE ⇒ KE]]
- [[sidh-to-ke-jdf11|SSDDH ⇒ KE]]

**Barriers**

- [[no-ke-to-pke-rud91|No relativizing reduction from KE to PKE]]
- [[no-ke-to-tdp-rud91|No relativizing reduction from KE to TDP]]
- [[no-owp-to-ke-ir89|No relativizing reduction from OWP to KE]]
- [[no-rom-to-ke-hmo-19|No reduction from ROM to KE]]

<!-- END GENERATED participates-in -->
