---
type: reduction
status: draft
title: "AE + Hash function + PRF ⇒ Symmetric CP-ABE"
aliases: []
id: red-ae-and-hash-function-and-prf-to-symmetric-cp-abe-ls26
kind: implication
hypotheses: [authenticated-encryption, hash-function, prf]
conclusion: symmetric-cp-abe
class: unstated
model: standard
source:
  - "[[LS26 - Symmetric Attribute-Based Encryption from Minimal Hardness Assumptions|LS26]]"
security-loss: ""
---

# AE + Hash function + PRF ⇒ Symmetric CP-ABE

[[authenticated-encryption|AE]] together with [[hash-function|Hash function]] together with [[pseudorandom-function|PRF]] implies [[attribute-based-encryption#symmetric-cp-abe|Symmetric CP-ABE]].

## Statement

A symmetric-key ciphertext-policy [[attribute-based-encryption#symmetric-cp-abe|ABE]], in which encryptor and decryptor must both hold attributes satisfying the ciphertext policy, is built from a collision-resistant [[hash-function|hash function]], a [[pseudorandom-function|PRF]], and an IND-CCA2-secure [[authenticated-encryption|authenticated encryption]] scheme, with no bilinear-map or lattice assumption — [[LS26 - Symmetric Attribute-Based Encryption from Minimal Hardness Assumptions|LS26]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- INVENTORY DISAGREEMENT: [[hash-function-and-prf-to-symmetric-cp-abe-ls26]] records the same LS26 result with hypotheses {hash function, PRF} only; this page adds IND-CCA2 authenticated encryption, as the LS26 reference page states.
- 'No bilinear-map or lattice assumption' describes the construction, not an impossibility, so it is not a barrier.
