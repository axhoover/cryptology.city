---
title: "FS86"
source: https://link.springer.com/chapter/10.1007/3-540-47721-7_12
authors: Amos Fiat, Adi Shamir
venue: CRYPTO 1986
published: 1986-08-01
aliases:
  - FS86
tags:
  - CRYPTO
cryptobib_key: C:FiaSha86
---

# [FS86] How to Prove Yourself: Practical Solutions to Identification and Signature Problems

**Authors:** Amos Fiat, Adi Shamir | **Venue:** CRYPTO 1986 | [Source](https://link.springer.com/chapter/10.1007/3-540-47721-7_12)

## Abstract

We describe simple and efficient interactive proofs of identity and their non-interactive variants. The interactive Fiat-Shamir identification protocol is a three-move (sigma) protocol in which a prover demonstrates knowledge of a square root modulo an RSA modulus without revealing it: the prover sends a commitment, the verifier sends a random challenge, and the prover responds. Security holds under the hardness of factoring. The signature scheme is obtained by applying the Fiat-Shamir transform: replace the verifier's random challenge with the hash of the commitment (and the message), thereby making the protocol non-interactive. In the random oracle model, the resulting signature scheme is existentially unforgeable. The Fiat-Shamir heuristic — converting any honest-verifier zero-knowledge sigma protocol into a signature scheme via a random oracle — has become a fundamental tool in cryptography.
