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

A [[pseudorandom-function|PRF]] implies an
[[pseudorandom-function#invertible-prfs|invertible PRF]].

## Statement

Any [[pseudorandom-function|PRF]] (indeed any [[hash-function#preimage-resistance-one-wayness|one-way function]]) yields an [[pseudorandom-function#invertible-prfs|iPRF]] $(\KeyGen, \Eval, \Invert)$ for arbitrary domain and range sizes, including small ones, with $\tilde{O}(1)$-time evaluation and inversion time linear in the size of the returned preimage set — [[HPPY25 - Plinko Single-Server PIR with Efficient Updates via Invertible PRFs|HPPY25]].

## Sketch

HPPY25 compose a PRP with a pseudorandom multinomial sampler; a PRP alone is an iPRF only for large domains, where the PRF/PRP switching lemma applies.

## Notes

`class: unstated`: the full text has not been checked, so how the construction and the security reduction use the PRF is unconfirmed.

- The conclusion `invertible-prf` is a variant declared on [[pseudorandom-function|PRF]] (§ Variations), not a page of its own.
