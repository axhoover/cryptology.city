---
aliases:
  - KE
  - Key exchange
  - Key agreement
  - DH key exchange
title: Key exchange
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

- Diffie-Hellman key exchange from [[decisional-diffie-hellman|DDH]] — [[DH76 - New Directions in Cryptography|DH76]]
- KE implies [[public-key-encryption|PKE]] (the session key can be used with a symmetric cipher) — [[DH76 - New Directions in Cryptography|DH76]]
- No black-box construction of KE from one-way permutations — standard separation (no KE from symmetric primitives)
- Any KE protocol from a random oracle requires $\Omega(n)$ queries; Merkle puzzles achieve $O(n^2)$ security and are optimal — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]]
- KE from [[learning-with-errors|LWE]]: follows as a special case of PKE from LWE — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]
- Communication complexity lower bounds for information-theoretic key agreement — [[HMO+19 - On the Communication Complexity of Key-Agreement Protocols|HMO+19]]
