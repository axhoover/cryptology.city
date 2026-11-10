---
type: reference
status: stub
title: "GKPVZ13b"
source: https://eprint.iacr.org/2013/229
authors: Shafi Goldwasser, Yael Tauman Kalai, Raluca A. Popa, Vinod Vaikuntanathan, Nickolai Zeldovich
venue: CRYPTO 2013
published: 2013
aliases:
  - GKPVZ13b
  - GKPVZ13
cryptobib_key: C:GKPVZ13
---

# [GKPVZ13b] How to Run Turing Machines on Encrypted Data

**Authors:** Shafi Goldwasser, Yael Tauman Kalai, Raluca A. Popa, Vinod Vaikuntanathan, Nickolai Zeldovich | **Venue:** CRYPTO 2013 | [Source](https://eprint.iacr.org/2013/229)

## Abstract

Algorithms for computing on encrypted data promise to be a fundamental building block of cryptography. The way one models such algorithms has a crucial effect on the efficiency and usefulness of the resulting cryptographic schemes. As of today, almost all known schemes for fully homomorphic encryption, functional encryption, and garbling schemes work by modeling algorithms as circuits rather than as Turing machines.

As a consequence of this modeling, evaluating an algorithm over encrypted data is as slow as the worst-case running time of that algorithm, a dire fact for many tasks. In addition, in settings where an evaluator needs a description of the algorithm itself in some "encoded" form, the cost of computing and communicating such encoding is as large as the worst-case running time of this algorithm.

In this work, we construct cryptographic schemes for computing Turing machines on encrypted data that avoid the worst-case problem. Specifically, we show:

– An attribute-based encryption scheme for any polynomial-time Turing machine and Random Access Machine (RAM).

– A (single-key and succinct) functional encryption scheme for any polynomial-time Turing machine.

– A reusable garbling scheme for any polynomial-time Turing machine.

These three schemes have the property that the size of a key or of a garbling for a Turing machine is very short: it depends only on the description of the Turing machine and not on its running time.

Previously, the only existing constructions of such schemes were for depth-d circuits, where all the parameters grow with d. Our constructions remove this depth d restriction, have short keys, and moreover, avoid the worst-case running time.

– A variant of fully homomorphic encryption scheme for Turing machines, where one can evaluate a Turing machine M on an encrypted input x in time that is dependent on the running time of M on input x as opposed to the worst-case runtime of M. Previously, such a result was known only for a restricted class of Turing machines and it required an expensive preprocessing phase (with worst-case runtime); our constructions remove both restrictions.

Our results are obtained via a reduction from SNARKs (Bitanski et al) and an "extractable" variant of witness encryption, a scheme introduced by Garg et al.. We prove that the new assumption is secure in the generic group model. We also point out the connection between (the variant of) witness encryption and the obfuscation of point filter functions as defined by Goldwasser and Kalai in 2005.
