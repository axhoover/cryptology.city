---
type: reference
status: stub
title: "CDMW18"
source: https://eprint.iacr.org/2016/720
authors: Seung Geol Choi, Dana Dachman-Soled, Tal Malkin, Hoeteck Wee
venue: Journal of Cryptology 2018
published: 2018
aliases:
  - CDMW18
cryptobib_key: JC:CDMW18
---

# [CDMW18] A Black-Box Construction of Non-malleable Encryption from Semantically Secure Encryption

**Authors:** Seung Geol Choi, Dana Dachman-Soled, Tal Malkin, Hoeteck Wee | **Venue:** Journal of Cryptology 2018 | [Source](https://eprint.iacr.org/2016/720)

## Abstract

We show how to transform any semantically secure encryption scheme into a non-malleable one, with a black-box construction that achieves a quasi-linear blow-up in the size of the ciphertext.

This improves upon the previous non-black-box construction of Pass, Shelat and Vaikuntanathan (Crypto '06). Our construction also extends readily to guarantee non-malleability under a bounded-CCA2 attack, thereby simultaneously improving on both results in the work of Cramer et al. (Asiacrypt '07).

Our construction departs from the oft-used paradigm of re-encrypting the same message with different keys and then proving consistency of encryption. Instead, we encrypt an encoding of the message; the encoding is based on an error-correcting code with certain properties of reconstruction and secrecy from partial views, satisfied, e.g., by a Reed-Solomon code.

# Notes

The full version of [[CDMW08 - Black-Box Construction of a Non-malleable Encryption Scheme from Any Semantically Secure One|CDMW08]]; the abstract is that of the ePrint version, 2016/720.
