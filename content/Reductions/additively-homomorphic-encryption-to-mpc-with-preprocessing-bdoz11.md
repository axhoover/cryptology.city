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

[[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]] implies [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|MPC with preprocessing]].

## Statement

The offline phase of [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|MPC with preprocessing]] can be instantiated from semi-homomorphic (additively homomorphic) encryption — [[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- The SHE-based instantiation (SPDZ) is [[he-to-mpc-with-preprocessing-spdz-etc|SHE ⇒ MPC with preprocessing (SPDZ)]].
