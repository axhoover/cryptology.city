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

## Statement

[[learning-with-errors#succinct-lwe|Succinct LWE]] implies key-policy and ciphertext-policy [[attribute-based-encryption|ABE]] for depth-$d$ circuits over $\ell$-bit inputs with ciphertext, secret-key and public-key size $O(1)$, and laconic function evaluation with ciphertext size $\ell + O(1)$ and CRS and digest size $O(1)$, where $O(\cdot)$ hides $\poly(d, \secpar)$ factors — [[Wee25 - Almost Optimal KP and CP-ABE for Circuits from Succinct LWE|Wee25]]. With $\ell$ and every polynomial depth $d$ given at $\Setup$, its policies contain every polynomial-size monotone formula of threshold gates; messages are bits, and correctness follows from the noise bound — standard.

## Notes

- $\ell$-succinct LWE was introduced, and shown to follow from [[learning-with-errors#evasive-lwe|evasive LWE]], in [[Wee24 - Circuit ABE with poly(depth, lambda)-Sized Ciphertexts and Keys from Lattices|Wee24]].
- TODO: state whether Wee25 prove adaptive security or only a selective notion.
