---
type: reference
status: stub
title: "MW16"
source: https://eprint.iacr.org/2015/345
authors: Pratyay Mukherjee, Daniel Wichs
venue: EUROCRYPT 2016
published: 2016
aliases:
  - MW16
cryptobib_key: EC:MukWic16
---

# [MW16] Two Round Multiparty Computation via Multi-key FHE

**Authors:** Pratyay Mukherjee, Daniel Wichs | **Venue:** EUROCRYPT 2016 | [Source](https://eprint.iacr.org/2015/345)

## Abstract

We construct a general multiparty computation (MPC) protocol with only two rounds of interaction in the common random string model, which is known to be optimal. In the honest-but-curious setting we only rely on the learning with errors (LWE) assumption, and in the fully malicious setting we additionally assume the existence of non-interactive zero knowledge arguments (NIZKs). Previously, Asharov et al. (EUROCRYPT '12) showed how to achieve three rounds based on LWE and NIZKs, while Garg et al. (TCC '14) showed how to achieve the optimal two rounds based on indistinguishability obfuscation, but it was unknown if two rounds were possible under standard assumptions without obfuscation.

Our approach relies on “multi-key fully homomorphic encryption (MFHE)", introduced by Lopez-Alt et al. (STOC '12), which enables homomorphic computation over data encrypted under different keys. We present a construction of MFHE based on LWE that significantly simplifies a recent scheme of Clear and McGoldrick (CRYPTO '15). We then extend this construction to allow for a one-round distributed decryption of a multi-key ciphertext. Our entire MPC protocol consists of the following two rounds:

1. Each party individually encrypts its input under its own key and broadcasts the ciphertext. All parties can then homomorphically compute a multi-key encryption of the output.

2. Each party broadcasts a partial decryption of the output using its secret key. The partial decryptions can be combined to recover the output in plaintext.
