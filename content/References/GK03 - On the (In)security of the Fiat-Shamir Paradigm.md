---
title: "GK03"
source: https://eprint.iacr.org/2003/034
authors: Shafi Goldwasser, Yael Tauman Kalai
venue: FOCS 2003
published: 2003-01-01
aliases:
  - GK03
tags:
  - FOCS

---
# [GK03] On the (In)security of the Fiat-Shamir Paradigm

**Authors:** Shafi Goldwasser, Yael Tauman Kalai | **Venue:** FOCS 2003 | [Source](https://eprint.iacr.org/2003/034)

## Abstract
We show that the Fiat-Shamir transform is not sound in the standard model in general. Specifically, we construct a 3-round public-coin identification scheme that is secure in the random oracle model, yet for which the Fiat-Shamir signature scheme (obtained by replacing the random oracle with any concrete hash function) is existentially forgeable. More precisely, we show that for any concrete hash function $H$, the resulting signature scheme can be broken by an efficient adversary. Our techniques use non-black-box methods and demonstrate that the random oracle cannot be instantiated in general.
