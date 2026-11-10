---
type: reference
status: stub
title: "BHW19"
source: https://eprint.iacr.org/2019/1256
authors: Elette Boyle, Justin Holmgren, Mor Weiss
venue: TCC 2019
published: 2019
aliases:
  - BHW19
cryptobib_key: TCC:BoyHolWei19
---

# [BHW19] Permuted Puzzles and Cryptographic Hardness

**Authors:** Elette Boyle, Justin Holmgren, Mor Weiss | **Venue:** TCC 2019 | [Source](https://eprint.iacr.org/2019/1256)

## Abstract

A permuted puzzle problem is defined by a pair of distributions $D_0,D_1$ over $S^n$. The problem is to distinguish samples from $D_0,D_1$, where the symbols of each sample are permuted by a single secret permutation $p$ of $[n]$.

The conjectured hardness of specific instances of permuted puzzle problems was recently used to obtain the first candidate constructions of Doubly Efficient Private Information Retrieval (DE-PIR) (Boyle et al. & Canetti et al., TCC'17). Roughly, in these works the distributions $D_0,D_1$ over $F^n$ are evaluations of either a moderately low-degree polynomial or a random function. This new conjecture seems to be quite powerful, and is the foundation for the first DE-PIR candidates, almost two decades after the question was first posed by Beimel et al. (CRYPTO'00). While permuted puzzles are a natural and general class of problems, their hardness is still poorly understood.

We initiate a formal investigation of the cryptographic hardness of permuted puzzle problems. Our contributions lie in three main directions:

1. Rigorous formalization. We formalize a notion of permuted puzzle distinguishing problems, extending and generalizing the proposed permuted puzzle framework of Boyle et al. (TCC'17).

2. Identifying hard permuted puzzles. We identify natural examples in which a one-time permutation provably creates cryptographic hardness, based on “standard” assumptions. In these examples, the original distributions $D_0,D_1$ are easily distinguishable, but the permuted puzzle distinguishing problem is computationally hard. We provide such constructions in the random oracle model, and in the plain model under the Decisional Diffie-Hellman (DDH) assumption. We additionally observe that the Learning Parity with Noise (LPN) assumption itself can be cast as a permuted puzzle.

3. Partial lower bound for the DE-PIR problem. We make progress towards better understanding the permuted puzzles underlying the DE-PIR constructions, by showing that a toy version of the problem, introduced by Boyle et al. (TCC'17), withstands a rich class of attacks, namely those that distinguish solely via statistical queries.
