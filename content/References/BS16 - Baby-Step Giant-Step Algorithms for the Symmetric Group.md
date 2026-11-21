---
type: reference
status: draft
title: "BS16"
source: https://arxiv.org/abs/1612.03456
authors: Eric Bach, Bryce Sandlund
venue: arXiv 2016
published: 2016-12-11
aliases:
  - BS16
bibtex: |
  @misc{BS16,
    author       = {Eric Bach and Bryce Sandlund},
    title        = {Baby-Step Giant-Step Algorithms for the Symmetric Group},
    howpublished = {arXiv:1612.03456},
    year         = {2016},
    url          = {https://arxiv.org/abs/1612.03456}
  }
---

# [BS16] Baby-Step Giant-Step Algorithms for the Symmetric Group

**Authors:** Eric Bach, Bryce Sandlund | **Venue:** arXiv 2016 | [Source](https://arxiv.org/abs/1612.03456)

## Abstract

We study discrete logarithms in the setting of group actions. Suppose that $G$ is a group that acts on a set $S$. When $r,s \in S$, a solution $g \in G$ to $r^g = s$ can be thought of as a kind of logarithm. In this paper, we study the case where $G = S_n$, and develop analogs to the Shanks baby-step / giant-step procedure for ordinary discrete logarithms. Specifically, we compute two sets $A, B \subseteq S_n$ such that every permutation of $S_n$ can be written as a product $ab$ of elements $a \in A$ and $b \in B$. Our deterministic procedure is optimal up to constant factors, in the sense that $A$ and $B$ can be computed in optimal asymptotic complexity, and $|A|$ and $|B|$ are a small constant from $\sqrt{n!}$ in size. We also analyze randomized "collision" algorithms for the same problem.
