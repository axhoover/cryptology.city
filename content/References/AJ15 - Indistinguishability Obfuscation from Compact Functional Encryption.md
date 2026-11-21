---
type: reference
status: stub
title: "AJ15"
source: https://eprint.iacr.org/2015/173
authors: Prabhanjan Ananth, Abhishek Jain
venue: CRYPTO 2015
published: 2015
aliases:
  - AJ15
cryptobib_key: C:AnaJai15
---

# [AJ15] Indistinguishability Obfuscation from Compact Functional Encryption

**Authors:** Prabhanjan Ananth, Abhishek Jain | **Venue:** CRYPTO 2015 | [Source](https://eprint.iacr.org/2015/173)

## Abstract

The arrival of indistinguishability obfuscation (iO) has transformed the cryptographic landscape by enabling several security goals that were previously beyond our reach. Consequently, one of the pressing goals currently is to construct iO from well-studied standard cryptographic assumptions.

In this work, we make progress in this direction by presenting a reduction from iO to a natural form of public-key functional encryption (FE). Specifically, we construct iO for general
functions from any single-key FE scheme for NC1 that achieves selective, indistinguishability security against sub-exponential time adversaries. Further, the FE scheme should be compact, namely, the running time of the encryption algorithm must only be a polynomial in the security parameter and the input message length (and not in the function description size or its output length).

We achieve this result by developing a novel arity amplification technique to transform FE for single-ary functions into FE for multi-ary functions (aka multi-input FE). Instantiating our approach with known, non-compact FE schemes, we obtain the first constructions of multi-input FE for constant-ary functions based on standard assumptions.

Finally, as a result of independent interest, we construct a compact FE scheme from randomized encodings for Turing machines and learning with errors assumption.
