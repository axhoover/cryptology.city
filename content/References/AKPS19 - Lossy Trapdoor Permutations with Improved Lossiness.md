---
type: reference
status: stub
title: "AKPS19"
source: https://eprint.iacr.org/2018/1183
authors: Benedikt Auerbach, Eike Kiltz, Bertram Poettering, Stefan Schoenen
venue: CT-RSA 2019
published: 2019
aliases:
  - AKPS19
cryptobib_key: RSA:AKPS19
---

# [AKPS19] Lossy Trapdoor Permutations with Improved Lossiness

**Authors:** Benedikt Auerbach, Eike Kiltz, Bertram Poettering, Stefan Schoenen | **Venue:** CT-RSA 2019 | [Source](https://eprint.iacr.org/2018/1183)

## Abstract

Lossy trapdoor functions (Peikert and Waters, STOC 2008 and SIAM J. Computing 2011) imply, via black-box transformations, a number of interesting cryptographic primitives, including chosen-ciphertext secure public-key encryption. Kiltz, O'Neill, and Smith (CRYPTO 2010) showed that the RSA trapdoor permutation is lossy under the Phi-hiding assumption, but syntactically it is not a lossy trapdoor function since it acts on Z_N and not on strings. Using a domain extension technique by Freeman et al. (PKC 2010 and J. Cryptology 2013) it can be extended to a lossy trapdoor permutation, but with considerably reduced lossiness.

In this work we give new constructions of lossy trapdoor permutations from the Phi-hiding assumption, the quadratic residuosity assumption, and the decisional composite residuosity assumption, all with improved lossiness. Furthermore, we propose the first all-but-one lossy trapdoor permutation from the Phi-hiding assumption. A technical vehicle used for achieving this is a novel transform that converts trapdoor functions with index-dependent domain into trapdoor functions with fixed domain.
