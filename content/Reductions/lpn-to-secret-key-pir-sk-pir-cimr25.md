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

## Statement

If [[learning-parity-with-noise#high-noise-lpn|high-noise LPN]] is hard, at noise rate $k^{-\gamma}$ for a constant $0 < \gamma < 1/2$ (a regime not known to imply public-key encryption), there is a [[single-server-private-information-retrieval#secret-key-pir-sk-pir|secret-key PIR]] scheme for $N$-bit databases with communication $O(N^{\varepsilon})$ for every constant $\varepsilon > 0$ — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]].

## Notes

- One-way functions alone give SK-PIR, at online communication $\tilde{O}(\sqrt{N})$ rather than $O(N^{\varepsilon})$ — [[BM26 - Secret-Key PIR from One-Way Functions|BM26]] ([[hash-function-to-secret-key-pir-sk-pir-bm26|OWF ⇒ Secret-Key PIR (SK-PIR)]]).
- Under [[learning-subspace-with-noise|LSN]], the same paper achieves similar communication with encoding size $(1 + \varepsilon) N$ and a server circuit of size $(4 + \varepsilon) N$ — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]] ([[lsn-to-secret-key-pir-sk-pir-cimr25|LSN ⇒ Secret-Key PIR (SK-PIR)]]).
