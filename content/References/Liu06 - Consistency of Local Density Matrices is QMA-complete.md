---
type: reference
status: stub
title: "Liu06"
source: https://arxiv.org/abs/quant-ph/0604166
authors: Yi-Kai Liu
venue: APPROX-RANDOM 2006
published: 2006
aliases:
  - Liu06
bibtex: |
  @inproceedings{Liu06,
    author    = {Yi-Kai Liu},
    title     = {Consistency of Local Density Matrices Is {QMA}-Complete},
    booktitle = {Approximation, Randomization, and Combinatorial Optimization. Algorithms and Techniques, {APPROX} 2006 and {RANDOM} 2006},
    series    = {Lecture Notes in Computer Science},
    volume    = {4110},
    pages     = {438--449},
    publisher = {Springer},
    year      = {2006},
    doi       = {10.1007/11830924_40},
    url       = {https://arxiv.org/abs/quant-ph/0604166}
  }
---

# [Liu06] Consistency of Local Density Matrices is QMA-complete

**Authors:** Yi-Kai Liu | **Venue:** APPROX-RANDOM 2006 | [Source](https://arxiv.org/abs/quant-ph/0604166)

## Abstract

Suppose we have an n-qubit system, and we are given a collection of local density matrices rho_1,...,rho_m, where each rho_i describes a subset C_i of the qubits. We say that the rho_i are “consistent” if there exists some global state sigma (on all n qubits) that matches each of the rho_i on the subsets C_i. This generalizes the classical notion of the consistency of marginal probability distributions.

We show that deciding the consistency of local density matrices is QMA-complete (where QMA is the quantum analogue of NP). This gives an interesting example of a hard problem in QMA. Our proof is somewhat unusual: we give a Turing reduction from Local Hamiltonian, using a convex optimization algorithm by Bertsimas and Vempala, which is based on random sampling. Unlike in the classical case, simple mapping reductions do not seem to work here.
