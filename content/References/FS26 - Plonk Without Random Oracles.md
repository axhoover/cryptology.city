---
type: reference
status: stub
title: "FS26"
source: https://eprint.iacr.org/2026/200
authors: Georg Fuchsbauer, Marek Sefranek
venue: preprint
published: 2026
aliases:
  - FS26
bibtex: |
  @misc{FS26,
    author       = {Georg Fuchsbauer and Marek Sefranek},
    title        = {Plonk Without Random Oracles},
    howpublished = {Cryptology {ePrint} Archive, Paper 2026/200},
    year         = {2026},
    url          = {https://eprint.iacr.org/2026/200},
  }
---

# [FS26] Plonk Without Random Oracles

**Authors:** Georg Fuchsbauer, Marek Sefranek | **Venue:** preprint | [Source](https://eprint.iacr.org/2026/200)

## Abstract

Plonk is one of the most influential and widely used zk-SNARKs, with proofs of constant size (0.5 kB), sublinear verification time, and circuit-independent setup. All prior security analyses of Plonk—of both knowledge soundness and zero knowledge (ZK)—are in the random-oracle model (ROM), which recent work has shown to be especially problematic in the context of proof systems. Moreover, a security proof in the ROM does not justify using a system recursively, a powerful technique currently used e.g. in "zk-rollups."

We show that for analyzing Plonk, the ROM can be avoided when making the "zero-testing" (ZT) assumption on the used hash function (and the commitment scheme). ZT is a non-interactive, falsifiable hardness assumption. Assuming ZT, we prove Plonk knowledge-sound in the algebraic group model (AGM) and computationally ZK in the standard model. Using Plonk recursively can now be justified in the recursive AGM.

To increase confidence in ZT, we prove that it holds in the ROM assuming the used commitment scheme is binding. Moreover, when using KZG commitments in the generic group model we show that collision resistance of the hash function implies ZT.
