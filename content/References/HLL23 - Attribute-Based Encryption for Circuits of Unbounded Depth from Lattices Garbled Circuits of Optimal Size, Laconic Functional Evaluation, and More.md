---
type: reference
status: stub
title: "HLL23"
source: https://eprint.iacr.org/2023/1716
authors: Yao-Ching Hsieh, Huijia Lin, Ji Luo
venue: FOCS 2023
published: 2023
aliases:
  - HLL23
cryptobib_key: FOCS:HsiLinLuo23
---

# [HLL23] Attribute-Based Encryption for Circuits of Unbounded Depth from Lattices: Garbled Circuits of Optimal Size, Laconic Functional Evaluation, and More

**Authors:** Yao-Ching Hsieh, Huijia Lin, Ji Luo | **Venue:** FOCS 2023 | [Source](https://eprint.iacr.org/2023/1716)

## Abstract

Although we have known about fully homomorphic encryption (FHE) from circular security assumptions for over a decade [Gentry, STOC ’09; Brakerski–Vaikuntanathan, FOCS ’11], there is still a significant gap in understanding related homomorphic primitives supporting all _unrestricted_ polynomial-size computations. One prominent example is attribute-based encryption (ABE). The state-of-the-art constructions, relying on the hardness of learning with errors (LWE) [Gorbunov–Vaikuntanathan–Wee, STOC ’13; Boneh et al., Eurocrypt ’14], only accommodate circuits up to a _predetermined_ depth, akin to leveled homomorphic encryption. In addition, their components (master public key, secret keys, and ciphertexts) have sizes polynomial in the maximum circuit depth. Even in the simpler setting where a single key is published (or a single circuit is involved), the depth dependency persists, showing up in constructions of 1-key ABE and related primitives, including laconic function evaluation (LFE), 1-key functional encryption (FE), and reusable garbling schemes. So far, the only approach of eliminating depth dependency relies on indistinguishability obfuscation. An interesting question that has remained open for over a decade is whether the circular security assumptions enabling FHE can similarly benefit ABE.

In this work, we introduce new lattice-based techniques to overcome the depth-dependency limitations.

- Relying on a circular security assumption, we construct LFE, 1-key FE, 1-key ABE, and reusable garbling schemes capable of evaluating circuits of unbounded depth and size.

- Based on the _evasive circular_ LWE assumption, a stronger variant of the recently proposed _evasive_ LWE assumption [Wee, Eurocrypt ’22; Tsabary, Crypto ’22], we construct full-fledged ABE and predicate encryption (PE) schemes for circuits of unbounded depth and size.

Our LFE, 1-key FE, and reusable garbling schemes achieve almost optimal succinctness (up to polynomial factors in the security parameter). Their ciphertexts and input encodings have sizes linear in the input length, while function digest, secret keys, and garbled circuits have constant sizes independent of circuit parameters (for Boolean outputs). In fact, this gives the first constant-size garbled circuits without relying on indistinguishability obfuscation. Our ABE and PE schemes offer short components, with master public key and ciphertext sizes linear in the attribute length and secret key being constant-size.
