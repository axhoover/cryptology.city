---
type: reference
status: stub
title: "Bit17"
source: https://eprint.iacr.org/2017/018
authors: Nir Bitansky
venue: TCC 2017
published: 2017
aliases:
  - Bit17
cryptobib_key: TCC:Bitansky17
---

# [Bit17] Verifiable Random Functions from Non-interactive Witness-Indistinguishable Proofs

**Authors:** Nir Bitansky | **Venue:** TCC 2017 | [Source](https://eprint.iacr.org/2017/018)

## Abstract

_Verifiable random functions_ (VRFs) are pseudorandom functions where the owner of the seed, in addition to computing the function's value $y$ at any point $x$, can also generate a non-interactive proof $\pi$ that $y$ is correct, without compromising pseudorandomness at other points. Being a natural primitive with a wide range of applications, considerable efforts have been directed towards the construction of such VRFs. While these efforts have resulted in a variety of algebraic constructions (from bilinear maps or the RSA problem), the relation between VRFs and other general primitives is still not well understood.

We present new constructions of VRFs from general primitives, the main one being _non-interactive witness-indistinguishable proofs_ (NIWIs).
This includes:

- A selectively-secure VRF assuming NIWIs and non-interactive commitments. As usual, the VRF can be made adaptively-secure assuming subexponential hardness of the underlying primitives.
- An adaptively-secure VRF assuming (polynomially-hard) NIWIs, non-interactive commitments, and _(single-key) constrained pseudorandom functions_ for a restricted class of constraints.

The above primitives can be instantiated under various standard assumptions, which yields corresponding VRF instantiations, under different assumptions than were known so far. One notable example is a non-uniform construction of VRFs from subexponentially-hard trapdoor permutations, or more generally, from _verifiable pseudorandom generators_ (the construction can be made uniform under a standard derandomization assumption). This partially answers an open question by Dwork and Naor (FOCS '00).

The construction and its analysis are quite simple. Both draw from ideas commonly used in the context of _indistinguishability obfuscation_.
