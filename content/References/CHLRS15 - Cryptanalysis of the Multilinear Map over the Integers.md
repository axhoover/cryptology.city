---
type: reference
status: stub
title: "CHLRS15"
source: https://eprint.iacr.org/2014/906
authors: Jung Hee Cheon, Kyoohyung Han, Changmin Lee, Hansol Ryu, Damien Stehlé
venue: EUROCRYPT 2015
published: 2015
aliases:
  - CHLRS15
cryptobib_key: EC:CHLRS15
---

# [CHLRS15] Cryptanalysis of the Multilinear Map over the Integers

**Authors:** Jung Hee Cheon, Kyoohyung Han, Changmin Lee, Hansol Ryu, Damien Stehlé | **Venue:** EUROCRYPT 2015 | [Source](https://eprint.iacr.org/2014/906)

## Abstract

The CRT-ACD problem is to find the primes $p_1,...,p_n$ given polynomially many instances of $CRT_{(p_1,...,p_n)}(r_1,...,r_n)$ for small integers $r_1,...,r_n$. The CRT-ACD problem is regarded as a hard problem, but its hardness is not proven yet. In this paper, we analyze the CRT-ACD problem when given one more input $CRT_{(p_1,...,p_n)}(x_0/p_1,...,x_0/p_n)$ for $x_0=\prod\limits_{i=1}^n p_i$ and propose a polynomial-time algorithm for this problem by using products of the instances and auxiliary input.

This algorithm yields a polynomial-time cryptanalysis of the (approximate) multilinear map of Coron, Lepoint and Tibouchi (CLT): We show that by multiplying encodings of zero with zero-testing parameters properly in the CLT scheme, one can obtain a required input of our algorithm: products of CRT-ACD instances and auxiliary input. This leads to a total break: all the quantities that were supposed to be kept secret can be recovered in an efficient and public manner.

We also introduce polynomial-time algorithms for the Subgroup Membership, Decision Linear, and Graded External Diffie-Hellman problems, which are used as the base problems of several cryptographic schemes constructed on multilinear maps.
