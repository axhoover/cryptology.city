---
title: On basing one-way functions on NP-hardness
source: https://dl.acm.org/doi/abs/10.1145/1132516.1132614
authors: Adi Akavia, Oded Goldreich, Shafi Goldwasser, Dana Moshkovitz
venue: STOC 2006
published: 2006-05-21
aliases:
  - AGGM06
---
# On basing one-way functions on NP-hardness
URL: https://dl.acm.org/doi/abs/10.1145/1132516.1132614
Authors: Adi Akavia, Oded Goldreich, Shafi Goldwasser, Dana Moshkovitz

## Abstract
We consider the possibility of basing one-way functions on NP-Hardness; that is, we study possible reductions from a worst-case decision problem to the task of average-case inverting a polynomial-time computable function $f$. Our main findings are the following two negative results:

If given $y$ one can efficiently compute $|f^{-1}(y)|$ then the existence of a (randomized) reduction of NP to the task of inverting $f$ implies that coNP ⊆ AM. Thus, it follows that such reductions cannot exist unless coNP ⊆ AM.

For any function $f$, the existence of a (randomized) *non-adaptive* reduction of NP to the task of average-case inverting $f$ implies that coNP ⊆ AM.

Our work builds upon and improves on the previous works of Feigenbaum and Fortnow (*SIAM Journal on Computing*, 1993) and Bogdanov and Trevisan (*44th FOCS*, 2003), while capitalizing on the additional "computational structure" of the search problem associated with the task of inverting polynomial-time computable functions. We believe that our results illustrate the gain of directly studying the context of one-way functions rather than inferring results for it from a the general study of worst-case to average-case reductions.