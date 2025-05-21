---
title: Candidate One-Way Functions Based on Expander Graphs
source: https://link.springer.com/chapter/10.1007/978-3-642-22670-0_10
authors: Oded Goldreich
venue: Electronic Colloquium on Computational Complexity (ECCC)
published: 2000-12-03
created: 2025-02-19
aliases:
  - Goldreich00
  - Goldreich's PRF
  - Gol00
---
# Candidate One-Way Functions Based on Expander Graphs
URL: https://link.springer.com/chapter/10.1007/978-3-642-22670-0_10
Authors: Oded Goldreich

## Abstract
We suggest a candidate one-way function using combinatorial constructs such as expander graphs. These graphs are used to determine a sequence of small overlapping subsets of input bits, to which a hard-wired random predicate is applied. Thus, the function is extremely easy to evaluate: all that is needed is to take multiple projections of the input bits, and to use these as entries to a look-up table. It is feasible for the adversary to scan the look-up table, but we believe it would be infeasible to find an input that fits a given sequence of values obtained for these overlapping projections.

The conjectured difficulty of inverting the suggested function does not seem to follow from any well-known assumption. Instead, we propose the study of the complexity of inverting this function as an interesting open problem, with the hope that further research will provide evidence to our belief that the inversion task is intractable.


# Notes

## Construction
For a predicate $P : \{0,1\}^d \to \{0,1\}$ and sequence $G = (S_1,\ldots,S_m)$ of $d$-tuples over the set $[n]$, we can define $f_{G,P}: \{0,1\}^n \to \{0,1\}^m$ as the mapping $$z \mapsto (P(z[S_1]),\ldots,P(z[S_m]))).$$
The conjecture states that for $m=n$ and possibly small values of $d$, the function $f_{G,P}$ is one-way as long as the set system $(S_1,\ldots,S_m)$ is "highly expanding" and the predicate $P$ is sufficiently "non-degenerate."