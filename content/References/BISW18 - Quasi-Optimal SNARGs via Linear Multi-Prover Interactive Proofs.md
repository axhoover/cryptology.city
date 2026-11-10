---
type: reference
status: stub
title: "BISW18"
source: https://eprint.iacr.org/2018/133
authors: Dan Boneh, Yuval Ishai, Amit Sahai, David J. Wu
venue: EUROCRYPT 2018
published: 2018
aliases:
  - BISW18
cryptobib_key: EC:BISW18
---

# [BISW18] Quasi-Optimal SNARGs via Linear Multi-Prover Interactive Proofs

**Authors:** Dan Boneh, Yuval Ishai, Amit Sahai, David J. Wu | **Venue:** EUROCRYPT 2018 | [Source](https://eprint.iacr.org/2018/133)

## Abstract

Succinct non-interactive arguments (SNARGs) enable verifying NP computations with significantly less complexity than that required for classical NP verification. In this work, we focus on simultaneously minimizing the proof size and the prover complexity of SNARGs. Concretely, for a security parameter $\lambda$, we measure the asymptotic cost of achieving soundness error $2^{-\lambda}$ against provers of size $2^\lambda$. We say a SNARG is quasi-optimally succinct if its proof length is $\tilde{O}(\lambda)$, and that it is quasi-optimal, if moreover, its prover complexity is only polylogarithmically greater than the running time of the classical NP prover. We show that this definition is the best we could hope for assuming that NP does not have succinct proofs. Our definition strictly strengthens the previous notion of quasi-optimality introduced in the work of Boneh et al. (Eurocrypt 2017).

This work gives the first quasi-optimal SNARG for Boolean circuit satisfiability from a concrete cryptographic assumption. Our construction takes a two-step approach. The first is an information-theoretic construction of a quasi-optimal linear multi-prover interactive proof (linear MIP) for circuit satisfiability. Then, we describe a generic cryptographic compiler that transforms our quasi-optimal linear MIP into a quasi-optimal SNARG by relying on the notion of linear-only vector encryption over rings introduced by Boneh et al. Combining these two primitives yields the first quasi-optimal SNARG based on linear-only vector encryption. Moreover, our linear MIP construction leverages a new robust circuit decomposition primitive that allows us to decompose a circuit satisfiability instance into several smaller circuit satisfiability instances. This primitive may be of independent interest.

Finally, we consider (designated-verifier) SNARGs that provide optimal succinctness for a non-negligible soundness error. Concretely, we put forward the notion of "1-bit SNARGs" that achieve soundness error 1/2 with only one bit of proof. We first show how to build 1-bit SNARGs from indistinguishability obfuscation, and then show that 1-bit SNARGs also suffice for realizing a form of witness encryption. The latter result highlights a two-way connection between the soundness of very succinct argument systems and powerful forms of encryption.
