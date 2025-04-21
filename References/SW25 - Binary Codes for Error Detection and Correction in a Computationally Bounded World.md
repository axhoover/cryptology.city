---
title: Binary Codes for Error Detection and Correction in a Computationally Bounded World
source: https://eprint.iacr.org/2025/190
authors: Jad Silbak, Daniel Wichs
venue: Eurocrypt 2025
published: 2025-02-09
aliases:
  - SW25
---
# Binary Codes for Error Detection and Correction in a Computationally Bounded World
URL: https://eprint.iacr.org/2025/190
Authors: Jad Silbak, Daniel Wichs
## Abstract
We study error detection and correction in a computationally bounded world, where errors are introduced by an arbitrary \(\textit{polynomial-time}\) adversarial channel. Our focus is on \(\textit{seeded}\) codes, where the encoding and decoding procedures can share a public random seed, but are otherwise deterministic. We can ask for either \(\textit{selective}\) or \(\textit{adaptive}\) security, depending on whether the adversary can choose the message being encoded before or after seeing the seed. For large alphabets, a recent construction achieves essentially optimal rate versus error tolerance trade-offs under minimal assumptions, surpassing information-theoretic limits. However, for the binary alphabet, the only prior improvement over information theoretic codes relies on non-standard assumptions justified via the random oracle model. We show the following:

\(\textbf{Selective Security under LWE:}\) Under the learning with errors (LWE) assumption, we construct selectively secure codes over the binary alphabet. For error detection, our codes achieve essentially optimal rate \(R \approx 1\) and relative error tolerance \(\rho \approx \frac{1}{2}\). For error correction, they can uniquely correct \(\rho < \frac{1}{4}\) relative errors with a rate \(R\) that essentially matches that of the best list-decodable codes with error tolerance \(\rho\). Both cases provide significant improvements over information-theoretic counterparts. The construction relies on a novel form of 2-input correlation intractable hash functions that we construct from LWE.

\(\textbf{Adaptive Security via Crypto Dark Matter:}\)  Assuming the exponential security of a natural collision-resistant hash function candidate based on the ``crypto dark matter'' approach  of mixing linear functions over different moduli, we construct adaptively secure codes over the binary alphabet, for both error detection and correction. They achieve essentially the same trade-offs between error tolerance \(\rho\) and rate \(R\) as above, with the caveat that for error-correction they only do so for sufficiently small values of \(\rho\).