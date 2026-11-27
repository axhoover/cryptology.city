---
type: reference
status: stub
title: "BDV17"
source: https://eprint.iacr.org/2016/574
authors: Nir Bitansky, Akshay Degwekar, Vinod Vaikuntanathan
venue: CRYPTO 2017
published: 2017
aliases:
  - BDV17
cryptobib_key: C:BitDegVai17
---

# [BDV17] Structure vs. Hardness Through the Obfuscation Lens

**Authors:** Nir Bitansky, Akshay Degwekar, Vinod Vaikuntanathan | **Venue:** CRYPTO 2017 | [Source](https://eprint.iacr.org/2016/574)

## Abstract

Much of modern cryptography, starting from public-key encryption and going beyond, is based on the hardness of structured (mostly algebraic) problems like factoring, discrete log, or finding short lattice vectors. While structure is perhaps what enables advanced applications, it also puts the hardness of these problems in question. In particular, this structure often puts them in low (and so called structured) complexity classes such as NP$\cap$coNP or statistical zero-knowledge (SZK).

Is this structure really necessary? For some cryptographic primitives, such as one-way permutations and homomorphic encryption, we know that the answer is yes — they imply hard problems in NP$\cap$coNP and SZK, respectively. In contrast, one-way functions do not imply such hard problems, at least not by black-box reductions. Yet, for many basic primitives such as public-key encryption, oblivious transfer, and functional encryption, we do not have any answer.

We show that the above primitives, and many others, do not imply hard problems in NP$\cap$coNP or SZK via black-box reductions. In fact, we first show that even the very powerful notion of Indistinguishability Obfuscation (IO) does not imply such hard problems, and then deduce the same for a large class of primitives that can be constructed from IO.
