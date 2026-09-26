---
type: reduction
status: stub
title: "Noise Level ⇒ DEPIR"
aliases: []
id: red-noise-level-to-depir-cimr25
kind: implication
hypotheses: [lpn-mid-noise]
conclusion: depir
class: unstated
model: standard
source:
  - "[[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]]"
security-loss: ""
---

# Noise Level ⇒ DEPIR

[[learning-parity-with-noise#noise-level|Mid-noise LPN]] implies a weak form of secret-key [[doubly-efficient-pir|DEPIR]].

## Statement

Hardness of [[learning-parity-with-noise#noise-level|mid-noise LPN]] (noise rate $k^{-\gamma}$ for a constant $0 < \gamma < 1$) implies secret-key [[doubly-efficient-pir|DEPIR]] in a weak sense: for every constant $\varepsilon > 0$, communication is $O(N^{\varepsilon})$ and the server reads $N/\polylog(N)$ bits of the encoded database per query [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
