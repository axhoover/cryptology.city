---
type: reference
status: draft
title: "ABH+26"
source: https://github.com/bochum-crypto/subexponential-ecdl/blob/main/subexponential-ecdl.pdf
authors: Akshima, Renas Bacho, Yu-Hsuan Huang, Eike Kiltz, Aysan Nishaburi, Samin Nooripoor, Noah Tittelbach, Emiel Wiedijk
venue: preprint
published: 2026-10-28
aliases:
  - ABH+26
bibtex: |
  @misc{ABH+26,
    author       = {Akshima and Renas Bacho and Yu-Hsuan Huang and Eike Kiltz and Aysan Nishaburi and Samin Nooripoor and Noah Tittelbach and Emiel Wiedijk},
    title        = {A Subexponential Time Algorithm for Elliptic Curve Discrete Logarithm},
    howpublished = {Preprint, version 0.2, 29 October 2026},
    year         = {2026},
    url          = {https://github.com/bochum-crypto/subexponential-ecdl/blob/main/subexponential-ecdl.pdf},
  }
---

# [ABH+26] A Subexponential Time Algorithm for Elliptic Curve Discrete Logarithm

**Authors:** Akshima, Renas Bacho, Yu-Hsuan Huang, Eike Kiltz, Aysan Nishaburi, Samin Nooripoor, Noah Tittelbach, Emiel Wiedijk | **Venue:** preprint | [Source](https://github.com/bochum-crypto/subexponential-ecdl/blob/main/subexponential-ecdl.pdf)

## Abstract

Elliptic-curve groups are usually modeled as generic groups, in which computing discrete logarithms provably takes $2^{\Omega(b)}$ group operations for a group of $b$-bit prime order. OpenAI recently claimed an algorithm that solves the Boolean tensor contraction problem, that is, counts the satisfying assignments of a graph whose edges are bits and whose vertices are predicates, in time $2^{O(s/\sqrt{\log s})}$ for graphs with $s$ edges and small maximum degree. Assuming this claim, we show that the discrete logarithm problem on elliptic curves of prime order over $b$-bit prime fields can be solved in expected time $2^{O(b/(\log b)^{1/4})}$, against $2^{b/2}$ for generic algorithms. Our algorithm is index calculus with randomly hashed factor bases, in which a contraction algorithm based on the Boolean tensor contraction problem finds the relations. Its only curve-specific ingredients are encodings of point validity and point addition by graphs with $O(b)$ edges, and it extends to curves with a fixed cofactor. The result is purely asymptotic and does not imply improved concrete attacks on currently deployed elliptic curves, including NIST P-256, NIST P-521, and Ed25519.

# Notes

The main theorem is conditional on Theorem D.1 of [[Ope26 - The Exponential Time Hypothesis is False|Ope26]], which the authors did not independently verify. Version 0.1 is dated 28 October 2026; the source link serves the current version.
