---
source: https://eprint.iacr.org/2018/046
aliases:
  - BBHR18
title: "BBHR18"
cryptobib_key: EPRINT:BBHR18
authors: Eli Ben-Sasson, Iddo Bentov, Yinon Horesh, Michael Riabzev
venue: ePrint 2018
published: 2018-01-01
---

# [BBHR18] Scalable, transparent, and post-quantum secure computational integrity

**Authors:** Eli Ben-Sasson, Iddo Bentov, Yinon Horesh, Michael Riabzev | **Venue:** ePrint 2018 | [Source](https://eprint.iacr.org/2018/046)

Introduced the STARK (Scalable Transparent ARgument of Knowledge) proof system. STARKs achieve: (1) _transparency_ — no trusted setup; the verifier's randomness is public and the reference string is a random oracle; (2) _post-quantum security_ — security relies only on collision-resistant hash functions; (3) _scalability_ — prover runs in quasi-linear time $O(T \log T)$ for a computation of size $T$; proof size is $O(\log^2 T)$. The core technical tool is FRI (Fast Reed-Solomon IOP of Proximity), a protocol for proximity testing to Reed-Solomon codes that yields an efficient polynomial commitment without a trusted setup.
