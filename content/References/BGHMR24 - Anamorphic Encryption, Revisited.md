---
type: reference
status: stub
title: "BGHMR24"
source: https://eprint.iacr.org/2023/249
authors: Fabio Banfi, Konstantin Gegier, Martin Hirt, Ueli Maurer, Guilherme Rito
venue: EUROCRYPT 2024
published: 2024
aliases:
  - BGHMR24
cryptobib_key: EC:BGHMR24
---

# [BGHMR24] Anamorphic Encryption, Revisited

**Authors:** Fabio Banfi, Konstantin Gegier, Martin Hirt, Ueli Maurer, Guilherme Rito | **Venue:** EUROCRYPT 2024 | [Source](https://eprint.iacr.org/2023/249)

## Abstract

An anamorphic encryption scheme allows two parties who share a so-called double key to embed covert messages in ciphertexts of an established PKE scheme. This protects against a dictator that can force the receiver to reveal the secret keys for the PKE scheme, but who is oblivious about the existence of the double key. We identify two limitations of the original model by Persiano, Phan, and Yung (EUROCRYPT 2022). First, in their definition a double key can only be generated once, together with a key-pair. This has the drawback that a receiver who wants to use the anamorphic mode after a dictator comes to power, needs to deploy a new key-pair, a potentially suspicious act. Second, a receiver cannot distinguish whether or not a ciphertext contains a covert message.

In this work we propose a new model that overcomes these limitations. First, we allow to associate multiple double keys to a key-pair, after its deployment. This also enables deniability in case the double key only depends on the public key. Second, we propose a natural robustness notion, which guarantees that anamorphically decrypting a regularly encrypted message results in a special symbol indicating that no covert message is contained, which also eliminates certain attacks.

Finally, to instantiate our new, stronger definition of anamorphic encryption, we provide generic and concrete constructions. Concretely, we show that ElGamal and Cramer-Shoup satisfy a new condition, selective randomness recoverability, which enables robust anamorphic extensions, and we also provide a robust anamorphic extension for RSA-OAEP.
