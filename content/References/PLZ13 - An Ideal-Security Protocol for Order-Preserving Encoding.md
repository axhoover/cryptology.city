---
type: reference
status: stub
title: "PLZ13"
source: https://eprint.iacr.org/2013/129
authors: Raluca A. Popa, Frank H. Li, Nickolai Zeldovich
venue: "IEEE S&P 2013"
published: 2013
aliases:
  - PLZ13
cryptobib_key: SP:PopLiZel13
---

# [PLZ13] An Ideal-Security Protocol for Order-Preserving Encoding

**Authors:** Raluca A. Popa, Frank H. Li, Nickolai Zeldovich | **Venue:** IEEE S&P 2013 | [Source](https://eprint.iacr.org/2013/129)

## Abstract

Order-preserving encryption - an encryption scheme where the sort order of ciphertexts matches the sort order of the corresponding plaintexts - allows databases and other applications to process queries involving order over encrypted data efficiently. The ideal security guarantee for order-preserving encryption put forth in the literature is for the ciphertexts to reveal no information about the plaintexts besides order. Even though more than a dozen schemes were proposed, all these schemes leak more information than order.

This paper presents the first order-preserving scheme that achieves ideal security. Our main technique is mutable cipher- texts, meaning that over time, the ciphertexts for a small number of plaintext values change, and we prove that mutable ciphertexts are needed for ideal security. Our resulting protocol is interactive, with a small number of interactions.

We implemented our scheme and evaluated it on microbenchmarks and in the context of an encrypted MySQL database application. We show that in addition to providing ideal security, our scheme achieves 1–2 orders of magnitude higher performance than the state-of-the-art order-preserving encryption scheme, which is less secure than our scheme.
