---
type: reference
status: stub
title: "Zha16"
source: https://eprint.iacr.org/2016/114
authors: Mark Zhandry
venue: CRYPTO 2016
published: 2016
aliases:
  - Zha16
cryptobib_key: C:Zhandry16
---

# [Zha16] The Magic of ELFs

**Authors:** Mark Zhandry | **Venue:** CRYPTO 2016 | [Source](https://eprint.iacr.org/2016/114)

## Abstract

We introduce the notion of an _Extremely Lossy Function_ (ELF). An ELF is a family of functions with an image size that is tunable anywhere from injective to having a polynomial-sized image. Moreover, for any efficient adversary, for a sufficiently large polynomial $r$ (necessarily chosen to be larger than the running time of the adversary), the adversary cannot distinguish the injective case from the case of image size $r$.

We develop a handful of techniques for using ELFs, and show that such extreme lossiness is useful for instantiating random oracles in several settings. In particular, we show how to use ELFs to build secure point function obfuscation with auxiliary input, as well as polynomially-many hardcore bits for any one-way function. Such applications were previously known from strong knowledge assumptions — for example polynomially-many hardcore bits were only know from differing inputs obfuscation, a notion whose plausibility has been seriously challenged. We also use ELFs to build a simple hash function with _output intractability_, a new notion we define that may be useful for generating common reference strings.

Next, we give a construction of ELFs relying on the _exponential_ hardness of the decisional Diffie-Hellman problem, which is plausible in pairing-based groups. Combining with the applications above, our work gives several practical constructions relying on qualitatively different — and arguably better — assumptions than prior works.
