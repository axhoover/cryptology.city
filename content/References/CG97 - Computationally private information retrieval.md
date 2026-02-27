---
title: "CG97"
source: https://dl.acm.org/doi/abs/10.1145/258533.258609
authors: Benny Chor, Niv Gilboa
venue: STOC 1997
published: 1997-05-04
created: 2025-02-13
aliases:
  - CG97
tags:
  - STOC

---
# [CG97] Computationally private information retrieval

**Authors:** Benny Chor, Niv Gilboa | **Venue:** STOC 1997 | [Source](https://dl.acm.org/doi/abs/10.1145/258533.258609)

## Abstract
Private information retrieval (PIR) schemes enable a user to access k replicated copies of a database (k z 2), and privately retrieve one of the n bits of data stored in the databases. This means that the queries give each individual database no partial information (in the information theoretic sense) on the identity of the item retrieved by the user. Today, the best two database scheme (k = 2) has communication complexity $O(n^{1/3})$, while for any constant number, k, the best k database scheme has communication complexity $O(n^{1/(2k-1)})$. The motivation for the present work is the question whether this complexity can be reduced if one is willing to achieve computational privacy, rather than information theoretic privacy. (This means that privacy is guaranteed only with respect to databases that are restricted to polynomial time computations.)

We answer this question affirmatively, and show that the computational approach leads to substantial savings. For every $\varepsilon > 0$, we present a two database computational PIR scheme whose communication complexity is $O(n^{\varepsilon})$. This improved efficiency is achieved by a combination of a novel balancing technique, together with careful application of pseudo random generators. Our schemes preserve some desired properties of previous solutions. In particular, all our schemes use only one round of communication, they are fairly simple, they are memoryless, and the database contents is stored in its plain form, without any encoding.