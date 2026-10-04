---
type: reduction
status: draft
title: "Additively homomorphic encryption ⇒ MPC with preprocessing (BDOZ)"
aliases: []
id: red-additively-homomorphic-encryption-to-mpc-with-preprocessing-bdoz11
kind: implication
hypotheses: [additively-homomorphic-encryption]
conclusion: mpc-with-preprocessing
class: unstated
model: standard
source:
  - "[[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]]"
security-loss: ""
---

# Additively homomorphic encryption ⇒ MPC with preprocessing (BDOZ)

## Statement

The preprocessing phase of [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|MPC with preprocessing]] can be instantiated from semi-homomorphic encryption, a relaxation of [[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic encryption]] that BDOZ11 introduce. The resulting protocol for arithmetic circuits is UC-secure against an active adversary corrupting up to $n-1$ of the $n$ parties, and its online phase uses only additive secret sharing and information-theoretic MACs — [[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]].

## Notes

- The instantiation from somewhat homomorphic encryption is [[he-to-mpc-with-preprocessing-spdz-etc|SHE ⇒ MPC with preprocessing (SPDZ)]] — [[DPSZ12 - Multiparty Computation from Somewhat Homomorphic Encryption|DPSZ12]].
