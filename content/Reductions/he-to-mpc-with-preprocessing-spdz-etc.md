---
type: reduction
status: draft
title: "HE ⇒ MPC with preprocessing (SPDZ, etc.)"
aliases: []
id: red-he-to-mpc-with-preprocessing-spdz-etc
kind: implication
hypotheses: [he]
conclusion: mpc-with-preprocessing
class: unstated
model: standard
source:
  - "[[DPSZ12 - Multiparty Computation from Somewhat Homomorphic Encryption|DPSZ12]]"
  - "[[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]]"
security-loss: ""
---

# HE ⇒ MPC with preprocessing (SPDZ, etc.)

[[homomorphic-encryption|HE]] implies [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|MPC with preprocessing (SPDZ, etc.)]].

## Statement

The offline phase of [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|MPC with preprocessing]] can be instantiated from somewhat [[homomorphic-encryption|homomorphic encryption]]: SPDZ generates authenticated Beaver multiplication triples by depth-1 homomorphic evaluation under a shared SHE key with distributed decryption, giving an actively secure protocol against up to $n-1$ of $n$ corruptions whose online phase is unconditionally secure — [[DPSZ12 - Multiparty Computation from Somewhat Homomorphic Encryption|DPSZ12]]. The preprocessing can also be obtained from semi-homomorphic (additively homomorphic) encryption — [[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]].

## Sketch

Parties encrypt random shares under a joint SHE public key, multiply ciphertexts homomorphically, and jointly decrypt to obtain additively shared, MAC-authenticated triples; the online phase consumes the triples to evaluate the arithmetic circuit with no further public-key operations.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
