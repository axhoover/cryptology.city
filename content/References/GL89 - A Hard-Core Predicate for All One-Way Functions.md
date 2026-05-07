---
title: "GL89"
source: https://dl.acm.org/doi/10.1145/73007.73010
authors: Oded Goldreich, Leonid A. Levin
venue: STOC 1989
published: 1989-02-01
aliases:
  - GL89
tags:
  - STOC
cryptobib_key: STOC:GolLev89
---

# [GL89] A Hard-Core Predicate for All One-Way Functions

**Authors:** Oded Goldreich, Leonid A. Levin | **Venue:** STOC 1989 | [Source](https://dl.acm.org/doi/10.1145/73007.73010)

## Abstract

We prove that every one-way function has a hard-core predicate: a Boolean function $b(x)$ such that, given $f(x)$, no efficient algorithm can predict $b(x)$ with probability noticeably better than $1/2$. Specifically, for any one-way function $f$, the inner-product bit $b(x, r) = \langle x, r \rangle \pmod{2}$ is hard-core for the function $g(x, r) = (f(x), r)$, where $r$ is a uniformly random string of the same length as $x$. This result is the key step in the construction of a pseudorandom generator from any one-way function (see HILL99): the hard-core predicate provides a single pseudorandom bit, which can then be stretched into a full pseudorandom string.
