---
type: reduction
status: draft
title: "OWF ⇒ DS"
aliases: []
id: red-hash-function-to-ds
kind: implication
hypotheses: [owf]
conclusion: ds
class: fully-black-box
model: standard
source:
  - "[[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]]"
security-loss: ""
rationale:
  class: "The UOWHFs, one-time signatures and authentication tree evaluate the one-way function only as an oracle, and the reduction runs any forger as an oracle to extract a UOWHF collision or a preimage of the one-way function."
---

# OWF ⇒ DS

## Statement

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, there is an [[digital-signature#existential-unforgeability|EUF-CMA]]-unforgeable [[digital-signature|signature scheme]] — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]]. Rompel constructs universal one-way hash functions (UOWHFs) from any one-way function, and UOWHFs give signatures through the tree-based scheme of [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]].

## Sketch

A UOWHF compresses messages for a one-time signature, and a tree of fresh one-time keys, each authenticated by its parent (Naor–Yung), turns one-time signatures into a many-time EUF-CMA scheme.

## Notes

- Conversely, perfectly correct signatures imply one-way functions ([[ds-to-hash-function|DS ⇒ OWF]]) — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
- Signatures from one-to-one one-way functions, via UOWHFs, predate Rompel's result — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]].
- Rompel's STOC paper gives the proof only in outline; the first complete proof is [[KK05 - On Constructing Universal One-Way Hash Functions from Arbitrary One-Way Functions|KK05]].
