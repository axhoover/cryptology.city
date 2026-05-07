---
title: "ElGamal85"
source: https://ieeexplore.ieee.org/document/1057074
authors: Taher ElGamal
venue: IEEE Transactions on Information Theory 1985
published: 1985-07-01
aliases:
  - ElGamal85
tags:
  - IEEETransIT
cryptobib_key: C:ElGamal84
---

# [ElGamal85] A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms

**Authors:** Taher ElGamal | **Venue:** IEEE Transactions on Information Theory 1985 | [Source](https://ieeexplore.ieee.org/document/1057074)

## Abstract

A new signature scheme is proposed, together with an implementation of the Diffie-Hellman key distribution scheme that achieves a public key cryptosystem. The security of both systems relies on the difficulty of computing discrete logarithms over finite fields. The encryption scheme works as follows: to encrypt a message $m$ under public key $y = g^x$, choose random $r$ and send $(g^r, m \cdot y^r)$; decryption uses the secret key $x$ to recover $y^r = g^{rx}$ and thereby $m$. This construction is CPA-secure under the Decisional Diffie-Hellman (DDH) assumption, making it the first concrete PKE scheme provably based on a group-theoretic assumption. The ElGamal signature scheme was also influential, though it is not EUF-CMA secure without additional modifications (cf. DSA).
