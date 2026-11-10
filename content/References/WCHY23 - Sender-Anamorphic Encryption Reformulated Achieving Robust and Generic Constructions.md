---
type: reference
status: stub
title: "WCHY23"
source: https://eprint.iacr.org/2023/1828
authors: Yi Wang, Rongmao Chen, Xinyi Huang, Moti Yung
venue: ASIACRYPT 2023
published: 2023
aliases:
  - WCHY23
cryptobib_key: AC:WCHY23
---

# [WCHY23] Sender-Anamorphic Encryption Reformulated: Achieving Robust and Generic Constructions

**Authors:** Yi Wang, Rongmao Chen, Xinyi Huang, Moti Yung | **Venue:** ASIACRYPT 2023 | [Source](https://eprint.iacr.org/2023/1828)

## Abstract

Motivated by the violation of two fundamental assumptions in secure communication - receiver-privacy and sender-freedom - by a certain entity referred to as “the dictator”, Persiano et al. introduced the concept of Anamorphic Encryption (AME) for public key cryptosystems (EUROCRYPT 2022). Specifically, they presented receiver/sender-AME, directly tailored to scenarios where receiver privacy and sender freedom assumptions are compromised, respectively. In receiver-AME, entities share a double key to communicate in anamorphic fashion, raising concerns about the online distribution of the double key without detection by the dictator. The sender-AME with no shared secret is a potential candidate for key distribution. However, the only such known schemes (i.e., LWE and Dual LWE encryptions) suffer from an intrinsic limitation and cannot achieve reliable distribution.

Here, we reformulate the sender-AME, present the notion of $\ell$-sender-AME and formalize the properties of (strong) security and robustness. Robustness refers to guaranteed delivery of duplicate messages to the intended receiver, ensuring that decrypting normal ciphertexts in an anamorphic way or decrypting anamorphic ciphertexts with an incorrect duplicate secret key results in an explicit abort signal. We first present a simple construction for pseudo-random and robust public key encryption that shares the similar idea of public-key stegosystem by von Ahn and Hopper (EUROCRYPT 2004). Then, inspired by Chen et al.'s malicious algorithm-substitution attack (ASA) on key encapsulation mechanisms (KEM) (ASIACRYPT 2020), we give a generic construction for hybrid PKE with special KEM that encompasses well-known schemes, including ElGamal and Cramer-Shoup cryptosystems.

The constructions of $\ell$-sender-AME motivate us to explore the relations between AME, ASA on PKE, and public-key stegosystem. The results show that a strongly secure $\ell$-sender-AME is such a strong primitive that implies reformulated receiver-AME, public-key stegosystem, and generalized ASA on PKE. By expanding the scope of sender-anamorphic encryption and establishing its robustness, as well as exploring the connections among existing notions, we advance secure communication protocols under challenging conditions.
