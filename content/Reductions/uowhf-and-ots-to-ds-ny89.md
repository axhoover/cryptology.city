---
type: reduction
status: draft
title: UOWHF + One-time signature ⇒ DS (Naor–Yung)
aliases: []
id: red-uowhf-and-ots-to-ds-ny89
kind: implication
hypotheses: [uowhf, one-time-signature]
conclusion: ds
class: fully-black-box
model: standard
source:
  - "[[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]]"
security-loss: "a factor polynomial in the number of signing queries and the tree depth, from guessing where the forgery departs from the signer's tree"
rationale:
  class: "The signer calls the hash family and the one-time scheme only as oracles, and the reduction runs any forger once as an oracle, planting either a one-time verification key or, after committing to that node's input as the target, the challenge hash key at a guessed node."
---

# UOWHF + One-time signature ⇒ DS (Naor–Yung)

## Statement

A [[hash-function#target-collision-resistance-universal-one-wayness|universal one-way hash function]] family and a [[digital-signature#one-time-signatures|one-time signature]] scheme for messages of fixed length together yield an [[digital-signature#existential-unforgeability|EUF-CMA]]-unforgeable [[digital-signature|signature scheme]] — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]]. The scheme is $(1-\negl(\secpar))$-correct when the one-time scheme is, since a signature carries polynomially many one-time signatures, each verifying except with negligible probability — standard.

## Sketch

A one-time key signs a long message $m$ by signing $(k, \hash_k(m))$ for a fresh key $k$, which the signer samples only after $m$ is fixed, so a forgery on a different message with the same $(k, \hash_k(m))$ is a target collision. Many-time signatures authenticate a tree of one-time keys, each node signing the hash of its children's verification keys; a forgery either forges a one-time signature at some node or finds a target collision there, and the reduction guesses which — [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]].

## Notes

- With an arbitrary-length collision-resistant hash, one Merkle tree over $2^h$ one-time keys, computed at key generation, gives a stateful scheme for $2^h$ signatures: [[hash-function-and-hash-based-signatures-to-ds-mer89|Arbitrary-length CRHF + One-time signature ⇒ Stateful DS (Merkle)]] — [[Mer89 - A Certified Digital Signature|Mer89]].
- With [[owp-to-uowhf-ny89|OWP ⇒ UOWHF (Naor–Yung)]], this gives signatures from any one-way permutation — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]], as credited by [[GB08 - Lecture Notes on Cryptography|GB08]] (Section 10.4). Both ingredients follow from one-way functions ([[owf-to-uowhf-rom90|OWF ⇒ UOWHF]], [[hash-function-to-hash-based-signatures-lam79|OWF ⇒ one-time signatures]]), giving [[hash-function-to-ds|OWF ⇒ DS]] — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
