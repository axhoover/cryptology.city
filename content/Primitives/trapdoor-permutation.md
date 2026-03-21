---
aliases:
  - TDP
  - TDF
  - Trapdoor function
title: Trapdoor permutation
---

# Trapdoor permutation

A trapdoor permutation (TDP) is a permutation which is easy to compute but hard to invert (like a [[hash-function|OWF]]), but is in fact easy to invert if given the _trapdoor_. Trapdoor permutations are associated with Impagliazzo's "Cryptomania" world. Their existence implies many different public-key cryptography primitives.

## Syntax

## Properties

A _trapdoor permutation_ with respect to a trapdoor space $\calT$ consists of two families of efficiently computable functions $\{f_{\secpar} : \calD \to \calR\}_{\secpar \in \mathbb{N}}$, $\{f^{-1}_{\secpar} : \mathcal{T}\times\mathcal{R} \to \mathcal{D}\}_{\secpar\in \mathbb{N}}$, and a distribution $(X,T)$ over $\mathcal{D}\times \mathcal{T}$, such that:

- The function is _one-way_: there is some negligible function $\nu$, where, for every $\secpar$ and efficient algorithm $\calA$: $$\Pr_{(x,t)\sim (X,T)}[f_{\secpar}(x') = f_{\secpar}(x) : x' \gets \mathcal{A}(1^{\secpar}, f_{\secpar}(x))] \le \nu(\secpar).$$
- And the function _easy to invert_ given the trapdoor: there is some negligible function $\nu$, where, for every $\secpar$, $$\Pr_{(x,t)\sim (X,T)}[f^{-1}_{\secpar}(t,f_\secpar(x)) = x] \ge 1- \nu(\secpar).$$

# Variations

TODO: Enhanced trapdoor permutations

# Other results

- [[public-key-encryption|PKE]] can be built from trapdoor permutations
- [[oblivious-transfer|OT]] can be built from enhanced trapdoor permutations
- The [[rsa-assumption|RSA assumption]] implies the existence of a OWP — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]
