---
type: reference
status: stub
title: "MY22"
source: https://eprint.iacr.org/2022/1336
authors: Tomoyuki Morimae, Takashi Yamakawa
venue: TQC 2024
published: 2022
aliases:
  - MY22
cryptobib_key: EPRINT:MorYam22c
---

# [MY22] One-Wayness in Quantum Cryptography

**Authors:** Tomoyuki Morimae, Takashi Yamakawa | **Venue:** TQC 2024 | [Source](https://eprint.iacr.org/2022/1336)

## Abstract

The existence of one-way functions is one of the most fundamental assumptions in classical cryptography. In the quantum world, on the other hand, there are evidences that some cryptographic primitives can exist even if one-way functions do not exist [Morimae and Yamakawa, CRYPTO 2022; Ananth, Qian, and Yuen, CRYPTO 2022]. We therefore have the following important open problem in quantum cryptography: What is the most fundamental element in quantum cryptography? In this direction, Brakerski, Canetti, and Qian [arXiv:2209.04101] recently defined a notion called EFI pairs, which are pairs of efficiently generatable states that are statistically distinguishable but computationally indistinguishable, and showed its equivalence with some cryptographic primitives including commitments, oblivious transfer, and general multi-party computations. However, their work focuses on decision-type primitives and does not cover search-type primitives like quantum money and digital signatures. In this paper, we study properties of one-way state generators (OWSGs), which are a quantum analogue of one-way functions proposed by Morimae and Yamakawa. We first revisit the definition of OWSGs and generalize it by allowing mixed output states. Then we show the following results.

(1) We define a weaker version of OWSGs, which we call weak OWSGs, and show that they are equivalent to OWSGs. It is a quantum analogue of the amplification theorem for classical weak one-way functions.

(2) (Bounded-time-secure) quantum digital signatures with quantum public keys are equivalent to OWSGs.

(3) Private-key quantum money schemes (with pure money states) imply OWSGs.

(4) Quantum pseudo one-time pad schemes imply both OWSGs and EFI pairs. For EFI pairs, single-copy security suffices.

(5) We introduce an incomparable variant of OWSGs, which we call secretly-verifiable and statistically-invertible OWSGs, and show that they are equivalent to EFI pairs.
