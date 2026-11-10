---
type: reference
status: stub
title: "CKS08"
source: https://eprint.iacr.org/2008/067
authors: David Cash, Eike Kiltz, Victor Shoup
venue: EUROCRYPT 2008
published: 2008
aliases:
  - CKS08
cryptobib_key: EC:CasKilSho08
---

# [CKS08] The Twin Diffie-Hellman Problem and Applications

**Authors:** David Cash, Eike Kiltz, Victor Shoup | **Venue:** EUROCRYPT 2008 | [Source](https://eprint.iacr.org/2008/067)

## Abstract

We propose a new computational problem called the _twin Diffie-Hellman problem_. This problem is closely related to the usual (computational) Diffie-Hellman problem and can be used in many of the same cryptographic constructions that are based on the Diffie-Hellman problem. Moreover, the twin Diffie-Hellman problem is at least as hard as the ordinary Diffie-Hellman problem. However, we are able to show that the twin Diffie-Hellman problem remains hard, even in the presence of a decision oracle that recognizes solutions to the problem — this is a feature not enjoyed by the Diffie-Hellman problem in general. Specifically, we show how to build a certain “trapdoor test” that allows us to effectively answer decision oracle queries for the twin Diffie-Hellman problem without knowing any of the corresponding discrete logarithms. Our new techniques have many applications. As one such application, we present a new variant of ElGamal encryption with very short ciphertexts, and with a very simple and tight security proof, in the random oracle model, under the assumption that the ordinary Diffie-Hellman problem is hard. We present several other applications as well, including: a new variant of Diffie and Hellman's non-interactive key exchange protocol; a new variant of Cramer-Shoup encryption, with a very simple proof in the standard model; a new variant of Boneh-Franklin identity-based encryption, with very short ciphertexts; a more robust version of a password-authenticated key exchange protocol of Abdalla and Pointcheval.
