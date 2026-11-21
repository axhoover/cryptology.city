---
type: reference
status: stub
title: "AdM04"
source: https://eprint.iacr.org/2004/243
authors: Giuseppe Ateniese, Breno de Medeiros
venue: SCN 2004
published: 2004
aliases:
  - AdM04
cryptobib_key: SCN:AtedMe04
---

# [AdM04] On the Key Exposure Problem in Chameleon Hashes

**Authors:** Giuseppe Ateniese, Breno de Medeiros | **Venue:** SCN 2004 | [Source](https://eprint.iacr.org/2004/243)

## Abstract

Chameleon signatures were introduced by Krawczyk and Rabin, being non-interactive signature schemes that provide non-transferability. However, that first construction
employs a chameleon hash that suffers from a key exposure problem:
The non-transferability property requires willingness of the recipient in consequentially exposing a secret key, and therefore invalidating all signatures issued to the same recipient's public key.
To address this key-revocation issue, and its attending problems of key
redistribution, storage of state information, and greater need for interaction,
an identity-based scheme was proposed in [1], while a fully key-exposure free construction, based on the elliptic curves with pairings, appeared later in [7].

Herein we provide several constructions of exposure-free
chameleon hash functions based on different cryptographic assumptions,
such as the RSA and the discrete logarithm assumptions. One of the
schemes is a novel construction that relies on a single trapdoor
and therefore may potentially be realized over a large set of cryptographic
groups (where the discrete logarithm is hard).
