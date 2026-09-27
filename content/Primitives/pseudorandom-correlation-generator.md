---
type: primitive
status: stub
aliases:
  - PCG
  - Pseudorandom correlation generator
title: Pseudorandom correlation generator
id: pseudorandom-correlation-generator
---

# Pseudorandom correlation generator

A pseudorandom correlation generator (PCG) for a target correlation $\calC$ samples a pair of seeds $(k_0, k_1)$ that the two parties expand locally into outputs $(R_0, R_1)$, such that the pair is indistinguishable from a sample of $\calC$ and each seed reveals nothing about the other party's output beyond what $\calC$ itself reveals — [[BCG+19 - Efficient Pseudorandom Correlation Generators Silent OT Extension and More|BCG+19]].

## Syntax

A correlation generator $\calC$ is a $\PPT$ algorithm that on input $1^\secpar$ outputs a pair $(R_0, R_1)$. A PCG for $\calC$ is a pair of efficient algorithms $(\Gen, \Eval)$:

- $\Gen(1^\secpar) \to (k_0, k_1)$, a randomized algorithm outputting a pair of seeds.
- $\Eval(\sigma, k_\sigma) \to R_\sigma$, a deterministic algorithm taking a party index $\sigma \in \bits$ and the seed $k_\sigma$, outputting party $\sigma$'s output $R_\sigma$.

$\Eval$ is called Expand in [[BCG+19 - Efficient Pseudorandom Correlation Generators Silent OT Extension and More|BCG+19]].

## Properties

### Correctness

The pair $(\Eval(0, k_0), \Eval(1, k_1))$ for $(k_0, k_1) \gets \Gen(1^\secpar)$ is computationally indistinguishable from $\calC(1^\secpar)$ — [[BCG+19 - Efficient Pseudorandom Correlation Generators Silent OT Extension and More|BCG+19]].

TODO: game.

### Security

$\calC$ is required to be reverse-sampleable: an efficient algorithm, given $\sigma$ and an output $R_{1-\sigma}$ of one party, samples an $R_\sigma$ such that the resulting pair is computationally indistinguishable from $\calC(1^\secpar)$. A PCG is **secure** if for each $\sigma \in \bits$, $(k_{1-\sigma}, \Eval(\sigma, k_\sigma))$ is computationally indistinguishable from $(k_{1-\sigma}, R_\sigma)$, where $R_\sigma$ is reverse-sampled from $R_{1-\sigma} = \Eval(1-\sigma, k_{1-\sigma})$ — [[BCG+19 - Efficient Pseudorandom Correlation Generators Silent OT Extension and More|BCG+19]].

TODO: game.
