---
type: reduction
status: draft
title: "Hash function + PRF ⇒ Symmetric CP-ABE"
aliases: []
id: red-hash-function-and-prf-to-symmetric-cp-abe-ls26
kind: implication
hypotheses: [hash-function, prf]
conclusion: symmetric-cp-abe
class: unstated
model: standard
source:
  - "[[LS26 - Symmetric Attribute-Based Encryption from Minimal Hardness Assumptions|LS26]]"
security-loss: ""
---

# Hash function + PRF ⇒ Symmetric CP-ABE

[[hash-function|Hash function]] together with [[pseudorandom-function|PRF]] implies [[attribute-based-encryption#symmetric-cp-abe|Symmetric CP-ABE]].

## Statement

Symmetric CP-ABE — [[attribute-based-encryption#symmetric-cp-abe|ciphertext-policy ABE]] in which the encryptor, too, must hold attributes satisfying the ciphertext policy — has an IND-CCA2-secure open-universe construction from a [[hash-function|collision-resistant hash function]] and a [[pseudorandom-function|PRF]] — [[LS26 - Symmetric Attribute-Based Encryption from Minimal Hardness Assumptions|LS26]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- Conjunctive: {collision-resistant hash function, PRF} are jointly required; do not split into single-hypothesis pages.
- `symmetric-cp-abe` is a variant section of attribute-based-encryption, not its own page.
