---
title: "NR97"
source: https://dl.acm.org/doi/10.1145/258533.258556
authors: Moni Naor, Omer Reingold
venue: FOCS 1997
published: 1997-10-01
aliases:
  - NR97
tags:
  - FOCS
---

# [NR97] Number-Theoretic Constructions of Efficient Pseudo-Random Functions

**Authors:** Moni Naor, Omer Reingold | **Venue:** FOCS 1997 | [Source](https://dl.acm.org/doi/10.1145/258533.258556)

## Abstract

We describe efficient constructions for pseudorandom functions and pseudorandom permutations based on the hardness of the decisional Diffie-Hellman (DDH) problem. Given a group $\mathbb{G}$ of prime order $p$ with generator $g$ in which DDH is hard, and a secret key $(a_1, \ldots, a_n) \in \mathbb{Z}_p^n$, the Naor-Reingold PRF maps $x = (x_1, \ldots, x_n) \in \{0,1\}^n$ to $g^{a_0 \cdot a_1^{x_1} \cdots a_n^{x_n}}$. The proof of security relies on the DDH assumption and a hybrid argument over the input bits. The resulting PRF can be evaluated very efficiently: a single group exponentiation suffices for each input, making it considerably more efficient than the tree-based GGM construction when the domain is fixed.
