---
type: reference
status: stub
title: "DPC23"
source: https://eprint.iacr.org/2022/981
authors: Alex Davidson, Gonçalo Pestana, Sofía Celi
venue: Proceedings on Privacy Enhancing Technologies (PoPETs) 2023
published: 2023
aliases:
  - DPC23
cryptobib_key: PoPETS:DavPesCel23
---

# [DPC23] FrodoPIR: Simple, Scalable, Single-Server Private Information Retrieval

**Authors:** Alex Davidson, Gonçalo Pestana, Sofía Celi | **Venue:** Proceedings on Privacy Enhancing Technologies (PoPETs) 2023 | [Source](https://eprint.iacr.org/2022/981)

## Abstract

We design $\mathsf{FrodoPIR}$ — a highly configurable, stateful, single-server Private Information Retrieval (PIR) scheme that involves an offline phase that is completely client-independent. Coupled with small online overheads, it leads to much smaller amortized financial costs on the server-side than previous approaches. In terms of performance for a database of $1$ million $1$KB elements, $\mathsf{FrodoPIR}$ requires $< 1$ second for responding to a client query, has a server response size blow-up factor of $< 3.6\times$, and financial costs are $\sim$ \$1 for answering $100,000$ client queries. Our experimental analysis is built upon a simple, non-optimized Rust implementation, illustrating that $\mathsf{FrodoPIR}$ is particularly suitable for deployments that involve large numbers of clients.
