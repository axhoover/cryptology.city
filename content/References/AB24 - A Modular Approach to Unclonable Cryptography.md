---
type: reference
status: stub
title: "AB24"
source: https://eprint.iacr.org/2023/1797
authors: Prabhanjan Ananth, Amit Behera
venue: CRYPTO 2024
published: 2024
aliases:
  - AB24
cryptobib_key: C:AnaBeh24
---

# [AB24] A Modular Approach to Unclonable Cryptography

**Authors:** Prabhanjan Ananth, Amit Behera | **Venue:** CRYPTO 2024 | [Source](https://eprint.iacr.org/2023/1797)

## Abstract

We explore a new pathway to designing unclonable cryptographic primitives. We propose a new notion called unclonable puncturable obfuscation (UPO) and study its implications for unclonable cryptography. Using UPO, we present modular (and in some cases, arguably, simple) constructions of many primitives in unclonable cryptography, including, public-key quantum money, quantum copy-protection for many classes of functionalities, unclonable encryption, and single-decryption encryption.

Notably, we obtain the following new results assuming the existence of UPO:

- We show that any cryptographic functionality can be copy-protected as long as this functionality satisfies a notion of security, which we term as puncturable security. Prior feasibility results focused on copy-protecting specific cryptographic functionalities.

- We show that copy-protection exists for any class of evasive functions as long as the associated distribution satisfies a preimage-sampleability condition. Prior works demonstrated copy-protection for point functions, which follows as a special case of our result.

- We show that unclonable encryption exists in the plain model. Prior works demonstrated feasibility results in the quantum random oracle model.

We put forward a candidate construction of UPO and prove two notions of security, each based on the existence of (post-quantum) sub-exponentially secure indistinguishability obfuscation and one-way functions, the quantum hardness of learning with errors, and a new conjecture called simultaneous inner product conjecture.
