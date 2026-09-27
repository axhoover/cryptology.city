---
type: reduction
status: draft
title: "High-noise LPN ⇒ Secret-Key PIR (SK-PIR)"
aliases: []
id: red-lpn-to-secret-key-pir-sk-pir-cimr25
kind: implication
hypotheses: [lpn-high-noise]
conclusion: secret-key-pir
class: unstated
model: standard
source:
  - "[[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]]"
security-loss: ""
---

# High-noise LPN ⇒ Secret-Key PIR (SK-PIR)

[[learning-parity-with-noise#high-noise-lpn|High-noise LPN]] implies [[single-server-private-information-retrieval#secret-key-pir-sk-pir|Secret-Key PIR (SK-PIR)]].

## Statement

Hardness of [[learning-parity-with-noise#high-noise-lpn|high-noise LPN]] (noise rate $k^{-\gamma}$ for a constant $0 < \gamma < 1/2$, a regime not known to imply public-key encryption) implies secret-key PIR ([[single-server-private-information-retrieval#secret-key-pir-sk-pir|SK-PIR]]) for $N$-bit databases with $O(N^{\varepsilon})$ communication for every constant $\varepsilon > 0$ [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- One-way functions alone give SK-PIR, at online communication $\tilde{O}(\sqrt{N})$ rather than $O(N^{\varepsilon})$ — [[BM26 - Secret-Key PIR from One-Way Functions|BM26]]
