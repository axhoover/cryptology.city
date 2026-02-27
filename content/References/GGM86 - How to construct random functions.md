---
title: How to construct random functions
source: https://dl.acm.org/doi/abs/10.1145/6490.6503
authors: Oded Goldreich, Shafi Goldwasser, Silvio Micali
venue: Journal of the ACM 1986
published: 1986-09-10
aliases:
  - GGM86
---
# How to construct random functions
URL: https://dl.acm.org/doi/abs/10.1145/6490.6503
Authors: Oded Goldreich, Shafi Goldwasser, Silvio Micali
## Abstract
A constructive theory of randomness for functions, based on computational complexity, is developed, and a pseudorandom function generator is presented. This generator is a deterministic polynomial-time algorithm that transforms pairs ($g$, $r$), where $g$ is \textit{any} one-way function and $r$ is a random $k$-bit string, to polynomial-time computable functions $ƒ_r$: {1, …, $2^k$} → {1, …, $2^k$}. These $ƒ_r$'s cannot be distinguished from \textit{random} functions by any probabilistic polynomial-time algorithm that asks and receives the value of a function at arguments of its choice. The result has applications in cryptography, random constructions, and complexity theory.