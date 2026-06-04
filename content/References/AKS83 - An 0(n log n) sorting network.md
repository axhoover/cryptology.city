---
title: "AKS83"
source: https://dl.acm.org/doi/10.1145/800061.808726
authors: M. Ajtai, J. Komlós, E. Szemerédi
venue: STOC 1983
published: 1983-12-01
created: 2025-04-22
aliases:
  - AKS83
tags:
  - STOC
bibtex: |
  @inproceedings{AKS83,
    author    = {Mikl\'{o}s Ajtai and J\'{a}nos Koml\'{o}s and Endre Szemer\'{e}di},
    title     = {An {$O(n \log n)$} Sorting Network},
    booktitle = {Proceedings of the 15th Annual ACM Symposium on Theory of Computing (STOC 1983)},
    pages     = {1--9},
    year      = {1983}
  }
---

# [AKS83] An 0(n log n) sorting network

**Authors:** M. Ajtai, J. Komlós, E. Szemerédi | **Venue:** STOC 1983 | [Source](https://dl.acm.org/doi/10.1145/800061.808726)

## Abstract

The purpose of this paper is to describe a sorting network of size O(n log n) and depth O(log n). A natural way of sorting is through consecutive halvings: determine the upper and lower halves of the set, proceed similarly within the halves, and so on. Unfortunately, while one can halve a set using only O(n) comparisons, this cannot be done in less than log n (parallel) time, and it is known that a halving network needs (1/2)n log n comparisons. It is possible, however, to construct a network of O(n) comparisons which halves in constant time with high accuracy. This procedure (ε-halving) and a derived procedure (ε-nearsort) are described below, and our sorting network will be centered around these elementary steps.
