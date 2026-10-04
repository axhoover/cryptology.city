---
type: reduction
status: draft
title: "SHE ⇒ MPC with preprocessing (SPDZ)"
aliases: []
id: red-he-to-mpc-with-preprocessing-spdz-etc
kind: implication
hypotheses: [somewhat-homomorphic-encryption]
conclusion: mpc-with-preprocessing
class: unstated
model: standard
source:
  - "[[DPSZ12 - Multiparty Computation from Somewhat Homomorphic Encryption|DPSZ12]]"
security-loss: ""
---

# SHE ⇒ MPC with preprocessing (SPDZ)

## Statement

The preprocessing phase of [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|MPC with preprocessing]] can be instantiated from [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption]]: SPDZ generates authenticated Beaver multiplication triples by depth-1 homomorphic evaluation under a shared SHE key with distributed decryption, giving a protocol secure against an active adversary corrupting up to $n-1$ of the $n$ parties, whose online phase is unconditionally secure — [[DPSZ12 - Multiparty Computation from Somewhat Homomorphic Encryption|DPSZ12]].

## Sketch

The parties encrypt random shares under a joint SHE public key, multiply ciphertexts homomorphically, and jointly decrypt to additively shared, MAC-authenticated triples; the online phase consumes the triples to evaluate the arithmetic circuit with no further public-key operations.

## Notes

- The instantiation from additively homomorphic encryption is [[additively-homomorphic-encryption-to-mpc-with-preprocessing-bdoz11|Additively homomorphic encryption ⇒ MPC with preprocessing (BDOZ)]] — [[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]].
