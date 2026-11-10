---
type: reference
status: stub
title: "BCG+19"
source: https://eprint.iacr.org/2019/448
authors: Elette Boyle, Geoffroy Couteau, Niv Gilboa, Yuval Ishai, Lisa Kohl, Peter Scholl
venue: CRYPTO 2019
published: 2019
aliases:
  - BCG+19
cryptobib_key: C:BCGIKS19
---

# [BCG+19] Efficient Pseudorandom Correlation Generators: Silent OT Extension and More

**Authors:** Elette Boyle, Geoffroy Couteau, Niv Gilboa, Yuval Ishai, Lisa Kohl, Peter Scholl | **Venue:** CRYPTO 2019 | [Source](https://eprint.iacr.org/2019/448)

## Abstract

Secure multiparty computation (MPC) often relies on sources of correlated randomness for better efficiency and simplicity. This is particularly useful for MPC with no honest majority, where input-independent correlated randomness enables a lightweight “non-cryptographic” online phase once the inputs are known. However, since the amount of correlated randomness typically scales with the circuit size of the function being computed, securely generating correlated randomness forms an efficiency bottleneck, involving a large amount of communication and storage.
A natural tool for addressing the above limitations is a pseudorandom correlation generator (PCG). A PCG allows two or more parties to securely generate long sources of useful correlated randomness via a local expansion of correlated short seeds and no interaction. PCGs enable MPC with silent preprocessing, where a small amount of interaction used for securely sampling the seeds is followed by silent local generation of correlated pseudorandomness.
A concretely efficient PCG for Vector-OLE correlations was recently obtained by Boyle et al. (CCS 2018) based on variants of the learning parity with noise (LPN) assumption over large fields. In this work, we initiate a systematic study of PCGs and present concretely efficient constructions for several types of useful MPC correlations. We obtain the following main contributions:

– PCG foundations. We give a general security definition for PCGs. Our definition suffices for any MPC protocol satisfying a stronger security requirement that is met by existing protocols. We prove that a stronger security requirement is indeed necessary, and justify our PCG definition by ruling out a stronger and more natural definition.

– Silent OT extension. We present the first concretely efficient PCG for oblivious transfer correlations. Its security is based on a variant of the binary LPN assumption and any correlation-robust hash function. We expect it to provide a faster alternative to the IKNP OT extension protocol (Crypto ’03) when communication is the bottleneck. We present several applications, including protocols for non-interactive zero-knowledge with bounded-reusable preprocessing from binary LPN, and concretely efficient related-key oblivious pseudorandom functions.

– PCGs for simple 2-party correlations. We obtain PCGs for several other types of useful 2-party correlations, including (authenticated) one-time truth-tables and Beaver triples. While the latter PCGs are slower than our PCG for OT, they are still practically feasible. These PCGs are based on a host of assumptions and techniques, including specialized homomorphic secret sharing schemes and pseudorandom generators tailored to their structure.

– Multiparty correlations. We obtain PCGs for multiparty correlations that can be used to make the circuit-dependent communication of MPC protocols scale linearly (instead of quadratically) with the number of parties.
