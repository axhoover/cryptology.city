---
type: reference
status: draft
title: "YGLW15"
source: https://eprint.iacr.org/2014/393
authors: Yu Yu, Dawu Gu, Xiangxue Li, Jian Weng
venue: CRYPTO 2015
published: 2015
aliases:
  - YGLW15
cryptobib_key: C:YGLW15
---

# [YGLW15] (Almost) Optimal Constructions of UOWHFs from 1-to-1, Regular One-Way Functions and Beyond

**Authors:** Yu Yu, Dawu Gu, Xiangxue Li, Jian Weng | **Venue:** CRYPTO 2015 | [Source](https://eprint.iacr.org/2014/393)

## Abstract

We revisit the problem of black-box constructions of universal one-way hash functions (UOWHFs) from several (from specific to more general) classes of one-way functions (OWFs), and give respective constructions that either improve or generalize the best previously known. In addition, the parameters we achieve are either optimal or almost optimal simultaneously up to small factors, e.g., arbitrarily small $\omega(1)$.

For any 1-to-1 one-way function, we give an optimal construction of UOWHFs with key and output length $\Theta(n)$ by making a single call to the underlying OWF. This improves the constructions of Naor and Yung (STOC 1989) and De Santis and Yung (Eurocrypt 1990) that need key length $O(n*\omega(log n))$.

For any known-(almost-)regular one-way function with known hardness, we give an optimal construction of UOWHFs with key and output length $\Theta(n)$ and a single call to the one-way function.

For any known-(almost-)regular one-way function, we give a construction of UOWHFs with key and output length $O(n*\omega(1))$ and by making $\omega(1)$ non-adaptive calls to the one-way function. This improves the construction of Barhum and Maurer (Latincrypt 2012) that requires key and output length $O(n*\omega(log n))$ and $\omega(log n)$ calls.

For any weakly-regular one-way function introduced by Yu et al. at TCC 2015 (i.e., the set of inputs with maximal number of siblings is of an $n^{-c}$-fraction for some constant $c$), we give a construction of UOWHFs with key length $O(n*log n)$ and output length $\Theta(n)$. This generalizes the construction of Ames et al. (Asiacrypt 2012) which requires an unknown-regular one-way function (i.e., $c=0$).

Along the way, we use several techniques that might be of independent interest. We show that almost 1-to-1 (except for a negligible fraction) one-way functions and known (almost-)regular one-way functions are equivalent in the known-hardness (or non-uniform) setting, by giving an optimal construction of the former from the latter. In addition, we show how to transform any one-way function that is far from regular (but only weakly regular on a noticeable fraction of domain) into an almost-regular one-way function.

# Notes

The ePrint version (last revised 2015-06-10) is a major revision of the CRYPTO 2015 paper.
