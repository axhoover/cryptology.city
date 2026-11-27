---
type: reference
status: draft
title: "GL89"
source: https://doi.org/10.1145/73007.73010
authors: Oded Goldreich, Leonid A. Levin
venue: STOC 1989
published: 1989-05-15
aliases:
  - GL89
cryptobib_key: STOC:GolLev89
---

# [GL89] A Hard-Core Predicate for All One-Way Functions

**Authors:** Oded Goldreich, Leonid A. Levin | **Venue:** STOC 1989 | [Source](https://doi.org/10.1145/73007.73010)

## Abstract

A central tool in constructing pseudorandom generators, secure encryption functions, and in other areas are "hard-core" predicates $b$ of functions (permutations) $f$, discovered in [Blum Micali 82]. Such $b(x)$ cannot be efficiently guessed (substantially better than 50-50) given only $f(x)$. Both $b, f$ are computable in polynomial time.

[Yao 82] transforms any one-way function $f$ into a more complicated one, $f^*$, which has a hard-core predicate. The construction applies the original $f$ to many small pieces of the input to $f^*$ just to get one "hard-core" bit. The security of this bit may be smaller than any constant positive power of the security of $f$. In fact, for inputs (to $f^*$) of practical size, the pieces effected by $f$ are so small that $f$ can be inverted (and the "hard-core" bit computed) by exhaustive search.

In this paper we show that every one-way function, padded to the form $f(p, x) = (p, g(x))$, $\|p\| = \|x\|$, has by itself a hard-core predicate of the same (within a polynomial) security. Namely, we prove a conjecture of [Levin 87, sec. 5.6.2] that the scalar product of boolean vectors $p, x$ is a hard-core of every one-way function $f(p, x) = (p, g(x))$. The result extends to multiple (up to the logarithm of security) such bits and to any distribution on the $x$'s for which $f$ is hard to invert.
