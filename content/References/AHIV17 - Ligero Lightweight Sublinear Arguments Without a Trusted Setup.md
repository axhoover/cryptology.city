---
type: reference
status: stub
title: "AHIV17"
source: https://eprint.iacr.org/2022/1608
authors: Scott Ames, Carmit Hazay, Yuval Ishai, Muthuramakrishnan Venkitasubramaniam
venue: ACM CCS 2017
published: 2017
aliases:
  - AHIV17
cryptobib_key: CCS:AHIV17
---

# [AHIV17] Ligero: Lightweight Sublinear Arguments Without a Trusted Setup

**Authors:** Scott Ames, Carmit Hazay, Yuval Ishai, Muthuramakrishnan Venkitasubramaniam | **Venue:** ACM CCS 2017 | [Source](https://eprint.iacr.org/2022/1608)

## Abstract

We design and implement a simple zero-knowledge argument protocol for $\mathsf{NP}$ whose communication complexity is proportional to the square-root of the verification circuit size. The protocol can be based on any collision-resistant hash function. Alternatively, it can be made non-interactive in the random oracle model, yielding concretely efficient zk-SNARKs that do not require a trusted setup or public-key cryptography. Our protocol is obtained by applying an optimized version of the general transformation of Ishai et al. (STOC 2007) to a variant of the protocol for secure multiparty computation of Damg$\mathring{a}$rd and Ishai (CRYPTO 2006). It can be viewed as a simple zero-knowledge interactive PCP based on “interleaved” Reed-Solomon codes.

This paper is an extended version of the paper published in CCS 2017 and features a tighter analysis, better implementation along with formal proofs. For large verification circuits, the Ligero prover remains competitive against subsequent works with respect to the prover’s running time, where our efficiency advantages become even bigger in an amortized setting, where several instances need to be proven simultaneously.

Our protocol is attractive not only for very large verification circuits but also for moderately large circuits that arise in applications. For instance, for verifying a SHA-256 preimage with $2^{-40}$ soundness error, the communication complexity is roughly 35KB.

The communication complexity of our protocol is independent of the circuit structure and depends only on the number of gates. For $2^{-40}$ soundness error, the communication becomes smaller than the circuit size for circuits containing roughly 3 million gates or more. With our refined analysis the Ligero system's proof lengths and prover's running times are better than subsequent post-quantum ZK-SNARKs for small to moderately large circuits.
