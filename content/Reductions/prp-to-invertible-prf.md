---
type: reduction
status: draft
title: PRP ⇒ iPRF (large domains)
aliases: []
id: red-prp-to-invertible-prf
kind: implication
hypotheses: [prp]
conclusion: invertible-prf
class: fully-black-box
model: standard
source: folklore
via:
  - "[[switching-lemma|Switching Lemma]]"
security-loss: "$O(q^2/|\\calD|)$ for $q$ queries, per the switching lemma"
---

# PRP ⇒ iPRF (large domains)

A [[pseudorandom-permutation|PRP]] over a large domain is an
[[pseudorandom-function#invertible-prfs|invertible PRF]] under the forward-oracle
security game.

## Statement

A [[pseudorandom-permutation|PRP]] over a domain $\calD$ with $|\calD|$ superpolynomial in $\secpar$ is an [[pseudorandom-function#invertible-prfs|invertible PRF]] under the traditional (forward-oracle) game $\Game^{\mathrm{prf}}$: the iPRF's inversion algorithm returns the singleton $\{\Invert(k, y)\}$, and for every $q$-query $\calA$ the PRF advantage is at most the PRP advantage plus the [[switching-lemma|Switching Lemma]] term $O(q^2/|\calD|)$, as in [[prp-to-prf|PRP ⇒ PRF]] — folklore. Strong security under $\Game^{\mathrm{iprf}}$, where $\calA$ also queries the inversion oracle, fails for every permutation: $\{\Invert(k, y)\}$ is never empty, while a random function's preimage set is empty with constant probability.

## Sketch

A permutation is an iPRF with singleton preimage sets and perfect correctness. For forward queries only, a random permutation is statistically within $O(q^2/|\calD|)$ of a random function, so PRP security transfers to the traditional PRF game with birthday loss.

## Notes

`class: fully-black-box`: The iPRF is the PRP itself with $\Invert$ wrapped to return the singleton preimage set; both algorithms call the PRP only as oracles. The security reduction runs any distinguisher unchanged as a PRP distinguisher; the remaining ideal-world gap (random permutation vs. random function, forward queries only) is the information-theoretic switching-lemma term and needs no access to the adversary's code.

- The unscoped claim on both parent pages is flagged in the fact-check queue.
