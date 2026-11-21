---
type: reference
status: stub
title: "ZPZS24"
source: https://eprint.iacr.org/2023/452
authors: Mingxun Zhou, Andrew Park, Wenting Zheng, Elaine Shi
venue: IEEE S&P 2024
published: 2024
aliases:
  - ZPZS24
cryptobib_key: SP:ZPZS24
---

# [ZPZS24] Piano: Extremely Simple, Single-Server PIR with Sublinear Server Computation

**Authors:** Mingxun Zhou, Andrew Park, Wenting Zheng, Elaine Shi | **Venue:** IEEE S&P 2024 | [Source](https://eprint.iacr.org/2023/452)

## Abstract

We construct a sublinear-time single-server pre-processing Private Information Retrieval
(PIR) scheme with optimal client storage and server computation (up to poly-logarithmic factors), only relying on the assumption of the existence of One Way Functions (OWF). Our scheme achieves amortized $\tilde{O}(\sqrt{n})$ online server computation and client computation and $O(\sqrt{n})$
online communication per query, and requires $\widetilde{O}_\lambda(\sqrt{n})$ client storage. Unlike prior single-server PIR schemes that rely on heavy cryptographic machinery such as Homomorphic Encryption, our scheme only utilizes lightweight cryptography such as PRFs, which is easily instantiated in practice. To our knowledge, this is the first practical implementation of a single-server sublinear-time PIR scheme.
Compared to existing linear time single-server solutions, our schemes are faster by $40-900\times$ and are comparable to the fastest two-server schemes. In particular, for a 100GB database of 1.6 billion entries, our experiments show that our scheme has 12ms online computation time on a single core.
