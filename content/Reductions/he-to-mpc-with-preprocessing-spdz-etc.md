---
type: reduction
status: draft
title: "SHE + correlated randomness ⇒ MPC with preprocessing (SPDZ)"
aliases: []
id: red-he-to-mpc-with-preprocessing-spdz-etc
kind: implication
hypotheses: [somewhat-homomorphic-encryption, correlated-randomness]
conclusion: mpc-with-preprocessing
class: unstated
model: standard
source:
  - "[[DPSZ12 - Multiparty Computation from Somewhat Homomorphic Encryption|DPSZ12]]"
security-loss: ""
---

# SHE + correlated randomness ⇒ MPC with preprocessing (SPDZ)

## Statement

The preprocessing phase of [[secure-multi-party-computation#mpc-with-preprocessing|MPC with preprocessing]] can be instantiated from [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption]] given a trusted key setup: SPDZ generates authenticated Beaver multiplication triples by depth-1 homomorphic evaluation under a shared key, giving a protocol secure against an active adversary corrupting up to $n-1$ of the $n$ parties, whose online phase is unconditionally secure — [[DPSZ12 - Multiparty Computation from Somewhat Homomorphic Encryption|DPSZ12]]. The scheme is an extension of a scheme of Brakerski et al. that supports distributed decryption and packs many plaintexts into one ciphertext, and the proof is in a hybrid model where a key-generation functionality deals the public key and shares of the secret key to the parties before the inputs are chosen, a dealer of [[interactive-protocol#correlated-randomness|correlated randomness]] — [[DPSZ12 - Multiparty Computation from Somewhat Homomorphic Encryption|DPSZ12]].

## Sketch

The parties encrypt random shares under a joint SHE public key, multiply ciphertexts homomorphically, and jointly decrypt to additively shared, MAC-authenticated triples; the online phase consumes the triples to evaluate the arithmetic circuit with no further public-key operations.

## Notes

- The instantiation from additively homomorphic encryption is [[additively-homomorphic-encryption-to-mpc-with-preprocessing-bdoz11|Additively homomorphic encryption ⇒ MPC with preprocessing (BDOZ)]] — [[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]].
