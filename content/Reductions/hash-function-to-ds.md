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
security-loss: "polynomial"
rationale:
  class: "The UOWHFs, one-time signatures and authentication tree evaluate the one-way function only as an oracle, and the reduction runs any forger as an oracle to extract a UOWHF collision or a preimage of the one-way function."
---

# OWF ⇒ DS

## Statement

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, there is an [[digital-signature#existential-unforgeability|EUF-CMA]]-unforgeable [[digital-signature|signature scheme]] — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]]. Rompel constructs universal one-way hash functions (UOWHFs) from any one-way function, and UOWHFs give signatures through the tree-based scheme of [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]].

## Sketch

A UOWHF compresses messages for a one-time signature, and a tree of fresh one-time keys, each authenticated by its parent (Naor–Yung), turns one-time signatures into a many-time EUF-CMA scheme.

## Notes

- Conversely, signatures imply distributionally one-way functions ([[ds-to-hash-function|DS ⇒ Distributional OWF]]) — standard, and hence one-way functions ([[distributional-owf-to-owf-il89|Distributional OWF ⇒ OWF]]) — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].
- Signatures from one-way permutations, via UOWHFs, predate Rompel's result ([[owp-to-uowhf-ny89|OWP ⇒ UOWHF (Naor–Yung)]]) — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]], as credited by [[GB08 - Lecture Notes on Cryptography|GB08]] (Section 10.4).
- Rompel's conference paper has errors in a number of its arguments, and no complete proof of his UOWHF construction was published before the write-up of Katz and Koo — [[KK05 - On Constructing Universal One-Way Hash Functions from Arbitrary One-Way Functions|KK05]]. A simpler construction of UOWHFs from any one-way function goes through inaccessible entropy — [[HHR+10 - Universal One-Way Hash Functions via Inaccessible Entropy|HHR+10]].
