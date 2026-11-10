---
type: reference
status: stub
title: "HK23"
source: https://eprint.iacr.org/2023/914
authors: Dominik Hartmann, Eike Kiltz
venue: TCC 2023
published: 2023
aliases:
  - HK23
cryptobib_key: TCC:HarKil23
---

# [HK23] Limits in the Provable Security of ECDSA Signatures

**Authors:** Dominik Hartmann, Eike Kiltz | **Venue:** TCC 2023 | [Source](https://eprint.iacr.org/2023/914)

## Abstract

Digital Signatures are ubiquitous in modern computing. One of the most widely used digital signature schemes is ECDSA due to its use in TLS, various Blockchains such as Bitcoin and Etherum, and many other applications. Yet the formal analysis of ECDSA is comparatively sparse. In particular, all known security results for ECDSA rely on some idealized model such as the generic group model or the programmable (bijective) random oracle model.

In this work, we study the question whether these strong idealized models are necessary for proving the security of ECDSA. Specifically, we focus on the programmability of ECDSA's "conversion function" which maps an elliptic curve point into its $x$-coordinate modulo the group order. Unfortunately, our main results are negative. We establish, by means of a meta reductions, that an algebraic security reduction for ECDSA can only exist if the security reduction is allowed to program the conversion function. As a consequence, a meaningful security proof for ECDSA is unlikely to exist without strong idealization.
