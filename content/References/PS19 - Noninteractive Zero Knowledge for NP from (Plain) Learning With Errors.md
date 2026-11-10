---
type: reference
status: stub
title: "PS19"
source: https://eprint.iacr.org/2019/158
authors: Chris Peikert, Sina Shiehian
venue: CRYPTO 2019
published: 2019
aliases:
  - PS19
cryptobib_key: C:PeiShi19
---

# [PS19] Noninteractive Zero Knowledge for NP from (Plain) Learning With Errors

**Authors:** Chris Peikert, Sina Shiehian | **Venue:** CRYPTO 2019 | [Source](https://eprint.iacr.org/2019/158)

## Abstract

We finally close the long-standing problem of constructing a
noninteractive zero-knowledge (NIZK) proof system for any NP language
with security based on the plain Learning With Errors (LWE)
problem, and thereby on worst-case lattice problems. Our proof system
instantiates the framework recently developed by Canetti
et al. [EUROCRYPT'18], Holmgren and Lombardi [FOCS'18], and Canetti
et al. [STOC'19] for soundly applying the Fiat--Shamir transform using
a hash function family that is correlation intractable for a
suitable class of relations. Previously, such hash families were based
either on “exotic” assumptions (e.g., indistinguishability
obfuscation or optimal hardness of certain LWE variants) or, more
recently, on the existence of circularly secure fully homomorphic
encryption (FHE). However, none of these assumptions are known to be
implied by plain LWE or worst-case hardness.

Our main technical contribution is a hash family that is correlation
intractable for arbitrary size-$S$ circuits, for any polynomially
bounded $S$, based on plain LWE (with small polynomial approximation
factors). The construction combines two novel ingredients: a
correlation-intractable hash family for log-depth circuits
based on LWE (or even the potentially harder Short Integer Solution
problem), and a “bootstrapping” transform that uses (leveled) FHE to
promote correlation intractability for the FHE decryption circuit to
arbitrary (bounded) circuits. Our construction can be
instantiated in two possible “modes,” yielding a NIZK that is either
computationally sound and statistically zero knowledge
in the common random string model, or vice-versa in the common
reference string model.
