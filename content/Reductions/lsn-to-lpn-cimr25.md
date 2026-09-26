---
type: reduction
status: draft
title: "LSN ⇒ LPN"
aliases: []
id: red-lsn-to-lpn-cimr25
kind: implication
hypotheses: [learning-subspace-with-noise]
conclusion: lpn
class: unstated
model: standard
source:
  - "[[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]]"
security-loss: ""
---

# LSN ⇒ LPN

[[learning-subspace-with-noise|LSN]] implies [[learning-parity-with-noise|LPN]].

## Statement

For constant code rate $\rho = k/n$ and noise parameter $\eta = 1 - \mu = o(1)$, hardness of $(k, n, \mu)$-[[learning-subspace-with-noise|LSN]] implies hardness of [[learning-parity-with-noise|LPN]] with code dimension $k$, code length $k(1 + \Omega(\eta))$ and noise rate $\eta$ [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- The target model has no parameter fields; the regime (constant rate, $\eta = 1 - \mu = o(1)$) survives only in the statement text — a modelling gap for LPN/LSN edges.
- learning-subspace-with-noise.md exists only as an unlisted stub (alias LSN) with a TODO security definition.
