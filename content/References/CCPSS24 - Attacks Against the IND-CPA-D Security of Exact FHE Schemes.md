---
type: reference
status: stub
title: "CCPSS24"
source: https://eprint.iacr.org/2024/127
authors: Jung Hee Cheon, Hyeongmin Choe, Alain Passelègue, Damien Stehlé, Elias Suvanto
venue: ACM CCS 2024
published: 2024
aliases:
  - CCPSS24
cryptobib_key: CCS:CCPSS24
---

# [CCPSS24] Attacks Against the IND-CPA$^{\text{D}}$ Security of Exact FHE Schemes

**Authors:** Jung Hee Cheon, Hyeongmin Choe, Alain Passelègue, Damien Stehlé, Elias Suvanto | **Venue:** ACM CCS 2024 | [Source](https://eprint.iacr.org/2024/127)

## Abstract

A recent security model for fully homomorphic encryption (FHE), called IND-CPA^D security and introduced by Li and Micciancio [Eurocrypt'21], strengthens IND-CPA security by giving the attacker access to a decryption oracle for ciphertexts for which it should know the underlying plaintexts. This includes ciphertexts that it (honestly) encrypted and those obtained from the latter by evaluating circuits that it chose. Li and Micciancio singled out the CKKS FHE scheme for approximate data [Asiacrypt'17] by giving an IND-CPA^D attack on it and claiming that IND-CPA security and IND-CPA^D security coincide for exact FHE schemes.

We correct the widespread belief according to which IND-CPA^D attacks are specific to approximate homomorphic computations. Indeed, the equivalency formally proved by Li and Micciancio assumes that the schemes have a negligible probability of incorrect decryption. However, almost all competitive implementations of exact FHE schemes give away strong correctness by analyzing correctness heuristically and allowing noticeable probabilities of incorrect decryption.

We exploit this imperfect correctness to mount efficient non-adaptive indistinguishability and key-recovery attacks against all major exact FHE schemes. We illustrate their strength by implementing them for BFV using OpenFHE and simulating an attack for the default parameter set of the CGGI implementation of TFHE-rs (the attack experiment is too expensive to be run on commodity desktops, because of the cost of CGGI bootstrapping). Our attacks extend to CKKS for discrete data, and threshold versions of the exact FHE schemes, when the correctness is similarly loose.
