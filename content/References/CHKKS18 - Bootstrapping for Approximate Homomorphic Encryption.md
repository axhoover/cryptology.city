---
type: reference
status: stub
title: "CHKKS18"
source: https://eprint.iacr.org/2018/153
authors: Jung Hee Cheon, Kyoohyung Han, Andrey Kim, Miran Kim, Yongsoo Song
venue: EUROCRYPT 2018
published: 2018
aliases:
  - CHKKS18
cryptobib_key: EC:CHKKS18
---

# [CHKKS18] Bootstrapping for Approximate Homomorphic Encryption

**Authors:** Jung Hee Cheon, Kyoohyung Han, Andrey Kim, Miran Kim, Yongsoo Song | **Venue:** EUROCRYPT 2018 | [Source](https://eprint.iacr.org/2018/153)

## Abstract

This paper extends the leveled homomorphic encryption scheme for an approximate arithmetic of Cheon et al. (ASIACRYPT 2017) to a fully homomorphic encryption, i.e., we propose a new technique to refresh low-level ciphertexts based on Gentry's bootstrapping procedure.

The modular reduction operation is the main bottleneck in the homomorphic evaluation of the decryption circuit. We exploit a scaled sine function as an approximation of the modular reduction operation and present an efficient evaluation strategy. Our method requires only one homomorphic multiplication for each of iterations and so the total computation cost grows linearly with the depth of the decryption circuit.

We also show how to recrypt packed ciphertexts on the RLWE construction with an open-source implementation. For example, it takes 139.8 seconds to refresh a ciphertext that encrypts 128 numbers with 12 bits of precision, yielding an amortized rate of 1.1 seconds per slot.
