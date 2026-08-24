---
type: assumption
status: stub
aliases:
  - LSN
  - Learning subspace with noise
title: Learning subspace with noise
id: learning-subspace-with-noise
unlisted: true
---

# Learning subspace with noise

For a uniformly random rank-$k$ secret matrix $\mathbf{C} \in \FF^{k \times n}$, the $(k,n,\mu)$-LSN assumption states that samples $\mathbf{a}_i^T\mathbf{C} + \mathbf{e}_i$ -- where each $\mathbf{e}_i$ is uniform in $\FF^n$ with probability $\mu$ and zero otherwise -- are computationally indistinguishable from uniform.

TODO: syntax and security definition.

<!-- BEGIN GENERATED participates-in 109da4c9ef65 -->
## Participates in

**Builds on Learning subspace with noise**

- [[lsn-to-lpn-cimr25|LSN ⇒ LPN]]
- [[lsn-to-secret-key-pir-sk-pir-cimr25|LSN ⇒ Secret-Key PIR (SK-PIR)]]
<!-- END GENERATED participates-in -->
