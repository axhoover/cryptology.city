---
type: reference
status: stub
title: "MW22"
source: https://eprint.iacr.org/2022/368
authors: Samir Jordan Menon, David J. Wu
venue: IEEE S&P 2022
published: 2022
aliases:
  - MW22
cryptobib_key: SP:MenWu22
---

# [MW22] SPIRAL: Fast, High-Rate Single-Server PIR via FHE Composition

**Authors:** Samir Jordan Menon, David J. Wu | **Venue:** IEEE S&P 2022 | [Source](https://eprint.iacr.org/2022/368)

## Abstract

We introduce the Spiral family of single-server private information retrieval (PIR) protocols. Spiral relies on a composition of two lattice-based homomorphic encryption schemes: the Regev encryption scheme and the Gentry-Sahai-Waters encryption scheme. We introduce new ciphertext translation techniques to convert between these two schemes and in doing so, enable new trade-offs in communication and computation. Across a broad range of database configurations, the basic version of Spiral simultaneously achieves at least a 4.5x reduction in query size, 1.5x reduction in response size, and 2x increase in server throughput compared to previous systems. A variant of our scheme, SpiralStreamPack, is optimized for the streaming setting and achieves a server throughput of 1.9 GB/s for databases with over a million records (compared to 200 MB/s for previous protocols) and a rate of 0.81 (compared to 0.24 for previous protocols). For streaming large records (e.g., a private video stream), we estimate the monetary cost of SpiralStreamPack to be only 1.9x greater than that of the no-privacy baseline where the client directly downloads the desired record.
