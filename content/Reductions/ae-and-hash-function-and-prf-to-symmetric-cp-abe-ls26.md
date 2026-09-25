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

- INVENTORY DISAGREEMENT: Primitives/attribute-based-encryption.md records only [hash-function + pseudorandom-function => symmetric-cp-abe] (two hypotheses); this page states three, including IND-CCA2 authenticated encryption, matching the LS26 text.
- The minimality claim 'with no bilinear map or lattice hardness assumption' is a property of the construction, not an impossibility, and is not recordable as a barrier.
