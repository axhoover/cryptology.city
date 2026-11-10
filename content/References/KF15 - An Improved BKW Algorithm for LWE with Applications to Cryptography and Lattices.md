---
type: reference
status: stub
title: "KF15"
source: https://eprint.iacr.org/2015/552
authors: Paul Kirchner, Pierre-Alain Fouque
venue: CRYPTO 2015
published: 2015
aliases:
  - KF15
cryptobib_key: C:KirFou15
---

# [KF15] An Improved BKW Algorithm for LWE with Applications to Cryptography and Lattices

**Authors:** Paul Kirchner, Pierre-Alain Fouque | **Venue:** CRYPTO 2015 | [Source](https://eprint.iacr.org/2015/552)

## Abstract

In this paper, we study the Learning With Errors problem and its binary variant, where
secrets and errors are binary or taken in a small interval. We introduce a new variant of the Blum,
Kalai and Wasserman algorithm, relying on a quantization step that generalizes and fine-tunes modulus
switching. In general this new technique yields a significant gain in the constant in front of the exponent
in the overall complexity. We illustrate this by solving
p within half a day a LWE instance with dimension
n = 128, modulus q = n^2 , Gaussian noise alpha = 1/(sqrt(n/pi)log^2 n) and binary secret, using 2^28 samples,
while the previous best result based on BKW claims a time complexity of 2^74 with 2^60 samples for the
same parameters.
We then introduce variants of BDD, GapSVP and UniqueSVP, where the target point is required to lie
in the fundamental parallelepiped, and show how the previous algorithm is able to solve these variants
in subexponential time. Moreover, we also show how the previous algorithm can be used to solve the
BinaryLWE problem with n samples in subexponential time 2^((ln 2/2+o(1))n/log log n) . This analysis does
not require any heuristic assumption, contrary to other algebraic approaches; instead, it uses a variant
of an idea by Lyubashevsky to generate many samples from a small number of samples. This makes
it possible to asymptotically and heuristically break the NTRU cryptosystem in subexponential time
(without contradicting its security assumption). We are also able to solve subset sum problems in
subexponential time for density o(1), which is of independent interest: for such density, the previous
best algorithm requires exponential time. As a direct application, we can solve in subexponential time
the parameters of a cryptosystem based on this problem proposed at TCC 2010.
