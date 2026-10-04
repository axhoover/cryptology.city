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

## Statement

For constant code rate $\rho = k/n$ and noise parameter $\eta = 1 - \mu = o(1)$, hardness of $(k, n, \mu)$-[[learning-subspace-with-noise|LSN]] implies hardness of $(k, \eta)$-[[learning-parity-with-noise|LPN]] with $m = k(1 + \Omega(\eta))$ samples, that is, of decoding a random code of dimension $k$ and length $m$ at noise rate $\eta$ — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]].
