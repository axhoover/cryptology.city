---
type: reference
status: stub
title: "RS20"
source: https://eprint.iacr.org/2020/1144
authors: Lior Rotem, Gil Segev
venue: TCC 2020
published: 2020
aliases:
  - RS20
cryptobib_key: TCC:RotSeg20
---

# [RS20] Algebraic Distinguishers: From Discrete Logarithms to Decisional Uber Assumptions

**Authors:** Lior Rotem, Gil Segev | **Venue:** TCC 2020 | [Source](https://eprint.iacr.org/2020/1144)

## Abstract

The algebraic group model, introduced by Fuchsbauer, Kiltz and Loss (CRYPTO '18), is a substantial relaxation of the generic group model capturing algorithms that may exploit the representation of the underlying group. This idealized yet realistic model was shown useful for reasoning about cryptographic assumptions and security properties defined via computational problems. However, it does not generally capture assumptions and properties defined via decisional problems. As such problems play a key role in the foundations and applications of cryptography, this leaves a significant gap between the restrictive generic group model and the standard model.

We put forward the notion of algebraic distinguishers, strengthening the algebraic group model by enabling it to capture decisional problems. Within our framework we then reveal new insights on the algebraic interplay between a wide variety of decisional assumptions. These include the decisional Diffie-Hellman assumption, the family of Linear assumptions in multilinear groups, and the family of Uber assumptions in bilinear groups.

Our main technical results establish that, from an algebraic perspective, these decisional assumptions are in fact all polynomially equivalent to either the most basic discrete logarithm assumption or to its higher-order variant, the $q$-discrete logarithm assumption. On the one hand, these results increase the confidence in these strong decisional assumptions, while on the other hand, they enable to direct cryptanalytic efforts towards either extracting discrete logarithms or significantly deviating from standard algebraic techniques.
