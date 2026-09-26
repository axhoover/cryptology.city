---
type: reduction
status: draft
title: "Succinct LWE ⇒ ABE"
aliases: []
id: red-succinct-lwe-to-abe-wee25
kind: implication
hypotheses: [succinct-lwe]
conclusion: abe
class: unstated
model: standard
source:
  - "[[Wee25 - Almost Optimal KP and CP-ABE for Circuits from Succinct LWE|Wee25]]"
security-loss: ""
---

# Succinct LWE ⇒ ABE

[[learning-with-errors#succinct-lwe|Succinct LWE]] implies [[attribute-based-encryption|ABE]].

## Statement

[[learning-with-errors#succinct-lwe|Succinct LWE]] implies key-policy and ciphertext-policy [[attribute-based-encryption|ABE]] for depth-$d$ circuits over $\ell$-bit inputs with ciphertext, secret-key and public-key size $O(1)$, and laconic function evaluation with ciphertext size $\ell + O(1)$ and CRS and digest size $O(1)$, where $O(\cdot)$ hides $\poly(d, \secpar)$ factors — [[Wee25 - Almost Optimal KP and CP-ABE for Circuits from Succinct LWE|Wee25]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- $\ell$-succinct LWE was introduced, and shown to follow from evasive LWE, in [[Wee24 - Circuit ABE with poly(depth, lambda)-Sized Ciphertexts and Keys from Lattices|Wee24]]
- Unverified: the Wee25 reference page says the constructions use a circular small-secret variant of succinct LWE; the published abstract names only succinct LWE. If the circular variant is required, the hypothesis must say so.
