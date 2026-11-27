---
type: reference
status: draft
title: "BBC+19"
source: https://eprint.iacr.org/2019/188
authors: Dan Boneh, Elette Boyle, Henry Corrigan-Gibbs, Niv Gilboa, Yuval Ishai
venue: CRYPTO 2019
published: 2019
aliases:
  - BBC+19
cryptobib_key: C:BBCGI19
---

# [BBC+19] Zero-Knowledge Proofs on Secret-Shared Data via Fully Linear PCPs

**Authors:** Dan Boneh, Elette Boyle, Henry Corrigan-Gibbs, Niv Gilboa, Yuval Ishai | **Venue:** CRYPTO 2019 | [Source](https://eprint.iacr.org/2019/188)

## Abstract

We introduce and study the notion of fully linear probabilistically checkable proof systems. In such a proof system, the verifier can make a small number of linear queries that apply jointly to the input and a proof vector.

Our new type of proof system is motivated by applications in which the input statement is not fully available to any single verifier, but can still be efficiently accessed via linear queries. This situation arises in scenarios where the input is partitioned or secret-shared between two or more parties, or alternatively is encoded using an additively homomorphic encryption or commitment scheme. This setting appears in the context of secure messaging platforms, verifiable outsourced computation, PIR writing, private computation of aggregate statistics, and secure multiparty computation (MPC). In all these applications, there is a need for fully linear proof systems with short proofs.

While several efficient constructions of fully linear proof systems are implicit in the interactive proofs literature, many questions about their complexity are open. We present several new constructions of fully linear zero-knowledge proof systems with sublinear proof size for "simple" or "structured" languages. For example, in the non-interactive setting of fully linear PCPs, we show how to prove that an input vector $x\in\mathbb{F}^n$ satisfies a single degree-2 equation with a proof of size $O(\sqrt n)$ and $O(\sqrt n)$ linear queries, which we show to be optimal. More generally, for languages that can be recognized by systems of constant-degree equations, we can reduce the proof size to $O(\log n)$ at the cost of $O(\log n)$ rounds of interaction.

We use our new proof systems to construct new short zero-knowledge proofs on distributed and secret-shared data. These proofs can be used to improve the performance of many of the example systems mentioned above.

Finally, we observe that zero-knowledge proofs on distributed data provide a general-purpose tool for protecting protocols for secure multiparty computation (MPC) against malicious parties. Applying our short fully linear PCPs to "natural" MPC protocols in the honest-majority setting, we can achieve unconditional protection against malicious parties with sublinear additive communication cost. We use this to improve the communication complexity of recent honest-majority MPC protocols. For instance, using any pseudorandom generator, we obtain a 3-party protocol for Boolean circuits in which the amortized communication cost is only one bit per AND gate per party (compared to 7 bits in the best previous protocol), matching the best known protocols for semi-honest adversaries.
