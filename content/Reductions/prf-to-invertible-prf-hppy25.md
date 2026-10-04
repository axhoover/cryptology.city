---
type: reduction
status: draft
title: PRF ⇒ iPRF
aliases: []
id: red-prf-to-invertible-prf-hppy25
kind: implication
hypotheses: [prf]
conclusion: invertible-prf
class: unstated
model: standard
source:
  - "[[HPPY25 - Plinko Single-Server PIR with Efficient Updates via Invertible PRFs|HPPY25]]"
security-loss: ""
---

# PRF ⇒ iPRF

## Statement

Any [[pseudorandom-function|PRF]] (indeed any [[hash-function#preimage-resistance-one-wayness|one-way function]]) yields an [[pseudorandom-function#invertible-prfs|invertible PRF]] $(\KeyGen, \Eval, \Invert)$ for arbitrary domain and range sizes, including small ones, with $\tilde{O}(1)$-time evaluation and inversion time linear in the size of the returned preimage set — [[HPPY25 - Plinko Single-Server PIR with Efficient Updates via Invertible PRFs|HPPY25]].

## Notes

- Over a domain of superpolynomial size a [[pseudorandom-permutation|PRP]] is already an iPRF for the forward-oracle game $\Game^{\mathrm{prf}}$, by the [[switching-lemma|Switching Lemma]] ([[prp-to-invertible-prf|PRP ⇒ iPRF (large domains)]]) — folklore.
