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

For GapCVP with distance bound $d$, the verifier picks $b \getsr \bits$ and $r$ uniform in a ball of radius $\gamma d / 2$, and sends $b\,t + r$ reduced modulo the lattice's fundamental parallelepiped. On a no-instance the two balls are disjoint and the prover tells $b$; on a yes-instance their overlap is a $1/\poly(n)$ fraction of their volume, so every prover errs with noticeable probability, and repetition amplifies the gap. The protocol is honest-verifier perfect zero-knowledge, and the private-coin protocol becomes public-coin by [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]] — [[GG00 - On the limits of non-approximability of lattice problems|GG00]].

## Notes

- Statistical zero-knowledge proofs for $\mathrm{GapSVP}_\gamma$ itself, the $\classNP$ direction, have a prover that is efficient given a short lattice vector: [[gapsvp-to-szk-mv03|GapSVP ∈ SZK]] — [[MV03 - Statistical Zero-Knowledge Proofs with Efficient Provers Lattice Problems and More|MV03]].
- Hence $\mathrm{GapSVP}_{\sqrt{n/\log n}}$ is not $\classNP$-hard under Karp reductions unless the polynomial hierarchy collapses: [[no-np-to-gapsvp-gg00|No Karp reduction from NP to GapSVP√(n/log n)]] — [[GG00 - On the limits of non-approximability of lattice problems|GG00]], [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]].
