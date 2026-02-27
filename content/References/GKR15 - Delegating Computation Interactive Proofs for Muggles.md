---
title: "GKR15"
source: https://dl.acm.org/doi/abs/10.1145/2699436
authors: Shafi Goldwasser, Yael Tauman Kalai, Guy N. Rothblum
venue: STOC 2008, JACM 2015
published: 2015-09-11
aliases:
  - GKR15
tags:
  - STOC

---
# [GKR15] Delegating Computation: Interactive Proofs for Muggles

**Authors:** Shafi Goldwasser, Yael Tauman Kalai, Guy N. Rothblum | **Venue:** STOC 2008, JACM 2015 | [Source](https://dl.acm.org/doi/abs/10.1145/2699436)

## Abstract
In this work we study interactive proofs for tractable languages. The (honest) prover should be efficient and run in polynomial time or, in other words, a “muggle”.1 The verifier should be super-efficient and run in nearly linear time. These proof systems can be used for delegating computation: a server can run a computation for a client and interactively prove the correctness of the result. The client can verify the result’s correctness in nearly linear time (instead of running the entire computation itself).Previously, related questions were considered in the holographic proof setting by Babai et al. [1991b] in the argument setting under computational assumptions by Kilian, and in the random oracle model by Micali [1994]. Our focus, however, is on the original interactive proof model where no assumptions are made on the computational power or adaptiveness of dishonest provers.Our main technical theorem gives a public coin interactive proof for any language computable by a log-space uniform boolean circuit with depth $d$ and input length $n$. The verifier runs in time $n \cdot poly(d, log(n))$ and space $O(log(n))$, the communication complexity is $poly(d, log(n))$, and the prover runs in time $poly(n)$. In particular, for languages computable by log-space uniform $NC$ (circuits of $polylog(n)$ depth), the prover is efficient, the verifier runs in time $n \cdot polylog(n)$ and space $O(log(n))$, and the communication complexity is $polylog(n)$. Using this theorem we make progress on several questions.--- We show how to construct 1-round computationally sound arguments with polylog communication for any log-space uniform $NC$ computation. The verifier runs in quasi-linear time. This result uses a recent transformation of Kalai and Raz from public coin interactive proofs to 1-round arguments. The soundness of the argument system is based on the existence of a PIR scheme with polylog communication.--- We construct interactive proofs with public coin, log-space, poly-time verifiers for all of $P$ are given. This settles an open question regarding the expressive power of proof systems with such verifiers.--- We construct zero-knowledge interactive proofs are given with communication complexity quasi-linear in the witness length for any $NP$ language verifiable in $NC$, based on the existence of 1-way functions.--- We construct probabilistically checkable arguments (a model due to Kalai and Raz) of size polynomial in the witness length (rather than instance length) for any $NP$ language verifiable in $NC$, under computational assumptions, are provided.