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

[[homomorphic-encryption#somewhat-homomorphic-encryption-she|SHE]] implies [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|MPC with preprocessing]].

## Statement

The offline phase of [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|MPC with preprocessing]] can be instantiated from somewhat [[homomorphic-encryption|homomorphic encryption]]: SPDZ generates authenticated Beaver multiplication triples by depth-1 homomorphic evaluation under a shared SHE key with distributed decryption, giving an actively secure protocol against up to $n-1$ of $n$ corruptions whose online phase is unconditionally secure — [[DPSZ12 - Multiparty Computation from Somewhat Homomorphic Encryption|DPSZ12]].

## Sketch

Parties encrypt random shares under a joint SHE public key, multiply ciphertexts homomorphically, and jointly decrypt to obtain additively shared, MAC-authenticated triples; the online phase consumes the triples to evaluate the arithmetic circuit with no further public-key operations.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- The `he-` slug predates splitting this edge by hypothesis; the instantiation from additively homomorphic encryption is [[additively-homomorphic-encryption-to-mpc-with-preprocessing-bdoz11|AHE ⇒ MPC with preprocessing (BDOZ)]].
