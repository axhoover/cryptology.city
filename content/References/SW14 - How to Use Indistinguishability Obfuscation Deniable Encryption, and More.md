---
title: "SW14"
source: https://eprint.iacr.org/2013/454
authors: Amit Sahai, Brent Waters
venue: STOC 2014
published: 2013-07-23
created: 2025-01-10
tags:
  - STOC
aliases:
  - SW14
---
# [SW14] How to Use Indistinguishability Obfuscation: Deniable Encryption, and More

**Authors:** Amit Sahai, Brent Waters | **Venue:** STOC 2014 | [Source](https://eprint.iacr.org/2013/454)

## Abstract
We introduce a new technique, that we call punctured programs, to apply indistinguishability obfuscation towards cryptographic problems. We use this technique to carry out a systematic study of the applicability of indistinguishability obfuscation to a variety of cryptographic goals. Along the way, we resolve the 16-year-old open question of Deniable Encryption, posed by Canetti, Dwork, Naor, and Ostrovsky in 1997: In deniable encryption, a sender who is forced to reveal to an adversary both her message and the randomness she used for encrypting it should be able to convincingly provide "fake" randomness that can explain any alternative message that she would like to pretend that she sent. We resolve this question by giving the first construction of deniable encryption that does not require any pre-planning by the party that must later issue a denial.

In addition, we show the generality of our punctured programs technique by also constructing a variety of core cryptographic objects from indistinguishability obfuscation and one-way functions (or close variants). In particular we obtain: public key encryption, short "hash-and-sign" selectively secure signatures, chosen-ciphertext secure public key encryption, non-interactive zero knowledge proofs (NIZKs), injective trapdoor functions, and oblivious transfer. These results suggest the possibility of indistinguishability obfuscation becoming a "central hub" for cryptography.