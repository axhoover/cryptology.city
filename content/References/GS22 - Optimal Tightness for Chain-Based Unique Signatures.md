---
type: reference
status: stub
title: "GS22"
source: https://eprint.iacr.org/2022/526
authors: Fuchun Guo, Willy Susilo
venue: EUROCRYPT 2022
published: 2022
aliases:
  - GS22
cryptobib_key: EC:GuoSus22
---

# [GS22] Optimal Tightness for Chain-Based Unique Signatures

**Authors:** Fuchun Guo, Willy Susilo | **Venue:** EUROCRYPT 2022 | [Source](https://eprint.iacr.org/2022/526)

## Abstract

Unique signatures are digital signatures with exactly one unique and valid signature for each message. The security reduction for most unique signatures has a natural reduction loss (in the existentially unforgeable against chosen-message attacks, namely EUF-CMA, security model under a non-interactive hardness assumption). In Crypto 2017, Guo _et al._ proposed a particular chain-based unique signature scheme where each unique signature is composed of $n$ BLS signatures computed sequentially like a blockchain. Under the computational Diffie-Hellman assumption, their reduction loss is $n\cdot q_H^{1/n}$ for $q_H$ hash queries and it is logarithmically tight when $n=\log{q_H}$. However, it is currently unknown whether a better reduction than logarithmical tightness for the chain-based unique signatures exists.

We show that the proposed chain-based unique signature scheme by Guo _et al._ must have the reduction loss $q^{1/n}$ for $q$ signature queries when each unique signature consists of $n$ BLS signatures. We use a meta reduction to prove this lower bound in the EUF-CMA security model under any non-interactive hardness assumption, and the meta-reduction is also applicable in the random oracle model. We also give a security reduction with reduction loss $4\cdot q^{1/n}$ for the chain-based unique signature scheme (in the EUF-CMA security model under the CDH assumption). This improves significantly on previous reduction loss $n\cdot q_H^{1/n}$ that is logarithmically tight at most. The core of our reduction idea is a _non-uniform_ simulation that is specially invented for the chain-based unique signature construction.
