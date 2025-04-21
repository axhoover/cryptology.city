---
title: The Advantage of Truncated Permutations
source: https://arxiv.org/abs/1610.02518
authors: Shoni Gilboa, Shay Gueron
venue: Discrete Applied Mathematics 2021
published: 2021-01-19
aliases:
  - GG21
---
# The Advantage of Truncated Permutations
URL: https://arxiv.org/abs/1610.02518
Authors: Shoni Gilboa, Shay Gueron

## Abstract
Constructing a Pseudo Random Function (PRF) is a fundamental problem in cryptology. Such a construction, implemented by truncating the last m bits of permutations of {0,1}n was suggested by Hall et al. (1998). They conjectured that the distinguishing advantage of an adversary with q queries, Advn,m(q), is small if q=o(2(n+m)/2), established an upper bound on Advn,m(q) that confirms the conjecture for m<n/7, and also declared a general lower bound Advn,m(q)=Ω(q2/2n+m). The conjecture was essentially confirmed by Bellare and Impagliazzo (1999). Nevertheless, the problem of {\em estimating} Advn,m(q) remained open. Combining the trivial bound 1, the birthday bound, and a result of Stam (1978) leads to the upper bound

Advn,m(q)=O(min{q(q−1)2n,q2n+m2,1}).

In this paper we show that this upper bound is tight for every 0≤m<n and any q. This, in turn, verifies that the converse to the conjecture of Hall et al. is also correct, i.e., that Advn,m(q) is negligible only for q=o(2(n+m)/2).