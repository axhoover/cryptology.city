---
type: reference
status: stub
title: "GHL+14"
source: https://eprint.iacr.org/2014/082
authors: Craig Gentry, Shai Halevi, Steve Lu, Rafail Ostrovsky, Mariana Raykova, Daniel Wichs
venue: Eurocrypt 2014
published: 2014
aliases:
  - GHL+14
cryptobib_key: EC:GHLORW14
---

# [GHL+14] Garbled RAM Revisited

**Authors:** Craig Gentry, Shai Halevi, Steve Lu, Rafail Ostrovsky, Mariana Raykova, Daniel Wichs | **Venue:** Eurocrypt 2014 | [Source](https://eprint.iacr.org/2014/082)

## Abstract

The notion of _garbled random-access machines_ (garbled RAMs) was introduced by Lu and Ostrovsky (Eurocrypt 2013). It can be seen as an analogue of Yao's garbled circuits, that allows a user to garble a RAM program directly, without performing the expensive step of converting it into a circuit. In particular, the size of the garbled program and the time it takes to create and evaluate it are only proportional to its running time on a RAM rather than its circuit size. Lu and Ostrovsky gave a candidate construction of this primitive based on pseudo-random functions (PRFs).

The starting point of this work is a subtle yet difficult-to-overcome issue with the Lu-Ostrovsky construction, that prevents a proof of security from going through. Specifically, the construction requires a complex "circular" use of Yao garbled circuits and PRFs. As our main result, we show how to remove this circularity and get a provably secure solution using _identity-based encryption_ (IBE). We also abstract out, simplify and generalize the main ideas behind the Lu-Ostrovsky construction, making them easier to understand and analyze.

In a companion work to ours (Part II), Lu and Ostrovsky show an alternative approach to solving the circularity problem. Their approach relies only on the existence of one-way functions, at the price of higher overhead. Specifically, our construction has overhead $\poly(k)\polylog(n)$ (with $k$ the security parameter and $n$ the data size), while the Lu-Ostrovsky approach can achieve overhead $\poly(k)n^\varepsilon$ for any constant $\varepsilon>0$. It remains as an open problem to achieve an overhead of $\poly(k)\polylog(n)$ assuming only the existence of one-way functions.

# Notes

The abstract above is from the ePrint precursor _Garbled RAM Revisited, Part I_ (ePrint 2014/082; Gentry, Halevi, Raykova, Wichs), not the Eurocrypt 2014 paper, which merges it with _Part II_ by Lu and Ostrovsky (ePrint 2014/083).
