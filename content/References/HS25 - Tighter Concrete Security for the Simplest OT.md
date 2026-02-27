---
title: "HS25"
source: https://eprint.iacr.org/2025/493
authors: Iftach Haitner, Gil Segev
venue: preprint
published: 2025-03-15
created: 2025-03-17
tags:
  - preprint
aliases:
  - HS25
---
# [HS25] Tighter Concrete Security for the Simplest OT

**Authors:** Iftach Haitner, Gil Segev | **Venue:** preprint | [Source](https://eprint.iacr.org/2025/493)

## Abstract
The Chou-Orlandi batch oblivious transfer (OT) protocol is a particularly attractive OT protocol that bridges the gap between practical efficiency and strong security guarantees and is especially notable due to its simplicity. The security analysis provided by Chou and Orlandi bases the security of their protocol on the hardness of the computational Diffie-Hellman ($\mathsf{CDH}$) problem in prime-order groups. Concretely, in groups in which no better-than-generic algorithms are known for the $\mathsf{CDH}$ problem, their security analysis yields that an attacker running in time $t$ and issuing $q$ random-oracle queries breaks the security of their protocol with probability at most $\epsilon \leq q^2 \cdot t / 2^{\kappa/2}$, where $\kappa$ is the bit-length of the group's order. This concrete bound, however, is somewhat insufficient for 256-bit groups (e.g., for $\kappa = 256$, it does not provide any guarantee already for $t = 2^{48}$ and $q = 2^{40}$).

In this work, we establish a tighter concrete security bound for the Chou-Orlandi protocol. First, we introduce the list square Diffie-Hellman ($\ell\text{-}\mathsf{sqDH}$) problem and present a tight reduction from the security of the protocol to the hardness of solving $\ell\text{-}\mathsf{sqDH}$. That is, we completely shift the task of analyzing the concrete security of the protocol to that of analyzing the concrete hardness of the $\ell\text{-}\mathsf{sqDH}$ problem. Second, we reduce the hardness of the $\ell\text{-}\mathsf{sqDH}$ problem to that of the decisional Diffie-Hellman ($\mathsf{DDH}$) problem without incurring a multiplicative loss. Our key observation is that although $\mathsf{CDH}$ and $\mathsf{DDH}$ have the same assumed concrete hardness, relying on the hardness of $\mathsf{DDH}$ enables our reduction to efficiently test the correctness of the solutions it produces.

Concretely, in groups in which no better-than-generic algorithms are known for the $\mathsf{DDH}$ problem, our analysis yields that an attacker running in time $t$ and issuing $q \leq t$ random-oracle queries breaks the security of the Chou-Orlandi protocol with probability at most $\epsilon \leq t / 2^{\kappa/2}$ (i.e., we eliminate the above multiplicative $q^2$ term). We prove our results within the standard real-vs-ideal framework considering static corruptions by malicious adversaries, and provide a concrete security treatment by accounting for the statistical distance between a real-model execution and an ideal-model execution.