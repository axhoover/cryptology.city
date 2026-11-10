---
type: reference
status: stub
title: "HW09"
source: https://eprint.iacr.org/2009/283
authors: Susan Hohenberger, Brent Waters
venue: CRYPTO 2009
published: 2009
aliases:
  - HW09
cryptobib_key: C:HohWat09
---

# [HW09] Short and Stateless Signatures from the RSA Assumption

**Authors:** Susan Hohenberger, Brent Waters | **Venue:** CRYPTO 2009 | [Source](https://eprint.iacr.org/2009/283)

## Abstract

We present the first signature scheme which is “short”, stateless and secure under the RSA assumption in the standard model. Prior short, standard model signatures in the RSA setting required either a strong complexity assumption such as Strong RSA or (recently) that the signer maintain state. A signature in our scheme is comprised of one element in $\ZZ_N^*$ and one integer. The public key is also short, requiring only the modulus N, one element of $\ZZ_N^*$, one integer, one PRF seed and some short chameleon hash parameters.

To design our signature, we employ the known generic construction of fully-secure signatures from weakly-secure signatures and a chameleon hash. We then introduce a new proof technique for reasoning about weakly-secure signatures. This technique enables the simulator to predict a prefix of the message on which the adversary will forge and to use knowledge of this prefix to embed the challenge. This technique has wider applications beyond RSA.

We also use it to provide an entirely new analysis of the security of the Waters signatures: the only short, stateless signatures known to be secure under the Computational Diffie-Hellman assumption in the standard model.
