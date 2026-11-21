---
type: reference
status: draft
title: "BH26"
source: https://eprint.iacr.org/2026/113
authors: Cruz Barnum, David Heath
venue: ePrint 2026
published: 2026-02-13
aliases:
  - BH26
bibtex: |
  @misc{BH26,
    author       = {Cruz Barnum and David Heath},
    title        = {How to Steal Oblivious Transfer from Minicrypt},
    howpublished = {Cryptology ePrint Archive, Paper 2026/113},
    year         = {2026},
    url          = {https://eprint.iacr.org/2026/113}
  }
---

# [BH26] How to Steal Oblivious Transfer from Minicrypt

**Authors:** Cruz Barnum, David Heath | **Venue:** ePrint 2026 | [Source](https://eprint.iacr.org/2026/113)

## Abstract

The celebrated work of Impagliazzo and Rudich (STOC'89) provides an oracle separation between those primitives implied by a random oracle (RO) and those that imply key agreement and public-key cryptography. For the last 36 years, this result seemed to cleanly separate two worlds: Minicrypt, which is often described as what can be achieved from only ROs, and Cryptomania, which is a world where public-key cryptography exists.

This work presents a natural primitive, called an oblivious interactive hash function (OIHF), and shows the following: (1) OIHFs can be constructed from ROs. (2) OIHFs can be constructed from oblivious transfer (OT), and hence they are implied by various well-studied public-key-style assumptions. (3) The existence of an OIHF implies OT, via a non-black-box reduction.

Point (1) places the primitive into Minicrypt, point (2) implies that numerous well-studied standard-model complexity assumptions imply that OIHFs exist, and point (3) shows that this primitive circumvents the barrier imposed by Impagliazzo and Rudich.

Our results show that a protocol constructible in Minicrypt implies OT. However, this _does not_ imply that OT can be constructed from RO; indeed, Impagliazzo/Rudich shows this is impossible. Our non-black-box reduction is well-defined only for standard-model OIHFs, i.e. ones that do not use RO, and at present we can only construct standard-model OIHF in Cryptomania. This is to say that we do not propose an OT protocol that can be constructed from a cryptographic hash function. Rather, our results call into question the value of the random oracle model as an idealization of Minicrypt, and they question where the boundaries of Minicrypt lie.

# Notes

BH26 construct [[oblivious-interactive-hash-function|OIHFs]] from random oracles and from [[oblivious-transfer|OT]], and construct OT from an OIHF by a non-black-box reduction that is well defined only for standard-model OIHFs; standard-model OIHFs are known only from Cryptomania assumptions, so the results give no OT protocol from a random oracle, which [[IR89 - Limits on the provable consequences of one-way permutations|IR89]] rules out.
