---
type: reduction
status: draft
title: HVSZK = SZK
aliases: []
id: red-honest-verifier-szk-to-szk-gsv98
kind: equivalence
hypotheses: [honest-verifier-szk]
conclusion: szk
class: free
model: standard
source:
  - "[[GSV98 - Honest-Verifier Statistical Zero-Knowledge Equals General Statistical Zero-Knowledge|GSV98]]"
security-loss: ""
---

# HVSZK = SZK

## Statement

Every problem with an [[statistical-zero-knowledge#honest-verifier-szk|honest-verifier statistical zero-knowledge]] proof has a [[statistical-zero-knowledge|statistical zero-knowledge]] proof against all verifiers: $\mathbf{HVSZK} = \classSZK$ — [[GSV98 - Honest-Verifier Statistical Zero-Knowledge Equals General Statistical Zero-Knowledge|GSV98]]. The inclusion $\classSZK \subseteq \mathbf{HVSZK}$ holds by definition.

## Notes

- The transformation goes through public-coin honest-verifier protocols, which Okamoto's analysis provides, and then compiles them against cheating verifiers — [[GSV98 - Honest-Verifier Statistical Zero-Knowledge Equals General Statistical Zero-Knowledge|GSV98]], [[Oka96 - On Relationships between Statistical Zero-Knowledge Proofs|Oka96]].
- With [[coszk-to-szk-oka96|SZK = coSZK]], the class is closed under complement for every verifier — [[Oka96 - On Relationships between Statistical Zero-Knowledge Proofs|Oka96]].
