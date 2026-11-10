---
type: reference
status: draft
title: "BM09"
source: https://eprint.iacr.org/2008/032
authors: Boaz Barak, Mohammad Mahmoody-Ghidary
venue: CRYPTO 2009
published: 2009-08-19
aliases:
  - BM09
bibtex: |
  @inproceedings{BM09,
    author    = {Boaz Barak and Mohammad Mahmoody-Ghidary},
    title     = {Merkle Puzzles Are Optimal --- An {$O(n^2)$}-Query Attack on Any Key Exchange from a Random Oracle},
    booktitle = {Advances in Cryptology --- CRYPTO 2009},
    series    = {Lecture Notes in Computer Science},
    volume    = {5677},
    pages     = {374--390},
    publisher = {Springer},
    year      = {2009},
    url       = {https://eprint.iacr.org/2008/032}
  }
---

# [BM09] Merkle Puzzles Are Optimal — An O(n²)-Query Attack on Any Key Exchange from a Random Oracle

**Authors:** Boaz Barak, Mohammad Mahmoody-Ghidary | **Venue:** CRYPTO 2009 | [Source](https://eprint.iacr.org/2008/032)

## Abstract

We prove that every key agreement protocol in the random oracle model in which the honest users make at most $n$ queries to the oracle can be broken by an adversary who makes $O(n^2)$ queries to the oracle. This improves on the previous $\Omega(n^6)$ query attack given by Impagliazzo and Rudich (STOC '89) and resolves an open question posed by
them.

Our bound is optimal up to a constant factor since Merkle proposed a key agreement protocol in 1974 that can be easily implemented with $n$ queries to a random oracle and cannot be broken by any adversary who asks $o(n^2)$ queries.
