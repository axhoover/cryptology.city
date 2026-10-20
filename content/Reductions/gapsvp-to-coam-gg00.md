---
type: reduction
status: draft
title: GapSVP ∈ coAM for γ ≥ √(n/log n)
aliases: []
id: red-gapsvp-to-coam-gg00
kind: inclusion
hypotheses: [gapsvp]
conclusion: coam
class: free
model: standard
source:
  - "[[GG00 - On the limits of non-approximability of lattice problems|GG00]]"
security-loss: ""
---

# GapSVP ∈ coAM for γ ≥ √(n/log n)

## Statement

For $\gamma = c\sqrt{n / \log n}$ with any constant $c > 0$, $\mathrm{GapSVP}_\gamma$ ([[shortest-vector-problem|GapSVP]]), and likewise $\mathrm{GapCVP}_\gamma$, lies in [[co-arthur-merlin|coAM]]: there is a constant-round interactive proof that the shortest nonzero vector is long — [[GG00 - On the limits of non-approximability of lattice problems|GG00]].

## Sketch

For GapCVP, the verifier picks $b \getsr \bits$ and sends a point that is either a perturbation of the target, if $b = 1$, or a perturbation of a lattice point, if $b = 0$, with noise uniform in a ball of radius about $\gamma/2$ times the distance bound. On a no-instance the two balls are disjoint and the prover tells $b$; on a yes-instance their overlap is a $1/\poly(n)$ fraction of their volume, so every prover errs with noticeable probability, and repetition amplifies the gap. The protocol is honest-verifier perfect zero-knowledge — [[GG00 - On the limits of non-approximability of lattice problems|GG00]].

## Notes

- With efficient provers the complement is in $\classSZK$: [[gapsvp-to-szk-mv03|GapSVP ∈ SZK]] — [[MV03 - Statistical Zero-Knowledge Proofs with Efficient Provers Lattice Problems and More|MV03]].
- Hence $\mathrm{GapSVP}_{\sqrt{n/\log n}}$ is not $\classNP$-hard under Karp reductions unless the polynomial hierarchy collapses: [[no-np-to-gapsvp-gg00|No Karp reduction from NP to GapSVP√(n/log n)]] — [[GG00 - On the limits of non-approximability of lattice problems|GG00]], [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]].
