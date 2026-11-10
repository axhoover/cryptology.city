---
type: reference
status: stub
title: "CMZ14"
source: https://eprint.iacr.org/2013/516
authors: Melissa Chase, Sarah Meiklejohn, Greg Zaverucha
venue: ACM CCS 2014
published: 2014
aliases:
  - CMZ14
cryptobib_key: CCS:ChaMeiZav14
---

# [CMZ14] Algebraic MACs and Keyed-Verification Anonymous Credentials

**Authors:** Melissa Chase, Sarah Meiklejohn, Greg Zaverucha | **Venue:** ACM CCS 2014 | [Source](https://eprint.iacr.org/2013/516)

## Abstract

We consider the problem of constructing anonymous credentials for use in a setting where the issuer of credentials is also the verifier, or more generally where the issuer and verifier have a shared key. In this setting we can use message authentication codes (MACs) instead of public key signatures as the basis for the credential system.

To this end, we construct two algebraic MACs in prime-order groups, along with efficient protocols for issuing credentials, asserting possession a credential, and proving statements about hidden attributes (e.g., the age of the credential owner). We prove the security of the first scheme in the generic group model, and prove the security of the second scheme -- using a dual-system-based approach -- under decisional Diffie-Hellman (DDH). Our MACs are of independent interest, as they are the only uf-cmva-secure MACs with efficient proofs of knowledge.

Finally, we compare the efficiency of our new systems to two existing constructions of anonymous credentials: U-Prove and Idemix. We show that the performance of the new schemes is competitive with U-Prove (which is not provably secure, whereas ours is based on DDH), and many times faster than Idemix.
