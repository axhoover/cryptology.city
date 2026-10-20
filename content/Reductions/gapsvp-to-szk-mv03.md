---
type: reduction
status: draft
title: GapSVP ∈ SZK for γ ≥ √(n/log n)
aliases: []
id: red-gapsvp-to-szk-mv03
kind: inclusion
hypotheses: [gapsvp]
conclusion: szk
class: free
model: standard
source:
  - "[[MV03 - Statistical Zero-Knowledge Proofs with Efficient Provers Lattice Problems and More|MV03]]"
security-loss: ""
---

# GapSVP ∈ SZK for γ ≥ √(n/log n)

## Statement

For $\gamma = c\sqrt{n / \log n}$, $\mathrm{GapSVP}_\gamma$ ([[shortest-vector-problem|GapSVP]]) and $\mathrm{GapCVP}_\gamma$ have [[statistical-zero-knowledge|statistical zero-knowledge]] proofs whose provers are efficient given a short witness — [[MV03 - Statistical Zero-Knowledge Proofs with Efficient Provers Lattice Problems and More|MV03]].

## Notes

- [[coszk-to-szk-oka96|SZK is closed under complement]], so the complement of the Goldreich–Goldwasser protocol already places the problem in $\classSZK$; MV03's contribution is the efficient prover — [[MV03 - Statistical Zero-Knowledge Proofs with Efficient Provers Lattice Problems and More|MV03]], [[GG00 - On the limits of non-approximability of lattice problems|GG00]].
- Since $\classSZK \subseteq \classAM \cap \classcoAM$ ([[szk-to-am|SZK ⊆ AM]], [[szk-to-coam|SZK ⊆ coAM]]), the problem is not $\classNP$-hard under Karp reductions unless the polynomial hierarchy collapses — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]].
