---
type: reduction
status: draft
title: "Hash function + Hash-based signatures ⇒ DS"
aliases: []
id: red-hash-function-and-hash-based-signatures-to-ds-mer89
kind: implication
hypotheses: [hash-function, one-time-signature]
conclusion: ds
class: fully-black-box
model: standard
source:
  - "[[Mer89 - A Certified Digital Signature|Mer89]]"
security-loss: ""
---

# Hash function + Hash-based signatures ⇒ DS

A collision-resistant [[hash-function|hash function]] together with a [[digital-signature#hash-based-signatures|one-time signature]] scheme implies a stateful many-time [[digital-signature|DS]] scheme.

## Statement

A collision-resistant [[hash-function|hash function]] and a [[digital-signature#hash-based-signatures|one-time signature]] scheme yield a stateful many-time [[digital-signature|signature]] scheme: the public key is the root of a Merkle tree over $2^h$ one-time verification keys — a single $O(\secpar)$-bit hash — and the $i$-th signature is a one-time signature under the $i$-th key together with that key and its authentication path of $h$ hashes, so signatures have size $O(h \secpar)$ plus one one-time key and signature [[Mer89 - A Certified Digital Signature|Mer89]]. A forger yields either a hash collision at a tree node or a one-time forgery.

## Notes

`class: fully-black-box`: The construction calls the one-time signature scheme and the hash function only as oracles: it hashes one-time verification keys into a Merkle tree and signs with fresh leaf keys. The security reduction runs any forger as an oracle and outputs either a hash collision at some tree node or a one-time forgery.

- Universal one-way (target-collision-resistant) hash functions, obtainable from any one-to-one one-way function, suffice for many-time signatures — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]].
- Any one-way function suffices for many-time signatures — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
- The conclusion is a stateful many-time scheme; statefulness has no node in the model, so the edge reads as plain digital signatures.
