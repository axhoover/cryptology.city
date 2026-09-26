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

[[learning-subspace-with-noise|LSN]] implies [[single-server-private-information-retrieval#secret-key-pir-sk-pir|Secret-Key PIR (SK-PIR)]].

## Statement

Under the $(k, n, \mu)$-[[learning-subspace-with-noise|LSN]] conjecture at constant code rate $k/n$ and noise $\mu = 1 - o(1)$, there is a [[single-server-private-information-retrieval#secret-key-pir-sk-pir|secret-key PIR]] scheme for an $N$-bit database with $O(N^\epsilon)$ communication for every constant $\epsilon > 0$, encoding size $(1 + \epsilon) N$, and a server implementable by a Boolean circuit of size $(4 + \epsilon) N$ [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- LSN originates with [[DKL09 - On cryptography with auxiliary input|DKL09]], per the [[YZ16 - Cryptography with Auxiliary Input and Trapdoor from Constant-Noise LPN|YZ16]] abstract; CIMR25 conjectures its hardness in a new constant-rate, high-noise regime, so the CIMR25 reference page's 'They introduce the LSN conjecture' needs qualifying.
- learning-subspace-with-noise.md exists only as an unlisted stub (alias LSN) with a TODO security definition; it should credit DKL09 and record CIMR25's parameter regime.
- The paper's LPN-based and LSN-based sk-PIR constructions are two independent single-hypothesis edges (disjunction, not conjunction); the LPN branch is recorded at [[lpn-to-secret-key-pir-sk-pir-cimr25]].
