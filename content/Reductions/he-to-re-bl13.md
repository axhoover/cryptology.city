---
type: reduction
status: draft
title: "Strongly homomorphic encryption ⇒ Statistically rerandomizable encryption"
aliases: []
id: red-he-to-re-bl13
kind: implication
hypotheses: [strongly-homomorphic-encryption]
conclusion: statistically-rerandomizable-encryption
class: unstated
model: standard
source:
  - "[[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]]"
security-loss: ""
---

# Strongly homomorphic encryption ⇒ Statistically rerandomizable encryption

## Statement

A public-key bit [[homomorphic-encryption|encryption scheme]] with a [[homomorphic-encryption#strongly-homomorphic-encryption|strong]] (distribution-preserving) homomorphic evaluator for a boolean function $f$ is [[rerandomizable-encryption#statistical-rerandomization-of-honest-ciphertexts|statistically rerandomizable]], for essentially every $f$ other than the trivial functions, NOT, AND and OR, the exceptions named by BL13: an encryption of a bit $b$ can be efficiently mapped to a ciphertext distributed as a fresh encryption of $b$ independent of the input, up to negligible statistical distance when the evaluator's error is negligible — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]].

## Notes

- [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]] use rerandomizability to place the problem of distinguishing encryptions of $0$ from encryptions of $1$ in $\classSZK$; see [[no-he-to-szk-bl13|No reduction from NP to compact FHE]].
