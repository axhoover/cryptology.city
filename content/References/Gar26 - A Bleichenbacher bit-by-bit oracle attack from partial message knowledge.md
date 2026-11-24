---
type: reference
status: draft
title: "Gar26"
source: https://arxiv.org/abs/2611.20277
authors: Juan Carlos García Escartín
venue: arXiv preprint
published: 2026-11-15
aliases:
  - Gar26
bibtex: |
  @misc{Gar26,
    author        = {Juan Carlos Garc{\'i}a Escart{\'i}n},
    title         = {A {Bleichenbacher} bit-by-bit oracle attack from partial message knowledge},
    year          = {2026},
    eprint        = {2611.20277},
    archivePrefix = {arXiv},
    primaryClass  = {cs.CR},
    url           = {https://arxiv.org/abs/2611.20277},
  }
---

# [Gar26] A Bleichenbacher bit-by-bit oracle attack from partial message knowledge

**Authors:** Juan Carlos García Escartín | **Venue:** arXiv preprint | [Source](https://arxiv.org/abs/2611.20277)

## Abstract

Oracle attacks show the importance of a correct implementation of cryptographic standards when translated into code. A notable example is the Bleichenbacher attack on RSA with PKCS#1 v1.5 padding and all the improvements that have been suggested over the decades. This paper shows how an attacker knowing a few least significant bytes of an RSA message can take advantage of a server with an oracle side-channel to decrypt the full message bit by bit. We will consider two oracles that can be tested with chosen ciphertexts: one revealing whether the decrypted message starts with the 00 02 bytes and a second one revealing if the decrypted message is fully PKCS compliant. For an attacker knowing the three least significant bytes of the message, the first oracle provides an attack where one oracle call gives the next least significant bit of the message and the second an attack which requires, with high probability, a small constant number of oracle calls to the oracle, with a constant which depends on the length of the message and the desired probability of success. The attack divides the message bits into two sections, one with the known part and one with the unknown part, and then chooses transformations that will keep the unknown part, except for the last unknown bit, orders of magnitude below the integer coming from the known part. The resulting string either gives a valid padding or not depending on the value of the unknown bit. The attacker can minimize the number of oracle calls at the cost of some local computation. Finally, the same method is adapted to show how it can also be used to extract the few least significant bytes of the message with an increased cost where the main complexity is finding a second valid message with a correct padding starting from the original captured ciphertext.

# Notes

- Section 4 recalls Bleichenbacher's attack of Ble98: multiplying the ciphertext by $s_i^e$, each accepted query bounds $M s_i \bmod N$ to $[2B, 3B)$ for $B = 2^{L-16}$, $L$ the bit length of the modulus, and the resulting system narrows the possible values of $M$ to one.
