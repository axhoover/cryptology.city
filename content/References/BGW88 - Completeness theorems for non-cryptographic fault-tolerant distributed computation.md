---
type: reference
status: draft
title: "BGW88"
source: https://dl.acm.org/doi/10.1145/62212.62213
authors: Michael Ben-Or, Shafi Goldwasser, Avi Wigderson
venue: STOC 1988
published: 1988
aliases:
  - BGW88
bibtex: |
  @inproceedings{BGW88,
    author    = {Michael Ben-Or and Shafi Goldwasser and Avi Wigderson},
    title     = {Completeness Theorems for Non-Cryptographic Fault-Tolerant Distributed Computation},
    booktitle = {Proceedings of the 20th Annual ACM Symposium on Theory of Computing (STOC 1988)},
    pages     = {1--10},
    year      = {1988}
  }
---

# [BGW88] Completeness Theorems for Non-Cryptographic Fault-Tolerant Distributed Computation

**Authors:** Michael Ben-Or, Shafi Goldwasser, Avi Wigderson | **Venue:** STOC 1988 | [Source](https://dl.acm.org/doi/10.1145/62212.62213)

## Abstract

Every function of $n$ inputs can be efficiently computed by a complete network of $n$ processors in such a way that:

1. If no faults occur, no set of size $t < n/2$ of players gets any additional information (other than the function value),
2. Even if Byzantine faults are allowed, no set of size $t < n/3$ can either disrupt the computation or get additional information.

Furthermore, the above bounds on $t$ are tight!
