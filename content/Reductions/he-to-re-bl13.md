---
type: reduction
status: draft
title: "Strongly homomorphic encryption ⇒ RE"
aliases: []
id: red-he-to-re-bl13
kind: implication
hypotheses: [strongly-homomorphic-encryption]
conclusion: rerandomizable-encryption
class: unstated
model: standard
source:
  - "[[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]]"
security-loss: ""
---

# Strongly homomorphic encryption ⇒ RE

[[homomorphic-encryption#strongly-homomorphic-encryption|Strongly homomorphic encryption]] implies [[rerandomizable-encryption|RE]].

## Statement

A public-key bit [[homomorphic-encryption|encryption scheme]] with a [[homomorphic-encryption#strongly-homomorphic-encryption|strong]] (distribution-preserving) homomorphic evaluator for a boolean function $f$ is rerandomizable, for essentially every $f$ other than the trivial functions, NOT, AND and OR: an encryption of a bit $b$ can be efficiently mapped to a ciphertext distributed as a fresh encryption of $b$ independent of the input, up to negligible statistical distance when the evaluator's error is negligible — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]]. BL13 use rerandomizability to place ciphertext distinguishing in $\classSZK$; see [[no-he-to-szk-bl13|No reduction from NP to HE]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- `rerandomizable-encryption` is an unlisted stub with no syntax or security definition.
- The condition on $f$ follows the BL13 abstract; it and the $\classSZK$ sentence were not checked against the paper body.
- The migrated chain's second arrow (rerandomizable encryption → $\classSZK \ne \classBPP$) is barrier content and lives on [[no-he-to-szk-bl13]].
