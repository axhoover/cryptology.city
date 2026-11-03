---
type: reference
status: draft
title: "Ope26"
source: https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf
authors: OpenAI
venue: preprint
published: 2026-10-25
aliases:
  - Ope26
bibtex: |
  @misc{Ope26,
    author       = {{OpenAI}},
    title        = {The Exponential Time Hypothesis is False},
    howpublished = {Preprint, 17 October 2026, revised 25 October 2026},
    year         = {2026},
    url          = {https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf},
  }
---

# [Ope26] The Exponential Time Hypothesis is False

**Authors:** OpenAI | **Venue:** preprint | [Source](https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf)

## Abstract

We give a deterministic algorithm for exactly counting the satisfying assignments of an arbitrary $k$-CNF formula. For every fixed $k \ge 2$, on a formula with $n$ variables and $m$ clauses, our algorithm uses $\mathrm{poly}_k(n, m)$ space and runs in time $(n + m)^{O_k(1)} 2^{n/(\log n)^{\frac{1}{2}+o(1)}}$. Our algorithm refutes the Exponential Time Hypothesis (ETH), which postulates that deciding 3-SAT on $n$ variables requires $2^{\Omega(n)}$ time in the worst case.

# Notes

The manuscript is unrefereed. Its sharper bounds (Theorem 1.1) are proved in Appendix D through a Boolean tensor contraction theorem (Theorem D.1), the result [[ABH+26 - A Subexponential Time Algorithm for Elliptic Curve Discrete Logarithm|ABH+26]] assume.
