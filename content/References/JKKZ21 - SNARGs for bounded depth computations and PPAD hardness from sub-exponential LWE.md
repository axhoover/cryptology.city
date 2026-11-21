---
type: reference
status: stub
title: "JKKZ21"
source: https://eprint.iacr.org/2020/980
authors: Ruta Jawale, Yael Tauman Kalai, Dakshita Khurana, Rachel Yun Zhang
venue: STOC 2021
published: 2021
aliases:
  - JKKZ21
cryptobib_key: STOC:JKKZ21
---

# [JKKZ21] SNARGs for Bounded Depth Computations and PPAD Hardness from Sub-Exponential LWE

**Authors:** Ruta Jawale, Yael Tauman Kalai, Dakshita Khurana, Rachel Yun Zhang | **Venue:** STOC 2021 | [Source](https://eprint.iacr.org/2020/980)

## Abstract

We construct a succinct non-interactive publicly-verifiable delegation scheme for any log-space uniform circuit under the sub-exponential Learning With Errors ($\mathsf{LWE}$) assumption. For a circuit $C:\{0,1\}^N\rightarrow\{0,1\}$ of size $S$ and depth $D$, the prover runs in time $\mathsf{poly}(S)$, the communication complexity is $D \cdot \mathsf{polylog} (S)$, and the verifier runs in time $(D+N) \cdot \mathsf{polylog} (S)$.

To obtain this result, we introduce a new cryptographic primitive: lossy correlation-intractable hash functions. We use this primitive to soundly instantiate the Fiat-Shamir transform for a large class of interactive proofs, including the interactive sum-check protocol and the $\mathsf{GKR}$ protocol, assuming the sub-exponential hardness of $\mathsf{LWE}$.

By relying on the result of Choudhuri et al. (STOC 2019), we also establish the sub-exponential average-case hardness of $\mathsf{PPAD}$, assuming the sub-exponential hardness of $\mathsf{LWE}$.
