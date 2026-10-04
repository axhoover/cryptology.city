---
type: reduction
status: draft
title: "CRHF + One-time signature ⇒ DS"
aliases: []
id: red-hash-function-and-hash-based-signatures-to-ds-mer89
kind: implication
hypotheses: [crhf, one-time-signature]
conclusion: ds
class: fully-black-box
model: standard
source:
  - "[[Mer89 - A Certified Digital Signature|Mer89]]"
security-loss: ""
rationale:
  class: "The construction calls the one-time signature scheme and the hash function only as oracles, and the reduction runs any forger as an oracle and outputs a hash collision at some tree node or a one-time forgery."
---

# CRHF + One-time signature ⇒ DS

## Statement

A [[hash-function#collision-resistance|collision-resistant hash function]] and a [[digital-signature#one-time-signatures|one-time signature]] scheme yield a stateful many-time [[digital-signature|signature]] scheme: the public key is the root of a Merkle tree over $2^h$ one-time verification keys — a single $O(\secpar)$-bit hash — and the $i$-th signature is a one-time signature under the $i$-th key together with that key and its authentication path of $h$ hashes, so signatures have size $O(h \secpar)$ plus one one-time key and signature — [[Mer89 - A Certified Digital Signature|Mer89]].

## Sketch

The reduction plants the one-time challenge key at a random leaf. A forgery under index $i$ either carries a verification key or authentication path other than the honest ones, and then it and the honest path hash to the same root, giving a collision at some tree node; or it carries the honest $\vk_i$ and path, and then its one-time signature, on a message never signed under $\vk_i$, is a one-time forgery, against the challenge key when that leaf is $i$.

## Notes

- One-time signatures exist from one-way functions ([[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]]) — [[Lam79 - Constructing digital signatures from a one way function|Lam79]].
- Universal one-way (target-collision-resistant) hash functions, obtainable from any one-to-one one-way function, suffice for many-time signatures — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]].
- Any one-way function suffices for many-time signatures ([[hash-function-to-ds|OWF ⇒ DS]]) — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
