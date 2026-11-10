---
type: reference
status: stub
title: "CLWW16"
source: https://eprint.iacr.org/2015/1125
authors: Nathan Chenette, Kevin Lewi, Stephen A. Weis, David J. Wu
venue: FSE 2016
published: 2016
aliases:
  - CLWW16
cryptobib_key: FSE:CLWW16
---

# [CLWW16] Practical Order-Revealing Encryption with Limited Leakage

**Authors:** Nathan Chenette, Kevin Lewi, Stephen A. Weis, David J. Wu | **Venue:** FSE 2016 | [Source](https://eprint.iacr.org/2015/1125)

## Abstract

In an order-preserving encryption scheme, the encryption algorithm produces
ciphertexts that preserve the order of their plaintexts. Order-preserving
encryption schemes have been studied intensely in the last decade, and yet not
much is known about the security of these schemes. Very recently, Boneh
et al. (Eurocrypt 2015) introduced a generalization of order-preserving
encryption, called order-revealing encryption, and presented a construction
which achieves this notion with best-possible security. Because their
construction relies on multilinear maps, it is too impractical for most
applications and therefore remains a theoretical result.

In this work, we build efficiently implementable order-revealing encryption
from pseudorandom functions. We present the first efficient order-revealing
encryption scheme which achieves a simulation-based security notion with
respect to a leakage function that precisely quantifies what is leaked by the
scheme. In fact, ciphertexts in our scheme are only about 1.6 times longer
than their plaintexts. Moreover, we show how composing our construction with
existing order-preserving encryption schemes results in order-revealing
encryption that is strictly more secure than all preceding order-preserving
encryption schemes.
