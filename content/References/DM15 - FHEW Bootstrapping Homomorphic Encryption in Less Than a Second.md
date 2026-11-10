---
type: reference
status: stub
title: "DM15"
source: https://eprint.iacr.org/2014/816
authors: Léo Ducas, Daniele Micciancio
venue: EUROCRYPT 2015
published: 2015
aliases:
  - DM15
cryptobib_key: EC:DucMic15
---

# [DM15] FHEW: Bootstrapping Homomorphic Encryption in Less Than a Second

**Authors:** Léo Ducas, Daniele Micciancio | **Venue:** EUROCRYPT 2015 | [Source](https://eprint.iacr.org/2014/816)

## Abstract

The main bottleneck affecting the efficiency of all known fully homomorphic encryption (FHE) schemes is Gentry’s bootstrapping procedure, which is required to refresh noisy ciphertexts and keep computing on encrypted data. Bootstrapping in the latest implementation of FHE, the HElib library of Halevi and Shoup (Crypto 2014), requires about six minutes per batch. We present a new method to homomorphically compute simple bit operations, and refresh (bootstrap) the resulting output, which runs on a personal computer in just about half a second. We present a detailed technical analysis of the scheme (based on the worst-case hardness of standard lattice problems) and report on the performance of our prototype implementation.
