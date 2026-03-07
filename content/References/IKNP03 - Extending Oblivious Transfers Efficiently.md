---
title: "IKNP03"
source: https://link.springer.com/chapter/10.1007/978-3-540-45146-4_9
authors: Yuval Ishai, Joe Kilian, Kobbi Nissim, Eyal Petrank
venue: CRYPTO 2003
published: 2003-08-17
aliases:
  - IKNP03
tags:
  - CRYPTO

---
# [IKNP03] Extending Oblivious Transfers Efficiently

**Authors:** Yuval Ishai, Joe Kilian, Kobbi Nissim, Eyal Petrank | **Venue:** CRYPTO 2003 | [Source](https://link.springer.com/chapter/10.1007/978-3-540-45146-4_9)

## Abstract
We consider the problem of extending oblivious transfers: given a small number of oblivious transfers "for free," can one implement a large number of oblivious transfers at a low cost? We present an efficient protocol for extending oblivious transfers in the random oracle model. Our protocol requires only $k$ base OTs (where $k$ is the security parameter) and $O(n)$ calls to a pseudorandom generator to produce $n$ oblivious transfers, achieving security against semi-honest adversaries. We further show how to eliminate the random oracle by replacing it with a new primitive called *correlation-robust hash functions*, which can be instantiated from any pseudorandom generator. The result demonstrates that oblivious transfer can be extended at the cost of only $O(k)$ public-key operations and $O(n)$ symmetric-key operations, making large-scale OT practical for secure computation.
