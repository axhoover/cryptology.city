---
title: "BGW05"
source: https://eprint.iacr.org/2005/018
authors: Dan Boneh, Craig Gentry, Brent Waters
venue: Crypto 2005
published: 2005-08-01
aliases:
  - BGW05
tags:
  - Crypto
cryptobib_key: C:BonGenWat05
---

# [BGW05] Collusion Resistant Broadcast Encryption with Short Ciphertexts and Private Keys

**Authors:** Dan Boneh, Craig Gentry, Brent Waters | **Venue:** Crypto 2005 | [Source](https://eprint.iacr.org/2005/018)

## Abstract

We describe two new public key broadcast encryption systems for stateless receivers. Both systems are fully secure against any number of colluding revoked users. In our first construction, ciphertext size, private key size, and encryption/decryption time are all constant (and small), independent of the number of revoked users or the total number of users $N$ in the system. The public key size is $O(N)$ group elements. Our second construction gives a tradeoff between public key size and private key size. Both constructions are based on bilinear groups and are proved secure (without random oracles) under a variant of the bilinear Diffie-Hellman assumption. Prior to this work, all broadcast encryption systems achieving full collusion resistance had ciphertexts that grew with the number of revoked users.
