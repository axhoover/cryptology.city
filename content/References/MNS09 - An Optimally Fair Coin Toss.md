---
type: reference
status: stub
title: "MNS09"
source: https://eprint.iacr.org/2009/214
authors: Tal Moran, Moni Naor, Gil Segev
venue: TCC 2009
published: 2009
aliases:
  - MNS09
cryptobib_key: TCC:MorNaoSeg09
---

# [MNS09] An Optimally Fair Coin Toss

**Authors:** Tal Moran, Moni Naor, Gil Segev | **Venue:** TCC 2009 | [Source](https://eprint.iacr.org/2009/214)

## Abstract

We address one of the foundational problems in cryptography: the bias of coin-flipping protocols. Coin-flipping protocols allow mutually distrustful parties to generate a common unbiased random bit, guaranteeing that even if one of the parties is malicious, it cannot significantly bias the output of the honest party. A classical result by Cleve [STOC '86] showed that for any two-party $r$-round coin-flipping protocol there exists an efficient adversary that can bias the output of the honest party by $\Omega(1/r)$. However, the best previously known protocol only guarantees $O(1/\sqrt{r})$ bias, and the question of whether Cleve's bound is tight has remained open for more than twenty years.

In this paper we establish the optimal trade-off between the round complexity and the bias of two-party coin-flipping protocols. Under standard assumptions (the existence of oblivious transfer), we show that Cleve's lower bound is tight: we construct an $r$-round protocol with bias $O(1/r)$.
