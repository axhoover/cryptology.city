---
type: reference
status: stub
title: "GH19"
source: https://eprint.iacr.org/2019/733
authors: Craig Gentry, Shai Halevi
venue: TCC 2019
published: 2019
aliases:
  - GH19
cryptobib_key: TCC:GenHal19
---

# [GH19] Compressible FHE with Applications to PIR

**Authors:** Craig Gentry, Shai Halevi | **Venue:** TCC 2019 | [Source](https://eprint.iacr.org/2019/733)

## Abstract

Homomorphic encryption (HE) is often viewed as impractical, both in communication and computation. Here we provide an additively homomorphic encryption scheme based on (ring) LWE with nearly optimal rate ($1-\epsilon$ for any $\epsilon>0$). Moreover, we describe how to compress many FHE ciphertexts that may have come from a homomorphic evaluation (e.g., of the Gentry-Sahai-Waters (GSW) scheme), into fewer high-rate ciphertexts.

Using our high-rate HE scheme, we are able for the first time to describe a single-server private information retrieval (PIR) scheme with sufficiently low computational overhead so as to be practical for large databases. Single-server PIR inherently requires the server to perform at least one bit operation per database bit, and we describe a rate-(4/9) scheme with computation which is not so much worse than this inherent lower bound. In fact it is probably faster than whole-database AES encryption – specifically under 1.8 mod-$q$ multiplication per database byte, where $q$ is about 50 to 60 bits.
Asymptotically, the computational overhead of our PIR scheme is $\tilde{O}(\log \log \secpar + \log \log \log N)$, where $\secpar$ is the security parameter and $N$ is the number of database files, which are assumed to be sufficiently large.
