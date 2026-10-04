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
rationale:
  class: "The iPRF is the PRP with its inversion wrapped to return a singleton, calling the PRP only as an oracle, and the reduction runs any distinguisher unchanged as a PRP distinguisher; the switching-lemma gap is information-theoretic."
---

# PRP ⇒ iPRF (large domains)

## Statement

A [[pseudorandom-permutation|PRP]] $(\KeyGen, \Eval, \Invert)$ over a domain $\calD$ with $|\calD|$ superpolynomial in $\secpar$ is an [[pseudorandom-function#invertible-prfs|invertible PRF]] for the traditional (forward-oracle) game $\Game^{\mathrm{prf}}$, with inversion algorithm $y \mapsto \{\Invert(k, y)\}$: for every $q$-query $\calA$ the PRF advantage is at most the PRP advantage plus the $O(q^2/|\calD|)$ term of the [[switching-lemma|Switching Lemma]], as in [[prp-to-prf|PRP ⇒ PRF]] — folklore. Strong security under $\Game^{\mathrm{iprf}}$, where $\calA$ also queries the inversion oracle, fails for every permutation, since $\{\Invert(k, y)\}$ is never empty while a random function's preimage set is empty with constant probability — folklore.

## Sketch

A permutation is an iPRF with singleton preimage sets and perfect correctness. Against forward queries a random permutation is within $O(q^2/|\calD|)$ of a random function, so PRP security transfers to $\Game^{\mathrm{prf}}$ with birthday loss.
