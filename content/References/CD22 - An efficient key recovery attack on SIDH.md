---
title: An Efficient Key Recovery Attack on SIDH
URL: https://eprint.iacr.org/2022/975
authors: Wouter Castryck, Thomas Decru
venue: EUROCRYPT 2023
publish date: 2022
aliases:
  - CD22
---

# An Efficient Key Recovery Attack on SIDH

URL: https://eprint.iacr.org/2022/975
Authors: Wouter Castryck, Thomas Decru

## Abstract

We present an efficient key recovery attack on the Supersingular Isogeny Diffie-Hellman (SIDH) protocol. The attack runs in classical polynomial time and recovers the secret isogeny from the public information alone, thereby completely breaking SIDH. The attack exploits the auxiliary torsion point information that SIDH reveals as part of its key exchange. Using results from the theory of abelian varieties, specifically Kani's theorem, we show how to use this extra information to recover the secret isogeny efficiently. The attack was a major development in post-quantum cryptography, eliminating SIDH (and SIKE, NIST's post-quantum candidate based on SIDH) as a viable post-quantum primitive.
