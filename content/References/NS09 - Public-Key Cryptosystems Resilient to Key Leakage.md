---
type: reference
status: stub
title: "NS09"
source: https://eprint.iacr.org/2009/105
authors: Moni Naor, Gil Segev
venue: CRYPTO 2009
published: 2009
aliases:
  - NS09
cryptobib_key: C:NaoSeg09
---

# [NS09] Public-Key Cryptosystems Resilient to Key Leakage

**Authors:** Moni Naor, Gil Segev | **Venue:** CRYPTO 2009 | [Source](https://eprint.iacr.org/2009/105)

## Abstract

Most of the work in the analysis of cryptographic schemes is concentrated in abstract adversarial models that do not capture _side-channel attacks_. Such attacks exploit various forms of unintended information leakage, which is inherent to almost all physical implementations. Inspired by recent side-channel attacks, especially the “cold boot attacks” of Halderman et al. (USENIX
Security '08), Akavia, Goldwasser and Vaikuntanathan (TCC '09) formalized a realistic framework for modeling the security of encryption schemes against a wide class of side-channel attacks in which adversarially chosen functions of the secret key are leaked. In the setting of public-key encryption, Akavia et al. showed that Regev's lattice-based scheme (STOC '05) is resilient to any leakage of $L / \polylog(L)$ bits, where $L$ is the length of the secret key.

In this paper we revisit the above-mentioned framework and our main results are as follows:

– We present a generic construction of a public-key encryption scheme that is resilient to key leakage from any _universal hash proof system_. The construction does not rely on additional computational assumptions, and the resulting scheme is as efficient as the underlying proof system. Existing constructions of such proof systems imply that our construction can be based on a variety of number-theoretic assumptions, including the decisional Diffie-Hellman assumption (and its progressively weaker $d$-Linear variants), the quadratic residuosity assumption, and Paillier's composite residuosity assumption.

– We construct a new hash proof system based on the decisional Diffie-Hellman assumption (and its $d$-Linear variants), and show that the resulting scheme is resilient to any leakage of $L(1 - o(1))$ bits. In addition, we prove that the recent scheme of Boneh et al. (CRYPTO '08), constructed to be a “circular-secure” encryption scheme, fits our generic approach and is also resilient to any leakage of $L(1 - o(1))$ bits.

– We extend the framework of key leakage to the setting of chosen-ciphertext attacks. On the theoretical side, we prove that the Naor-Yung paradigm is applicable in this setting as well, and obtain as a corollary encryption schemes that are CCA2-secure with any leakage of $L(1 - o(1))$ bits. On the practical side, we prove that variants of the Cramer-Shoup cryptosystem (along the lines of our generic construction) are CCA1-secure with any leakage of $L/4$ bits, and CCA2-secure with any leakage of $L/6$ bits.
