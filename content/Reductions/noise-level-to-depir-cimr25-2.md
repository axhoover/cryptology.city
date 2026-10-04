---
type: reduction
status: stub
title: "High-noise LPN ⇒ SK-DEPIR"
aliases: []
id: red-noise-level-to-depir-cimr25-2
kind: implication
hypotheses: [lpn-high-noise]
conclusion: sk-depir
class: unstated
model: standard
source:
  - "[[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]]"
security-loss: ""
---

# High-noise LPN ⇒ SK-DEPIR

## Statement

If [[learning-parity-with-noise#high-noise-lpn|high-noise LPN]] is hard, at noise rate $k^{-\gamma}$ for a constant $0 < \gamma < 1/2$ (a regime not known to imply public-key encryption), then for every constant $\varepsilon > 0$ there is a [[doubly-efficient-pir#secret-key-depir|secret-key DEPIR]] in a weak sense: communication is $O(N^{\varepsilon})$ and the server reads $N/\polylog(N)$ bits of the encoded database per query — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]].
