---
type: reduction
status: draft
title: Statistical Difference is SZK-complete
aliases: []
id: red-statistical-difference-to-szk-sv03
kind: inclusion
hypotheses: [statistical-difference]
conclusion: szk
class: free
model: standard
source:
  - "[[SV03 - A Complete Problem for Statistical Zero Knowledge|SV03]]"
  - "[[GSV98 - Honest-Verifier Statistical Zero-Knowledge Equals General Statistical Zero-Knowledge|GSV98]]"
security-loss: ""
---

# Statistical Difference is SZK-complete

## Statement

[[statistical-zero-knowledge#statistical-difference|Statistical Difference]] $\mathrm{SD}^{2/3, 1/3}$ has an [[statistical-zero-knowledge#honest-verifier-szk|honest-verifier]] statistical zero-knowledge proof, and every promise problem with one reduces to it by a Karp reduction — [[SV03 - A Complete Problem for Statistical Zero Knowledge|SV03]]. Since honest-verifier and general statistical zero-knowledge coincide ([[honest-verifier-szk-to-szk-gsv98|HVSZK = SZK]]) — [[GSV98 - Honest-Verifier Statistical Zero-Knowledge Equals General Statistical Zero-Knowledge|GSV98]] — $\mathrm{SD}^{2/3,1/3}$ is $\classSZK$-complete.

## Sketch

Polarization first amplifies the gap, so that yes-instances have statistical distance $1 - 2^{-k}$ and no-instances $2^{-k}$. The proof system then has the verifier sample $b \getsr \bits$ and a sample $y$ from $C_b$; the prover must name $b$, which it can do almost always when the distributions are far apart and with probability about $1/2$ when they are close. The honest verifier learns only $b$, which it already knows — [[SV03 - A Complete Problem for Statistical Zero Knowledge|SV03]].

## Notes

- Completeness of Statistical Difference gives a simpler proof that honest-verifier SZK is closed under complement, hence of [[coszk-to-szk-oka96|SZK = coSZK]] — [[SV03 - A Complete Problem for Statistical Zero Knowledge|SV03]], [[GSV98 - Honest-Verifier Statistical Zero-Knowledge Equals General Statistical Zero-Knowledge|GSV98]].
