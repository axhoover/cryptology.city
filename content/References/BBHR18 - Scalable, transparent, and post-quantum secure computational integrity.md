---
aliases:
  - BBHR18
title: "BBHR18 - Scalable, transparent, and post-quantum secure computational integrity"
cryptobib_key: EPRINT:BBHR18
---

Eli Ben-Sasson, Iddo Bentov, Yinon Horesh, and Michael Riabzev. "Scalable, transparent, and post-quantum secure computational integrity." Cryptology ePrint Archive, Report 2018/046, 2018.

Introduced the STARK (Scalable Transparent ARgument of Knowledge) proof system. STARKs achieve: (1) _transparency_ — no trusted setup; the verifier's randomness is public and the reference string is a random oracle; (2) _post-quantum security_ — security relies only on collision-resistant hash functions; (3) _scalability_ — prover runs in quasi-linear time $O(T \log T)$ for a computation of size $T$; proof size is $O(\log^2 T)$. The core technical tool is FRI (Fast Reed-Solomon IOP of Proximity), a protocol for proximity testing to Reed-Solomon codes that yields an efficient polynomial commitment without a trusted setup.
