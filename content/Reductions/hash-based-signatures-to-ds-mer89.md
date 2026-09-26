---
type: reduction
status: draft
title: "Hash-based signatures ⇒ DS"
aliases: []
id: red-hash-based-signatures-to-ds-mer89
kind: implication
hypotheses: [one-time-signature]
conclusion: ds
class: fully-black-box
model: standard
source:
  - "[[Mer89 - A Certified Digital Signature|Mer89]]"
security-loss: ""
---

# Hash-based signatures ⇒ DS

A [[digital-signature#hash-based-signatures|one-time signature]] and a collision-resistant [[hash-function|hash function]] imply a stateful many-time [[digital-signature|DS]].

## Statement

A one-time signature ([[Lam79 - Constructing digital signatures from a one way function|Lam79]]) and a collision-resistant [[hash-function|hash function]] give a stateful many-time EUF-CMA [[digital-signature|DS]]: a binary hash tree authenticates $2^d$ one-time verification keys under one root, and the $i$-th signature is the $i$-th one-time signature together with its authentication path — [[Mer89 - A Certified Digital Signature|Mer89]]. Universal one-way hash functions suffice in place of collision resistance — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]]; one-way functions alone suffice — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].

## Sketch

Key generation publishes the root of a depth-$d$ Merkle tree over the hashes of the $2^d$ one-time verification keys. A forgery either carries an authentication path that departs from the honest one, giving a hash collision, or authenticates an honest one-time key and so forges against that one-time instance.

## Notes

`class: fully-black-box`: the construction calls the one-time signature scheme and the hash function only as oracles; the reduction embeds its challenge (a one-time verification key at a random leaf, or the hash key) and runs any forger as an oracle.

- Universal one-way hash functions exist given any injective one-way function — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]].
- One-way functions are also necessary for signatures — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
- Duplicates [[hash-function-and-hash-based-signatures-to-ds-mer89]], which carries the correct hypotheses {one-time-signature, hash-function}; the two pages should be merged.
