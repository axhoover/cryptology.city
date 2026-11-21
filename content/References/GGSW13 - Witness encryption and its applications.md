---
type: reference
status: stub
title: "GGSW13"
source: https://eprint.iacr.org/2013/258
authors: Sanjam Garg, Craig Gentry, Amit Sahai, Brent Waters
venue: STOC 2013
published: 2013
aliases:
  - GGSW13
cryptobib_key: STOC:GGSW13
---

# [GGSW13] Witness encryption and its applications

**Authors:** Sanjam Garg, Craig Gentry, Amit Sahai, Brent Waters | **Venue:** STOC 2013 | [Source](https://eprint.iacr.org/2013/258)

## Abstract

We put forth the concept of _witness encryption_. A witness encryption scheme is defined for an NP language $L$ (with corresponding witness relation $R$). In such a scheme, a user can encrypt a message $M$ to a particular problem instance $x$ to produce a ciphertext. A recipient of a ciphertext is able to decrypt the message if $x$ is in the language and the recipient knows a witness $w$ where $R(x,w)$ holds. However, if $x$ is not in the language, then no polynomial-time attacker can distinguish between encryptions of any two equal length messages. We emphasize that the encrypter himself may have no idea whether $x$ is actually in the language.

Our contributions in this paper are threefold. First, we introduce and formally define witness encryption. Second, we show how to build several cryptographic primitives from witness encryption. Finally, we give a candidate construction based on the NP-complete Exact Cover problem and Garg, Gentry, and Halevi's recent construction of “approximate” multilinear maps.

Our method for witness encryption also yields the first candidate construction for an open problem posed by Rudich in 1989: constructing computational secret sharing schemes for an NP-complete access structure.
