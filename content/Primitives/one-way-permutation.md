---
aliases:
  - OWP
  - One-way permutation
  - One-way permutations
title: One-way permutations
---
# One-way permutations
A one-way permutation is a permutation which is easy to compute in one direction but hard to invert.

## Properties
A *one-way permutation* is a family of efficiently computable permutations $\{\pi_{\secpar} : \calD \to \mathcal{D}\}_{\secpar \in \mathbb{N}}$ and a distribution $X$ over $\mathcal{D}$, such that there is some negligible function $\nu$, where, for every $\secpar$ and  efficient algorithm $\calA$: $$\Pr_{x\sim X}[\pi_{\secpar}(x') = \pi_{\secpar}(x) : x' \gets \mathcal{A}(1^{\secpar}, \pi_{\secpar}(x))] \le \nu(\secpar).$$

# Other results
- A OWP is trivially a [[hash-function|OWF]].
- A OWP cannot be constructed from an injective one-way function in a black-box way. — [[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11]]