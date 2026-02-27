---
title: "SW25"
source: https://eprint.iacr.org/2024/1461
authors: Jad Silbak, Daniel Wichs
venue: ITCS 2025
published: 2024-09-18
aliases:
  - SW25
tags:
  - ITCS

---
# [SW25] Detecting and Correcting Computationally Bounded  Errors: A Simple Construction Under Minimal Assumptions

**Authors:** Jad Silbak, Daniel Wichs | **Venue:** ITCS 2025 | [Source](https://eprint.iacr.org/2024/1461)

## Abstract
We study error detection and error correction in a computationally bounded world, where errors are introduced by an arbitrary polynomial time adversarial channel. We consider codes where the encoding procedure uses random coins and define two distinct variants: (1) in randomized codes, fresh randomness is chosen during each encoding operation and is unknown a priori, while (2) in self-seeded codes, the randomness of the encoding procedure is fixed once upfront and is known to the adversary. In both cases, the randomness need not be known to the decoding procedure, and there is no trusted common setup between the encoder and decoder. The encoding and decoding algorithms are efficient and run in some fixed polynomial time, independent of the run time of the adversary.

The parameters of standard codes for worst-case (inefficient) errors are limited by the Singleton bound: for rate $R$ it is not possible to detect more than a $1-R$ fraction of errors, or uniquely correct more than a $(1-R)/2$ fraction of errors, and efficient codes matching this bound exist for sufficiently large alphabets. In the computationally bounded setting, we show that going beyond the Singleton bound implies one-way functions in the case of randomized codes and collision-resistant hash functions in the case of self-seeded codes. We construct randomized and self-seeded codes under these respective minimal assumptions with essentially optimal parameters over a constant-sized alphabet:

- Detection: the codes have a rate $R \approx 1$ while detecting a $\rho \approx 1$ fraction of errors.
- Correction: for any $\rho < 1/2$, the codes uniquely correct a $\rho$ fraction of errors with rate $R \approx 1-\rho$.

Codes for computationally bounded errors were studied in several prior works starting with Lipton (STACS '94), but all such works either: (a) need some trusted common setup (e.g., public-key infrastructure, common reference string) between the encoder and decoder, or (b) only handle channels whose complexity is a prior bounded below that of the code.