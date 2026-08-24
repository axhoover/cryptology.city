---
type: reduction
status: draft
title: PRF ⇒ iPRF
aliases: []
id: red-prf-to-invertible-prf-hppy25
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

Migrated verbatim from [[pseudorandom-function|PRF]] § Related results:

> PRFs imply the existence of iPRFs — [[HPPY25 - Plinko Single-Server PIR with Efficient Updates via Invertible PRFs|HPPY25]]

## Notes

No construction sketch travelled with this claim; see HPPY25 for the
construction.

The conclusion `invertible-prf` is a variant declared on
[[pseudorandom-function|PRF]], not a page of its own — the iPRF is defined there
under _Variations_. Before this pass, `iPRF` was an alias of the PRF page, which
made this edge a self-loop from `prf` to `prf`.
