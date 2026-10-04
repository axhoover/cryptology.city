---
type: reduction
status: draft
title: "LSN ⇒ Secret-Key PIR (SK-PIR)"
aliases: []
id: red-lsn-to-secret-key-pir-sk-pir-cimr25
kind: implication
hypotheses: [learning-subspace-with-noise]
conclusion: secret-key-pir
class: unstated
model: standard
source:
  - "[[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]]"
security-loss: ""
---

# LSN ⇒ Secret-Key PIR (SK-PIR)

## Statement

If the $(k, n, \mu)$-[[learning-subspace-with-noise|LSN]] assumption holds at constant code rate $k/n$ and noise $\mu = 1 - o(1)$, then for every constant $\varepsilon > 0$ there is a [[single-server-private-information-retrieval#secret-key-pir-sk-pir|secret-key PIR]] scheme for $N$-bit databases with communication $O(N^{\varepsilon})$, encoding size $(1 + \varepsilon) N$, and a server implementable by a Boolean circuit of size $(4 + \varepsilon) N$ — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]].

## Notes

- LSN is due to [[DKL09 - On cryptography with auxiliary input|DKL09]]; CIMR25 conjecture its hardness in the new regime $k \ge \rho n$ and $\mu \ge 1 - o(1)$, for every constant $0 < \rho < 1$ — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]].
- From [[learning-parity-with-noise#high-noise-lpn|high-noise LPN]], the same paper obtains SK-PIR with $O(N^{\varepsilon})$ communication — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]] ([[lpn-to-secret-key-pir-sk-pir-cimr25|High-noise LPN ⇒ Secret-Key PIR (SK-PIR)]]).
