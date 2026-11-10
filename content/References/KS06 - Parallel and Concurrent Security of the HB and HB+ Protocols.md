---
type: reference
status: stub
title: "KS06"
source: https://eprint.iacr.org/2005/461
authors: Jonathan Katz, Ji Sun Shin
venue: EUROCRYPT 2006
published: 2006
aliases:
  - KS06
cryptobib_key: EC:KatShi06
---

# [KS06] Parallel and Concurrent Security of the HB and HB+ Protocols

**Authors:** Jonathan Katz, Ji Sun Shin | **Venue:** EUROCRYPT 2006 | [Source](https://eprint.iacr.org/2005/461)

## Abstract

At Crypto 2005, Juels and Weis (building on work of Hopper and Blum) proposed and analyzed two shared-key authentication protocols — HB and HB+ — whose extremely low computational cost makes them attractive for low-cost devices such as radio-frequency identification (RFID) tags. Security of these protocols is based on the conjectured hardness of the “learning parity with noise” (LPN) problem: the HB protocol is proven secure against a passive (eavesdropping) adversary, while the HB+ protocol is proven secure against active attacks.

Juels and Weis prove security of these protocols only for the case of sequential executions, and explicitly leave open the question of whether security holds also in the case of parallel or concurrent executions. In addition to guaranteeing security against a stronger class of adversaries, a positive answer to this question would allow the HB+ protocol to be parallelized, thereby reducing its round complexity from super-logarithmic (in the security parameter) to 3.

Using a recent result by Regev (STOC 2005) regarding the LPN problem, we answer the aforementioned question in the affirmative and prove security of the HB and HB+ protocols under parallel/concurrent executions. Applying Regev's result also yields what we find to be substantially simpler security proofs for these protocols which are also more complete in that they explicitly address the dependence of the soundness error on the number of iterations.
