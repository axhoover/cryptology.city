---
type: reference
status: stub
title: "Lin17"
source: https://eprint.iacr.org/2017/552
authors: Yehuda Lindell
venue: CRYPTO 2017
published: 2017
aliases:
  - Lin17
cryptobib_key: C:Lindell17
---

# [Lin17] Fast Secure Two-Party ECDSA Signing

**Authors:** Yehuda Lindell | **Venue:** CRYPTO 2017 | [Source](https://eprint.iacr.org/2017/552)

## Abstract

ECDSA is a standard digital signature schemes that is widely used in TLS, Bitcoin and elsewhere. Unlike other schemes like RSA, Schnorr signatures and more, it is particularly hard to construct efficient threshold signature protocols for ECDSA (and DSA). As a result, the best-known protocols today for secure distributed ECDSA require running heavy zero-knowledge proofs and computing many large-modulus exponentiations for every signing operation. In this paper, we consider the specific case of two parties (and thus no honest majority) and construct a protocol that is approximately two orders of magnitude faster than the previous best. Concretely, our protocol achieves good performance, with a single signing operation for curve P-256 taking approximately 37ms between two standard machine types in Azure (utilizing a single core only). Our protocol is proven secure for sequential composition under standard assumptions using a game-based definition. In addition, we prove security by simulation under a plausible yet non-standard assumption regarding Paillier. We show that partial concurrency (where if one execution aborts then all need to abort) can also be achieved.
