---
type: reference
status: stub
title: "HK12"
source: https://eprint.iacr.org/2007/118
authors: Shai Halevi, Yael Tauman Kalai
venue: Journal of Cryptology 2012
published: 2012
aliases:
  - HK12
cryptobib_key: JC:HalKal12
---

# [HK12] Smooth Projective Hashing and Two-Message Oblivious Transfer

**Authors:** Shai Halevi, Yael Tauman Kalai | **Venue:** Journal of Cryptology 2012 | [Source](https://eprint.iacr.org/2007/118)

## Abstract

We present a general framework for constructing two-message oblivious transfer protocols using a modification of Cramer and Shoup's notion of smooth projective hashing (2002). This framework is an abstraction of the two-message oblivious transfer protocols of Naor and Pinkas (2001) and Aiello et al. (2001), whose security is based on the Decisional Diffie Hellman Assumption. In particular, we give two new oblivious transfer protocols. The security of one is based on the Quadratic Residuosity Assumption, and the security of the other is based on the $N$'th Residuosity Assumption. Compared to other applications of smooth projective hashing, in our context we must deal also with maliciously chosen parameters, which raises new technical difficulties.

We also improve on prior constructions of factoring-based smooth universal hashing, in that our constructions \*do not require that the underlying RSA modulus is a product of safe primes\*. (This holds for the schemes based on the Quadratic Residuosity Assumption as well as the ones based on the $N$'th Residuosity Assumption.) In fact, we observe that the safe-prime requirement is unnecessary for many prior constructions. In particular, the factoring-based CCA secure encryption schemes due to Cramer-Shoup, Gennaro-Lindell, and Camenisch-Shoup remain secure even if the underlying RSA modulus is not a product of safe primes.
