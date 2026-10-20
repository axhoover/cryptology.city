---
type: reduction
status: draft
title: GapSVP ∈ SZK for γ ≥ √(n/log n)
aliases: []
id: red-gapsvp-to-szk-mv03
kind: inclusion
hypotheses: [gapsvp-sqrt-n-over-log-n]
conclusion: szk
class: free
model: standard
source:
  - "[[MV03 - Statistical Zero-Knowledge Proofs with Efficient Provers Lattice Problems and More|MV03]]"
security-loss: ""
---

# GapSVP ∈ SZK for γ ≥ √(n/log n)

## Statement

For $\gamma = c\sqrt{n / \log n}$, $\mathrm{GapSVP}_\gamma$ ([[shortest-vector-problem#factor-square-root-of-n-over-log-n|GapSVP]]) and $\mathrm{GapCVP}_\gamma$ have [[statistical-zero-knowledge|statistical zero-knowledge]] proofs whose provers are efficient given an $\classNP$ witness, a short lattice vector or, for GapCVP, a lattice vector close to the target — [[MV03 - Statistical Zero-Knowledge Proofs with Efficient Provers Lattice Problems and More|MV03]].

## Notes

- The Goldreich–Goldwasser protocol places the complement in $\mathbf{HVSZK}$, which equals $\classSZK$ ([[honest-verifier-szk-to-szk-gsv98|HVSZK = SZK]]), and [[coszk-to-szk-oka96|closure under complement]] then places the problem itself in $\classSZK$; MV03's contribution is the efficient prover — [[GG00 - On the limits of non-approximability of lattice problems|GG00]], [[GSV98 - Honest-Verifier Statistical Zero-Knowledge Equals General Statistical Zero-Knowledge|GSV98]], [[Oka96 - On Relationships between Statistical Zero-Knowledge Proofs|Oka96]], [[MV03 - Statistical Zero-Knowledge Proofs with Efficient Provers Lattice Problems and More|MV03]].
- Since $\classSZK \subseteq \classAM \cap \classcoAM$ ([[szk-to-am|SZK ⊆ AM]], [[szk-to-coam|SZK ⊆ coAM]]), the problem is not $\classNP$-hard under Karp reductions unless the polynomial hierarchy collapses — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]].
