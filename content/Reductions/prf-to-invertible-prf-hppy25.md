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

## Sketch

The iPRF is $\Eval(k, x) = S(P(x))$, where $P$ is a small-domain [[pseudorandom-permutation|PRP]] on the domain, built from the PRF, and $S$ is a pseudorandom multinomial sampler: a binary tree over the range in which each node splits its contiguous block of inputs between the two halves of its range by a binomial sample, with success probability the left half's share of the range and PRF-derived coins. With $P$ a uniform permutation and $S$ run on true coins, $\Eval(k, \cdot)$ is a uniform function, since a uniform permutation followed by a map sending contiguous blocks of multinomially distributed sizes to the range points gives each input an independent uniform output; $\Invert(k, y)$ walks the tree to the block $S^{-1}(y)$ and applies $P^{-1}$ to each of its elements — [[HPPY25 - Plinko Single-Server PIR with Efficient Updates via Invertible PRFs|HPPY25]].

## Notes

- A [[pseudorandom-permutation|PRP]] alone is an iPRF for the forward-oracle game $\Game^{\mathrm{prf}}$ only over a domain of superpolynomial size, where the [[switching-lemma|Switching Lemma]] applies ([[prp-to-invertible-prf|PRP ⇒ iPRF]]) — folklore.
