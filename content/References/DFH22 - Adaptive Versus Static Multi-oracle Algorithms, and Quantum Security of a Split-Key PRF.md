---
type: reference
status: draft
title: "DFH22"
source: https://eprint.iacr.org/2022/773
authors: Jelle Don, Serge Fehr, Yu-Hsuan Huang
venue: TCC 2022
published: 2022
aliases:
  - DFH22
cryptobib_key: TCC:DonFehHua22
---

# [DFH22] Adaptive Versus Static Multi-oracle Algorithms, and Quantum Security of a Split-Key PRF

**Authors:** Jelle Don, Serge Fehr, Yu-Hsuan Huang | **Venue:** TCC 2022 | [Source](https://eprint.iacr.org/2022/773)

## Abstract

In the first part of the paper, we show a generic compiler that transforms any oracle algorithm that can query multiple oracles adaptively, i.e., can decide on which oracle to query at what point dependent on previous oracle responses, into a static algorithm that fixes these choices at the beginning of the execution. Compared to naive ways of achieving this, our compiler controls the blow-up in query complexity for each oracle individually, and causes a very mild blow-up only.

In the second part of the paper, we use our compiler to show the security of the very efficient hash-based split-key PRF proposed by Giacon, Heuer and Poettering (PKC 2018), in the quantum random-oracle model.

Using a split-key PRF as the key-derivation function gives rise to a secure KEM combiner. Thus, our result shows that the hash-based construction of Giacon et al. can be safely used in the context of quantum attacks, for instance to combine a well-established but only classically-secure KEM with a candidate KEM that is believed to be quantum-secure.

Our security proof for the split-key PRF crucially relies on our adaptive-to-static compiler, but we expect our compiler to be useful beyond this particular application. Indeed, we discuss a couple of other, known results from the literature that would have profitted from our compiler, in that these works had to go though serious complications in order to deal with adaptivity.

# Notes

Also arXiv [2206.08132](https://arxiv.org/abs/2206.08132); section, theorem and corollary numbers cited on this wiki refer to its v3 (13 September 2022), the version submitted to TCC 2022. Section 4.1 defines split-key PRFs and restates the KEM combiner and the hash-based split-key PRF of [[GHP18 - KEM Combiners|GHP18]]; Theorem 2 and Corollary 1 prove the latter secure in the quantum random-oracle model.
