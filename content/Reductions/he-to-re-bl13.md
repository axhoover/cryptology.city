---
type: reduction
status: draft
title: "HE ⇒ RE"
aliases: []
id: red-he-to-re-bl13
kind: implication
hypotheses: [he]
conclusion: rerandomizable-encryption
class: unstated
model: standard
source:
  - "[[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]]"
security-loss: ""
---

# HE ⇒ RE

[[homomorphic-encryption|HE]] with a strong (distribution-preserving) homomorphic evaluator implies [[rerandomizable-encryption|RE]].

## Statement

A public-key bit [[homomorphic-encryption|encryption scheme]] with a strong (distribution-preserving) homomorphic evaluator for a non-trivial boolean function is rerandomizable: every encryption of a bit $b$ can be efficiently mapped to a ciphertext distributed as a fresh encryption of $b$ — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]]. BL13 use rerandomizability to place ciphertext distinguishing in $\classSZK$; see [[no-he-to-szk-bl13|No reduction from HE to SZK]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- `rerandomizable-encryption` is an unlisted stub with no syntax or security definition.
- The migrated chain's second arrow (rerandomizable encryption → $\classSZK \ne \classBPP$) is barrier content and lives on [[no-he-to-szk-bl13]].
