---
type: reference
status: stub
title: "BCP16"
source: https://eprint.iacr.org/2014/594
authors: Elette Boyle, Kai-Min Chung, Rafael Pass
venue: TCC 2016-A
published: 2016
aliases:
  - BCP16
cryptobib_key: TCC:BoyChuPas16
---

# [BCP16] Oblivious Parallel RAM and Applications

**Authors:** Elette Boyle, Kai-Min Chung, Rafael Pass | **Venue:** TCC 2016-A | [Source](https://eprint.iacr.org/2014/594)

## Abstract

We initiate the study of cryptography for parallel RAM (PRAM) programs. The PRAM model captures modern multi-core architectures and cluster computing models, where several processors execute in parallel and make accesses to shared memory, and provides the “best of both” circuit and RAM models, supporting both cheap random access and parallelism.

We propose and attain the notion of Oblivious PRAM. We present a compiler taking any PRAM into one whose distribution of memory accesses is statistically independent of the data (with negligible error), while only incurring a polylogarithmic slowdown (in both total and parallel complexity). We discuss applications of such a compiler, building upon recent advances relying on Oblivious (sequential) RAM (Goldreich Ostrovsky JACM’12). In particular, we demonstrate the construction of a garbled PRAM compiler based on an OPRAM compiler and secure identity-based encryption.
