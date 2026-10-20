---
type: reduction
status: draft
title: SZK = coSZK
aliases: []
id: red-coszk-to-szk-oka96
kind: equivalence
hypotheses: [coszk]
conclusion: szk
class: free
model: standard
source:
  - "[[Oka96 - On Relationships between Statistical Zero-Knowledge Proofs|Oka96]]"
  - "[[GSV98 - Honest-Verifier Statistical Zero-Knowledge Equals General Statistical Zero-Knowledge|GSV98]]"
security-loss: ""
---

# SZK = coSZK

## Statement

[[statistical-zero-knowledge|SZK]] is closed under complement, $\classSZK = \mathbf{coSZK}$: honest-verifier statistical zero-knowledge is closed under complement — [[Oka96 - On Relationships between Statistical Zero-Knowledge Proofs|Oka96]] — and honest-verifier and general statistical zero-knowledge coincide ([[honest-verifier-szk-to-szk-gsv98|HVSZK = SZK]]) — [[GSV98 - Honest-Verifier Statistical Zero-Knowledge Equals General Statistical Zero-Knowledge|GSV98]].

## Notes

- A simpler proof goes through the complete problem [[statistical-difference-to-szk-sv03|Statistical Difference]] — [[SV03 - A Complete Problem for Statistical Zero Knowledge|SV03]].
- Closure under complement with [[szk-to-am|SZK ⊆ AM]] gives $\classSZK \subseteq \classAM \cap \classcoAM$, so no $\classNP$-complete problem lies in SZK unless the polynomial hierarchy collapses — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]].
