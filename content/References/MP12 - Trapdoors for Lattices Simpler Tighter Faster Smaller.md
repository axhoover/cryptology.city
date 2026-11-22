---
type: reference
status: draft
title: "MP12"
source: https://eprint.iacr.org/2011/501
authors: Daniele Micciancio, Chris Peikert
venue: EUROCRYPT 2012
published: 2012
aliases:
  - MP12
cryptobib_key: EC:MicPei12
---

# [MP12] Trapdoors for Lattices: Simpler, Tighter, Faster, Smaller

**Authors:** Daniele Micciancio, Chris Peikert | **Venue:** EUROCRYPT 2012 | [Source](https://eprint.iacr.org/2011/501)

## Abstract

We give new methods for generating and using “strong trapdoors” in cryptographic lattices, which are simultaneously simple, efficient, easy to implement (even in parallel), and asymptotically optimal with very small hidden constants. Our methods involve a new kind of trapdoor, and include specialized algorithms for inverting $\mathsf{LWE}$, randomly sampling $\mathsf{SIS}$ preimages, and securely delegating trapdoors. These tasks were previously the main bottleneck for a wide range of cryptographic schemes, and our techniques substantially improve upon the prior ones, both in terms of practical performance and quality of the produced outputs. Moreover, the simple structure of the new trapdoor and associated algorithms can be exposed in applications, leading to further simplifications and efficiency improvements. We exemplify the applicability of our methods with new digital signature schemes and CCA-secure encryption schemes, which have better efficiency and security than the previously known lattice-based constructions.
