---
title: "Mer89"
source: https://link.springer.com/chapter/10.1007/0-387-34805-0_21
authors: Ralph C. Merkle
venue: CRYPTO 1989
published: 1989-08-01
aliases:
  - Mer89
tags:
  - CRYPTO
---

# [Mer89] A Certified Digital Signature

**Authors:** Ralph C. Merkle | **Venue:** CRYPTO 1989 | [Source](https://link.springer.com/chapter/10.1007/0-387-34805-0_21)

## Abstract

A digital signature scheme is constructed that requires no secret key storage on the part of the signer and whose security rests solely on the security of a one-way function. The scheme is based on a binary hash tree (now called a Merkle tree): the leaves are one-time signature verification keys, and each internal node is the hash of its two children. The root of the tree serves as the single public key, and a signature on a message consists of the one-time signature together with an authentication path from the corresponding leaf to the root. This construction lifts Lamport's one-time signature scheme (Lam79) into a many-time signature scheme using only a one-way function and no other cryptographic assumptions, and is the foundation of modern hash-based signature schemes.
