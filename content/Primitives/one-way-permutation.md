---
type: primitive
status: stub
aliases:
  - OWP
  - One-way permutation
  - One-way permutations
title: One-way permutations
id: owp
---

# One-way permutations

A one-way permutation is a permutation which is easy to compute in one direction but hard to invert.

## Properties

A _one-way permutation_ is a family of efficiently computable permutations $\{\pi_{\secpar} : \calD \to \calD\}_{\secpar \in \NN}$ and a distribution $X$ over $\calD$, such that there is some negligible function $\nu$, where, for every $\secpar$ and efficient algorithm $\calA$: $$\Pr_{x\sim X}[\pi_{\secpar}(x') = \pi_{\secpar}(x) : x' \gets \calA(1^{\secpar}, \pi_{\secpar}(x))] \le \nu(\secpar).$$

# Other results

- [[owp-to-hash-function|OWP ⇒ Hash function]]
- [[no-injective-owf-to-owp-mm11|No reduction from Injective OWF to OWP]]
