---
type: reference
status: stub
title: "KW19b"
source: https://eprint.iacr.org/2018/847
authors: Venkata Koppula, Brent Waters
venue: CRYPTO 2019
published: 2019
aliases:
  - KW19b
cryptobib_key: C:KopWat19
---

# [KW19b] Realizing Chosen Ciphertext Security Generically in Attribute-Based Encryption and Predicate Encryption

**Authors:** Venkata Koppula, Brent Waters | **Venue:** CRYPTO 2019 | [Source](https://eprint.iacr.org/2018/847)

## Abstract

We provide generic and black box transformations from any chosen plaintext secure Attribute-Based Encryption (ABE) or One-sided Predicate Encryption system into a chosen ciphertext secure system.
Our transformation requires only the IND-CPA security of the original ABE scheme coupled with a pseudorandom generator (PRG) with a special security property.

In particular, we consider a PRG with an $n$ bit input $s \in \{0,1\}^n$ and $n\cdot \ell$ bit output $y_1, ..., y_n$ where each $y_i$ is an $\ell$ bit string. Then for a randomly chosen $s$ the following two distributions should be computationally indistinguishable. In the first distribution $r_{i,s_i} = y_i$ and $r_{i, \bar{s}_i}$ is chosen randomly for $i \in [n]$.
In the second distribution all $r_{i,b}$ are chosen randomly for $i \in [n], b \in \{0,1\}$.
