---
type: reference
status: draft
title: "PZ03"
source: https://arxiv.org/abs/quant-ph/0301141
authors: John Proos, Christof Zalka
venue: Quantum Information and Computation, 2003
published: 2003
aliases:
  - PZ03
bibtex: |
  @article{PZ03,
    author  = {John Proos and Christof Zalka},
    title   = {Shor's Discrete Logarithm Quantum Algorithm for Elliptic Curves},
    journal = {Quantum Information and Computation},
    volume  = {3},
    number  = {4},
    pages   = {317--344},
    year    = {2003},
    url     = {https://arxiv.org/abs/quant-ph/0301141},
  }
---

# [PZ03] Shor's discrete logarithm quantum algorithm for elliptic curves

**Authors:** John Proos, Christof Zalka | **Venue:** Quantum Information and Computation, 2003 | [Source](https://arxiv.org/abs/quant-ph/0301141)

## Abstract

We show in some detail how to implement Shor's efficient quantum algorithm for discrete logarithms for the particular case of elliptic curve groups. It turns out that for this problem a smaller quantum computer can solve problems further beyond current computing than for integer factorisation. A 160 bit elliptic curve cryptographic key could be broken on a quantum computer using around 1000 qubits while factoring the security-wise equivalent 1024 bit RSA modulus would require about 2000 qubits. In this paper we only consider elliptic curves over GF($p$) and not yet the equally important ones over GF($2^n$) or other finite fields. The main technical difficulty is to implement Euclid's gcd algorithm to compute multiplicative inverses modulo $p$. As the runtime of Euclid's algorithm depends on the input, one difficulty encountered is the “quantum halting problem”.
