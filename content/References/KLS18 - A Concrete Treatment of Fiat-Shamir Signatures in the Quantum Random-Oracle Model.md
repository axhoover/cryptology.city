---
type: reference
status: stub
title: "KLS18"
source: https://eprint.iacr.org/2017/916
authors: Eike Kiltz, Vadim Lyubashevsky, Christian Schaffner
venue: EUROCRYPT 2018
published: 2018
aliases:
  - KLS18
cryptobib_key: EC:KilLyuSch18
---

# [KLS18] A Concrete Treatment of Fiat-Shamir Signatures in the Quantum Random-Oracle Model

**Authors:** Eike Kiltz, Vadim Lyubashevsky, Christian Schaffner | **Venue:** EUROCRYPT 2018 | [Source](https://eprint.iacr.org/2017/916)

## Abstract

The Fiat-Shamir transform is a technique for combining a hash function and an identification scheme to produce a digital signature scheme. The resulting scheme is known to be secure in the random oracle model (ROM), which does not, however, imply security in the scenario where the adversary also has quantum access to the oracle. The goal of this current paper is to create a generic framework for constructing tight reductions in the QROM from underlying hard problems to Fiat-Shamir signatures.

Our generic reduction is composed of two results whose proofs, we believe, are simple and natural. We first consider a security notion (UF-NMA) in which the adversary obtains the public key and attempts to create a valid signature without accessing a signing oracle. We give a tight reduction showing that deterministic signatures (i.e., ones in which the randomness is derived from the message and the secret key) that are UF-NMA secure are also secure under the standard chosen message attack (UF-CMA) security definition. Our second result is showing that if the identification scheme is “lossy”, as defined in (Abdalla et al. Eurocrypt 2012), then the security of the UF-NMA scheme is tightly based on the hardness of distinguishing regular and lossy public keys of the identification scheme. This latter distinguishing problem is normally exactly the definition of some presumably-hard mathematical problem. The combination of these components gives our main result.

As a concrete instantiation of our framework, we modify the recent lattice-based Dilithium digital signature scheme (Ducas et al., TCHES 2018) so that its underlying identification scheme admits lossy public keys. The original Dilithium scheme, which is proven secure in the classical ROM based on standard lattice assumptions, has 1.5KB public keys and 2.7KB signatures. The new scheme, which is tightly based on the hardness of the Module-LWE problem in the QROM using our generic reductions, has 7.7KB public keys and 5.7KB signatures for the same security level. Furthermore, due to our proof of equivalence between the UF-NMA and UF-CMA security notions of deterministic signature schemes, we can formulate a new non-interactive assumption under which the original Dilithium signature scheme is also tightly secure in the QROM.
