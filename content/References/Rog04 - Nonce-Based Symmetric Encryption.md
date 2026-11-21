---
type: reference
status: draft
title: "Rog04"
source: https://doi.org/10.1007/978-3-540-25937-4_22
authors: Phillip Rogaway
venue: FSE 2004
published: 2004
aliases:
  - Rog04
cryptobib_key: FSE:Rogaway04
---

# [Rog04] Nonce-Based Symmetric Encryption

**Authors:** Phillip Rogaway | **Venue:** FSE 2004 | [Source](https://doi.org/10.1007/978-3-540-25937-4_22)

## Abstract

Symmetric encryption schemes are usually formalized so as to make the encryption operation a probabilistic or state-dependent function $E$ of the message $M$ and the key $K$: the user supplies $M$ and $K$ and the encryption process does the rest, flipping coins or modifying internal state in order to produce a ciphertext $C$. Here we investigate an alternative syntax for an encryption scheme, where the encryption process $E$ is a deterministic function that surfaces an initialization vector (IV). The user supplies a message $M$, key $K$, and initialization vector $N$, getting back the (one and only) associated ciphertext $C = E_K^N(M)$. We concentrate on the case where the IV is guaranteed to be a nonce—something that takes on a new value with every message one encrypts. We explore definitions, constructions, and properties for nonce-based encryption. Symmetric encryption with a surfaced IV more directly captures real-word constructions like CBC mode, and encryption schemes constructed to be secure under nonce-based security notions may be less prone to misuse.
