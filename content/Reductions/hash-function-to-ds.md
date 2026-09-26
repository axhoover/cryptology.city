---
type: reduction
status: draft
title: "Hash function ⇒ DS"
aliases: []
id: red-hash-function-to-ds
kind: implication
hypotheses: [hash-function]
conclusion: ds
class: fully-black-box
model: standard
source:
  - "[[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]]"
security-loss: ""
---

# Hash function ⇒ DS

[[hash-function|Hash function]] implies [[digital-signature|DS]].

## Statement

If [[hash-function|one-way functions]] exist, then EUF-CMA-secure [[digital-signature|digital signatures]] exist — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]]. Rompel builds universal one-way hash functions from any one-way function and instantiates the tree-based signature scheme of [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]], which needs only UOWHFs.

## Sketch

A UOWHF compresses messages for a one-time signature, and authenticating a tree of fresh one-time keys (Naor–Yung) turns one-time signatures into a many-time EUF-CMA scheme.

## Notes

`class: fully-black-box`: The UOWHF, the one-time signatures, and the authentication tree evaluate the one-way function only as an oracle, and the security reduction runs any forger as an oracle to extract either a UOWHF collision or a preimage of $f$ — the RTV04 fully-black-box shape.

- Predecessor: signatures from one-way permutations via universal one-way hash functions — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]].
- Rompel's STOC paper gives the proof only in outline; the first complete write-up is [[KK05 - On Constructing Universal One-Way Hash Functions from Arbitrary One-Way Functions|KK05]].
