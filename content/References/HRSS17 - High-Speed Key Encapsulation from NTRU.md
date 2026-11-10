---
type: reference
status: stub
title: "HRSS17"
source: https://eprint.iacr.org/2017/667
authors: Andreas Hülsing, Joost Rijneveld, John M. Schanck, Peter Schwabe
venue: CHES 2017
published: 2017
aliases:
  - HRSS17
cryptobib_key: CHES:HRSS17
---

# [HRSS17] High-Speed Key Encapsulation from NTRU

**Authors:** Andreas Hülsing, Joost Rijneveld, John M. Schanck, Peter Schwabe | **Venue:** CHES 2017 | [Source](https://eprint.iacr.org/2017/667)

## Abstract

This paper presents software demonstrating that the 20-year-old NTRU cryptosystem is competitive with more recent lattice-based cryptosystems in terms of speed, key size, and ciphertext size. We present a slightly simplified version of textbook NTRU, select parameters for this encryption scheme that target the 128-bit post-quantum security level, construct a KEM that is CCA2-secure in the quantum random oracle model, and present highly optimized software targeting Intel CPUs with the AVX2 vector instruction set. This software takes only 307914 cycles for the generation of a keypair, 48646 for encapsulation, and 67338 for decapsulation. It is, to the best of our knowledge, the first NTRU software with full protection against timing attacks.
