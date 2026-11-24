---
type: reference
status: stub
title: "AKY25"
source: https://eprint.iacr.org/2024/751
authors: Prabhanjan Ananth, Fatih Kaleoglu, Henry Yuen
venue: ITCS 2025
published: 2025
aliases:
  - AKY25
cryptobib_key: ITCS:AnaKalYue25
---

# [AKY25] Simultaneous Haar Indistinguishability with Applications to Unclonable Cryptography

**Authors:** Prabhanjan Ananth, Fatih Kaleoglu, Henry Yuen | **Venue:** ITCS 2025 | [Source](https://eprint.iacr.org/2024/751)

## Abstract

Unclonable cryptography is concerned with leveraging the no-cloning principle to build cryptographic primitives that are otherwise impossible to achieve classically. Understanding the feasibility of unclonable encryption, one of the key unclonable primitives, satisfying indistinguishability security in the plain model has been a major open question in the area. So far, the existing constructions of unclonable encryption are either in the quantum random oracle model or are based on new conjectures.

We present a new approach to unclonable encryption via a reduction to a novel question about nonlocal quantum state discrimination: how well can non-communicating -- but entangled -- players distinguish between different distributions over quantum states? We call this task simultaneous state indistinguishability. Our main technical result is showing that the players cannot distinguish between each player receiving independently-chosen Haar random states versus all players receiving the same Haar random state.

We leverage this result to present the first construction of unclonable encryption satisfying indistinguishability security, with quantum decryption keys, in the plain model. We also show other implications to single-decryptor encryption and leakage-resilient secret sharing.
