---
type: reduction
status: draft
title: "Semi-homomorphic encryption + correlated randomness ⇒ MPC with preprocessing (BDOZ)"
aliases: []
id: red-semi-homomorphic-encryption-and-correlated-randomness-to-mpc-with-preprocessing-bdoz11
kind: implication
hypotheses: [semi-homomorphic-encryption, correlated-randomness]
conclusion: mpc-with-preprocessing
class: unstated
model: standard
source:
  - "[[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]]"
security-loss: ""
---

# Semi-homomorphic encryption + correlated randomness ⇒ MPC with preprocessing (BDOZ)

## Statement

The preprocessing phase of [[secure-multi-party-computation#mpc-with-preprocessing|MPC with preprocessing]] can be instantiated from [[homomorphic-encryption#semi-homomorphic-encryption|semi-homomorphic encryption]], a relaxed notion BDOZ11 introduce, in the registered public-key model, in which all parties' public keys are known and corrupted parties know their own secret keys. The resulting protocol for arithmetic circuits is UC-secure against an active adversary corrupting up to $n-1$ of the $n$ parties, and its online phase uses only additive secret sharing and information-theoretic MACs — [[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]].

## Sketch

The online phase follows Beaver's circuit randomization, consuming one multiplication triple per multiplication gate, with every party's share authenticated towards every other party by a pairwise information-theoretic MAC. The preprocessing produces the triples and the MACs from two-party products of private values: $P_i$ sends $\Enc_{\pk_i}(a)$, $P_j$ homomorphically computes $\Enc_{\pk_i}(ab + r)$ for its value $b$ and a random mask $r$, and the parties keep $ab + r$ and $-r$ as additive shares of $ab$, while zero-knowledge proofs of plaintext knowledge and of correct multiplication enforce active security.

## Notes

- A dealer of the key pairs, a form of [[interactive-protocol#correlated-randomness|correlated randomness]], provides the registered public-key setup — standard.
- The pairwise MACs make the total computation and communication of the online phase quadratic in $n$; the SPDZ protocol replaces them by one global MAC key and makes both linear in $n$ — [[DPSZ12 - Multiparty Computation from Somewhat Homomorphic Encryption|DPSZ12]].
- The instantiation from somewhat homomorphic encryption is [[he-to-mpc-with-preprocessing-spdz-etc|SHE + correlated randomness ⇒ MPC with preprocessing (SPDZ)]] — [[DPSZ12 - Multiparty Computation from Somewhat Homomorphic Encryption|DPSZ12]].
