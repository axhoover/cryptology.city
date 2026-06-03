---
title: "GHJS25"
source: https://eprint.iacr.org/2025/1501
authors: Riddhi Ghosal, Isaac M. Hair, Aayush Jain, Amit Sahai
venue: STOC 2025
published: 2025
aliases:
  - GHJS25
bibtex: |
  @inproceedings{GHJS25,
    author    = {Riddhi Ghosal and Isaac M. Hair and Aayush Jain and Amit Sahai},
    title     = {Using the Planted Clique Conjecture for Cryptography: {Public-Key} Encryption from Planted Clique and Noisy $k$-{LIN} Over Expanders},
    booktitle = {Proceedings of the 57th Annual ACM Symposium on Theory of Computing},
    series    = {STOC 2025},
    year      = {2025},
    note      = {Also available as \url{https://eprint.iacr.org/2025/1501}}
  }
---

# [GHJS25] Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders

**Authors:** Riddhi Ghosal, Isaac M. Hair, Aayush Jain, Amit Sahai | **Venue:** STOC 2025 | [ePrint](https://eprint.iacr.org/2025/1501)

## Abstract

This paper constructs semantically secure public-key encryption from two new hardness assumptions: the planted clique conjecture (the hardness of detecting a clique of size $n^{\log^\alpha n}$ planted in $G(n,1/2)$) and the noisy $k$-LIN assumption over expanders (the hardness of distinguishing $(\mathbf{M}, \mathbf{Ms}+\mathbf{e})$ from uniform when $\mathbf{M}$ is a $(\gamma, \Omega(\log n), 2^{(\log n)^\alpha})$-expanding matrix over $\mathbb{F}_p$). The noisy $k$-LIN assumption over expanders is an $\mathbb{F}_p$-field generalization of the Sparse LPN assumption used in prior cryptographic work. The construction achieves security against polynomial-size adversaries (Theorem 5.12), with an alternative construction based on a search variant of the noisy $k$-LIN assumption (Theorem 8.8).
