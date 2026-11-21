---
type: reference
status: stub
title: "Zha19"
source: https://eprint.iacr.org/2017/1080
authors: Mark Zhandry
venue: EUROCRYPT 2019
published: 2019
aliases:
  - Zha19
cryptobib_key: EC:Zhandry19b
---

# [Zha19] Quantum Lightning Never Strikes the Same State Twice

**Authors:** Mark Zhandry | **Venue:** EUROCRYPT 2019 | [Source](https://eprint.iacr.org/2017/1080)

## Abstract

Public key quantum money can be seen as a version of the quantum no-cloning theorem that holds even when the quantum states can be verified by the adversary. In this work, investigate quantum lightning, a formalization of “collision-free quantum money” defined by Lutomirski et al. [ICS'10], where no-cloning holds even when the adversary herself generates the quantum state to be cloned. We then study quantum money and quantum lightning, showing the following results:

- We demonstrate the usefulness of quantum lightning beyond quantum money by showing several potential applications, such as generating random strings with a proof of entropy, to completely decentralized cryptocurrency without a block-chain, where transactions is instant and local.

- We give win-win results for quantum money/lightning, showing that either signatures/hash functions/commitment schemes meet very strong recently proposed notions of security, or they yield quantum money or lightning. Given the difficulty in constructing public key quantum money, this suggests that natural schemes do attain strong security guarantees.

- We show that instantiating the quantum money scheme of Aaronson and Christiano [STOC'12] with _indistinguishability obfuscation_ that is secure against quantum computers yields a secure quantum money scheme. This construction can be seen as an instance of our win-win result for signatures, giving the first separation between two security notions for signatures from the literature.

- Finally, we give a plausible construction for quantum lightning, which we prove secure under an assumption related to the multi-collision resistance of degree-2 hash functions. Our construction is inspired by our win-win result for hash functions, and yields the first plausible standard model instantiation of a non-collapsing collision resistant hash function. This improves on a result of Unruh [Eurocrypt'16] which is relative to a quantum oracle.

Thus, we provide the first constructions of public key quantum money from several cryptographic assumptions. Along the way, we develop several new techniques including a new precise variant of the no-cloning theorem.
