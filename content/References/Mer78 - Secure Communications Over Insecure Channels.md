---
title: "Mer78"
source: https://dl.acm.org/doi/10.1145/359460.359473
authors: Ralph C. Merkle
venue: Communications of the ACM 1978
published: 1978-04-01
aliases:
  - Mer78
tags:
  - CACM

---
# [Mer78] Secure Communications Over Insecure Channels

**Authors:** Ralph C. Merkle | **Venue:** Communications of the ACM, vol. 21(4), 1978 | [Source](https://dl.acm.org/doi/10.1145/359460.359473)

## Abstract
This paper presents a protocol — now known as *Merkle's Puzzles* — for two parties to establish a shared secret key over a public channel, using only a symmetric primitive (e.g., a random oracle or block cipher). Each party makes $O(n)$ oracle queries, while any eavesdropper requires $\Omega(n^2)$ queries to recover the key. Barak and Mahmoody [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]] later proved this quadratic query gap is optimal: no random-oracle key agreement protocol can do better.
