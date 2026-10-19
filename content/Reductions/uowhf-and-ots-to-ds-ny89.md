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
  class: "The signer calls the hash family and the one-time scheme only as oracles, and the reduction runs any forger once as an oracle, planting either a one-time verification key or a hash target at a guessed node."
---

# UOWHF + One-time signature ⇒ DS (Naor–Yung)

## Statement

A [[hash-function#target-collision-resistance-universal-one-wayness|universal one-way hash function]] family and a [[digital-signature#one-time-signatures|one-time signature]] scheme for messages of fixed length together yield an [[digital-signature#existential-unforgeability|EUF-CMA]]-unforgeable [[digital-signature|signature scheme]] — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]].

## Sketch

A one-time key signs a long message $m$ by signing $(k, \hash_k(m))$ for a fresh key $k$, which the signer samples only after $m$ is fixed, so a forgery on a different message with the same $(k, \hash_k(m))$ is a target collision. Many-time signatures authenticate a tree of one-time keys, each node signing the hash of its children's verification keys; a forgery either forges a one-time signature at some node or finds a target collision there, and the reduction guesses which — [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]].

## Notes

- With collision-resistant instead of universal one-way hashing, the key can be fixed in advance: [[hash-function-and-hash-based-signatures-to-ds-mer89|CRHF + One-time signature ⇒ DS]] — [[Mer89 - A Certified Digital Signature|Mer89]].
- Both ingredients follow from one-way functions ([[owf-to-uowhf-rom90|OWF ⇒ UOWHF]], [[hash-function-to-hash-based-signatures-lam79|OWF ⇒ one-time signatures]]), giving [[hash-function-to-ds|OWF ⇒ DS]] — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
