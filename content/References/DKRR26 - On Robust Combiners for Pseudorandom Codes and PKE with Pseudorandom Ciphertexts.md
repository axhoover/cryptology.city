---
type: reference
status: draft
title: "DKRR26"
source: https://eprint.iacr.org/2026/2650
authors: Nico Döttling, Venkata Koppula, Mahesh Sreekumar Rajasree, Felix Rohrbach
venue: TCC 2026
published: 2026
aliases:
  - DKRR26
bibtex: |
  @misc{DKRR26,
    author       = {Nico D{\"o}ttling and Venkata Koppula and Mahesh Sreekumar Rajasree and Felix Rohrbach},
    title        = {On Robust Combiners for Pseudorandom Codes and {PKE} with Pseudorandom Ciphertexts},
    howpublished = {Cryptology {ePrint} Archive, Paper 2026/2650},
    year         = {2026},
    note         = {A major revision of an IACR publication in TCC 2026},
    url          = {https://eprint.iacr.org/2026/2650},
  }
---

# [DKRR26] On Robust Combiners for Pseudorandom Codes and PKE with Pseudorandom Ciphertexts

**Authors:** Nico Döttling, Venkata Koppula, Mahesh Sreekumar Rajasree, Felix Rohrbach | **Venue:** TCC 2026 | [Source](https://eprint.iacr.org/2026/2650)

## Abstract

Robust combiners are a standard way to hedge cryptographic assumptions: given several candidate constructions, they produce one construction that remains secure as long as one candidate is secure. In favorable cases, such combiners also yield universal constructions. We ask whether this paradigm applies to cryptographic primitives whose public outputs must be both pseudorandom and sparse.

Our first result gives a negative answer for pseudorandom codes (PRCs), i.e., error-correcting codes whose codewords are computationally indistinguishable from uniform strings. We prove that secret-key PRCs admit no black-box robust combiner. The impossibility holds even for the weakest meaningful guarantee, where the combined scheme is required to be secure when all but one candidate PRC are secure.

We then show that the obstruction is not specific to error correction. In the sparse ciphertext regime, public-key encryption with pseudorandom ciphertexts also admits no black-box robust combiner. This stands in contrast to ordinary IND-CPA encryption, for which robust combiners are easy to obtain. Thus the requirement that public outputs look uniformly random introduces a genuine barrier to black-box assumption hedging, and rules out the standard combiner route to universal constructions for these primitives.

# Notes

The ePrint version (received 2026-10-26) is a major revision of the TCC 2026 paper; only its abstract has been read.
